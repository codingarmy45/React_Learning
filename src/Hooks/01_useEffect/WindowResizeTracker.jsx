import React, { useState, useEffect } from "react";

const WindowResizeTracker = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  return (
    <div style={{ padding: "20px", fontSize: "18px" }}>
      <h2>Window Resize Tracker</h2>
      <p><strong>Width:</strong> {windowSize.width}px</p>
      <p><strong>Height:</strong> {windowSize.height}px</p>
    </div>
  );
};

export default WindowResizeTracker;
