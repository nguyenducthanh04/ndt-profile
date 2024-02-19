import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import axios from "axios";
const cx = classNames.bind(styles);

function Contact() {
  const [loginUrl, setLoginUrl] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  //localStorage
  const userIn = localStorage.getItem("userData");
  const user = JSON.parse(userIn);
  useEffect(() => {
    fetch("http://localhost:3000/auth/login/url")
      .then((response) => response.json())
      .then((data) => {
        setLoginUrl(data.redirectUrl);
        console.log("ok:", data.redirectUrl);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  const handleLogin = () => {
    window.location.href = loginUrl;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/mail/send-mail",
        {
          email: user.email,
          content: content,
        }
      );
      setMessage(response.data);
      alert("Tin nhắn đã được gửi thành công!");
      window.location.reload();
    } catch (error) {
      setMessage("Error sending email");
    }
  };

  const isLogin = localStorage.getItem("token");
  if (isLogin) {
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
                name="email"
                className={cx("input-email")}
                placeholder=""
                value={user.email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className={cx("textarea-group")}>
              <label className={cx("label")}>Mô tả</label>
              <br></br>
              <textarea
                required=""
                type="text"
                name="content"
                className={cx("textarea-email")}
                placeholder="Bạn muốn nhắn nhủ gì cho tôi ?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className={cx("button-send")}>
              <button className={cx("btn")} onClick={handleSubmit}>
                Gửi
              </button>
            </div>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={cx("wrapper-2")}>
      <div className={cx("login-form")}>
        <div className={cx("form-title")}>
          <h1 className={cx("title")}>Đăng nhập</h1>
        </div>
        <button onClick={handleLogin} className={cx("btn")}>
          Đăng nhập với Google
        </button>
        <br></br>
        <br></br>
        <button onClick={handleLogin} className={cx("btn-github")}>
          Đăng nhập với Github
        </button>
      </div>
    </div>
  );
}

export default Contact;
