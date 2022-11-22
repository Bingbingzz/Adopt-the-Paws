import * as React from 'react';
import Stack from '@mui/material/Stack';
import FilterComboBox from './FilterComboBox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function FilterStack() {
  return (
    <div>
      <Stack 
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={1}
      >
        <FilterComboBox options={[{value: 'Black'}, {value: 'Blue'}]} textFieldLabel='Color'/>

        <TextField id="outlined-basic" label="Pet Name" variant="outlined" />
      </Stack>
    </div>
  );
}