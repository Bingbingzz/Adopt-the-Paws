import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const options = [
  {value: 'Black'},
  {value: 'Blue'}
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function FilterComboBox(props) {
  const options = props.options;
  const textFieldLabel = props.textFieldLabel;

  const [value, setValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <div>{`value: ${value !== null ? JSON.stringify(value) : 'null'}`}</div>
      <div>{`inputValue: ${inputValue}`}</div>
      <Autocomplete
        multiple
        autoComplete
        // id="tags-standard"
        options={options}

        // Value(s) that is(are) selected
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue(newValue);
        }}
        
        // Current value in the textbox
        inputValue={inputValue}  
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}

        getOptionLabel={(option) => option.value}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.value}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={textFieldLabel}
            // placeholder="Favorites"
          />
        )}
        sx={{ width: 400 }}
      />
    </div>
  );
}