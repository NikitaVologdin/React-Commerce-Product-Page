import { useState, useEffect } from "react";

export default function useAnimation(event, delay: number) {
  const [isAnimated, setIsAnimated] = useState(fasle);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsAnimated(true);
    }, delay);
    return () => {
      clearTimeout(timeOut);
    };
  }, [event]);
}
