import React from "react";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import ImgAvatar from "~/assets/images/thanhdz.jpg";
const cx = classNames.bind(styles);
function Home() {
  // const ImageHover = () => {
  const [isHoverd, setIsHoverd] = useState(false);
  const handleMouse = () => {
    setIsHoverd(true);
  };
  const handleMouseLeave = () => {
    setIsHoverd(false);
  };
  // };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title-content")}>
        <h1 className={cx("title-name")}>Nguyễn Đức Thanh</h1>
        <p className={cx("introduce")}>
          Bắt đầu học lập trình từ năm 18 tuổi, năm 19 tuổi học lập trình web
          Back-end
        </p>
      </div>
      <div className={cx("container-avt")}>
        <div className={cx("avt-thanh")}>
          <div className={cx("form-avt")}>
            <img
              className={cx("img-avt")}
              src={ImgAvatar}
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouseLeave}
            ></img>
            <figcaption className={cx("job")}>Back-end Developer</figcaption>
          </div>
          <div className={cx("skills")}>
            <section className={cx("my-skill")}>
              <h2 className={cx("skill-title")}>Các kĩ năng của tôi</h2>
              <ul className={cx("list-skill")}>
                <li className={cx("skill-item")}>
                  <span className={cx("skill-content")}>
                    Kĩ năng web: Nodejs, Expressjs, HTML5, CSS, SCSS
                  </span>
                </li>
                <li className={cx("skill-item")}>
                  <span className={cx("skill-content")}>
                    Các kĩ năng khác: Kĩ năng tìm kiếm thông tin và nghiên cứu ở
                    mức ổn, kĩ năng làm việc nhóm tốt
                  </span>
                </li>
              </ul>
            </section>
          </div>
          <div className={cx("histories")}>
            <section className={cx("my-history")}>
              <h2 className={cx("history-title")}>Lịch sử</h2>
              <ul className={cx("list-history")}>
                <li className={cx("history-item")}>
                  <span className={cx("history-content")}>
                    2016: Học tại THCS Phụng Công
                  </span>
                </li>
                <li className={cx("history-item")}>
                  <span className={cx("history-content")}>
                    2019: Học tại THPT Nguyễn Công Hoan
                  </span>
                </li>
                <li className={cx("history-item")}>
                  <span className={cx("history-content")}>
                    2022 - nay: Học tập và làm việc tại Hà Nội
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className={cx("content-container")}>
          <section className={cx("content-container-child")}>
            <div className={cx("section-child")}>
              <div className={cx("section-child-header")}>
                <h2 className={cx("section-child-title")}>Các dự án cá nhân</h2>
              </div>
              <div className={cx("project")}>
                <span className={cx("project-title")}>
                  Project Manager Class
                </span>
                <p className={cx("project-content")}>
                  Một dự án đang được thực hiện<br></br>
                  Một trang web quản lý lớp học, sử dụng Nodejs
                </p>
                <div className={cx("project-address")}>
                  <a className={cx("project-address-link")} href="">
                    Demo
                  </a>
                  <a
                    className={cx("project-address-link")}
                    href="https://github.com/nguyenducthanh04/Project-Thanh-Backend-k1"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
                <hr className={cx("project-hr")}></hr>
              </div>
              <div className={cx("project")}>
                <span className={cx("project-title")}>
                  Project Manager Class
                </span>
                <p className={cx("project-content")}>
                  Một dự án đang được thực hiện<br></br>
                  Một trang web quản lý lớp học, sử dụng Nodejs
                </p>
                <div className={cx("project-address")}>
                  <a className={cx("project-address-link")} href="">
                    Demo
                  </a>
                  <a
                    className={cx("project-address-link")}
                    href="https://github.com/nguyenducthanh04/Project-Thanh-Backend-k1"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
                <hr className={cx("project-hr")}></hr>
              </div>
              <div className={cx("project")}>
                <span className={cx("project-title")}>
                  Project Manager Class
                </span>
                <p className={cx("project-content")}>
                  Một dự án đang được thực hiện<br></br>
                  Một trang web quản lý lớp học, sử dụng Nodejs
                </p>
                <div className={cx("project-address")}>
                  <a className={cx("project-address-link")} href="">
                    Demo
                  </a>
                  <a
                    className={cx("project-address-link")}
                    href="https://github.com/nguyenducthanh04/Project-Thanh-Backend-k1"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
                {/* <hr className={cx("project-hr")}></hr> */}
              </div>
            </div>
          </section>
          <section className={cx("infomation")}>
            <div className={cx("info-title")}>
              <h2 className={cx("info-title-child")}>Thông tin thêm</h2>
            </div>
            <ul className={cx("info-list")}>
              <li className={cx("info-list-item")}>
                <span className="info-list-item-child">
                  Tôi thích nghe nhạc, xem phim và tìm hiểu thêm về các ngôn ngữ
                  cũng như frame work, hiện tại tôi đang học thêm Reactjs, trang
                  web này cũng được viết bằng một chút kiến thức React.
                </span>
              </li>
              <li className={cx("info-list-item")}>
                <span className="info-list-item-child">
                  Ngoài những thứ trên, tôi rất thích xem các bộ phim anime Nhật
                  Bản những lúc rảnh rỗi, nó sẽ làm bay những áp lực khi code có
                  bug 😊.
                </span>
              </li>
              <li className={cx("info-list-item")}>
                <span className="info-list-item-child">
                  Mong muốn của tôi là cố gắng học hỏi, sắp tới được thực tập ở
                  môi trường công nghệ tốt để học hỏi thêm nhiều về kiến thức và
                  kinh nghiệm giúp phát triển kĩ năng code tốt hơn.
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
