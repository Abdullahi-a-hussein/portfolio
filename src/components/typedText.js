"use client";
import { useEffect, useState } from "react";

export default function TypingAnimation({ text, styling }) {
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 10;

  useEffect(() => {
    let index = 0;
    let typingTimeOut;
    const typeText = () => {
      if (index < text.length) {
        setTypedText((prev) => prev + text.charAt(index));
        index++;
        typingTimeOut = setTimeout(typeText, typingSpeed);
      }
    };
    typeText();
    return () => clearTimeout(typingTimeOut);
  }, []);
  return (
    <div className="flex">
      <h2 className={styling}>{typedText}</h2>
      <div className=" hidden lg:inline-block md:inline-block h-[25px] w-[3px] bg-gray-400 ml-[2px] blink rounded"></div>
    </div>
  );
}
