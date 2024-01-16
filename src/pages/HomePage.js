import React from "react";
import Header from "../components/Header.js";
import Drawer from "../components/Drawer.js";
import { StyledSection, StyledContainer, StyledDiv } from "./styled.js";
import SalesTable from "../components/SalesTable";
import SalesData from "../components/SalesData";

function HomePage() {
  return (
    <>
      <Header />
      <StyledSection>
        <Drawer />
        <StyledDiv>
          <StyledContainer>
            <SalesData />
          </StyledContainer>
          <StyledContainer>
            <SalesTable itemId="B007TIE0GQ" />
          </StyledContainer>
        </StyledDiv>
      </StyledSection>
    </>
  );
}

export default HomePage;
