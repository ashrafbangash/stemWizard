import React from "react";

const AboutHero = () => {
  return (
    <div className="main bg-redish">
      <div className="sub items-center relative ">
        <div className="relative ">
          <h1 className="text-[40px] text-center font-medium ">About Us</h1>
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

        <div className="bg-redish flex mt-20 justify-center flex-col items-center h-full  max-h-[575px] ">
          <div className="relative">
            <img
              className="max-w-4xl w-full  absolute top-0  z-0 left-[48%] -translate-x-1/2 "
              src="./assets/abouthero/abborder.svg"
              alt="about"
            />
            <img
              className="max-w-4xl w-full  relative  z-20"
              src="./assets/abouthero/abimg.png"
              alt="about"
            />
            <img
              className="max-w-4xl w-full  absolute top-0 z-0 left-[52%] -translate-x-1/2 "
              src="./assets/abouthero/abbg.svg"
              alt="about"
            />
          </div>
          <p className="text-base mb-8 max-w-4xl text-center mt-8">
            Stem Wizards Academia has been providing continuing STEM Education
            for both schools and individuals in Pakistan. The purpose of our
            organization is to improve the world of the future and to promote
            individual well-being through enhanced learning, knowledge-sharing,
            and sustainable development.
          </p>
          <p className="text-base mb-8 max-w-4xl text-center">
            {" "}
            Students and youth have a sense of curiosity that constantly looks
            for activities that can challenge them. Keeping this inquisitiveness
            and curiosity sparked helps them to maximize their capacities.
            Science camps, like us, assist students to draw inferences, drive
            connections, and explore deeper meaning and understanding of fields
            that interest them.
          </p>
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
      <img
        src="./assets/abouthero/abhfooter.svg"
        alt="foot"
        className="md:-mt-32 xl:-mt-52 z-20 w-screen  object-cover min-w-full h-auto"
      />
    </div>
  );
};

export default AboutHero;
