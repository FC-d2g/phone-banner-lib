import React, { useEffect, useState } from "react";

const useIsMobile = () => {
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
  };

  const [isMobile, setIsMobile] = useState(isMobileDevice());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;