import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function SelectColor() {
  const [color, setColor] = React.useState("");

  const handleChange = (event) => {
    setColor(event.target.value);
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
          id="select-color"
          value={color}
          label="Color"
          select
          onChange={handleChange}
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
    </Box>
  );
}
