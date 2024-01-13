import ReactLogo from "../assets/img/stackline_logo.svg";
import { HeaderContainer } from "./styled";

function Header() {
  return (
    <HeaderContainer>
      <img src={ReactLogo} alt="logo" height="100px" width="100px" />
    </HeaderContainer>
  );
}

export default Header;
