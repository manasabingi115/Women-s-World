import "./header.css";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Navbar from "./nav-bar";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-parent">
        <img
          alt="logo"
          src="https://cdn.mfidie.com/wp-content/uploads/2020/05/WayaLogo-min-768x640.png"
        />
      </div>
      <Navbar />
      {/* <p>Women</p>
      <p>Women</p>
      <p>Women</p>
      <p>Women</p>
      <p>Women</p> */}
      <div className="header-input">
        <BiSearch className="header-search-icon" />
        <input placeholder="Search for products, brands and more..."></input>
      </div>
      <div className="header-actions">
        <div className="header-profile">
          <FaRegUser />
          <span>Profile</span>
        </div>
        <div className="header-wishlist">
          <AiOutlineHeart />
          <span>Wishlist</span>
        </div>
        <div className="header-bag">
          <HiOutlineShoppingBag />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
}
