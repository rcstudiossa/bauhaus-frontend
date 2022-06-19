import React, { FC, ReactNode } from "react";
import stitches from "../../stitches";

const { styled } = stitches;

const TitleRowContainer: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  alignItems: "center",
  margin: "$large 0 $regular 0",
});

const Title: FC<{ children: ReactNode }> = styled("p", {
  flex: 1,
  margin: "0",
  fontSize: "$font_regular",
  fontWeight: 500,
  color: "$grey_100",
});

const SeeAll: FC<{ children: ReactNode }> = styled("p", {
  fontSize: "$font_small",
  fontWeight: 400,
  color: "$grey_300",
  textDecoration: "underline",
  margin: "0",
});

interface TitleRowProps {
  children: string;
  seeAll?: boolean;
}

const TitleRow: FC<TitleRowProps> = ({ seeAll, children }) => {
  return (
    <TitleRowContainer>
      <Title>{children}</Title>
      {seeAll ? <SeeAll>See All</SeeAll> : <div />}
    </TitleRowContainer>
  );
};

export default TitleRow;
