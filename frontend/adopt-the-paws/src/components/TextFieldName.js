import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";

export default function TextFieldName() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [weight, setWeight] = React.useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <TextField
          // required
          id="pet-name"
          type="text"
          label="Name"
          variant="outlined"
          margin="dense"
          value={name}
          onChange={handleChangeName}
        />
        <br />
        <TextField
          id="pet-age"
          type="number"
          label="Age"
          variant="outlined"
          defaultValue="0"
          margin="dense"
          value={age}
          onChange={handleChangeAge}
        />
        <br />
        <TextField
          type="number"
          label="Weight"
          variant="outlined"
          defaultValue="0"
          margin="dense"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }}
          value={weight}
          onChange={handleChangeWeight}
        />
        <br />
      </FormControl>
    </Box>
  );
}
