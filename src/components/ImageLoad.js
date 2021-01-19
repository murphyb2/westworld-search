import React, { useState, useEffect } from "react";

const ImageLoad = React.memo(({ src, placeholder, alt = "" }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);
  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      style={{
        width: loading ? "100%" : "auto",
        filter: loading ? "blur(20px)" : "none",
        transition: loading ? "none" : "filter 0.3s ease-out",
      }}
      alt={alt}
    />
  );
});

export default ImageLoad;
