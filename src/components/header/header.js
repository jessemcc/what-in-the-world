import { BsMoon } from "react-icons/bs";
import "../../styles/scss/header.scss";

const Header = () => {
  return (
    <main className="header">
      <section className="header__title-box">
        <a href="#" className="header__title link">
          What in the world?
        </a>
      </section>
      <section className="header__dark-box">
        <a href="#" className="header__dark-button link">
          <BsMoon />
          <span className="header__dark-title">Dark Mode</span>
        </a>
      </section>
    </main>
  );
};

export default Header;
