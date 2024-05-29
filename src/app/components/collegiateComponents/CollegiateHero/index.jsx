import React from "react";

const CollegiateHero = () => {
  return (
    <div className="main bg-white">
      <div className="sub items-center relative ">
        <div className="relative overflow-hidden sm:overflow-visible">
          <h1 className="text-2xl md:text-[40px] mb-3 text-center font-medium uppercase mb-6">
            Collegiate Program
          </h1>
          <img
            src="./assets/abouthero/fl1.svg"
            alt="flow"
            className="absolute -top-2 -left-20 "
          />
          <img
            src="./assets/abouthero/fl2.svg"
            alt="flow"
            className="absolute -top-10 -right-20"
          />
        </div>

        <div className=" flex mt-20 justify-center flex-col items-center h-full  max-h-[575px] ">
          <div className="order-2 xl:order-1 text-center ">
            <h1 className=" text-2xl md:text-2xl font-medium mt-16   ">
              COLLEGIATE PROGRAM
            </h1>
            <p className="text-xs md:text-base mb-8 max-w-4xl text-center mt-2">
              {" "}
              STEM Wizards Academia Collegiate Program is a rigorous and
              innovative academic program designed to provide students with a
              strong foundation in Science, Technology, Engineering, and
              Mathematics (STEM) subjects. The program is designed for high
              school students who are interested in pursuing a career in STEM
              fields and who want to gain a competitive edge in their college
              applications.
            </p>
            <p className="text-xs md:text-base mb-8 max-w-4xl text-center">
              The program is taught by experienced and knowledgeable STEM
              professionals who are passionate about teaching and sharing their
              expertise with the next generation of STEM leaders. The curriculum
              is carefully crafted to cover key concepts and skills in STEM
              disciplines, including mathematics, physics, chemistry, computer
              science, and engineering.
            </p>
          </div>
          <div className=" xl:mb-20 order-1 xl:order-2 relative">
            <img
              className="max-w-4xl w-full  absolute bottom-0  z-0 left-[48%] -translate-x-1/2 "
              src="./assets/abouthero/abborder.svg"
              alt="about"
            />
            <img
              className="max-w-4xl w-full  relative  z-20"
              src="./assets/abouthero/abimg.png"
              alt="about"
            />
            <img
              className="max-w-4xl w-full  absolute bottom-0 z-0 left-[52%] -translate-x-1/2 "
              src="./assets/abouthero/abbg.svg"
              alt="about"
            />
          </div>
        </div>

        <img
          src="./assets/abouthero/ico1.svg"
          alt="icons"
          className="absolute hidden lg:block right-1/4 top-[15%]"
        />
        <img
          src="./assets/abouthero/ico2.svg"
          alt="icons"
          className="absolute hidden lg:block right-[10%] top-[25%]"
        />
        <img
          src="./assets/abouthero/ico3.svg"
          alt="icons"
          className="absolute hidden lg:block left-[10%] top-[15%]"
        />
        <img
          src="./assets/abouthero/ico4.svg"
          alt="icons"
          className="absolute hidden lg:block bottom-0 right-[5%]"
        />
        <img
          src="./assets/abouthero/ico1.svg"
          alt="icons"
          className="absolute hidden lg:block bottom-[15%] left-[15%]"
        />
      </div>
      {/* <img src="./assets/abouthero/abhfooter.svg" alt="foot" className='-mt-52 z-20 w-screen  object-cover min-w-full h-auto' /> */}
    </div>
  );
};

export default CollegiateHero;
