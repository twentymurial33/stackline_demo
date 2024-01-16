import React from "react";
import data from "../data/stackline_frontend_assessment_data_2021.json";
import {
  DrawerWrapper,
  StyledImage,
  StyledText,
  StyledParagraph,
} from "./styled";

function Drawer() {
  const item = data[0];
  return (
    <DrawerWrapper>
      <StyledImage src={item.image} alt="logo" height="130px" width="130px" />
      <StyledText>{item.title}</StyledText>
      <StyledParagraph>{item.subtitle}</StyledParagraph>
      <hr></hr>
      <ul>
        <button>{item.tags[0]}</button>
        <button>{item.tags[1]}</button>
        <button>{item.tags[2]}</button>
        <button>{item.tags[3]}</button>
      </ul>
    </DrawerWrapper>
  );
}

export default Drawer;
