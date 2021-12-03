import Navbar from '../components/Navbar';

import { useGetUserData } from '../services/aerolabRedeem.service';

export default function Home() {
  const { data: userData, error, loading } = useGetUserData();

  if (loading) {
    // TODO: spinner
    return <div>Loading...</div>;
  }
  if (error) {
    // TODO: error component
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <Navbar userName={userData?.name} userPoints={userData?.points} />
    </>
  );
}
