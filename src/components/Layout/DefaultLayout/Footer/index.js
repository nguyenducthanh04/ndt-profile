import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("copy-right")}>
        © Copyright 2024 Nguyễn Đức Thanh. All rights reserved.
      </p>
      <p className={cx("copy-right-mobile")}>
        © Copyright 2024 Nguyễn Đức Thanh.
      </p>
    </div>
  );
}

export default Footer;
