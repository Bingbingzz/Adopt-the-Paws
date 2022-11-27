import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function SelectCoatLength({ value, onChange }) {

  return (
    <>
      <FormControl>
        {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
        <TextField
          id="select-coatLength"
          value={value}
          label="Coat Length"
          select
          onChange={onChange}
        >
          <MenuItem value={"long"}>Long</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"short"}>Short</MenuItem>
          <MenuItem value={"no hair"}>No Hair</MenuItem>
        </TextField>
      </FormControl>
    </>
  );
}
