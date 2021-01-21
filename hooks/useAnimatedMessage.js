import { useEffect, useState } from "react";

const useAnimatedMessage = (message) => {
  const [animatedMessage, setAnimatedMessage] = useState("");

  useEffect(() => {
    [...message].forEach((letter, index) => {
      setTimeout(() => {
        setAnimatedMessage(message.slice(0, index));
      }, 50 * index);
    });
  }, []);

  return animatedMessage;
};

export default useAnimatedMessage;
