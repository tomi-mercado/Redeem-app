import Catalogue from '../components/Catalogue';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import {
  getProducts,
  redeemProduct,
  useGetUserData,
} from '../services/aerolabRedeem.service';

import { staticPropsRequest } from '../common/functions';

import { Product } from '../common/interfaces';

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

export default function Home({ products }: { products: Product[] }) {
  const { data: userData, error, loading, refresh } = useGetUserData();

  const handleProductRedeem = async (productId: string): Promise<void> => {
    try {
      await redeemProduct(productId);
      return await refresh();
    } catch (err) {
      // TODO: handle error
      console.error(err);
    }
  };

  if (loading) {
    // TODO: spinner
    return <div>Loading...</div>;
  }
  if (error) {
    // TODO: error component
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="pb-16">
      <Navbar userName={userData?.name} userPoints={userData?.points} />
      <Header title="Electronics" image={headerImg} />
      <div className="mt-16 px-32">
        <Catalogue
          products={products}
          userPoints={userData?.points}
          onProductRedeem={handleProductRedeem}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const r = await staticPropsRequest<Product[]>('products', getProducts);
  return r;
}
