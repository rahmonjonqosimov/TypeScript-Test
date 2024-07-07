import React from "react";
import { logo, user } from "../../assets/images";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

import { Link } from "react-router-dom";

const BooksNavbar: React.FC = () => {
  return (
    <div className="navbar">
      <Link to={"/books"} className="logo">
        <img src={logo} alt="Logo" />
        <h3>
          <span>Books</span> List
        </h3>
      </Link>
      <div className="serach">
        <BiSearchAlt />
        <input type="search" placeholder="Search for any training you want " />
      </div>
      <div className="notification">
        <IoMdNotificationsOutline />
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default BooksNavbar;
