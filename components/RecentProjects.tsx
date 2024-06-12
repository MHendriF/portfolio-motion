import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

export default function RecentProjects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple-500 dark:text-purple-100">recent projects</span>
      </h1>

      {/* <div className="flex flex-wrap items-center justify-center p-4 gap-x-16">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={500}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        width={36}
                        height={36}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="sm:h-[32rem] h-[32rem] lg:min-h-[32.5rem] flex flex-col items-center justify-center">
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[320px] w-[22vw] sm:h-[35vh] h-[30vh] overflow-hidden mb-2">
                <div
                  className="relative w-full h-full overflow-hidden sm:rounded-xl lg:rounded-2xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bg-img" />
                </div>
                {/* <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={500}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="z-10 absolute bottom-0"
                /> */}
                <img src={img} alt={title} className="z-10 absolute w-full rounded-2xl px-3" />
              </div>
              <h1 className="font-bold lg:text-lg md:text-xl text-base line-clamp-1">{title}</h1>
              <p className="lg:text-md lg:font-normal font-light text-sm line-clamp-2">{des}</p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-8 w-6 h-6 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt={icon} width={36} height={36} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <a href={link}>
                    <p className="flex lg:text-sm md:text-xs text-sm text-purple-500 dark:text-purple-100e">
                      Check Live Site
                    </p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
