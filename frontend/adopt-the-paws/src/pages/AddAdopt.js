import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddName from "../components/AddName";
import SelectGender from "../components/SelectGender";
import SelectBreed from "../components/SelectBreed";
import SelectColor from "../components/SelectColor";
import SelectCoatLength from "../components/SelectCoatLength";
import SelectGoodWith from "../components/SelectGoodWith";
// import AddForm from '../components/AddForm';

import ProductCategories from '../views/ProductCategories';
import ProductSmokingHero from '../views/ProductSmokingHero';
import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import ProductCTA from '../views/ProductCTA'
import ProductHowItWorks from '../views/ProductHowItWorks';
import GridCard from '../views/GridCard'
import AppAppBar from '../views/AppAppBar';
import { Navigate } from 'react-router-dom';


export default function AddAdopt() {
  return (
    <div>
      <AppAppBar />
      <Typography variant="h5">Cat Information </Typography>
      <Box>
        <AddName />
        <SelectGender />
        <br />
        <SelectBreed />
        <br />
        <SelectColor />
        <br />
        <SelectCoatLength />
        <br />
        <SelectGoodWith />
        <br />
      </Box>
      <Box>
        <Button onClick={() => {}}>Cancel</Button>
        <Button onClick={() => {}}>Add</Button>
      </Box>
      <ProductCTA/>
      <AppFooter />
    </div>
  )
}
