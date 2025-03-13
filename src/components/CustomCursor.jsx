import React, { useState, useEffect, useRef } from "react";
import { useCursorContext } from "../contexts/CursorContext";

const CustomCursor = () => {
  const { cursorText } = useCursorContext();
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedText, setAnimatedText] = useState(cursorText);
  const [fade, setFade] = useState(false);
  const [isTouchscreen, setIsTouchscreen] = useState(false);

  useEffect(() => {
    // Check if the device is a touchscreen
    const checkTouchscreen = () => {
      setIsTouchscreen(window.matchMedia("(hover: none)").matches);
    };

    checkTouchscreen();
    window.addEventListener("resize", checkTouchscreen); // Update on resize

    return () => {
      window.removeEventListener("resize", checkTouchscreen);
    };
  }, []);

  useEffect(() => {
    if (isTouchscreen) return; // Don't run if it's a touchscreen device

    const moveCursor = (e) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          cursorRef.current.style.left = `${e.clientX}px`;
          cursorRef.current.style.top = `${e.clientY}px`;
          cursorRef.current.style.transform = "translate(-50%, -50%)";
        });
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isTouchscreen]);

  // Handle cursor text transition
  useEffect(() => {
    if (isTouchscreen) return;

    setFade(true);
    setTimeout(() => {
      setAnimatedText(cursorText);
      setFade(false);
    }, 200);
  }, [cursorText, isTouchscreen]);

  // Hide the cursor on touchscreen devices
  if (isTouchscreen || !isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 flex items-center justify-center"
      style={{
        position: "fixed",
        width: "100px",
        height: "100px",
      }}
    >
      <div className={`cursor-text-container transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <path id="circlePath" d="M50,10 a40,40 0 1,1 -0.1,0" fill="none" />
          </defs>

          <text font="inter" fill="white" fontSize="13" letterSpacing="6">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              {animatedText || "SCROLL x"}
            </textPath>
          </text>

          <text font="inter" fill="white" fontSize="13" letterSpacing="6">
            <textPath xlinkHref="#circlePath" startOffset="50%">
              {animatedText || "SCROLL x"}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;