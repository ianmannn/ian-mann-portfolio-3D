import React, { useEffect, useState, useRef } from 'react';
import NextLevelLogo from '../assets/nextlevellogo.png';
import MG3Logo from '../assets/mg3medialogo.png';
import EGALogo from '../assets/egahomeslogo.jpg';
import ExperienceRuler from '../assets/experienceruler.png';
import ComingSoonLogo from '../assets/comingsoonlogo2.jpg';
import LunchBoxLogo from '../assets/lunchboxlogomedium.jpg';
import SurpriseLogo from '../assets/surpriselogoblue.png';
import { useCursorContext } from '../contexts/CursorContext';
import LetterGlitch from '../components/LetterGlitch.jsx';
import CursorGameLogo from '/cursorgamelogo.jpg';

const experienceList = [
  {
    id: 1,
    title: 'NextLevel(Open Source)',
    position: 'Sofware Engineer',
    date: 'June 2024 - January 2025',
    logo: NextLevelLogo,
    description: 'A metric tracking dashboard for Next.js users.',
    link: 'https://www.nextlevel-dash.com/',
  },
  {
    id: 2,
    title: 'EGA Homes',
    position: 'Markting Intern',
    date: 'June 2024 - January 2025',
    logo: EGALogo,
    description: 'Real Estate Veterans Association',
    link: 'https://egahomes.com/',
  },
  {
    id: 3,
    title: 'MG3 Media',
    position: 'Marketing Assistant',
    date: 'June 2024 - January 2025',
    logo: MG3Logo,
    description: 'Real Estate Marketing Company',
    link: 'https://www.mg3-media.com/',
  },
];

const projectList = [
  {
    id: 1,
    title: 'Coming Soon',
    logo: ComingSoonLogo,
    description: 'AI Powered Workout App',
    link: 'NA',
  },
  {
    id: 2,
    title: 'VerifyAI',
    logo: '/verifyailogo.png',
    description: 'AI Compliance Verification',
    link: 'https://verify-ai-cyan.vercel.app/',
  },
  {
    id: 3,
    title: 'LunchBox',
    logo: LunchBoxLogo,
    description: 'Meal Prep Planner and Tracker',
    link: 'https://github.com/GoblinShark48/LunchBox',
  },
  {
    id: 4,
    title: 'Cursor Craze',
    logo: CursorGameLogo,
    description: 'A Cursor Game',
    link: 'https://cursorcraze.vercel.app/',
  },
];

const Portfolio = () => {
  const experienceContainerRef = useRef(null);
  // const [rulerHeight, setRulerHeight] = useState(0);
  const [projectsHeight, setProjectsHeight] = useState(0);

  const { updateCursorText } = useCursorContext();

  useEffect(() => {
    if (experienceContainerRef.current) {
      // setRulerHeight(experienceContainerRef.current.scrollHeight * 0.9);
      setProjectsHeight(experienceContainerRef.current.height);
    }
  }, []);

  return (
    <section
      id="Portfolio"
      className="section-portfolio-container-full py-10 relative rounded-3xl min-h-screen"
    >
      <div className="absolute inset-0 z-0">
        {/* <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        /> */}
      </div>
      <h2 className="section-portfolio-h2 text-center text-text text-5xl lg:text-6xl font-shrikhand relative z-10">
        PORTFOLIO
      </h2>
      <div className="section-portfolio-container flex flex-col lg:flex-row w-full p-6 gap-10 relative z-10">
        <div className="section-portfolio-left-container relative flex justify-center w-full lg:w-1/2">
          {/* <img
            src={ExperienceRuler}
            className="section-portfolio-left-experience-ruler absolute left-0 transform -translate-x-1/2 max-sm:mt-16 md:mt-18 lg:mt-18"
            style={{ height: rulerHeight ? `${rulerHeight}px` : 'auto' }}
            alt="Experience Ruler"
          /> */}
          <div className="section-portfolio-left-container-full w-10/12">
            <div className="section-portfolio-left-experience-title flex justify-center text-text text-4xl mb-4 font-kanit">
              EXPERIENCE
            </div>
            <div ref={experienceContainerRef}>
              {experienceList.map((experience) => (
                <a
                  key={experience.id}
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => updateCursorText('CLICK ><')}
                  onMouseLeave={() => updateCursorText('SCROLL <>')}
                  className="bg-gradient-to-b from-white/10 to-white/7 border-[2px] border-gray6 rounded-md p-5 mt-5 flex flex-col items-start justify-start relative cursor-pointer hover:scale-105 hover:border-green-300 transition"
                  style={{ transformOrigin: 'top' }}
                >
                  <img
                    src={experience.logo}
                    className="h-15 w-15 border-[0.5px] border-white rounded-lg"
                    alt={experience.title}
                  />
                  <h3 className="mt-3 text-text text-xl text-left font-semibold">
                    {experience.title}
                  </h3>
                  <h4 className="text-text2 text-md text-left font-light">
                    {experience.position}
                  </h4>
                  <p className="text-text2 text-left">
                    {experience.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-portfolio-right-container-full w-full lg:w-1/2 flex flex-col justify-center">
          <div className="section-portfolio-right-projects-title flex justify-center items-center text-text text-4xl mb-4 font-kanit">
            PROJECTS
          </div>
          <div
            className="section-portfolio-right-container grid grid-cols-2 justify-center gap-4 items-stretch w-full"
            style={{
              height: projectsHeight ? `${projectsHeight * 0.5}px` : 'auto',
            }}
          >
            {projectList.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => updateCursorText('CLICK ><')}
                onMouseLeave={() => updateCursorText('SCROLL <>')}
                className="flex flex-col p-6 border-[2px] border-gray6 bg-gradient-to-b from-white/10 to-white/7  rounded-sm justify-center cursor-pointer  hover:border-blue-400 hover:scale-102 hover:shadow-none transition-transform w-full"
                style={{ transformOrigin: 'top' }}
              >
                <img
                  src={project.logo}
                  className="h-30 w-30 border-[0.5px] border-black rounded-lg"
                />
                <h3 className="text-text mt-3 text-xl font-poppins font-light max-sm:text-sm">
                  {project.title}
                </h3>
                <h4 className="text-text2 mt-1 text-sm font-inter">
                  {project.description}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
