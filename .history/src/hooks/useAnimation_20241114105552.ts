import { useState, useEffect } from "react";

export default function useAnimation(trigger: unknown, duration: number) {
  const [isAnimated, setIsAnimated] = useState(fasle);

  useEffect(() => {
    setIsAnimated(true);
    const timeOut = setTimeout(() => {
      setIsAnimated(false);
    }, duration);
    return () => {
      clearTimeout(timeOut);
    };
  }, [trigger, duration]);
}
