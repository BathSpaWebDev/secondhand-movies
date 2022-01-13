import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

// replace h2 with logo
// need to find a name for website (logo)

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h2>SimplyCrazy!</h2>
        <p>A secondhand DVD store</p>
      </Link>
      <CartIcon />
    </div>
  );
};

export default Navbar;
