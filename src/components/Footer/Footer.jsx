import React from "react";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/?locale=hu_HU",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-transparent py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-700">
          <nav className="mb-8 md:mb-0 w-full md:w-auto">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white text-center md:text-left">
              {LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.targetId}`}
                    className=" font-light tracking-widest hover:text-yellow-400 transition"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex space-x-4 text-white justify-center md:justify-start w-full md:w-auto">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Restaura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
