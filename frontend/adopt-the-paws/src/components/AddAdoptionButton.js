import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function AddAdoptionButton() {
  let navigate = useNavigate();
  return (
    <>
    <Button variant="outlined" onClick={() => {
      navigate(`/add_adopt`)
    }}>Add Adoption</Button>
    </>
  )
}
