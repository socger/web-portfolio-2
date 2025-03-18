import React from "react";

export default function GrainEffect() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10">
      <div className="noise-overlay"></div>
    </div>
  );
}