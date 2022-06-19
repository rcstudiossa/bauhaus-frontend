import React, { FC, ReactNode } from "react";

import stitches from "../../stitches";
import categories from "../../resources/categories";

const { styled } = stitches;

const CategoryCardsContainer: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  alignItems: "center",
});

const CategoryCardBase: FC<{ children: ReactNode; css: any }> = styled("div", {
  position: "relative",
  width: "16rem",
  minWidth: "12rem",
  height: "22rem",
  borderRadius: "1rem",

  padding: "$regular $regular 0 $regular",
  fontSize: "$font_large",
  fontWeight: 500,
  color: "$grey_100",
  lineHeight: "2.5rem",
  marginRight: "$large",

  backgroundColor: "$grey_700",
  backgroundSize: "cover",
  backgroundPositionX: "center",
  backgroundPositionY: "center",
  backgroundRepeat: "no-repeat",
});

const CategoryCard: FC<{ image: HTMLImageElement; children: ReactNode }> = (props) => (
  <CategoryCardBase css={{ backgroundImage: `url(${props.image})` }}>{props.children}</CategoryCardBase>
);

const CategoryCardsList: FC = () => {
  return (
    <CategoryCardsContainer>
      {categories.map((category) => {
        if (category.isPopular) {
          return (
            <CategoryCard key={category.id} image={require(`../../assets/categories/${category.imageName}`)}>
              {category.name}
            </CategoryCard>
          );
        }
      })}
    </CategoryCardsContainer>
  );
};

export default CategoryCardsList;
