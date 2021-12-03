import { GetStaticProps } from 'next';

import Navbar from '../components/Navbar';

import { getUserData } from '../services/aerolabRedeem.service';

import { staticPropsRequest } from '../common/functions';

import { UserData } from '../common/interfaces';

export default function Home({
  userData,
  error,
}: {
  userData?: UserData;
  error?: boolean | object;
}) {
  if (!userData && !error) {
    // TODO: spinner
    return <div>Loading...</div>;
  }
  if (error) {
    // TODO: error component
    return <div>Error: Failed to load data</div>;
  }
  return <Navbar userName={userData?.name} userPoints={userData?.points} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await staticPropsRequest<UserData>('userData', getUserData);
  return result;
};
