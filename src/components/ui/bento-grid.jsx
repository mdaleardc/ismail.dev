"use client"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { GlobeDemo } from "@/components/ui/grid-globe"
import Lottie from "lottie-react";
import * as animationData from "@/data/Confetti.json";
import { ShimmerBtn } from "@/components/ui/ShimmerButton"
import { IoCopyOutline } from "react-icons/io5"

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-5 md:grid-rows-[repeat(4,12rem)] p-1",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  className,
  titleClassName,
  img,
  imgClassName,
  spareImage
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('ismailmd.code@gmail.com');
    
    setCopied(true);
    setTimeout(()=>{
      setCopied(false)
    }, 20000)
  }
  
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden group/bento shadow-input flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,9,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>
      <div className={`${id === 6  && 'flex justify-center'} h-full`}>
      <div className="w-full h-full absolute">
      {img && (
        <img src={img} alt={img} className={cn(imgClassName, "object-cover object-center overflow-hidden")}/>
      )}
      </div>
      <div className={`absolute right-0 bottom-5 ${id === 5 && "w-full opacity-80"}`}>
      {spareImage && (
      <img src={spareImage} alt={spareImage} className="object-center object-cover w-full h-full"/>
      )}
      </div>
      
      {id === 6 && (
      <BackgroundGradientAnimation/>
      )}
      
      <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-4 lg:p-10 ")}>
      <div
          className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
          {description}
        </div>
      
        <div
          className="font-sans font-bold text-lg text-[#c1c2d3] lg:text-3xl max-w-96 z-10">
          {title}
      </div>
      {id === 2 && <GlobeDemo/>}
      
      {id === 3 && (
      <div className="flex gap-1 lg:gap-5 w-fit absolute top-1 right-3 lg:right-2">
      <div className="flex flex-col gap-2 lg:gap-4">
      {['React.js', 'Next.js', 'TailwaindCss'].map((item)=>(
      <span key={item} className="py-2 lg:py-3 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-[#c1c2d3] bg-[#10132E]">
      {item}
      </span>
      ))}
      <span className="py-4 px-3 rounded-lg text-center text-[#c1c2d3] bg-[#10132e]"/>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4">
      <span className="py-4 px-3 rounded-lg text-center text-[#c1c2d3] bg-[#10132e]"/>
      {['JavaScript', 'MongoDB', 'Node.js'].map((item)=>(
      <span key={item} className="py-2 lg:py-3 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-[#c1c2d3] bg-[#10132E]">
      {item}
      </span>
      ))}
      </div>
      </div>
      )}
      
      {id === 6 && (
      <div className="mt-5 relative">
      <div className={`absolute left-[40px] md:[50px] -top-24`}>
      <Lottie
        animationData={animationData}
        loop={copied}
        autoplay={copied}
        style={{ width: 200, height: 200 }}
      />
      </div>
      <ShimmerBtn title={copied ? "Email copied" : "Copy my email"}
      icon={<IoCopyOutline/>}
      position="left"
      otherClassNames="!bg-[#161a31]"
      onClick={handleCopy}/>
      </div>
      )}
      </div>
    </div>
      </div>
  );
};
