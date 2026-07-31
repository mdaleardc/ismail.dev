import Image from "next/image";
import { SiNextdotjs, SiReact, SiMongodb, SiTailwindcss, SiJavascript, SiNodedotjs } from "react-icons/si";

const technologies = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <h1 className="text-2xl font-bold text-center text-white mb-12">
        About <span className="text-purple-300">Me</span>
      </h1>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        <div className="flex justify-center md:col-span-1">
          <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/[0.2]">
            <Image src="/ismail.png" alt="Mohammed Ismail" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          </div>
        </div>
        <div className="md:col-span-2 space-y-4 text-center md:text-left">
          <p className="text-white/80 leading-relaxed">
            I&apos;m <span className="text-purple-300 font-semibold">Mohammed Ismail</span>, a primary school teacher and full-stack web developer based in the Rohingya refugee camps in Bangladesh. Since 2023, I&apos;ve taught at a UNICEF-supported learning center while independently developing open educational platforms, digital libraries, language-learning apps, and community tools—all built entirely from an Android phone.
          </p>
          <p className="text-white/80 leading-relaxed">
            I create impactful digital solutions that improve access to education and knowledge. From digital libraries and educational platforms to offline-first dictionaries, language-learning apps, and community tools, I build scalable applications using React, Next.js, Node.js, and MongoDB.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                <tech.icon className="text-lg text-purple-300" />
                <span className="text-sm text-white/80">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
