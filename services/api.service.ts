import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

const API_URL = process.env.API_URL;
const AEROLAB_CHALLENGE_TOKEN = process.env.AEROLAB_CHALLENGE_TOKEN;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${AEROLAB_CHALLENGE_TOKEN}`;

export const useAPI = <Payload extends unknown>(
  fetchOptions: AxiosRequestConfig,
  hookDeps: Array<any> = []
): {
  loading: boolean;
  error: AxiosError | null;
  data: Payload | null;
  refresh: () => Promise<void>;
} => {
  const [state, setState] = useState<{
    loading: boolean;
    error: AxiosError | null;
    data: Payload | null;
    refresh?: () => Promise<void>;
  }>({
    loading: true,
    error: null,
    data: null,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);
  const [promiseResolve, setPromiseResolve] = useState<(() => void) | null>(
    null
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          ...fetchOptions,
        });

        setState((state) => ({
          ...state,
          data: response.data,
          error: null,
          loading: false,
        }));
      } catch (e) {
        const error: AxiosError = e as AxiosError;
        setState((state) => ({
          ...state,
          error,
          loading: false,
        }));
      }
    })();
    if (promiseResolve) {
      promiseResolve();
    }
    // eslint-disable-next-line
  }, [refreshIndex, ...hookDeps]);

  return {
    ...state,
    // this allows to refresh the data waiting a promise to be resolved
    refresh: () => {
      return new Promise((resolve) => {
        setRefreshIndex(refreshIndex + 1);
        setPromiseResolve(resolve);
      });
    },
  };
};
