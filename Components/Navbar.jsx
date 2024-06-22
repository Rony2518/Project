import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <nav>
        <h2 className="logo">Logo</h2>
        <div className="navContainer">
          <li>
            <a href="">MEN</a>
          </li>
          <li>
            <a href="">WOMEN</a>
          </li>
          <li>
            <a href="">KIDS</a>
          </li>
          <li>
            <a href="">COLLECTION</a>
          </li>
          <li>
            <a href="">TRENDS</a>
          </li>
        </div>
        <div className="extraLinks">
          <FaSearch className="icon" />
        </div>
        <div className="addCart">
          <FaCartShopping className="icon cart-icon" />
        </div>
      </nav>
    </>
  );
}
