import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className=" flex gap-12 mb-10 mt-4 ml-1 w-[500px] justify-start">
      <Link
        href={"https://github.com/Abdullahi-a-hussein"}
        target="_blank"
        className="flex justify-center items-center bg-blue-600 w-8 h-8 rounded-full text-white"
      >
        <FaGithub />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/abdullahi-a-hussein/"}
        target="_blank"
        className="flex justify-center items-center bg-blue-600 w-8 h-8 rounded-full text-white"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={"https://x.com/abdulldeck"}
        target="_blank"
        className="flex justify-center items-center bg-blue-600 w-8 h-8 rounded-full text-white"
      >
        <FaXTwitter />
      </Link>
    </div>
  );
}
