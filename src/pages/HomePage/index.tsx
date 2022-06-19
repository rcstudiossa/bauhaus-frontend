import React, { FC, ReactNode } from "react";

import stitches from "../../stitches";
import Header from "../../components/Header";
import Subheader from "../../components/Subheader";
import CategoryCardsList from "../../components/CategoryCardsList";
import TitleRow from "../../components/TitleRow";

const { styled, css } = stitches;

const Container: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100%",
});

const HomeContent: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: "0 $large $regular $large",
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
        <></>
      </HomeContent>
    </Container>
  );
};

export default HomePage;
