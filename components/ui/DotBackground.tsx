import React from "react";

export function DotBackground() {
  return (
    <div className="h-screen w-full absolute top-0 left-0  dark:bg-black-100 bg-slate-50 dark:bg-dot-white/[0.3] bg-dot-black-100/[0.3] flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}