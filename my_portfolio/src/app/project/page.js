"use client";

import { useState, useEffect } from "react";
import { DiReact } from "react-icons/di";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";

import "./project.styles.scss";
import { NavTop, SideNav } from "@/components";
import { client } from "@/client";

export default function page() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const category = [
    {
      id: 1,
      title: "All",
      icon: <AiFillHome />,
    },
    {
      id: 2,
      title: "JavaScript",
      icon: <TbBrandJavascript />,
    },
    {
      id: 3,
      title: "React JS",
      icon: <DiReact />,
    },
    {
      id: 4,
      title: "Next JS",
      icon: <TbBrandNextjs />,
    },
  ];

  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    setTimeout(() => {
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className="project">
      <SideNav>
        <NavTop path="projects" mobilePath="_projects" />

        <div className="bottom">
          {category.map((item) => (
            <div
              key={item.id}
              className={`filter_work ${
                activeFilter === item.title ? "item-active" : ""
              }`}
              onClick={() => handleWorkFilter(item.title)}
            >
              {item.icon}
              {item.title}
            </div>
          ))}
        </div>
      </SideNav>
    </div>
  );
}
