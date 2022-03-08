import React, { useState } from "react";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import { BarsOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  function close() {
    setClicked(false);
  }
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink
          onClick={close}
          to={url}
          className={(navData: { isActive: any }) =>
            navData.isActive ? "active" : ""
          }
        >
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <div className="logo">
          Find
          <span style={{ fontFamily: "Courier New", color: "green" }}>
            Prop
          </span>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? (
            <CloseCircleOutlined />
          ) : (
            <BarsOutlined style={{ color: "black", fontSize: "30px" }} />
          )}
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          {menuList}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
