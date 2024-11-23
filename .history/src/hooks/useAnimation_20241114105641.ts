import { useState, useEffect } from "react";

export default function useAnimation(trigger: unknown, duration: number) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeOut = setTimeout(() => {
      setAnimate(false);
    }, duration);
    return () => {
      clearTimeout(timeOut);
    };
  }, [trigger, duration]);

  return animate;
}
