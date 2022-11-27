import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function SelectGoodWith({ value, onChange }) {
  return (
    <>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
        <TextField
          id="select-gender"
          value={value}
          label="Good With"
          select
          onChange={onChange}
        >
          <MenuItem value={"cats"}>Cats</MenuItem>
          <MenuItem value={"dogs"}>Dogs</MenuItem>
          <MenuItem value={"kids"}>Kids</MenuItem>
          <MenuItem value={"longterm residents"}>Longterm Residents</MenuItem>
          <MenuItem value={"indoor/outdoor"}>Indoor/Outdoor</MenuItem>
        </TextField>
      </FormControl>
    </>
  );
}
