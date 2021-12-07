import { useReducer } from 'react';

import Catalogue from '../components/Catalogue';
import Dialog from '../components/Dialog';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';

import {
  getProducts,
  redeemProduct,
  useGetUserData,
} from '../services/aerolabRedeem.service';

import { staticPropsRequest } from '../common/functions';

import { Product } from '../common/interfaces';

// TODO: this should come from cdn
import headerImg from '../images/header.png';

type Alert = {
  open: boolean;
  success: boolean | null;
};

export default function Home({
  products,
  error: errorProducts,
}: {
  products?: Product[];
  error?: boolean;
}) {
  const {
    data: userData,
    error: errorUserData,
    loading,
    refresh,
  } = useGetUserData();

  const error = errorProducts || errorUserData;

  const [alert, setAlert] = useReducer(
    (_state: Alert, action: 'openSuccess' | 'openError' | 'close'): Alert => {
      return {
        open: action === 'openSuccess' || action === 'openError',
        success: action === 'close' ? null : action === 'openSuccess',
      };
    },
    { open: false, success: null }
  );

  const handleProductRedeem = async (productId: string): Promise<void> => {
    let success = false;
    try {
      await redeemProduct(productId);
      success = true;
      await refresh();
    } catch (err) {
      success = false;
    } finally {
      setAlert(success ? 'openSuccess' : 'openError');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="w-1/2 h-1/2 md:w-1/4 md:h-1/4">
          <Spinner />
        </div>
      </div>
    );
  }

  if (error || !products) {
    return (
      <Dialog
        title={`Failed to load ${!products ? 'products' : 'your data'}`}
        description="Try again refreshing this page."
        open={true}
        onClose={undefined}
        buttons={[
          {
            label: 'Refresh',
            onClick: () => (!products ? window.location.reload() : refresh()),
            color: 'primary',
          },
        ]}
      />
    );
  }

  return (
    <div className="pb-16">
      <Navbar userName={userData?.name} userPoints={userData?.points} />
      <Header title="Electronics" image={headerImg} />
      <div className="mt-4 sm:mt-16 own-container">
        <Catalogue
          products={products}
          userPoints={userData?.points}
          onProductRedeem={handleProductRedeem}
        />
      </div>
      <Dialog
        open={alert.open}
        title={alert.success ? 'Success!' : 'Error'}
        responseIcon={alert.success || undefined}
        description={
          alert.success
            ? 'Product redeemed successfully'
            : 'Error redeeming product'
        }
        buttons={[
          {
            label: 'Ok',
            onClick: () => setAlert('close'),
          },
        ]}
        onClose={() => setAlert('close')}
      />
    </div>
  );
}

export async function getStaticProps() {
  const r = await staticPropsRequest<Product[]>('products', getProducts);
  return r;
}
