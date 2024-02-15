import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./AuthLogin.module.scss";
const cx = classNames.bind(styles);
function LoginPage() {
  const [loginUrl, setLoginUrl] = useState("");

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

  return (
    <div className={cx("wrapper")}>
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

export default LoginPage;
