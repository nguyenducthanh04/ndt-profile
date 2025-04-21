import React, { useEffect } from "react";

const FacebookComment = ({ url }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse(); // làm mới plugin khi component mount
    }
  }, [url]);
  const wrapperStyle = {
    marginTop: "40px",
    padding: "16px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "100%",
    overflowX: "auto",
    width: "100%",
    boxSizing: "border-box",
  };
  
  return (
    <div
     style={wrapperStyle}
      className="fb-comments"
      data-href={url}
      data-width="100%"
      data-numposts="5"
    ></div>
  );
};

export default FacebookComment;
