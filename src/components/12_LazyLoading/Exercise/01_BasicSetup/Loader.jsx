import React, { useEffect, useState } from "react";

const Loader = () => {
  const messages = ["Wait", "Working", "done"];
  const [currentMsg, setCurrentMsg] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setCurrentMsg(messages[index]);
      index++;

      if (index === messages.length) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>{currentMsg}</h1>
    </div>
  );
};

export default Loader;
