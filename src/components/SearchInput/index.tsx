import React from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTextField } from "./style";

type SearchInputProps = {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  value: string;
};

const SearchInput: React.FC<SearchInputProps> = ({ onChange, value }) => {
  return (
    <StyledTextField
      onChange={onChange}
      value={value}
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

export default SearchInput;
