import React, { useState } from "react";
import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import styles from "./DefaultLayout.module.scss";
import Footer from "./Footer";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const layoutClassNames = cx({
    "dark-mode": isDarkMode,
    "light-mode": !isDarkMode,
  });

  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
