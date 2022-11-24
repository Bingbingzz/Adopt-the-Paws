import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function SelectBreed() {
  const [breed, setBreed] = React.useState("");

  const handleChange = (event) => {
    setBreed(event.target.value);
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
        {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
        <TextField
          id="select-breed"
          value={breed}
          label="Breed"
          select
          onChange={handleChange}
        >
          <MenuItem value={"domestic shorthair"}>Domestic Shorthair</MenuItem>
          <MenuItem value={"domestic longhair"}>Domestic Longhair</MenuItem>
          <MenuItem value={"american shorthair"}>American Shorthair</MenuItem>
          <MenuItem value={"siamese"}>Siamese</MenuItem>
          <MenuItem value={"ragdoll"}>Ragdoll</MenuItem>
          <MenuItem value={"maine coon"}>Maine Coon</MenuItem>
          <MenuItem value={"sphynx"}>Sphynx</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </TextField>
      </FormControl>
    </Box>
  );
}
