import classNames from "classnames/bind";
import styles from "./BlogDetail.module.scss";
import Avatar from "~/assets/images/thanhdz.jpg";
const cx = classNames.bind(styles);

function BlogDetail() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("blog-parent")}>
        <div className={cx("blog")}>
          <div className={cx("blog-title")}>
            <h1 className={cx("title")}>Xin chào các bạn, mình là Thanh</h1>
          </div>
          <hr></hr>
          <div className={cx("content")}>
            <p className={cx("content-item")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              varius placerat est, at porttitor tortor dapibus nec. Nulla vel
              mauris tempor, rhoncus turpis eget, tempor sem. Vivamus eu quam
              velit. Nullam et dictum ipsum. Nulla purus lorem, euismod eget
              sodales quis, vehicula et lectus. Quisque ultricies libero ac
              lorem elementum, a sagittis nisl dapibus. Aliquam consequat leo
              mollis, pellentesque odio dictum, porttitor ipsum. Integer
              elementum sapien sed placerat feugiat. Sed consequat dictum
              tempor. Aliquam ut convallis augue. Pellentesque pharetra
              ullamcorper pharetra. Morbi rhoncus dolor quis gravida vestibulum.
            </p>
            <img className={cx("image-blog")} src={Avatar} alt="Avatar"></img>
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
