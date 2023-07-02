import "./menu.styles.scss";

const ProjectMenu = ({ item, handleWorkFilter, activeFilter }) => {
  return (
    <div
      className={`filter_work ${
        activeFilter === item.title ? "item-active" : ""
      }`}
      onClick={() => handleWorkFilter(item.title)}
    >
      {item.icon}
      {item.title}
    </div>
  );
};

export default ProjectMenu;
