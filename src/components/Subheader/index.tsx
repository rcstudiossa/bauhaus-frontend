import React, { FC, ReactNode } from "react";
import stitches from "../../stitches";

import categories from "../../resources/categories";

const { styled } = stitches;

const SubheaderContainer: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  alignItems: "stretch",
  background: "$grey_600",
  padding: "0 $large 0 $large",
});

const CategoriesContainer: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  alignItems: "center",
  height: "1.75rem",
});

const CategoryText: FC<{ children: ReactNode }> = styled("p", {
  fontSize: "$font_small",
  color: "$grey_200",
  margin: "0 $regular 0 0",
});

const BannerContainer: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  backgroundColor: "$primary",
  margin: "0 0 0 $regular",
  padding: "0 $regular 0 $regular",
  alignItems: "center",
});

const BannerText: FC<{ children: ReactNode }> = styled("p", {
  fontSize: "0.66em",
  color: "$grey_800",
  margin: "0 0 0 0",
  fontWeight: 600,
  textTransform: "uppercase",
  fontStyle: "italic",
});

const Subheader: FC = () => {
  return (
    <SubheaderContainer>
      <CategoriesContainer>
        {categories.map(({ id, name }) => {
          return <CategoryText key={id}>{name}</CategoryText>;
        })}
      </CategoriesContainer>
      <BannerContainer>
        <BannerText>Up to 40% off in Tools</BannerText>
      </BannerContainer>
    </SubheaderContainer>
  );
};

export default Subheader;
