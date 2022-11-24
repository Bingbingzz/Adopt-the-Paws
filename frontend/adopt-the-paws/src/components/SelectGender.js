import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function SelectGender({ value, onChange }) {

  return (
    <>
      <FormControl>
        {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
        <TextField
          id="select-gender"
          value={value}
          label="Gender"
          select
          onChange={onChange}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </TextField>
      </FormControl>
    </>
  );
}
