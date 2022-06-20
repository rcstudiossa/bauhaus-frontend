import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import stitches from "../../stitches";
import categories from "../../resources/categories";

const { styled } = stitches;

const CategoryCardsContainer: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  margin: "0 -1.77rem",
  overflowX: "auto",
  padding: "0 $large $small $large",

  gridGap: "$regular",
  gridTemplateRows: "1fr",

  "&::-webkit-scrollbar": {
    height: "0.65rem !important",
  },
  "&::-webkit-scrollbar-track": {
    background: "$grey_800",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "$grey_600",
    borderRadius: "0.375rem !important",
    "-webkit-box-shadow": "inset 0 0 8px rgba(0,0,0,0.025)",
    left: "-100px",
    marginLeft: "2rem",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "$grey_400",
  },
});

const CategoryCardBase: FC<{ children: ReactNode; css: any; onClick: any }> = styled("div", {
  width: "16rem",
  minWidth: "16rem",
  height: "22rem",
  borderRadius: "1rem",

  padding: "$regular $regular 0 $regular",
  fontSize: "$font_large",
  fontWeight: 500,
  color: "$grey_100",
  lineHeight: "2.5rem",
  cursor: "pointer",

  backgroundColor: "$grey_700",
  backgroundSize: "100%",
  backgroundPositionX: "center",
  backgroundPositionY: "center",
  backgroundRepeat: "no-repeat",

  "&:hover": {
    backgroundSize: "120%",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    transform: "scale(0.99)",
  },

  transition: "background-size .2s, background-position .4s, transform .2s",
});

const CategoryCard: FC<{ image: HTMLImageElement; children: ReactNode }> = (props) => {
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate("products");
  };
  return (
    <CategoryCardBase css={{ backgroundImage: `url(${props.image})` }} onClick={goToProducts}>
      {props.children}
    </CategoryCardBase>
  );
};

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
