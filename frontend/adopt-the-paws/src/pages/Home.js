import * as React from 'react';
import ProductCategories from '../views/ProductCategories';
import ProductSmokingHero from '../views/ProductSmokingHero';
import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import ProductHowItWorks from '../views/ProductHowItWorks';
import AppAppBar from '../views/AppAppBar';


export default function Home() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}
