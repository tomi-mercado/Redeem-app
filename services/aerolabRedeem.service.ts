import { UserData } from '../common/interfaces';

import { useAPI } from './api.service';

export const useGetUserData = () =>
  useAPI<UserData>({
    url: '/user/me',
  });
