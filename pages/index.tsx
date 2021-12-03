import Header from '../components/Header';
import Navbar from '../components/Navbar';

import { useGetUserData } from '../services/aerolabRedeem.service';

// TODO: this should come from cdn
import headerImg from '../images/header.png';

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
      <Header title="Electronics" image={headerImg} />
    </>
  );
}
