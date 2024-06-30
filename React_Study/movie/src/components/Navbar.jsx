import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const div = styled.div``;

function Navbar() {
  return (
    <div>
      <Link to="/">UMC Movie</Link>
      <Link to="/popular">Popular</Link>
      <Link to="/nowplaying">Now Playing</Link>
      <Link to="/toprate">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
    </div>
  );
}

export default Navbar;
