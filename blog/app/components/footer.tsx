import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa";
import Link from "next/link";

const icons = [
  {
    href: "mailto:adityaskulkarni23@gmail.com",
    icon: <FaEnvelope style={{ fontSize: "2rem" }} />,
    label: "Email",
  },
  {
    href: "https://github.com/Aditya-k-23",
    icon: <FaGithub style={{ fontSize: "2rem" }} />,
    label: "Github",
  },
  {
    href: "https://www.instagram.com/adis_kaleidoscope/",
    icon: <FaInstagram style={{ fontSize: "2rem" }} />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/aditya-s-kulkarni/",
    icon: <FaLinkedin style={{ fontSize: "2rem" }} />,
    label: "LinkedIn",
  },
  {
    href: "https://drive.google.com/file/d/1Yv9kS-6fqCKvLljJa_9MTBMWihW-SB6a/view?usp=sharing",
    icon: <FaFilePdf style={{ fontSize: "2rem" }} />,
    label: "Resume",
  },
];

export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="flex space-x-2 pt-10 justify-center sm:justify-start pb-4">
        {icons.map(({ href, icon, label }, index) => (
          <Link
            key={`social-link-${index}`}
            href={encodeURI(href)}
            target="_blank"
            rel="noopener"
            aria-label={label}
          >
            <div className="text-gray-400 hover:text-amber-100/80 transition duration-300 cursor-pointer">
              {icon}
            </div>
          </Link>
        ))}
      </div>
      <p className="text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Aditya Kulkarni. All rights reserved.
      </p>
    </footer>
  );
}
