import "./Navbar.css";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">{/* <a href="/home">Home</a> */} Shops</li>
          <li className="items">Profile</li>
          <li className="items">Cart</li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </nav>
  );
}
