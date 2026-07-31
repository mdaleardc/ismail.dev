import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerBtn } from "@/components/ui/ShimmerButton";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

export function GridAndDotBG() {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center bg-white/60 dark:bg-black/60">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )} />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex flex-col">
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-3 px-4 text-4xl font-bold text-transparent sm:text-7xl text-center tracking-wider uppercase">Ismail</p>
      <TextGenerateEffect  
      className="text-center text-[40px] md:text-5xl lg:text-6xl font-thin px-4"  
      words="Full-Stack Web Developer crafting digital experiences with React, Next.js & Node.js."  
      duration={2.5}  
      filter={true}/>
      <p className="relative z-20 mt-5 text-center text-white tracking-wider md:tracking-widest mb-4 text-sm md:text-lg lg:text-2xl px-4">
      Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-gradient">Mohammed Ismail</span>, a Next.js Developer based in Myanmar.</p>
      <Link href="#about" className='relative z-20 block mx-auto text-center mt-5'>
      <ShimmerBtn 
      title="Show my work"
      icon={<IoIosSend/>}
      position="right"/>
      </Link>
      </div>
    </div>
  );
}
