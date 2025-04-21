import React, { useEffect } from "react";

const FacebookComment = ({ url }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse(); // làm mới plugin khi component mount
    }
  }, [url]);

  return (
    <div
      className="fb-comments"
      data-href={url}
      data-width="100%"
      data-numposts="5"
    ></div>
  );
};

export default FacebookComment;
