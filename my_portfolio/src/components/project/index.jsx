"use client";

import { useEffect, useState } from "react";

import "./project.styles.scss";
import Works from "../works";
import { client } from "@/client";

const Project = ({ activeFilter }) => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const query = '*[_type == "works"]';

    client
      .fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
        setStatus("success");
      })
      .catch((e) => {
        console.log(e);
        setStatus("pending");
      });
  }, []);

  return (
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
  );
};

export default Project;
