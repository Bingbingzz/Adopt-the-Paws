import React from 'react'
import EditForm from '../components/EditForm';

import AppFooter from '../views/AppFooter';
import ProductCTA from '../views/ProductCTA'
import AppAppBar from '../views/AppAppBar';


export default function EditAdopt() {
  return (
    <div>
      <AppAppBar />

      <EditForm />
      
      <ProductCTA/>
      <AppFooter />
    </div>
  )
}
