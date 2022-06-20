import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

import stitches from "../../stitches";
import Header from "../../components/Header";
import Subheader from "../../components/Subheader";
import TitleRow from "../../components/TitleRow";
import ProductCardsList from "../../components/ProductCardsList";
import Sidebar from "../../components/Sidebar";

import navigationHistory from "../../assets/navigation_history.svg";

const { styled } = stitches;

const Container: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

const ContentContainer: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  height: "calc(100vh - 5.5rem)",
});

const Content: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: "0 $large 0 $large",
  alignItems: "stretch",
  height: "calc(100vh - 5.5rem)",
  overflowX: "auto",
});

const NavigationHistoryContainer: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
});

const NavigationHistory: FC<{ src: string | undefined }> = styled("img", {
  height: "1.25rem",
  marginTop: "$medium",
});

const ProductsPage: FC = () => {
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
        <ContentContainer>
          <Sidebar />
          <Content>
            <NavigationHistoryContainer>
              <NavigationHistory src={navigationHistory} />
            </NavigationHistoryContainer>
            <TitleRow fontSize="large" seeAll>
              Lawn mowers
            </TitleRow>
            <ProductCardsList categoryId="lawn_mowers" arrangement="horizontalList" />
            <TitleRow fontSize="large" seeAll>
              Furniture
            </TitleRow>
            <ProductCardsList categoryId="garden_furniture" arrangement="horizontalList" />
          </Content>
        </ContentContainer>
      </motion.div>
    </Container>
  );
};

export default ProductsPage;
