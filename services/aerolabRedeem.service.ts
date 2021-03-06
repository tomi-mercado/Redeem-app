import axios from 'axios';

import { UserData } from '../common/interfaces';

import { useAPI } from './api.service';

export const useGetUserData = () =>
  useAPI<UserData>({
    url: '/user/me',
  });

export const getProducts = () => {
  return axios.get('/products');
};

export const redeemProduct = (productId: string) => {
  return axios.post<{ message: string }>('/redeem', { productId });
};
