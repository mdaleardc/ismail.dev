import { workExperience } from "@/data";
import { Button } from "@/components/ui/moving-border";
import { FaChalkboardTeacher } from "react-icons/fa";

const Experience = () => {

  return (
    <div className="py-5">
      <h1 className="text-2xl font-bold text-center text-white">My Work {' '}
        <span className="text-purple-300">Experience</span></h1>
      <div className="w-full mt-12 grid md:grid-cols-2 grid-cols-1 gap-10 px-8">
        {workExperience.map((card) => (
        <Button key={card.id}
        duration={Math.floor(Math.random() * 10000) + 10000}
        className="flex-1 text-white border-neutral-200 dark:border-slate-800">
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
            <FaChalkboardTeacher className="lg:w-12 lg:h-12 md:w-9 md:h-9 w-7 h-7 text-purple-300 shrink-0" />
            <div className="lg:ms-2">
              <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>
              <p className="text-start text-white/[0.6] mt-3 font-semibold">{card.desc}</p>
            </div>
          </div>
        </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience;
