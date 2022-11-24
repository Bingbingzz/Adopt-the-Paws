
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import SelectGender from "./SelectGender";
import SelectBreed from "./SelectBreed";
import SelectColor from "./SelectColor";
import SelectCoatLength from "./SelectCoatLength";
import SelectGoodWith from "./SelectGoodWith";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


export default function EditForm() {
  const params = useParams();
  const docId = params.docId;

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState(0);
  const [color, setColor] = useState("");
  const [coatLength, setCoatLength] = useState("");
  const [goodWith, setGoodWith] = useState("");

  const fetchOne = async() => {
    try {
      const response = await fetch(`/animals/${docId}`);
      if (!response.ok) {
        throw new Error("HTTP error! Status: ", response.status);
      }
      const data = (await response.json())[0];
      console.log(data);

      setName(data.name);
      setBreed(data.breed);
      setAge(data.age);
      setGender(data.gender);
      setWeight(data.weight);
      setColor(data.color);
      setCoatLength(data.coatLength);
      setGoodWith(data.goodWith);

    } catch (err) {
      console.log("Fetch data ", err);
    }
  }

  useEffect(() => {
    fetchOne();
  }, []);

  const updateRequest = async (docId, data) => {
    const response = await fetch(`/animal/${docId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(await response.json());
    if (response.ok) {
      console.log("Update success")
      setOpen(true);  // Show success alert
    };
  }

  const handleSubmit = async () => {
    const doc = { name, breed, age, gender, weight, color, coatLength, goodWith };
    updateRequest(docId, doc);
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
      <Typography variant="body1" gutterBottom>
        _id: {docId}
      </Typography>
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
      <Button onClick={handleSubmit}>Update</Button>
      <br />
      
      <Collapse in={open}>
        <Alert
          variant="filled"
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Update success
        </Alert>
      </Collapse>
    </Box>
    );
  }