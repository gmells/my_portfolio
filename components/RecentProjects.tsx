"use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={item.title} href={item.link}>
              <div
                className="relative flex justify-center items-center sm:w-96 w-[80vw] lg:h-[30vh]
               overflow-hidden h-[20vh] mb-10"
              >
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",

                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 gap-4 flex-wrap">
                <div className="flex flex-wrap gap-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black 
       lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <img
                        src={icon}
                        alt={`icon-${index}`}
                        className="p-2 max-w-full max-h-full"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center mt-2 sm:mt-0">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
