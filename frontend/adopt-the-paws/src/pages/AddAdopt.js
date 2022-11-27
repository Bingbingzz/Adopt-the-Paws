import React from 'react'
import AddForm from '../components/AddForm';

import AppFooter from '../views/AppFooter';
import ProductCTA from '../views/ProductCTA'
import AppAppBar from '../views/AppAppBar';


export default function AddAdopt() {
  return (
    <div>
      <AppAppBar />

      <AddForm />
      
      <ProductCTA/>
      <AppFooter />
    </div>
  )
}
