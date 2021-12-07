import { GetStaticPropsResult } from 'next';

import { AxiosError, AxiosResponse } from 'axios';

export async function staticPropsRequest<T = unknown>(
  dataName: string,
  request: () => Promise<AxiosResponse<T>>
): Promise<
  GetStaticPropsResult<{ [x: string]: T | AxiosError['response'] | boolean }>
> {
  try {
    const { data } = await request();
    return {
      props: {
        [dataName]: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: true,
      },
    };
  }
}
