import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);
function Menu({ Children }) {
  return (
    <Tippy
      interactive
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper>Menu item</PopperWrapper>
        </div>
      )}
    >
      {Children}
    </Tippy>
  );
}

export default Menu;
