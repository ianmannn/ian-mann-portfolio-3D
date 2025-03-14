import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { useCursorContext } from "../contexts/CursorContext";
import { MdWavingHand, MdOutlineWavingHand } from "react-icons/md";
import { motion } from "framer-motion";
import { IoHandRightOutline } from "react-icons/io5";

const handWaveAnimation = {
    rotate: [0, 15, 0], // Rotates 15 degrees back and forth
    transition: {
      duration: 1.5, // Time for one cycle
      repeat: Infinity, // Loops forever
      repeatType: "reverse", // Reverses back and forth
      ease: "easeInOut",
    },
};

const flipAnimation = {
    rotateY: [0, 180, 0], // Flips 180 degrees
    transition: {
        duration: 1, // Time for the flip effect
        ease: "easeInOut",
    },
};

const Hero = () => {
    const { updateCursorText } = useCursorContext();

    console.log(motion);

    return (
        <div className="section-hero-full-container w-full max-w-5xl flex flex-col justify-center items-center h-screen mx-auto">
            <div 
                onMouseEnter={() => updateCursorText('CLICK <>')}
                onMouseLeave={() => updateCursorText('SCROLL <>')}
                className="section-hero-container text-center -mt-36 flex flex-col items-center">
                <motion.div 
                
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 0.8, type: 'spring', stiffness: 100}}
                >
                    <img src="/profpic.png" alt="profilepic" className="section-hero-picture rounded-full w-50 h-50 mx-auto mb-8 border-4 border-white rotate-1" /> 
                </motion.div>
                <motion.h3 
                    initial={{y: -20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 1.2, delay: 0.3}}
                    className="section-hero-greeting text-text font-knewave text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex items-center gap-2 justify-center w-full lg:ml-10">
                    Hi, I'm&nbsp; <span className="text-[#3772ff]">IAN</span>
                    <motion.div animate={handWaveAnimation}>
                        <IoHandRightOutline className="inline-block text-[1em] sm:text-[2em] md:text-[2em] lg:text-[1.40em] rotate-20"/>
                    </motion.div>
                </motion.h3>
                <motion.p
                    initial={{y: -30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 1.1, delay: 0.5}}
                    className="section-hero-description text-text text-3xl md:text-5xl lg:text-6xl font-luckiestguy mt-3 text-center"
                >
                    a <span className="text-[#28965a] lg:text-8xl ">full stack</span> developer
                </motion.p>
                <div className="section-hero-buttons flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center">
                    <motion.a 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.6, delay: 1.3}}
                        href="#Contact"
                        onMouseEnter={() => updateCursorText('    ')}
                        onMouseLeave={() => updateCursorText('CLICK ><')}
                        className="font-inter border-1 bg-bg text-text w-40 h-13 rounded-full flex items-center justify-center gap-2 cursor-pointer hover:bg-white transition hover:text-black hover:scale-110">
                            Contact Me
                        <FaArrowRightLong className="flex w-5 h-5"></FaArrowRightLong>
                    </motion.a>
                    <motion.a
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.6, delay: 1.6}}
                        href= "./ianmannresume.pdf"
                        target="_blank"
                        onMouseEnter={() => updateCursorText('    ')}
                        onMouseLeave={() => updateCursorText('CLICK ><')}
                        className="font-inter bg-bg text-white w-40 h-13 rounded-full flex items-center justify-center gap-1 cursor-pointer border-1 hover:bg-white transition hover:text-black hover:scale-110">
                        Resume
                        <FiDownload className="flex w-5 h-5"></FiDownload>
                    </motion.a>
                </div>
                <motion.div 
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{duration: 0.6, delay: 2}}
                    className="flex flex-row gap-4 justify-center mt-8">
                    <button className="bg-primary text-text w-10 h-10 rounded-sm">
                        <img src="/githubicon.png" alt="github" />
                    </button>
                    <button className="bg-black text-text w-10 h-10 rounded-sm">
                        <img src="/linkicon.png" alt="linkedin" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;