import React, { Suspense } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import codeIcon from "../assets/code-icon-dark.png";
import eduIcon from "../assets/edu-icon-dark.png";
import projIcon from "../assets/project-icon-dark.png";
import vscodeIcon from "../assets/vscode.png";
import figmaIcon from "../assets/figma.png";
import gitIcon  from "../assets/git.png";
import postmanIcon from "../assets/postman.png";
import dockerIcon from "../assets/docker.png";
import openAIIcon from "../assets/openailogo.png";
import { useCursorContext } from '../contexts/CursorContext';
import { Canvas } from  "@react-three/fiber"
import { Center } from "@react-three/drei";
import { CanvasLoader } from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import { OrbitControls } from '@react-three/drei';

const AboutMe = () => {

const { updateCursorText } = useCursorContext();

    const infoList = [
        {
            icon: codeIcon,
            title: "Languages",
            description: "HTML, CSS, JavaScript, React.js, Next.js",
            delaytime: 1.2
        },
        {
            icon: eduIcon,
            title: "Education",
            description: "Bachelors Degree",
            delaytime: 1.5
        },
        {
            icon: projIcon,
            title: "Projects",
            description: "Experience in building scalable applications",
            delaytime: 1.8
        }
    ];

    const toolsList = [
        {
            title: "VS Code",
            icon: vscodeIcon,
            delay: 2.3,
        },
        {
            title:"Figma",
            icon: figmaIcon,
            delay: 2.5,
        },
        {
            title: "Git",
            icon: gitIcon,
            delay: 2.7,
        },
        {
            title: "OpenAi",
            icon: openAIIcon,
            delay: 2.9,
        },
        {
            title: "Postman",
            icon: postmanIcon,
            delay: 3.1,
        },
        {
            title: "Docker",
            icon: dockerIcon,
            delay: 3.3,
        }
    ]

    return (
        <section id="AboutMe" className="section-aboutme-fullcontainer w-full px-[10%] py-10 scroll-mt-20">
             <div className="relative w-fit mx-auto overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative text-center text-text text-6xl font-specgothic font-bold"
                >
                    ABOUT ME
                </motion.h2>
            </div>
            
            <div className="section-aboutme-container flex w-full flex-col lg:flex-row items-center gap-20 my-20 ">  
            <motion.div
                className="section-aboutmeleft bg-primary w-81 h-130 rounded-3xl sm:w-96 sm:h-150"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} />

                    <Suspense fallback={<CanvasLoader />}>
                    <Center>
                        <DemoComputer />
                    </Center>
                    </Suspense>

                    <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={true}
                    />
                </Canvas>
            </motion.div>
                <div className="section-aboutme-right flex-1"> 
                    <motion.p 
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        onMouseEnter={() => updateCursorText('  ')}
                        onMouseLeave={() => updateCursorText('SCROLL <>')}
                        className="section-aboutme-right-top mb-10 max-w-2xl text-text2 text-lg font-inter font-normal font-weight:400">
                        I am a <span className="text-text font-bold">Full Stack Developer</span> with a focus on <span className="text-text font-bold">Frontend Development</span>. Throughout my time as a software engineer, I have built multiple <span className="text-text font-bold">scalable</span> applications while working closely with a <span className="text-text font-bold">cross-functional</span> team. With a background in <span className="text-text font-bold">Marketing</span>, I bring a unique perspective to design, making sure the user experience is not just functional but <span className="text-text font-bold">intuitive</span> and <span className="text-text font-bold">engaging</span>.
                    </motion.p>
                    <ul className="section-aboutme-right-middle grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({ icon, title, description, delaytime }, index) => (
                            <motion.li 
                                key={`info-${index}`} 
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1}}
                                transition={{ delay: delaytime, duration: 1,}}
                                viewport={{ once: true }}
                                onMouseEnter={() => updateCursorText('    ')}
                                onMouseLeave={() => updateCursorText('SCROLL <>')}
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover hover:-translate-y-2 duration-500 hover:shadow-white">
                                <img src={icon} alt={title} className='w-7 mt-3'/>
                                <h3 className='my-4 font-semibold text-text'>{title}</h3>
                                <p className='text-text2 text-sm '>{description}</p>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.h4 
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ delay: 2, duration: 1,}}
                        viewport={{ once: true }}
                        className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use:</motion.h4>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {toolsList.map(({ icon, delay }, index) => (
                            <motion.li 
                                key={`tool-${index}`} 
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1}}
                                transition={{ delay: delay, duration: 1,}}
                                viewport={{ once: true }}
                                onMouseEnter={() => updateCursorText('  ')}
                                onMouseLeave={() => updateCursorText('SCROLL <>')}
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={icon} alt='Tool' className='w-5 sm:w-7'/>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;