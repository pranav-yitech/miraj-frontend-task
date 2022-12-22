
const Link = (props) => {
  const label = props.label;
  const path = props.path || "#!";
  const color = props.color || "text-primary";

  return (
    <a className={`${color} text-sm hover:underline`} href={path}>
      {label}
    </a>
  );
};

export default Link;
