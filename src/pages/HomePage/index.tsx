import React, { FC, ReactNode } from "react";

import stitches from "../../stitches";
import Header from "../../components/Header";
import Subheader from "../../components/Subheader";
import TitleRow from "../../components/TitleRow";
import CategoryCardsList from "../../components/CategoryCardsList";
import ProductCardsList from "../../components/ProductCardsList";

const { styled } = stitches;

const Container: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflowY: "auto",
});

const HomeContent: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: "0 $large $large $large",
});

const HomePage: FC = () => {
  return (
    <Container>
      <Header />
      <Subheader />
      <HomeContent>
        <TitleRow seeAll>Hot Categories</TitleRow>
        <CategoryCardsList />
        <TitleRow>Top picks for you, Seyit!</TitleRow>
        <ProductCardsList />
      </HomeContent>
    </Container>
  );
};

export default HomePage;
