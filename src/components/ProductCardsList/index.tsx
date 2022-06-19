import React, { FC, ReactNode } from "react";

import stitches from "../../stitches";
import products from "../../resources/products";

const { styled } = stitches;

const ProductCardsGrid: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "grid",
  overflowY: "hidden",
  gridColumnGap: "1.25rem",
  gridRowGap: "1.25rem",
  gridTemplateColumns: "repeat(auto-fill, minmax(13rem, 1fr))",
  overflow: "visible",
});

const ProductCardContainer: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  height: "16rem",
  cursor: "pointer",

  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "$grey_600",
  borderRadius: "0.5rem",

  boxShadow: "0px 0.25rem 0.5rem rgba(0, 0, 0, 0.05)",
});

const ImageContainerBase: FC<{ css: any }> = styled("div", {
  display: "flex",
  flex: 1,
  backgroundSize: "contain",
  backgroundPositionX: "center",
  backgroundPositionY: "center",
  backgroundRepeat: "no-repeat",
  margin: "$regular 0 $regular 0",
});

const ImageContainer: FC<{ image: HTMLImageElement }> = (props) => (
  <ImageContainerBase css={{ backgroundImage: `url(${props.image})` }} />
);

const ProductInformationContainer: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "3.5rem",
  backgroundColor: "$grey_800",
  padding: "0.8rem",
  borderRadius: "0 0 0.5rem 0.5rem",
});

const ProductInformationText: FC<{ children: ReactNode; information?: any }> = styled("p", {
  margin: "0",
  variants: {
    information: {
      name: {
        flex: 1,
        fontSize: "0.9em",
        color: "$grey_100",
        lineHeight: "1.25em",
        overflow: "hidden",
      },
      price: {
        textAlign: "right",
        fontSize: "0.9em",
        color: "$grey_100",
        fontWeight: 500,
        lineHeight: "1.2em",
      },
    },
  },
});

const ProductCardsList: FC = () => {
  return (
    <ProductCardsGrid>
      {products.map((product) => {
        return (
          <ProductCardContainer key={product.id}>
            <ImageContainer image={require(`../../assets/products/${product.id}.png`)} />
            <ProductInformationContainer>
              <ProductInformationText information="name">{product.name}</ProductInformationText>
              <ProductInformationText information="price">{product.price + "€"}</ProductInformationText>
            </ProductInformationContainer>
          </ProductCardContainer>
        );
      })}
    </ProductCardsGrid>
  );
};

export default ProductCardsList;
