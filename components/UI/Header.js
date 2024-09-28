import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={classes.header__container} style={{ color: props.color }}>
      <h2>{props.text}</h2>
    </div>
  );
}
