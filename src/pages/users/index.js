import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
function UserComponent() {
  const location = useLocation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Lấy thông tin người dùng từ query parameters
    const searchParams = new URLSearchParams(location.search);
    const userDataFromParams = {
      id: searchParams.get("id"),
      email: searchParams.get("email"),
      name: searchParams.get("name"),

      // Các thông tin khác nếu có
    };

    // Cập nhật state với thông tin người dùng
    setUserData(userDataFromParams);
  }, [location.search]);
  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/logout");
      console.log(response.data); // Logged out successfully
      // Chuyển hướng đến trang đăng nhập hoặc trang chính của ứng dụng sau khi đăng xuất thành công
      window.location.href = "http://127.0.0.1:3001/auth/login"; // Đổi đường dẫn tùy thuộc vào đường dẫn của trang đăng nhập của bạn
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <div>
      {userData ? (
        <div>
          <h2>User Information:</h2>
          <p>ID: {userData.id}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Các thông tin khác */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default UserComponent;
