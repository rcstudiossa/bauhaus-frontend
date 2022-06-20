import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

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
});

const HomeContent: FC<{ children: ReactNode }> = styled("div", {
  flexDirection: "column",
  maxHeight: "calc(100vh - 5.5rem)",
  overflowY: "auto",
});

const ScrollingContent: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "0 $large $large $large",
});

const HomePage: FC = () => {
  return (
    <Container>
      <Header />
      <Subheader />
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.61, 1, 0.88, 1],
          },
        }}
      >
        <HomeContent>
          <ScrollingContent>
            <TitleRow seeAll>Hot Categories</TitleRow>
            <CategoryCardsList />
            <TitleRow>Top picks for you, Seyit!</TitleRow>
            <ProductCardsList arrangement="grid" />
          </ScrollingContent>
        </HomeContent>
      </motion.div>
    </Container>
  );
};

export default HomePage;
