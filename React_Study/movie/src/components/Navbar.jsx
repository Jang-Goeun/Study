import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // 네비바 상단 고정
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 45px;
  background-color: #171932;

  div {
    display: flex;
    gap: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s, font-weight 0.3s;

  &:hover {
    font-weight: bold;
    color: orange;
    cursor: pointer;
  }
`;

function Navbar() {
  return (
    <NavbarWrapper>
      <div className="moveHome">
        <StyledLink to="/">UMC Movie</StyledLink>
      </div>
      <div className="nav">
        <StyledLink to="/popular">Popular</StyledLink>
        <StyledLink to="/nowplaying">Now Playing</StyledLink>
        <StyledLink to="/toprate">Top Rated</StyledLink>
        <StyledLink to="/upcoming">Upcoming</StyledLink>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
