import React, { useEffect, useState, useRef } from "react";
import { FaReact, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaSass, FaAws, FaNodeJs, FaWordpress } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { SiExpress, SiRedux, SiVite, SiMongodb, SiOpenai, SiJira, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandOauth } from "react-icons/tb";
import { useCursorContext } from '../contexts/CursorContext'

// Define skills
const skills = [
    { id: 1, title: "JavaScript", icon: IoLogoJavascript, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { id: 2, title: "TypeScript", icon: SiTypescript, link: "https://www.typescriptlang.org/" },
    { id: 3, title: "React", icon: FaReact, link: "https://react.dev/" },
    { id: 4, title: "Node.js", icon: FaNodeJs, link: "https://nodejs.org/en/" },
    { id: 5, title: "Next.js", icon: RiNextjsFill, link: "https://nextjs.org/" },
    { id: 6, title: "Express.js", icon: SiExpress, link: "https://expressjs.com/" },
    { id: 7, title: "Git", icon: FaGitAlt, link: "https://git-scm.com/" },
    { id: 8, title: "PostgreSQL", icon: BiLogoPostgresql, link: "https://www.postgresql.org/" },
    { id: 9, title: "MongoDB", icon: SiMongodb, link: "https://www.mongodb.com/" },
    { id: 10, title: "Docker", icon: FaDocker, link: "https://www.docker.com/" },
    { id: 11, title: "AWS", icon: FaAws, link: "https://aws.amazon.com/" },
    { id: 12, title: "OAuth", icon: TbBrandOauth, link: "https://oauth.net/" },
    { id: 13, title: "OpenAI", icon: SiOpenai, link: "https://openai.com/" },
    { id: 14, title: "Vercel", icon: IoLogoVercel, link: "https://vercel.com/" },
    { id: 15, title: "Supabase", icon: RiSupabaseFill, link: "https://supabase.com/" },
    { id: 16, title: "Tailwind CSS", icon: RiTailwindCssFill, link: "https://tailwindcss.com/" },
    { id: 17, title: "CSS3", icon: FaCss3Alt, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { id: 18, title: "SASS", icon: FaSass, link: "https://sass-lang.com/" },
    { id: 19, title: "HTML5", icon: FaHtml5, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { id: 20, title: "Redux", icon: SiRedux, link: "https://redux.js.org/" },
    { id: 21, title: "Vite", icon: SiVite, link: "https://vitejs.dev/" },
    { id: 22, title: "Jira", icon: SiJira, link: "https://www.atlassian.com/software/jira" },
    { id: 23, title: "WordPress", icon: FaWordpress, link: "https://wordpress.org/" },
];

// Track hovered skill

// Duplicate skills for infinite scrolling effect
const duplicatedSkills = [...skills, ...skills];

const Skills = () => {
    const { updateCursorText } = useCursorContext();

    const [hoveredSkill, setHoveredSkill] = useState(null);

    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            const singleSetWidth = carousel.scrollWidth / 2; // Adjust for smooth looping

            carousel.style.animation = "none"; // Reset animation
            void carousel.offsetWidth; // Trigger reflow
            carousel.style.animation = `carousel-scroll 50s linear infinite`;

            if (!document.getElementById("carousel-keyframes")) {
                const styleSheet = document.createElement("style");
                styleSheet.id = "carousel-keyframes";
                styleSheet.textContent = `
                    @keyframes carousel-scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-${singleSetWidth}px); }
                    }
                `;
                document.head.appendChild(styleSheet);
            }
        }
    }, []);

    return (
        <section id="Skills" className="section-skills-containter-full w-full min-h-screen scroll-mt-30 py-10 relative ">
            {/* <h4 className="text-center mb-2 text-text text-lg font-inter">What I Work With</h4> */}
            <h2 className="text-center text-text text-7xl font-mogra">My Skills</h2>
            <div className="section-skills-container rounded-3xl mt-10">
                <div className="section-skills-carousel relative w-full overflow-hidden rounded-xl  bg-primary">
                    <div ref={carouselRef} className="flex whitespace-nowrap text-9xl text-gray-500">
                        {duplicatedSkills.map((skill, idx) => (
                            <a
                                key={idx}
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-32 flex-shrink-0 p-3 inline-block"
                                onMouseEnter={() => {
                                    updateCursorText('CLICK ><')
                                    setHoveredSkill(skill.title)
                                    }
                                }
                                onMouseLeave={() => {
                                    updateCursorText('SCROLL <>')
                                    setHoveredSkill(null)
                                    }
                                }
                    
                            >
                                <div className="p-1 rounded-sm flex items-center justify-center">
                                    {React.createElement(skill.icon, {
                                        className: `transition-transform duration-300 ${
                                            hoveredSkill === skill.title ? "text-white scale-110" : "text-gray-500 scale-100"
                                        }`,
                                    })}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="section-skills-legend flex flex-wrap gap-4 max-w-4xl w-full mx-auto bg-bg p-4 rounded-3xl mt-10">
                    {skills.map((skill) => (
                        <a
                            
                            key={skill.id}
                            href={skill.link}
                            target="_blank"
                            onMouseEnter={() => {
                                updateCursorText('CLICK ><')
                                setHoveredSkill(skill.title)
                                }
                            }
                            onMouseLeave={() => {
                                updateCursorText('SCROLL <>')
                                setHoveredSkill(null)
                                }
                            }

                            onMouseDown={(e) => e.preventDefault(console.log("Clicked"))}
                            className={`cursor-pointer text-sm font-medium px-6 py-2 rounded-md shadow-md transition-all duration-300 ${
                                hoveredSkill === skill.title ? "bg-gray-300 text-gray-800 scale-120 text-gret-950 z-0" : "bg-primary text-white"
                            }`}
                        >
                            {skill.title}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

