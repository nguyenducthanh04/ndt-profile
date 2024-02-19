import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import { faGithub, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ImageAvatar from "~/assets/images/thanhdz.jpg";
import { useDarkMode } from "~/DarkModeContext";
import Menu from "~/components/Popper/Menu";
const cx = classNames.bind(styles);
function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const headerClasses = cx("wrapper", {
    "dark-mode": isDarkMode,
    "light-mode": !isDarkMode,
  });
  const userData = localStorage.getItem("userData");
  // console.log("user:", userData);
  // const user = JSON.parse(userData);
  // console.log(user.name);
  return (
    <header className={headerClasses}>
      <div className={cx("inner")}>
        <div className={cx("inner-left")}>
          <ul className={cx("inner-item")}>
            <li className={cx("inner-item-li")}>
              <a className={cx("inner-item-li_link")} href="">
                <p className={cx("inner-name")}>
                  <Link to="/" className={cx("router-link")}>
                    Nguyễn Đức Thanh
                  </Link>
                </p>
              </a>
              <a className={cx("inner-item-li_link")} href="">
                <p className={cx("inner-name")}>
                  <Link to="/blog" className={cx("router-link")}>
                    Blogs
                  </Link>
                </p>
              </a>
              <a className={cx("inner-item-li_link")} href="">
                <p className={cx("inner-name")}>
                  <Link to="/contact" className={cx("router-link")}>
                    Contact
                  </Link>
                </p>
              </a>
              <a className={cx("inner-item-li_link")} href="">
                <p className={cx("inner-name")}>
                  <Link to="/profile" className={cx("router-link")}>
                    Profile
                  </Link>
                </p>
              </a>
              <a className={cx("inner-item-li_link")} href="">
                <p className={cx("inner-name-chat")}>Chat</p>
              </a>
            </li>
          </ul>
          <Menu>
            <div className={cx("menu-mobile-btn")}>
              <FontAwesomeIcon className={cx("menu-icon")} icon={faBars} />
            </div>
          </Menu>
        </div>
        <div className={cx("inner-right")}>
          <ul className={cx("inner-item-right")}>
            <li className={cx("inner-item-li-right")}>
              <a
                className={cx("inner-item-li_link")}
                href="https://fullstack.edu.vn/"
                target="_blank"
              >
                <img
                  className={cx("logo-f8")}
                  src="https://ndng.net/_next/image?url=https%3A%2F%2Ffullstack.edu.vn%2Fstatic%2Fmedia%2Ff8-icon.18cd71cfcfa33566a22b.png&w=32&q=75"
                ></img>
              </a>
            </li>
            <li className={cx("inner-item-li-right")}>
              <a
                className={cx("inner-item-li_link")}
                href="https://www.facebook.com/profile.php?id=100029011241481"
                target="_blank"
              >
                <FontAwesomeIcon
                  className={cx("icon")}
                  icon={faSquareFacebook}
                />
              </a>
            </li>
            <li className={cx("inner-item-li-right")}>
              <a
                className={cx("inner-item-li_link")}
                href="https://github.com/nguyenducthanh04"
                target="_blank"
              >
                <FontAwesomeIcon className={cx("icon")} icon={faGithub} />
              </a>
            </li>
            <li className={cx("inner-item-li-right")}>
              <button
                className={cx("inner-item-li_link")}
                onClick={toggleDarkMode}
              >
                <FontAwesomeIcon
                  className={cx("icon")}
                  icon={isDarkMode ? faMoon : faSun}
                />
              </button>
            </li>
            <li className={cx("inner-item-li-right")}>
              <a className={cx("inner-item-li_link")} href="/profile">
                <img className={cx("avatar")} src={ImageAvatar}></img>
              </a>
            </li>
            <li className={cx("inner-item-li-right")}>
              <button className={cx("language")}>VI</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
