import React from 'react';
import { Cards } from '../../components/cards/Cards';
import SecondaryNav from '../../components/common/SecondaryNav';
import { productDetails } from '../../data/productDetails';

const ProductPage = () => {
  const productKey = window.location.pathname.split('/')[2];
  const product = productDetails[productKey];

  return (
    <div>
      <SecondaryNav />
      <Cards.ProductDetailsCard props={product} />
    </div>
  );
};

export default ProductPage;
