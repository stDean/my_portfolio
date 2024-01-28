import "./skills.styles.scss";

const Skills = () => {
  return (
    <div className="skills">
      <p className="personal_head">
        {"// skills"} <span>/ bio</span>
      </p>

      <h1>Technologies I Use:</h1>

      <ul>
        <li>- HTML, CSS(Tailwind, SASS, e.t.c).</li>
        <li>- Javascript, Typescript.</li>
        <li>- React, Next Js.</li>
        <li>- PHP(Laravel).</li>
        <li>- Node Js, Express Js.</li>
        <li>- Firebase, Mongo DB, MySQL.</li>
        <li>- Dart(Flutter)</li>
        <li>- Solidity</li>
        <li>- Python</li>
      </ul>

      <h1 className="second">Tools I Use:</h1>

      <ul>
        <li>- Git and GitHub.</li>
        <li>- VsCode.</li>
        <li>- npm, yarn.</li>
        <li>- Figma.</li>
        <li>- Prisma.</li>
      </ul>
    </div>
  );
};

export default Skills;
