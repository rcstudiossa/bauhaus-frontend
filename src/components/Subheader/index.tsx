import React, { FC, ReactNode, useState, useLayoutEffect, useEffect } from "react";
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
  whiteSpace: "nowrap",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
    fontWeight: 500,
  },
});

const BannerContainer: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  backgroundColor: "$primary",
  margin: "0 0 0 $regular",
  padding: "0 $regular 0 $regular",
  alignItems: "center",
  whiteSpace: "nowrap",
  cursor: "pointer",
});

const BannerText: FC<{ children: ReactNode }> = styled("p", {
  fontSize: "0.66em",
  color: "$grey_800",
  margin: "0 0 0 0",
  fontWeight: 600,
  textTransform: "uppercase",
  fontStyle: "italic",
  "&:hover": {
    textDecoration: "underline",
  },
});

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return windowSize;
};

const Subheader: FC = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    setMaxIndex((windowWidth - 100) / 175);
  }, [windowWidth, windowHeight]);

  return (
    <SubheaderContainer>
      <CategoriesContainer>
        {categories.map(({ id, name }, index) => {
          if (index < maxIndex) {
            return <CategoryText key={id}>{name}</CategoryText>;
          }
        })}
      </CategoriesContainer>
      <BannerContainer>
        <BannerText>Up to 40% off in Tools</BannerText>
      </BannerContainer>
    </SubheaderContainer>
  );
};

export default Subheader;
