import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("contact")}>
        <div className={cx("contact-child")}>
          <h1 className={cx("contact-title")}>Liên hệ</h1>
          <div className={cx("input-group")}>
            <label className={cx("label")}>Email</label>
            <br></br>
            <input
              required=""
              type="text"
              className={cx("input-email")}
              placeholder=""
              value={"dducthanh04@gmail.com"}
            ></input>
          </div>
          <div className={cx("textarea-group")}>
            <label className={cx("label")}>Mô tả</label>
            <br></br>
            <textarea
              required=""
              type="text"
              className={cx("textarea-email")}
              placeholder="Bạn muốn nhắn nhủ gì cho tôi ?"
            ></textarea>
          </div>
          <div className={cx("button-send")}>
            <button className={cx("btn")}>Gửi</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
