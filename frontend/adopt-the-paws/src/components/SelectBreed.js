import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function SelectBreed({ value, onChange }) {
  return (
    <>
      <FormControl>
        {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
        <TextField
          id="select-breed"
          value={value}
          label="Breed"
          select
          onChange={onChange}
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
    </>
  );
}
