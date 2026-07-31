"use client";
import React from "react";

import {
  AnimatePresence,
  motion
} from "motion/react";
import {
  CanvasRevealEffect
} from "@/components/ui/canvas-reveal-effect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="text-3xl font-bold text-white text-center tracking-wider">My <span className="text-purple-300">Approach</span></h1>
      <div
      className="my-8 px-3 max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8">
        <Card
        title="Planning & Strategy"
        icon={<AceternityIcon order="Phase 1"/>}
        description="Crafting clear roadmaps and actionable strategies to achieve goals efficiently and effectively. Turning ideas into well-structured plans that drive success.">
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
        </Card>
        <Card
        title="Development & Progress Updates"
        icon={<AceternityIcon order="Phase 2"/>}
        description="A transparent overview of recent updates, development stages, and continuous progress toward achieving project goals.">
          <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-black"
        colors={[
          [236, 72, 153],
          [232, 121, 249],
        ]}
        dotSize={2} />
          {/* Radial gradient for the cute fade */}
          <div
        className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
        title="Development & Launch"
        icon={<AceternityIcon order="Phase 3"/>}
        description="Outlining the journey from initial development to successful launch, ensuring every step is planned, tested, and delivered with excellence.">
          <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-sky-600"
        colors={[[125, 211, 252]]} />
        </Card>
    </div>
    </section>
  );
}

const Card = ({
  title, icon, children, description
}) => {
  const [hovered,
    setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[20rem] relative">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={ { opacity: 0 }}
            animate={ { opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {icon}
        </div>
        <h2
          className="text-center dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="leading-relax text-justify tracking-wider dark:text-white text-md opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">{description}</p>
      </div>
    </div>
  );
};

const AceternityIcon = ({
  order
}) => {
  return (
    <div>
    <button className="relative inline-flex overflow-hidden rounded-md p-[1px] outline-none">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-black-100 px-3 py-2 text-xl md:text-2xl lg:text-3xl font-bold text-white backdrop-blur-3xl">
    {order}
  </span>
    </button>
    </div>
  );
};

export const Icon = ({
  className, ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;