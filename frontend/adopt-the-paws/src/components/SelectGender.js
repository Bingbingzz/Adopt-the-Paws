import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function SelectGender() {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
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
          id="select-gender"
          value={gender}
          label="Gender"
          select
          onChange={handleChange}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </TextField>
      </FormControl>
    </Box>
  );
}
