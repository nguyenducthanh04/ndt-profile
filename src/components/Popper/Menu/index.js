import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);
function Menu({ children }) {
  return (
    <Tippy
      interactive
      trigger="click"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            <ul>
              <li className={cx("menu-poper-item")}>
                <Link to="/" className={cx("router-link-name")}>
                  Nguyễn Đức Thanh
                </Link>
              </li>
              <li className={cx("menu-poper-item")}>
                <Link to="/blog" className={cx("router-link")}>
                  Blogs
                </Link>
              </li>
              <li className={cx("menu-poper-item")}>
                <Link to="/contact" className={cx("router-link")}>
                  Contact
                </Link>
              </li>
              <li className={cx("menu-poper-item")}>
                <Link to="/profile" className={cx("router-link")}>
                  Profile
                </Link>
              </li>
              <li className={cx("menu-poper-item")}>
                <Link to="/chat" className={cx("router-link-name")}>
                  Chat
                </Link>
              </li>
            </ul>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
