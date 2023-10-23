import "./skills.styles.scss";

const Skills = () => {
  return (
    <div className="skills">

      <p className="personal_head">{"// skills"} <span>/ bio</span></p>

      <h1>Technologies I Use:</h1>

      <ul>
        <li>- HTML, CSS(Tailwind, SASS).</li>
        <li>- Javascript (ES6+).</li>
        <li>- React, Next Js.</li>
        <li>- PHP(Laravel).</li>
        <li>- Node, Express.</li>
        <li>- Firebase, Mongo DB.</li>
        <li>- MySQL.</li>
        <li>- Flutter</li>
      </ul>

      <h1 className="second">Tools I Use:</h1>

      <ul>
        <li>- Git and GitHub.</li>
        <li>- VsCode.</li>
        <li>- npm, yarn.</li>
        <li>- Figma.</li>
      </ul>
    </div>
  )
}

export default Skills
