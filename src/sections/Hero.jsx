import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { useCursorContext } from "../contexts/CursorContext";
import { MdWavingHand } from "react-icons/md";
import { motion } from "framer-motion";

const handWaveAnimation = {
    rotate: [0, 15, 0], // Rotates 15 degrees back and forth
    transition: {
      duration: 1.5, // Time for one cycle
      repeat: Infinity, // Loops forever
      repeatType: "reverse", // Reverses back and forth
      ease: "easeInOut",
    },
  };


const Hero = () => {
    const { updateCursorText } = useCursorContext();
    
    console.log(motion);

    return (
        <div className="section-hero-full-container w-full max-w-xl flex flex-col justify-center items-center h-screen mx-auto">
            <div 
                onMouseEnter={() => updateCursorText('CLICK <>')}
                onMouseLeave={() => updateCursorText('SCROLL <>')}
                className="section-hero-container text-center -mt-36 ">
                <img src="/profpic.png" alt="profilepic" className="section-hero-picture rounded-full w-50 h-50 mx-auto mb-8 border-4 border-white rotate-1" /> 
                <h3 className="section-hero-greeting text-text font-inter font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex items-center gap-2 justify-center w-fit">
                    Hi, I'm Ian 
                    <motion.div animate={handWaveAnimation}>
                        <MdWavingHand className="inline-block text-[1em] sm:text-[1em] md:text-[1em] lg:text-[1em] -rotate-20"/>
                    </motion.div>
                </h3>
                <p className="section-hero-description text-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-kaisei mt-3">a full stack developer</p>
                <div className="section-hero-buttons flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center">
                    <button 
                        onMouseEnter={() => updateCursorText('    ')}
                        onMouseLeave={() => updateCursorText('CLICK ><')}
                        className="font-inter border-1 bg-bg text-text w-40 h-13 rounded-full flex items-center justify-center gap-2 cursor-pointer hover:bg-white transition hover:text-black hover:scale-110">
                            Contact Me
                        <FaArrowRightLong className="flex w-5 h-5"></FaArrowRightLong>
                    </button>
                    <button 
                        onMouseEnter={() => updateCursorText('    ')}
                        onMouseLeave={() => updateCursorText('CLICK ><')}
                        className="font-inter bg-bg text-white w-40 h-13 rounded-full flex items-center justify-center gap-1 cursor-pointer border-1 hover:bg-white transition hover:text-black hover:scale-110">
                        Resume
                        <FiDownload className="flex w-5 h-5"></FiDownload>
                    </button>
                </div>
                <div className="flex flex-row gap-4 justify-center mt-8">
                    <button className="bg-primary text-text w-10 h-10 rounded-sm">
                        <img src="/githubicon.png" alt="github" />
                    </button>
                    <button className="bg-black text-text w-10 h-10 rounded-sm">
                        <img src="/linkicon.png" alt="linkedin" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
