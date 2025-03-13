import { useRef } from "react";
import gsap from "gsap";

const MagneticButton = ({ children }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    gsap.to(buttonRef.current, {
      x: x * 0.1,
      y: y * 0.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const resetPosition = () => {
    gsap.to(buttonRef.current, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div
      ref={buttonRef}
      className="p-4 bg-gray-800 text-white rounded-lg inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
