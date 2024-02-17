import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import Avatar from "~/assets/images/thanhdz.jpg";
const cx = classNames.bind(styles);

function Profile() {
  const [loginUrl, setLoginUrl] = useState("");
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Lấy thông tin người dùng từ query parameters
    const searchParams = new URLSearchParams(location.search);
    console.log(searchParams);
    const userDataFromParams = {
      id: searchParams.get("id"),
      email: searchParams.get("email"),
      name: searchParams.get("name"),

      // Các thông tin khác nếu có
    };
    // localStorage.setItem("userData", JSON.stringify(userDataFromParams));
    const tokenFromParams = searchParams.get("token");
    // Cập nhật state với thông tin người dùng
    if (tokenFromParams) {
      localStorage.setItem("token", tokenFromParams);
      setToken(tokenFromParams);
    }
    if (
      searchParams.get("id") &&
      searchParams.get("email") &&
      searchParams.get("name")
    ) {
      localStorage.setItem("userData", JSON.stringify(userDataFromParams));
      setUserData(userDataFromParams);
    }
    // setUserData(userDataFromParams);
  }, [location.search]);
  // localStorage.setItem("userData", JSON.stringify(userData));
  // useEffect(() => {
  //   if (userData) {
  //     localStorage.setItem("userData", JSON.stringify(userData));
  //   }
  // }, [userData]);
  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      const response = await axios.post("http://localhost:3000/auth/logout");
      console.log(response.data); // Logged out successfully
      // Chuyển hướng đến trang đăng nhập hoặc trang chính của ứng dụng sau khi đăng xuất thành công
      window.location.href = "http://127.0.0.1:3001/auth/login"; // Đổi đường dẫn tùy thuộc vào đường dẫn của trang đăng nhập của bạn
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  useEffect(() => {
    fetch("http://localhost:3000/auth/login/url")
      .then((response) => response.json())
      .then((data) => {
        setLoginUrl(data.redirectUrl);
        // console.log("ok:", data.redirectUrl);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  ///

  ///
  const handleLogin = () => {
    window.location.href = loginUrl;
  };
  const userIn = localStorage.getItem("userData");
  const user = JSON.parse(userIn);
  const isLogin = localStorage.getItem("token");
  if (isLogin) {
    return (
      <div>
        {" "}
        {user ? (
          <div className={cx("wrapper")}>
            <div className={cx("profile-title")}>
              <h2 className={cx("title")}>Trang profile của: {user.name}</h2>
            </div>
            <div className={cx("profile-account")}>
              <div className={cx("avt")}>
                <img className={cx("avt-acc")} src={Avatar} alt="Avatar"></img>
              </div>
              <div className={cx("email")}>
                <h5 className={cx("name-acc")}>{user.name}</h5>
                <p className={cx("email-acc")}>{user.email}</p>
              </div>
            </div>
            <div className={cx("btn-setting")}>
              <button className={cx("btn-edit")}>Sửa thông tin</button>
              <button className={cx("btn")} onClick={handleLogout}>
                Đăng xuất
              </button>
            </div>
            <hr className={cx("hr")}></hr>
            <div className={cx("comment")}>
              <h4 className={cx("comment-title")}>Bình lụân đã viết</h4>
              <div className={cx("users-comment-parent")}>
                <div className={cx("user-comment")}>
                  <div className={cx("avt-user")}>
                    <img
                      className={cx("avatar")}
                      src={Avatar}
                      alt="Avatar"
                    ></img>
                  </div>
                  <div className={cx("profile-user")}>
                    <h5 className={cx("name-user")}>Nguyen Duc Thanh</h5>
                    <p className={cx("date")}>12 ngày trước</p>
                  </div>
                </div>
                <div className={cx("content-comment")}>
                  <a href="" className={cx("comment-detail")}>
                    <em className={cx("content")}>Hehe, mình cảm ơn !</em>
                  </a>
                </div>
                <hr className={cx("hr-comment")}></hr>
              </div>
              <div className={cx("users-comment-parent")}>
                <div className={cx("user-comment")}>
                  <div className={cx("avt-user")}>
                    <img
                      className={cx("avatar")}
                      src={Avatar}
                      alt="Avatar"
                    ></img>
                  </div>
                  <div className={cx("profile-user")}>
                    <h5 className={cx("name-user")}>Nguyen Duc Thanh</h5>
                    <p className={cx("date")}>12 ngày trước</p>
                  </div>
                </div>
                <div className={cx("content-comment")}>
                  <a href="" className={cx("comment-detail")}>
                    <em className={cx("content")}>Tớ cảm ơn nhé !</em>
                  </a>
                </div>
                <hr className={cx("hr-comment")}></hr>
              </div>
              <div className={cx("users-comment-parent")}>
                <div className={cx("user-comment")}>
                  <div className={cx("avt-user")}>
                    <img
                      className={cx("avatar")}
                      src={Avatar}
                      alt="Avatar"
                    ></img>
                  </div>
                  <div className={cx("profile-user")}>
                    <h5 className={cx("name-user")}>Nguyen Duc Thanh</h5>
                    <p className={cx("date")}>12 ngày trước</p>
                  </div>
                </div>
                <div className={cx("content-comment")}>
                  <a href="" className={cx("comment-detail")}>
                    <em className={cx("content")}>Tớ cảm ơn !</em>
                  </a>
                </div>
                <hr className={cx("hr-comment")}></hr>
              </div>
              <div className={cx("users-comment-parent")}>
                <div className={cx("user-comment")}>
                  <div className={cx("avt-user")}>
                    <img
                      className={cx("avatar")}
                      src={Avatar}
                      alt="Avatar"
                    ></img>
                  </div>
                  <div className={cx("profile-user")}>
                    <h5 className={cx("name-user")}>Nguyen Duc Thanh</h5>
                    <p className={cx("date")}>12 ngày trước</p>
                  </div>
                </div>
                <div className={cx("content-comment")}>
                  <a href="" className={cx("comment-detail")}>
                    <em className={cx("content")}>Tớ cảm ơn cậu !</em>
                  </a>
                </div>
                <hr className={cx("hr-comment")}></hr>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
      </div>
    );
  }
  return (
    <div className={cx("wrapper-2")}>
      <div className={cx("login-form")}>
        <div className={cx("form-title")}>
          <h1 className={cx("title")}>Đăng nhập</h1>
        </div>
        <button onClick={handleLogin} className={cx("btn-google")}>
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

export default Profile;
