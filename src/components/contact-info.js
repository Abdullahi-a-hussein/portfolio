"use client";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function Contact() {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);

  const copyEmail = async () => {
    const emailText = process.env.NEXT_PUBLIC_EMAIL;
    try {
      await navigator.clipboard.writeText(emailText);
      setEmail(true);
      setPhone(false);
    } catch (error) {
      alert("Text not copied");
    }
  };
  const copyPhone = async () => {
    const phoneText = process.env.NEXT_PUBLIC_PHONE;
    try {
      await navigator.clipboard.writeText(phoneText);
      setPhone(true);
      setEmail(false);
    } catch (error) {
      alert("Phone number not copied");
    }
  };
  return (
    <div className="flex flex-row justify-between w-[400px]">
      <div className="flex gap-3">
        <p className="text-xl font-semibold tracking-wider p-1">Email</p>
        {email ? (
          <TiTick className="text-blue-500 mt-2" />
        ) : (
          <FaCopy onClick={copyEmail} className="mt-2" />
        )}
      </div>
      <div className="flex gap-3">
        <p className="text-xl font-semibold tracking-wider p-1">Phone Number</p>
        {phone ? (
          <TiTick className="text-blue-500 mt-2" />
        ) : (
          <FaCopy onClick={copyPhone} className="mt-2" />
        )}
      </div>
    </div>
  );
}
