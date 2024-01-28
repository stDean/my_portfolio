import "./personal.styles.scss";

const Personal = () => {
  return (
    <div className="personal">
      <p className="personal_head">
        {"// personal-info"} <span>/ bio</span>
      </p>

      <div className="para">
        <span className="hide">{"/*"}</span> <br />
        <p>
          Hello there! I'm a web developer hailing from Nigeria, and my journey
          into the enchanting realm of coding began in 2020. Back then, a friend
          introduced me to the world of front-end programming, and it's been a
          love affair ever since I penned my very first 'Hello, World' in HTML,
          watching it pop up in the browser. Yes, I admit, it was love at first
          code.
          <br /> <br />
          Now, here's the fun part: I've been on quite the adventure, teaching
          myself the ropes of web development. I've battled some truly epic
          coding dragons and emerged victorious, even if it meant sacrificing a
          few nights of sleep. This journey has revealed my true passion for web
          programming, where creativity and tech wizardry collide. I get a kick
          out of seeing immediate results and, of course, the perpetual joy of
          never-ending learning. So, if you're looking for a developer with a
          knack for problem-solving, a love for the craft, and a dash of wit,
          you've found your coder extraordinaire!"
        </p>
        <span className="hide">{"*/"}</span>
      </div>
    </div>
  );
};

export default Personal;
