import { Spotlight } from "@/components/ui/Spotlight";
import { GridAndDotBG } from "@/components/ui/GridAndDotBG";
import { FloatingNav } from "@/components/ui/floating-nav";
import { TiHome } from "react-icons/ti";
import { IoPersonCircle } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaLightbulb, FaEnvelope } from "react-icons/fa";

export default function Hero() {
    return (
        <div>
            <div className="font-bold">
            <FloatingNav className="text-white" navItems={[
                {name: "Home", link: "#home", icon: <TiHome/>},
                {name: "About", link: "#about", icon: <IoPersonCircle/>},
                {name: "Work", link: "#work", icon: <MdWork/>},
                {name: "Projects", link: "#projects", icon: <GrProjects/>},
                {name: "Skills", link: "#skills", icon: <FaLightbulb/>},
                {name: "Contact", link: "#contact", icon: <FaEnvelope/>},
            ]}/>
                 <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                 <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
                 <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
                 <GridAndDotBG />
            </div>

            <div id="home" className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center pt-32 pb-10">
                <p className="uppercase tracking-widest text-sm text-purple-300 mb-4">
                    Teacher &middot; Full-Stack Web Developer
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
                    Hi, I&apos;m <span className="text-purple-300">Mohammed Ismail</span>
                </h1>
                <p className="mt-6 text-white/70 max-w-2xl md:text-lg">
                    A primary school teacher in Cox&apos;s Bazar, Bangladesh, who taught himself to code.
                    I build free, accessible web tools &mdash; lesson-plan platforms, dictionaries, and
                    learning apps &mdash; for the Rohingya community, using React, Next.js, Node.js and MongoDB.
                </p>
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                    <a href="#projects" className="px-6 py-3 bg-purple-500/20 border border-purple-400/40 text-white rounded-lg hover:bg-purple-500/30 transition-all duration-300">
                        See my work
                    </a>
                    <a href="#contact" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
        )
}
