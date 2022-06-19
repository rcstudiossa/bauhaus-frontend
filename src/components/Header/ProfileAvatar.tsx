import React, { FC, ReactNode } from "react";
import stitches from "../../stitches";
import avatar from "../../assets/avatar.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { styled } = stitches;

const ProfileAvatarContainer: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Avatar: FC<{ src: string | undefined }> = styled("img", {
  height: "2rem",
  borderRadius: "1rem",
  marginLeft: "$xsmall",
});

const ProfileAvatar: FC = () => {
  return (
    <ProfileAvatarContainer>
      <FontAwesomeIcon icon={faChevronDown} color={stitches.theme.colors.grey_300.value} size="xs" />
      <Avatar src={avatar} />
    </ProfileAvatarContainer>
  );
};

export default ProfileAvatar;
