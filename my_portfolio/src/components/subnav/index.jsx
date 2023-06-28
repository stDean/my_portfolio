"use client";

import { useState } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import Link from "next/link";

import "./subnav.styles.scss";

const SubNav = ({ item }) => {
  const [subnav, setSubNav] = useState(false);

  const showSubNav = () => {
    setSubNav((subnav) => !subnav);
  };

  return (
    <>
      <div className="sub_menu" onClick={item.subNav && showSubNav}>
        <div className="sub_icon">
          {item.subNav && subnav
            ? item.iconOpen
            : item.subNav
            ? item.iconClosed
            : null}
        </div>

        <div className={`sub_content ${subnav && "active"}`}>
          <span style={{ color: subnav && item.color }}>
            {subnav ? <AiFillFolderOpen /> : item.icon}
          </span>

          <span>{item.title}</span>
        </div>
      </div>

      {subnav &&
        item.subNav.map((ele, idx) => (
          <Link
            className={`dropdownlink ${({ isActive }) => isActive && "active"}`}
            href={ele.path}
            key={idx}
          >
            {ele.icon}
            <span>{ele.title}</span>
          </Link>
        ))}
    </>
  );
};

export default SubNav;
