"use client";
import React, { useState, useEffect } from "react";

const Promo = () => {
  const twelveHours = 12 * 60 * 60; 
  const [timeLeft, setTimeLeft] = useState(twelveHours);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="bg-[#8D402C] text-[#F9F5F3] text-center py-1 px-2 font-bold fixed top-0 left-0 w-full z-50 text-[12px] sm:text-base ">
      <span className=" sm:inline">
        10% de desconto em todos produtos!
      </span>{" "}
      <span className=" sm:inline">
        | Acaba em: {formatTime(timeLeft)}
      </span>
    </div>
  );
};

export default Promo;
