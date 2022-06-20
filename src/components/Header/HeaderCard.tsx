import React, { FC, ReactNode, useEffect, useState } from "react";
import stitches from "../../stitches";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { styled } = stitches;

const CardContainer: FC<{ children: ReactNode; onMouseEnter: any; onMouseLeave: any }> = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginRight: "$large",
  cursor: "pointer",
});

const IconCircle: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$grey_700",
  height: "2rem",
  width: "2rem",
  borderRadius: "1.25rem",
});

const TextContainer: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "0.5rem",
});

const SubtitleContainer: FC<{ children: ReactNode }> = styled("div", {
  display: "flex",
  flexDirection: "row",
});

const Text: FC<{ children: ReactNode; type: any; clickable?: any }> = styled("p", {
  margin: "0",
  variants: {
    type: {
      title: {
        fontSize: "$font_small",
        fontWeight: 500,
        color: "$grey_100",
      },
      subtitle: {
        fontSize: "$font_xsmall",
        fontWeight: 400,
        color: "$grey_300",
      },
    },
    clickable: {
      true: {
        textDecoration: "underline",
      },
    },
  },
});

interface HeaderCardProps {
  icon: IconDefinition;
  title: string;
  subtitle: string;
  clickableSubtitle?: string;
}

const HeaderCard: FC<HeaderCardProps> = (props) => {
  const [iconColor, setIconColor] = useState(stitches.theme.colors.grey_300.value);

  return (
    <CardContainer
      onMouseEnter={() => {
        setIconColor(stitches.theme.colors.grey_200.value);
      }}
      onMouseLeave={() => {
        setIconColor(stitches.theme.colors.grey_300.value);
      }}
    >
      <IconCircle>
        <FontAwesomeIcon icon={props.icon} color={iconColor} />
      </IconCircle>
      <TextContainer>
        <Text type="title">{props.title}</Text>
        <SubtitleContainer>
          <Text type="subtitle">{props.subtitle}</Text>
          {props.clickableSubtitle ? (
            <>
              <Text type="subtitle">&nbsp;</Text>
              <Text type="subtitle" clickable>
                {props.clickableSubtitle}
              </Text>
            </>
          ) : (
            <div />
          )}
        </SubtitleContainer>
      </TextContainer>
    </CardContainer>
  );
};

export default HeaderCard;
