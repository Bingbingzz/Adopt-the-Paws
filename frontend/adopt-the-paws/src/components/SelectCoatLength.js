import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function SelectColor() {
  const [coatLength, setCoatLength] = React.useState("");

  const handleChange = (event) => {
    setCoatLength(event.target.value);
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
          id="select-coatLength"
          value={coatLength}
          label="Coat Length"
          select
          onChange={handleChange}
        >
          <MenuItem value={"long"}>Long</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"short"}>Short</MenuItem>
          <MenuItem value={"no hair"}>No Hair</MenuItem>
        </TextField>
      </FormControl>
    </Box>
  );
}
