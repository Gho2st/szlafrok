import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={classes.header__container}>
      <h2>{props.text}</h2>
    </div>
  );
}
