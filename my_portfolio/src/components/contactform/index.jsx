"use client";

import { useEffect, useState } from "react";
import "./form.styles.scss";

const ContactForm = ({ data, handleChangeInput, handleSubmit, status }) => {
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (data.name !== "" && data.email !== "" && data.message !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [data]);

  return (
    <div className="form">
      <div className="input_text">
        <label htmlFor="name">_name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChangeInput}
        />
      </div>

      <div className="input_text">
        <label htmlFor="email">_email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChangeInput}
        />
      </div>

      <div className="textarea">
        <label htmlFor="">_message:</label>
        <textarea
          name="message"
          id="msg"
          placeholder="send a message.."
          value={data.message}
          onChange={handleChangeInput}
        />
      </div>

      <button
        type="submit"
        className={`${disable ? "disable__btn" : ""}`}
        disabled={disable}
        onClick={handleSubmit}
      >
        {status === "typing"
          ? "send-message"
          : status === "loading"
          ? "sending..."
          : status === "success"
          ? "sent"
          : "fail-to-send"}
      </button>
    </div>
  );
};

export default ContactForm;
