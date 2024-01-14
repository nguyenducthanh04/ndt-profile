import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);

function Contact() {
  return <h1 className={cx("title-contact")}>Contact</h1>;
}

export default Contact;
