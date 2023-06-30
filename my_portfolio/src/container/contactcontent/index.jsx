"use client";

import { useState } from "react";

import { ContactForm, ContactText } from "@/components";
import "./contactcontainer.styles.scss";

const ContactContent = () => {
  const userData = {
    name: "",
    email: "",
    message: "",
  };
  const [data, setData] = useState(userData);

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <form action="" className="contact_form">
        <ContactForm data={data} handleChangeInput={handleChangeInput} />
      </form>

      <ContactText data={data} />
    </>
  );
};

export default ContactContent;
