import React, { FC, ReactNode } from "react";
import stitches from "../../stitches";
import Header from "../../components/Header";
// import {
//   Home as HomeIcon,
//   Search as SearchIcon,
//   Place as PinIcon,
//   ShoppingCart as ShoppingCartIcon,
// } from "@mui/icons-material";

const { styled } = stitches;

const Container: FC<{ children: ReactNode }> = styled("div", {
  width: "100%",
  minHeight: "100%",
  display: "flex",
});

const HomePage: FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default HomePage;
