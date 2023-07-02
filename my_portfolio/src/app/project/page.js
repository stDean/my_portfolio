"use client";

import { useState } from "react";
import { DiReact } from "react-icons/di";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

import "./project.styles.scss";
import { NavTop, ProjectItem, SideNav } from "@/components";

export default function page() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [drop, setDrop] = useState(false);

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

  const handleToggle = () => setDrop(drop => !drop);

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

       <div className="mobile">
        <div className="parentNav" onClick={handleToggle}>
          {drop ? <AiFillCaretDown /> : <AiFillCaretRight />}
          <span>projects</span>
        </div>

        {
          drop && (
            <>
              {
                category.map((item, idx) => (
                  <div
                    key={idx}
                    className={`filter_work ${activeFilter === item.title ? 'item-active' : ''}`}
                    onClick={() => handleWorkFilter(item.title)}
                  >
                    {item.icon}
                    {item.title}
                  </div>
                ))
              }
            </>
          )
        }

        <div className="title">
          <p><span>projects /</span> {activeFilter}</p>
        </div>
      </div>

      <ProjectItem activeFilter={activeFilter} />
    </div>
  );
}
