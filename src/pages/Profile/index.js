import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import Avatar from "~/assets/images/thanhdz.jpg";
const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("profile-title")}>
        <h2 className={cx("title")}>Trang profile của: Nguyen Duc Thanh</h2>
      </div>
      <div className={cx("profile-account")}>
        <div className={cx("avt")}>
          <img className={cx("avt-acc")} src={Avatar} alt="Avatar"></img>
        </div>
        <div className={cx("email")}>
          <h5 className={cx("name-acc")}>Nguyen Duc Thanh</h5>
          <p className={cx("email-acc")}>dducthanh04@gmail.com</p>
        </div>
      </div>
      <div className={cx("btn-setting")}>
        <button className={cx("btn-edit")}>Sửa thông tin</button>
        <button className={cx("btn")}>Đăng xuất</button>
      </div>
      <hr className={cx("hr")}></hr>
      <div className={cx("comment")}>
        <h4 className={cx("comment-title")}>Bình lụân đã viết</h4>
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
              <em className={cx("content")}>Hehe, mình cảm ơn !</em>
            </a>
          </div>
          <hr className={cx("hr-comment")}></hr>
        </div>
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
              <em className={cx("content")}>Tớ cảm ơn nhé !</em>
            </a>
          </div>
          <hr className={cx("hr-comment")}></hr>
        </div>
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
              <em className={cx("content")}>Tớ cảm ơn !</em>
            </a>
          </div>
          <hr className={cx("hr-comment")}></hr>
        </div>
      </div>
    </div>
  );
}

export default Profile;
