import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={1}>
      <Typography variant="body2">Copyright @ Wookie</Typography>
    </Box>
  );
};

export default Footer;
