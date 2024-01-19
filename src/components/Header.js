import ReactLogo from "../assets/img/stackline_logo.svg";

function Header() {
  return (
    <>
      <img
        src={ReactLogo}
        alt="logo"
        height="100px"
        width="100px"
        style={{ marginLeft: "40px" }}
      />
    </>
  );
}

export default Header;
