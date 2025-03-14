import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useCursorContext } from "../contexts/CursorContext";
import { ImMenu } from "react-icons/im";
import { TbXboxXFilled } from "react-icons/tb";

const Header = () => {
  const { updateCursorText } = useCursorContext();

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastActivityTimestamp = useRef(Date.now());
  const animationFrameId = useRef(null);

  useEffect(() => {
    const checkInactivity = () => {
      if (
        Date.now() - lastActivityTimestamp.current > 3000 &&
        window.scrollY > 0 &&
        !isHovered
      ) {
        setIsNavVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        animationFrameId.current = requestAnimationFrame(checkInactivity);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      lastActivityTimestamp.current = Date.now();

      if (currentScrollY === 0) {
        setIsNavVisible(true);
        setHasScrolled(false);
        return;
      }

      if (!hasScrolled) setHasScrolled(true);

      if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsNavVisible(true);
        if (animationFrameId.current)
          cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = requestAnimationFrame(checkInactivity);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    animationFrameId.current = requestAnimationFrame(checkInactivity);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [lastScrollY, hasScrolled, isHovered]);

  return (
    <header className="w-full flex justify-between items-center px-6 py-3 max-w-screen-2xl mx-auto relative">
      <div>
        <h1 className="font-inter text-2xl text-text font-bold">ian-mann.com</h1>
      </div>

      <div className="hidden md:block">
        <ScrollLink to="Contact" smooth={true} duration={500}>
          <button className="font-inter bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer">
            Contact Me
          </button>
        </ScrollLink>
      </div>

      {/* Mobile Hamburger Menu Button (Now Moves with Scroll) */}
      <div className="md:hidden fixed top-11 right-6 z-50">
        <button
          className={`text-text transition-all duration-300 ${
            isNavVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <TbXboxXFilled size={28} /> : <ImMenu size={28} />}
        </button>

        {/* Mobile Dropdown Navigation (Now Moves with Button) */}
        <nav
          className={`absolute right-0 mt-2 w-48 bg-primary text-white rounded-lg shadow-lg flex flex-col space-y-4 p-4 z-50 transition-all duration-300 ${
            isNavVisible && isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <ScrollLink
            to="AboutMe"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="Skills"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="Portfolio"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </ScrollLink>
          <ScrollLink
            to="Chatbot"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Chatbot
          </ScrollLink>
          <ScrollLink
            to="Contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </ScrollLink>
        </nav>
      </div>

      {/* Desktop Floating Navigation Bar */}
      <nav
        onMouseEnter={() => {
          setIsHovered(true);
          updateCursorText("    ");
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          updateCursorText("SCROLL<>");
          lastActivityTimestamp.current = Date.now();
        }}
        className={`hidden md:flex fixed left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
          isNavVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        } bg-primary text-white rounded-full px-6 py-3 shadow-lg z-40`}
      >
        <div className="flex space-x-6 font-inter">
          <ScrollLink to="AboutMe" smooth={true} duration={500} className="hover:text-gray-300 transition cursor-pointer">
            About Me
          </ScrollLink>
          <ScrollLink to="Skills" smooth={true} duration={500} className="hover:text-gray-300 transition cursor-pointer">
            Skills
          </ScrollLink>
          <ScrollLink to="Portfolio" smooth={true} duration={500} className="hover:text-gray-300 transition cursor-pointer">
            Portfolio
          </ScrollLink>
          <ScrollLink to="Chatbot" smooth={true} duration={500} className="hover:text-gray-300 transition cursor-pointer">
            Chatbot
          </ScrollLink>
          <ScrollLink to="Contact" smooth={true} duration={500} className="hover:text-gray-300 transition cursor-pointer">
            Contact
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
