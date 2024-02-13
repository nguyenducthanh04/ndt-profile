import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Blog.module.scss";
import { faEye, faSearch } from "@fortawesome/free-solid-svg-icons";
import ImagePost from "~/assets/images/thanhdz.jpg";
const cx = classNames.bind(styles);

function Blog() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   // Hàm này sẽ được gọi khi component được render lần đầu tiên
  //   // Bạn có thể thay đổi URL của API theo địa chỉ thực tế của bạn
  //   const apiUrl = "http://localhost:3000/posts";

  //   // Sử dụng Axios để gọi API
  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       // Lấy dữ liệu từ phản hồi và cập nhật state
  //       setPosts(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       // Xử lý lỗi nếu có
  //       console.error("Error fetching data:", error);
  //     });
  // }, []); // [] giúp useEffect chỉ chạy một lần khi component được render
  // console.log(posts);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <input
          className={cx("search")}
          type="text"
          placeholder="Tìm kiếm bài viết"
        ></input>
        <button className={cx("search-btn")}>
          <FontAwesomeIcon
            className={cx("search-icon")}
            icon={faSearch}
          ></FontAwesomeIcon>
        </button>
      </div>
      <div className={cx("blog-content")}>
        {/* {posts.map((post) => (
          // <li key={post.id}>{post.title}</li> */}
        <div className={cx("blog-content-item")}>
          <div className={cx("blog-content-top")}>
            <Link className={cx("blog-content-top-item")} to="/">
              <h2 className={cx("blog-title")}>
                Xin chào các bạn, mình là Thanh
                {/* {post.title} */}
              </h2>
              <img className={cx("img-post")} src={ImagePost}></img>
            </Link>
          </div>
          <div className={cx("content")}>
            <p className={cx("content-list")}>
              Mình sinh năm 2004, mình hiện là một dev FE, mình đẹp trai, thật
              ra mấy cái này mọi người xem ở trang chủ có rồi mà
            </p>
          </div>
          <div className={cx("footer-blog")}>
            <ul className={cx("footer-info-ul")}>
              <li className={cx("footer-info-li")}>
                <p className={cx("footer-blog-content")}>02/13/2024</p>
              </li>
              <li className={cx("footer-info-li")}>
                <p className={cx("footer-blog-content")}>Khoảng 4 phút đọc</p>
              </li>
              <li className={cx("footer-info-li")}>
                <p className={cx("seen")}>
                  100
                  <FontAwesomeIcon
                    className={cx("icon-seen")}
                    icon={faEye}
                  ></FontAwesomeIcon>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx("blog-content-item")}>
          <div className={cx("blog-content-top")}>
            <Link className={cx("blog-content-top-item")} to="/">
              <h2 className={cx("blog-title")}>
                Xin chào các bạn, mình là Thanh
                {/* {post.title} */}
              </h2>
              <img className={cx("img-post")} src={ImagePost}></img>
            </Link>
          </div>
          <div className={cx("content")}>
            <p className={cx("content-list")}>
              Mình sinh năm 2004, mình hiện là một dev FE, mình đẹp trai, thật
              ra mấy cái này mọi người xem ở trang chủ có rồi mà
            </p>
          </div>
          <div className={cx("footer-blog")}>
            <ul className={cx("footer-info-ul")}>
              <li className={cx("footer-info-li")}>
                <p className={cx("footer-blog-content")}>02/13/2024</p>
              </li>
              <li className={cx("footer-info-li")}>
                <p className={cx("footer-blog-content")}>Khoảng 4 phút đọc</p>
              </li>
              <li className={cx("footer-info-li")}>
                <p className={cx("seen")}>
                  100
                  <FontAwesomeIcon
                    className={cx("icon-seen")}
                    icon={faEye}
                  ></FontAwesomeIcon>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx("blog-content-item")}>
          <div className={cx("blog-content-top")}>
            <Link className={cx("blog-content-top-item")} to="/">
              <h2 className={cx("blog-title")}>
                Xin chào các bạn, mình là Thanh
                {/* {post.title} */}
              </h2>
              <img className={cx("img-post")} src={ImagePost}></img>
            </Link>
          </div>
          <div className={cx("content")}>
            <p className={cx("content-list")}>
              Mình sinh năm 2004, mình hiện là một dev FE, mình đẹp trai, thật
              ra mấy cái này mọi người xem ở trang chủ có rồi mà
            </p>
          </div>
          <div className={cx("footer-blog")}>
            {/* <div className={cx("footer-info")}> */}
            <ul className={cx("footer-info-ul")}>
              <li className={cx("footer-info-li")}>
                <p className={cx("footer-blog-content")}>02/13/2024</p>
              </li>
              <li className={cx("footer-info-li")}>
                <p className={cx("footer-blog-content")}>Khoảng 4 phút đọc</p>
              </li>
              <li className={cx("footer-info-li")}>
                <p className={cx("seen")}>
                  100
                  <FontAwesomeIcon
                    className={cx("icon-seen")}
                    icon={faEye}
                  ></FontAwesomeIcon>
                </p>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
        <div className={cx("blog-content-item")}>
          <div className={cx("blog-content-top")}>
            <Link className={cx("blog-content-top-item")} to="/">
              <h2 className={cx("blog-title")}>
                Xin chào các bạn, mình là Thanh
                {/* {post.title} */}
              </h2>
              <img className={cx("img-post")} src={ImagePost}></img>
            </Link>
          </div>
          <div className={cx("content")}>
            <p className={cx("content-list")}>
              Mình sinh năm 2004, mình hiện là một dev FE, mình đẹp trai, thật
              ra mấy cái này mọi người xem ở trang chủ có rồi mà
            </p>
          </div>
          <div className={cx("footer-blog")}>
            {/* <div className={cx("footer-info")}> */}
            <ul className={cx("footer-info-ul")}>
              <li className={cx("footer-info-li")}>
                <p className={cx("footer-blog-content")}>02/13/2024</p>
              </li>
              <li className={cx("footer-info-li")}>
                <p className={cx("footer-blog-content")}>Khoảng 4 phút đọc</p>
              </li>
              <li className={cx("footer-info-li")}>
                <p className={cx("seen")}>
                  100
                  <FontAwesomeIcon
                    className={cx("icon-seen")}
                    icon={faEye}
                  ></FontAwesomeIcon>
                </p>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
        {/* ))} */}
      </div>
      {/* post */}
      <div className={cx("pagination")}>
        <button>Pagination</button>
      </div>
    </div>
  );
}

export default Blog;
