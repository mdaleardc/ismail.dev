"use client"
        
    export function ShimmerBtn({title, icon, position, onClick, otherClasses}) {
    return <button className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none tracking-wider ${otherClasses}`} onClick={onClick}>
    {position === "left" && <span className="pr-3">{icon}</span>}
          {title}
    {position === "right" && <span className="pl-3">{icon}</span>}
        </button>
        }
