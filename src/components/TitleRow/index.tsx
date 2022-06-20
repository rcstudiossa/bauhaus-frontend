import React, { FC, ReactNode } from "react";
import stitches from "../../stitches";

const { styled } = stitches;

const TitleRowContainer: FC<{ children: ReactNode; fontSize?: any }> = styled("div", {
  display: "flex",
  alignItems: "center",
  margin: "$large 0 $regular 0",
  variants: {
    fontSize: {
      large: {
        margin: "$regular 0",
      },
    },
  },
});

const Title: FC<{ children: ReactNode; fontSize?: any }> = styled("p", {
  flex: 1,
  margin: "0",
  lineHeight: "1rem",
  fontSize: "$font_regular",
  fontWeight: 500,
  color: "$grey_100",
  variants: {
    fontSize: {
      large: {
        fontSize: "$font_large",
        lineHeight: "1.77rem",
      },
    },
  },
});

const SeeAll: FC<{ children: ReactNode }> = styled("p", {
  fontSize: "$font_small",
  fontWeight: 400,
  color: "$grey_300",
  textDecoration: "underline",
  margin: "0",
  cursor: "pointer",
  "&:hover": {
    fontWeight: 500,
  },
});

interface TitleRowProps {
  fontSize?: string;
  seeAll?: boolean;
  children: string;
}

const TitleRow: FC<TitleRowProps> = ({ fontSize, seeAll, children }) => {
  return (
    <TitleRowContainer fontSize={fontSize}>
      <Title fontSize={fontSize}>{children}</Title>
      {seeAll ? <SeeAll>See All</SeeAll> : <div />}
    </TitleRowContainer>
  );
};

export default TitleRow;
