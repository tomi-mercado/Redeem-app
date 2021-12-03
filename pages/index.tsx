import CatalogueOptions from '../components/CatalogueOptions';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

import { useGetUserData } from '../services/aerolabRedeem.service';

// TODO: this should come from cdn
import headerImg from '../images/header.png';

const mock = {
  img: {
    url: 'https://coding-challenge-api.aerolab.co/images/MacbookPro-x1.png',
    hdUrl: 'https://coding-challenge-api.aerolab.co/images/MacbookPro-x2.png',
  },
  _id: '5a0b35df734d1d08bf7084cb',
  name: 'Macbook Pro',
  cost: 1300,
  category: 'Laptops',
};

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
      <CatalogueOptions
        arrowControl={{
          page: 2,
          pages: 3,
        }}
        renderProductsCounter={{
          current: 16,
          total: 32,
        }}
        sorter={{
          options: [
            {
              label: 'Most recent',
              value: 'mostRecents',
            },
            {
              label: 'Lowest price',
              value: 'lowestPrice',
            },
            {
              label: 'Highest price',
              value: 'highestPrice',
            },
          ],
        }}
      />
      <ProductCard
        title={mock.name}
        category={mock.category}
        image={mock.img.url}
        pointsValue={mock.cost}
        missingPoints={100}
      />
    </>
  );
}
