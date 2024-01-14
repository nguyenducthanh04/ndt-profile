// import classNames from "classnames/bind";
// import styles from "./GlobalStyles.scss";
// import { useDarkMode } from "~/DarkModeContext";

import "./GlobalStyles.scss";
// const cx = classNames.bind(styles);
// const { isDarkMode, toggleDarkMode } = useDarkMode();
// const isDarkMode = useDarkMode.isDarkMode;
// const toggleDarkMode = useDarkMode.toggleDarkMode;
// const headerClasses = `${styles.body} ${
//   isDarkMode ? styles["dark-mode"] : styles["light-mode"]
// }`;
function GlobalStyles({ children }) {
  return children;
}
export default GlobalStyles;
