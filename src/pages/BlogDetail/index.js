import classNames from "classnames/bind";
import styles from "./BlogDetail.module.scss";
import Avatar from "~/assets/images/thanhdz.jpg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const cx = classNames.bind(styles);

function BlogDetail() {
  const { id } = useParams(); // Lấy id từ URL
  console.log("ok", id);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Hàm này sẽ được gọi khi component được render lần đầu tiên
    // Bạn có thể thay đổi URL của API theo địa chỉ thực tế của bạn
    const apiUrl = `http://127.0.0.1:3000/posts/api/posts/${id}`;

    // Sử dụng Axios để gọi API
    axios
      .get(apiUrl)
      .then((response) => {
        // Lấy dữ liệu từ phản hồi và cập nhật state
        setPosts(response.data);
        console.log("posttt2", response.data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error fetching data:", error);
      });
  }, [id]); // [] giúp useEffect chỉ chạy một lần khi component được render
  console.log("pót", posts);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("blog-parent")}>
        <div className={cx("blog")}>
          <div className={cx("blog-title")}>
            <h1 className={cx("title")}>{posts.title}</h1>
          </div>
          <hr></hr>
          <div className={cx("content")}>
            <p className={cx("content-item")}>{posts.content}</p>
            <img
              className={cx("image-blog")}
              src={`http://127.0.0.1:3000/${posts.filePath}`}
              alt="Avatar"
            ></img>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className={cx("comment")}>
        <h3 className={cx("comment-title")}>Bình luận</h3>
        <input
          className={cx("comment-import")}
          type="text"
          placeholder="Nhập nội dung bình luận..."
        ></input>
        <button className={cx("btn")}>Đăng</button>
      </div>
      <hr></hr>
      <div className={cx("display-comment")}>
        <div className={cx("users-comment-parent")}>
          <div className={cx("user-comment")}>
            <div className={cx("avt-user")}>
              <img className={cx("avatar")} src={Avatar} alt="Avatar"></img>
            </div>
            <div className={cx("profile-user")}>
              <h5 className={cx("name-user")}>Nguyen Duc Thanh</h5>
              <p className={cx("date")}>12 ngày trước</p>
            </div>
          </div>
          <div className={cx("content-comment")}>
            <a href="" className={cx("comment-detail")}>
              <em className={cx("content-cmt")}>Hehe, mình cảm ơn !</em>
            </a>
          </div>
          <hr className={cx("hr-comment")}></hr>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
