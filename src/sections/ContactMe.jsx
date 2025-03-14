import { LuHandshake } from "react-icons/lu";
import { useCursorContext } from "../contexts/CursorContext"

const ContactMe = () => {

    const { updateCursorText } = useCursorContext();
    return (
        <section id="Contact" className="section-contact-container-full min-h-screen w-full flex flex-cols-1 justify-center items-center">
            <div className="section-contact-container w-full max-w-5xl flex justify-center items-center text-center px-4">
                <div className="section-contact-question text-7xl text-white font-bangers font-thin flex flex-col items-center gap-4 md:text-[130px]">
                    INTERESTED IN WORKING TOGETHER?
                    <LuHandshake className="text-9xl" />
                    <div className="text-3xl font-poppins2 font-thin">
                    Contact Me:
                    </div>
                    <a 
                        onMouseEnter={() => updateCursorText('CLICK ><')}
                        onMouseLeave={() => updateCursorText('SCROLL <>')}
                        className="text-3xl font-dmserif font-light cursor-pointer"
                        href="mailto:iancmann99@gmail.com"
                    >
                    iancmann99@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
