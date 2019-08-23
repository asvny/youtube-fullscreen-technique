import { useState, useEffect, useRef } from "react";

export default function useScrollDirection() {
  const scrollPos = useRef(0);
  const [direction, setDirection] = useState({
    isDown: false,
    isUp: false
  });

  useEffect(() => {
    const handleScroll = throttle(() => {
      setDirection({
        isDown: window.pageYOffset > scrollPos.current,
        isUp: window.pageYOffset < scrollPos.current
      });
      scrollPos.current = window.pageYOffset;
    }, 50);

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}

function throttle(fn, limit) {
  let wait = false;

  return function(...args) {
    if (!wait) {
      wait = true;
      setTimeout(() => {
        fn.apply(this, args);
        wait = false;
      }, limit);
    }
  };
}
