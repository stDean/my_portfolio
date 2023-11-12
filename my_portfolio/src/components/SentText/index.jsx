import "./sent.styles.scss"

const Sent = ({handleClick}) => {
  return (
    <div className="container">
      <h1>Thank You! ✌️ </h1>
      <p>
        Your message has been sent. I will get back to you as soon as possible!
      </p>

      <button onClick={handleClick}>send-new-message</button>
    </div>
  );
};

export default Sent;
