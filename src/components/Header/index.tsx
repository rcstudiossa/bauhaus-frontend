import React, { FC, ReactNode } from "react";
import stitches from "../../stitches";
import bauhausLogo from "../../assets/header/bauhaus-extended-logo.svg";
import { faLocationDot, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import SearchBar from "./SearchBar";
import HeaderCard from "./HeaderCard";
import ProfileAvatar from "./ProfileAvatar";

const { styled } = stitches;

const Logo: FC<{ src: string | undefined }> = styled("img", {
  height: "2rem",
});

const HeaderContainer: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  alignItems: "center",
  background: "$background",
  height: "3.5rem",
  padding: "0 $large 0 $large",
});

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Logo src={bauhausLogo} />
      <SearchBar />
      <HeaderCard icon={faLocationDot} title="3 nearby stores" subtitle="in" clickableSubtitle="Mannheim" />
      <HeaderCard icon={faShoppingCart} title="Shopping Cart" subtitle="4 items" />
      <ProfileAvatar />
    </HeaderContainer>
  );
};

export default Header;
