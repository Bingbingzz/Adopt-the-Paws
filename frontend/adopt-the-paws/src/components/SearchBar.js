import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';


const SearchBarWrapper = styled(TextField)(() => ({
  backgroundColor: 'white',
  borderRadius: 100,
  width: 600,
  borderWidth: 0
}));

const SearchBar = ({setSearchQuery}) => (
  <form className="search">
    <SearchBarWrapper
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter your preference"
      variant="outlined"
      placeholder="Search..."
      size="large"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "white" }} />
    </IconButton>
  </form>
);
// https://dev.to/marianna13/create-a-search-bar-with-react-and-material-ui-4he
// const filterData = (query, data) => {
//   if (!query) {
//     return data;
//   } else {
//     return data.filter((d) => d.toLowerCase().includes(query));
//   }
// };
// const data = [
//   "Paris",
//   "London",
//   "New York",
//   "Tokyo",
//   "Berlin",
//   "Buenos Aires",
//   "Cairo",
//   "Canberra",
//   "Rio de Janeiro",
//   "Dublin"
// ];
export default SearchBar;