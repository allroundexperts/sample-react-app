import React from "react";
import { Stack, Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = {
  children?: React.ReactNode;
};

const StackedHeaderFooter: React.FC<Props> = ({ children }) => {
  return (
    <Stack
      justifyContent="space-between"
      sx={{ minHeight: "calc(100vh - 16px)" }}
    >
      <Header />
      <Box p={1}>{children}</Box>
      <Footer />
    </Stack>
  );
};

export default StackedHeaderFooter;
