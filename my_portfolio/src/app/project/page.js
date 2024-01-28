"use client";

import { useEffect, useState } from "react";
import { DiReact } from "react-icons/di";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

import "./project.styles.scss";
import { NavTop, ProjectMenu, Works } from "@/components";
import SideNav from "@/components/sidenav";
import { client } from "@/config/client";

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [drop, setDrop] = useState(false);
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [status, setStatus] = useState("pending");

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

  useEffect(() => {
    const query = '*[_type == "works"]';

    client
      .fetch(query)
      .then(data => {
        setWorks(data);
        setFilterWork(data);
        setStatus("success");
      })
      .catch(e => {
        setStatus("pending");
      });
  }, []);

  const handleToggle = () => setDrop(drop => !drop);

  // getting the filtered works based on the tag.
  const handleWorkFilter = item => {
    setActiveFilter(item);

    setTimeout(() => {
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter(work => work.tags.includes(item)));
      }

      setDrop(false);
    }, 500);
  };

  return (
    <div className="project">
      <SideNav>
        <NavTop path="projects" mobilePath="_projects" />

        <div className="bottom">
          {category.map(item => (
            <ProjectMenu
              key={item.id}
              activeFilter={activeFilter}
              handleWorkFilter={handleWorkFilter}
              item={item}
            />
          ))}
        </div>
      </SideNav>

      <div className="mobile">
        <div className="parentNav" onClick={handleToggle}>
          {drop ? <AiFillCaretDown /> : <AiFillCaretRight />}
          <span>projects</span>
        </div>

        {drop && (
          <>
            {category.map(item => (
              <ProjectMenu
                key={item.id}
                activeFilter={activeFilter}
                handleWorkFilter={handleWorkFilter}
                item={item}
              />
            ))}
          </>
        )}

        <div className="title">
          <p>
            <span>projects /</span> {activeFilter}
          </p>
        </div>
      </div>

      <div className="right">
        <h1>{activeFilter} Projects</h1>

        <div className="works">
          {status === "pending" ? (
            <div>Loading...</div>
          ) : (
            filterWork.map((work, idx) => <Works key={idx} work={work} />)
          )}
        </div>
      </div>
    </div>
  );
}
