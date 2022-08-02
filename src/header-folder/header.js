import "./header.css";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { MdSearch } from "react-icons/md";

export default function Header() {
  return (
    <div className="header-container">
      <img
        alt="logo"
        // src="https://www.pngarts.com/files/2/Letter-W-PNG-Free-Download.png"
        src="https://cdn.mfidie.com/wp-content/uploads/2020/05/WayaLogo-min-768x640.png"
      />
      <p>Women</p>
      <p>Women</p>
      <p>Women</p>
      <p>Women</p>
      <p>Women</p>
      <div className="header-input">
        <BiSearch className="header-search-icon" />
        <input placeholder="Search for products, brands and more..."></input>
      </div>
      <div className="header-profile">
        <FaRegUser />
        <span>Profile</span>
      </div>
      <div className="header-wishlist">
        <FaRegUser />
        <span>Profile</span>
      </div>
      <div className="header-bag">
        <FaRegUser />
        <span>Profile</span>
      </div>
    </div>
  );
}
