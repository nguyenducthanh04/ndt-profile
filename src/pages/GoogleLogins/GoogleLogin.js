import React, { useEffect, useState } from "react";

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
    <div>
      <h1>Đăng nhập</h1>
      <button onClick={handleLogin}>Đăng nhập với Google</button>
    </div>
  );
}

export default LoginPage;
