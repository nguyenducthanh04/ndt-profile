// services/auth.js

const isLoggedIn = () => {
  // Kiểm tra xem có token đã lưu trong localStorage hay không
  const token = localStorage.getItem("token");

  // Nếu có token, người dùng đã đăng nhập
  // Bạn có thể thêm các logic kiểm tra token hợp lệ ở đây
  return token ? true : false;
};

export default isLoggedIn;
