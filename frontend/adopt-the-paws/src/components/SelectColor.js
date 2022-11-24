import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function SelectColor({ value, onChange }) {
  return (
    <>
      <FormControl>
        {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
        <TextField
          id="select-color"
          value={value}
          label="Color"
          select
          onChange={onChange}
        >
          <MenuItem value={"tabby"}>Tabby</MenuItem>
          <MenuItem value={"white"}>White</MenuItem>
          <MenuItem value={"black"}>Black</MenuItem>
          <MenuItem value={"orange"}>Orange</MenuItem>
          <MenuItem value={"blue"}>Blue</MenuItem>
          <MenuItem value={"lilac/lavender"}>Lilac/Lavender</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </TextField>
      </FormControl>
    </>
  );
}
