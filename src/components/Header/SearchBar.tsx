import React, { FC, ReactNode } from "react";
import stitches from "../../stitches";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { styled } = stitches;

const SearchContainer: FC<{ children: ReactNode }> = styled("div", {
  flex: 1,
  display: "flex",
  height: "2rem",
  margin: "0 $large 0 $large",
  backgroundColor: "$grey_700",
  borderRadius: "0.125rem",
  alignItems: "center",
  padding: "0 $small 0 $small",
});

const InputText: FC<{ placeholder: string | undefined }> = styled("input", {
  flex: 1,
  marginLeft: "$small",
  border: "none",
  backgroundColor: "transparent",
  outline: "none",
  color: "grey.100",
  fontSize: "0.85em",
  caretColor: "$grey_300",
  "&::placeholder": {
    color: "$grey_300",
  },
});

const SearchBar: FC = () => {
  return (
    <SearchContainer>
      <FontAwesomeIcon icon={faSearch} size="sm" color={stitches.theme.colors.grey_300.value} />
      <InputText placeholder={"Search for anything..."} />
    </SearchContainer>
  );
};

export default SearchBar;
