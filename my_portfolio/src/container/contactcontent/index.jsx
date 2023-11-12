"use client";

import { useState } from "react";

import { ContactForm, ContactText, Sent } from "@/components";
import "./contactcontainer.styles.scss";
import { sendMessage } from "@/lib/api";

const ContactContent = () => {
  const userData = {
    name: "",
    email: "",
    message: "",
  };
  const [data, setData] = useState(userData);
  const [status, setStatus] = useState("typing");

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("loading");

    try {
      await sendMessage(data);
      setStatus("success");
      setData(data);
    } catch (error) {
      setStatus("failed");
      console.log(error.message);
    }
  };

  const handleClick = () => {};

  return (
    <>
      <form action="" className="contact_form">
        {status === "success" ? (
          <Sent handleClick={handleClick} />
        ) : (
          <ContactForm
            data={data}
            handleChangeInput={handleChangeInput}
            handleSubmit={handleSubmit}
            status={status}
          />
        )}
      </form>

      <ContactText data={data} />
    </>
  );
};

export default ContactContent;
