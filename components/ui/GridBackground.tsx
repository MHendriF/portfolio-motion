export default function GridBackground() {
  return (
    <div className="h-screen w-full bg-black-200 dark:bg-black-100 bg-slate-50 dark:bg-grid-white/[0.03] bg-grid-black/[0.3] absolute top-0 left-0 flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-200 dark:bg-black-100 bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
