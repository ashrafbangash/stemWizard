import React from "react";
import { FiArrowRight } from "react-icons/fi";

const IntlComp = () => {
  const data = [
    {
      title: "Engineering Design Process",
      desc: "Students need to choose 'one-real' world problem and present a solution using EDP",
      btnTitle: "register Now",
      btnClass: "",
      bgimg: "./assets/events/e1.svg",
      icon: "./assets/events/es1.svg",
    },
    {
      title: "Bee Buz",
      desc: "Students are provided a curriculum to prepare for the competition",
      btnTitle: "Download Docs",
      btnClass: "rotate-90",
      bgimg: "./assets/events/e2.svg",
      icon: "./assets/events/es2.svg",
    },
    {
      title: "Science",
      desc: "Students demonstrate real-world STEM application's scientific concepts through mini models",
      btnTitle: "Download Docs",
      btnClass: "rotate-90",
      bgimg: "./assets/events/e3.svg",
      icon: "./assets/events/es3.svg",
    },
    {
      title: "Coding Hackathon",
      desc: "A coding hackathon is a one-hour coding competition for 12-18 year-olds. They are given Robots, Games complete in an hour",
      btnTitle: "Download Docs",
      btnClass: "rotate-90",
      bgimg: "./assets/events/e4.svg",
      icon: "./assets/events/es4.svg",
    },
  ];
  return (
    <div className="main">
      <div className="sub items-center overflow-hidden relative">
        <h1 className="text-2xl   mb-10  lg:text-[40px]  font-medium capitalize text-center lg:text-start">
          International Competitions
        </h1>
        <div className="max-w-4xl">
          <p className="text-center lg:text-start  text-xl lg:text-[28px] font-medium mb-4  max-w-4xl self-start">
            FIRST ROBOTICS COMPETITION
          </p>
          <p className="text-center lg:text-start  text-xs lg:text-base mb-8 max-w-4xl  mt-2">
            STEM Wizards Academia is participating in different STEM
            Competitions In Canada. We believe kids could learn and evolve with
            the ever-evolving world of STEAM through competing in different
            national and international level competitions.
          </p>

          <p className="text-center lg:text-start  text-xl lg:text-[28px] font-medium mb-4  max-w-4xl self-start">
            Math Contests
          </p>
          <p className="text-center lg:text-start  text-xs lg:text-base mb-8 max-w-4xl  mt-2">
            Math Contests are a fun challenge for students to apply their
            knowledge and see how they stand in comparison to their peers
            nationally and/or internationally. 
          </p>

          <p className="text-center lg:text-start  text-xl lg:text-[28px] font-medium mb-4  max-w-4xl self-start">
            Canadian Open Mathematics Competiton
          </p>
          <p className="text-center lg:text-start  text-xs lg:text-base mb-8 max-w-4xl  mt-2">
            The Canadian Open Mathematics Challenge (COMC) is Canada’s premier
            national mathematics competition open to any student with an
            interest in and grasp of high school math. It is also the first exam
            on the road to the International Mathematical Olympiad.
          </p>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {data.map((d, index) => (
            <div key={index} className="relative">
              <img src={d.bgimg} alt="bg" />
              <div className="absolute w-full flex flex-col items-center top-10  -translate-x-1/2 left-1/2 -translate">
                <div className="relative">
                  <img src="./assets/events/estar.svg" alt="bg" className="" />
                  <img
                    src={d.icon}
                    alt="bg"
                    className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 "
                  />
                </div>
                <h1 className="text-xl lg:text-[28px] font-medium px-10 text-center my-4">
                  {d.title}{" "}
                </h1>
                <p className="text-xs lg:text-base px-5 text-center">
                  {d.desc}
                </p>
                <button className="bg-white py-3 px-6 flex items-center gap-2 w-fit rounded-xl mt-6 text-green">
                  {d.btnTitle} <FiArrowRight className={`${d.btnClass}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <img
          src="./assets/events/ico1.svg"
          alt="icon"
          className="absolute hidden lg:block top-10 left-[9%]"
        />
        <img
          src="./assets/events/ico2.svg"
          alt="icon"
          className="absolute hidden lg:block top-1/3 right-[9%]"
        />
        <img
          src="./assets/events/ico3.svg"
          alt="icon"
          className="absolute hidden lg:block top-1/3 left-[9%]"
        />
      </div>

      <div className="bg-redish  h-72 sm:h-60 xl:h-96 rounded-t-full -mt-60  overflow-hidden      object-cover min-w-[99%] ">
        <img
          src="./assets/events/line1.svg"
          alt="head"
          className="overflow-hidden z-0 w-screen mt-20 object-cover min-w-full h-auto"
        />
        <img
          src="./assets/events/line1.svg"
          alt="head"
          className="overflow-hidden z-0 w-screen -mt-40 rotate-3 object-cover min-w-full h-auto"
        />
        <img
          src="./assets/events/line2.svg"
          alt="head"
          className="overflow-hidden z-0 w-screen -mt-40 rotate-3 object-cover min-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default IntlComp;
