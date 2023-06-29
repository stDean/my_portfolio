"use client";

import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

import "./contactmenu.styles.scss";

const ContactMenu = () => {
  return (
    <div className="contact_menu">
      <div className="desktop">
        <p>
          <IoMdMail />
          <span>
            <a
              href="mailto:tobaogundimu@gmail.com"
              style={{ color: "#607b96", textDecoration: "none" }}
            >
              tobaogundimu@gmail.com
            </a>
          </span>
        </p>

        <p>
          <ImPhone />
          +2349054217175
        </p>
      </div>

      <div className="location">
        <div className="loc">
          <AiFillCaretDown className="icon" />
          Location
        </div>

        <div className="place">
          <MdOutlineLocationOn />
          Lagos - Nigeria
        </div>
      </div>
    </div>
  );
};

export default ContactMenu;
