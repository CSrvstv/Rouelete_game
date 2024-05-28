import React, { useState, useEffect, useCallback } from "react";
export default function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const set = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(set);
  }, []);
  return time;
}
