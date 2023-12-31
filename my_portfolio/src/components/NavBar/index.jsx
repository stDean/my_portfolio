"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import "./navbar.styles.scss";
import { usePathname } from "next/navigation";

const navData = [
  {
    id: 1,
    name: "_hello.me",
    path: "/",
    isActive: true,
  },
  {
    id: 2,
    name: "_about.me",
    path: "/about",
    isActive: false,
  },
  {
    id: 3,
    name: "_project.me",
    path: "/project",
    isActive: false,
  },
  {
    id: 4,
    name: "_contact.me",
    path: "/contact",
    left: "left",
    isActive: false,
  },
];

export default function NavBar() {
  let path = usePathname();
  const [toggle, setToggle] = useState(false);

  const active = item => {
    let activePath;
    if (path === item.path) {
      activePath = item.path;
    } else if (
      path === "/about/personal" ||
      path === "/about/skills" ||
      path === "/about/formal" ||
      path === "/about/non-formal" ||
      path === "/about/hobbies"
    ) {
      activePath = "/about";
    }

    return activePath;
  };

  return (
    <nav>
      <p className="logo">_D34N</p>

      {navData.map(item => (
        <Link
          key={item.id}
          href={item.path}
          className={`${item.left && item.left} ${
            item.path === active(item) && "active"
          }`}
        >
          {item.name}
        </Link>
      ))}

      <div className="mobile_nav">
        {toggle ? (
          <>
            <HiX onClick={() => setToggle(false)} />
            <div>
              <ul>
                {navData.map(item => (
                  <li key={item.id} onClick={() => setToggle(false)}>
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <HiMenuAlt4 onClick={() => setToggle(true)} />
        )}
      </div>
    </nav>
  );
}
