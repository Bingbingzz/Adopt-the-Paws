import React from 'react'

import ProductCategories from '../views/ProductCategories';
import ProductSmokingHero from '../views/ProductSmokingHero';
import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import ProductCTA from '../views/ProductCTA'
import ProductHowItWorks from '../views/ProductHowItWorks';
import GridCard from '../views/GridCard'
import AppAppBar from '../views/AppAppBar';
import { Navigate } from 'react-router-dom';

export default function Adopt() {
  return (
    <div>
      <AppAppBar />
      {/* <ProductHero />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductSmokingHero /> */}

      <GridCard/>
      <ProductCTA/>
      <AppFooter />
    </div>
  )
}
