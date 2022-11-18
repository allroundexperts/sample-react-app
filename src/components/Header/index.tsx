import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SearchInput from "../SearchInput";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={1}
      borderBottom="1px solid"
      borderColor="grey.300"
    >
      <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        <Typography variant="h4">
          Wookie <br />
          Movies
        </Typography>
      </Box>
      <SearchInput onChange={() => {}} value={""} />
    </Box>
  );
};

export default Header;
