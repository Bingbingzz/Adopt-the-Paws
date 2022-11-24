
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SelectGender from "./SelectGender";
import SelectBreed from "./SelectBreed";
import SelectColor from "./SelectColor";
import SelectCoatLength from "./SelectCoatLength";
import SelectGoodWith from "./SelectGoodWith";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function AddForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState(0);
  const [color, setColor] = useState("");
  const [coatLength, setCoatLength] = useState("");
  const [goodWith, setGoodWith] = useState("");
  const navigate = useNavigate();

  const insertRequest = async (data) => {
    const response = await fetch(`http://localhost:5000/animal`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(await response.json());
    if (response.ok) {
      console.log("Insert success")
    };
  }

  const handleSubmit = async () => {
    const doc = { name, breed, age, gender, weight, color, coatLength, goodWith };
    insertRequest(doc);
    navigate('/adopt')
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        // required
        id="pet-name"
        type="text"
        label="Name"
        variant="outlined"
        margin="dense"
        value={name}
        onChange={(e) => {setName(e.target.value);}}
      />
      <br />
      <TextField
        id="pet-age"
        type="number"
        label="Age"
        variant="outlined"
        margin="dense"
        value={age}
        onChange={(e) => {setAge(Math.max(0, e.target.value));}}
      />
      <br />
      <TextField
        type="number"
        label="Weight"
        variant="outlined"
        margin="dense"
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>
        }}
        value={weight}
        onChange={(e) => {setWeight(Math.max(0, e.target.value));}}

      />
      <br />
      <SelectGender value={gender} onChange={(e) => {setGender(e.target.value)}} />
      <br />
      <SelectBreed value={breed} onChange={(e) => {setBreed(e.target.value)}}/>
      <br />
      <SelectColor value={color} onChange={(e) => {setColor(e.target.value)}}/>
      <br />
      <SelectCoatLength value={coatLength} onChange={(e) => {setCoatLength(e.target.value)}}/>
      <br />
      <SelectGoodWith value={goodWith} onChange={(e) => {setGoodWith(e.target.value)}}/>
      <br />
      <Button onClick={() => {}}>Cancel</Button>
      <Button onClick={handleSubmit}>Add</Button>
    </Box>
    );
  }