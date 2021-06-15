import HeaderStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={HeaderStyles.title}>
        <span>Desarrollo Web</span> News
      </h1>
      <p className={HeaderStyles.description}>Esta es la description </p>
    </div>
  );
};

export default Header;
