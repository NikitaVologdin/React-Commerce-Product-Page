import { useState, useEffect } from "react";

export default function useAnimation(event, delay: number) {
  const [isAnimated, setIsAnimated] = useState(fasle);

  useEffect(() => {
    setIsAnimated(true);
    const timeOut = setTimeout(() => {
      setIsAnimated(false);
    }, delay);
    return () => {
      clearTimeout(timeOut);
    };
  }, [event]);
}
