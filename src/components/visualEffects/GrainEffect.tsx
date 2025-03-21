import { cn } from "@/lib/utils";
import React from "react";

// export default function GrainEffect() {
//   return (
//     <div className="fixed inset-0 w-full h-full pointer-events-none z-10">
//       <div className="noise-overlay"></div>
//     </div>
//   );
// }

const GrainEffect = () => {
    return (
      <div 
        // className="fixed inset-0 w-full h-full pointer-events-none z-10"
        className={cn(
          "fixed top-0 left-0 w-full h-full",
          // "before:content-none",
          "before-content-none before:-top-40 before:-left-40 before:w-[calc(100%+20rem)] before:h-[calc(100%+20rem)]",
          "before:fixed before:bg-grain before:opacity-15 pointer-events-none before:z-10"
        )}
      >
        <div className="noise-overlay"></div>
      </div>
    );
  };
  
export default GrainEffect;