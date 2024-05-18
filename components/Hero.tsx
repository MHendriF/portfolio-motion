import GridBackground from "./ui/GridBackground";
import { Spotlight } from "./ui/Spotlight";

export default function Hero() {
  return (
    <div className="tpb-30 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <GridBackground />
      </div>
    </div>
  );
}
