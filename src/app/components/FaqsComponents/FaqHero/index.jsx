import React from "react";

const FaqHero = () => {
  return (
    <div className="main bg-transparent">
      <div className="relative z-0 mt-32 xl:-mt-52 ">
        <img
          src="./assets/faqs/faqsbgg.jpg"
          alt="img"
          className=" object-cover w-screen min-w-full h-auto"
        />
        <img
          src="./assets/faqs/hero.svg"
          alt="scg"
          className="absolute top-1/4 hidden xl:block left-1/2 -translate-x-1/2"
        />
        <div className="absolute -top-36 xl:top-1/4 left-1/2 -translate-x-1/2 mt-10">
          <h1 className="text-2xl mb-10 lg:text-[40px] text-center xl:text-start  font-medium capitalize ">
            Frequently ask questions
          </h1>
        </div>
      </div>

      <div className="sub overflow-hidden ">
        <h1 className="text-2xl lg:text-[40px]  font-semibold capitalize ">
          The Answers You Need
        </h1>
        <h1 className="text-base lg:text-2xl font-semibold mt-4">
          Can I schedule a school visit?
        </h1>
        <p className="text-xs lg:text-base ">
          Yes! you can visit anytime between 9 A.M-3 P.M Monday till Friday or
          you can book an appointment on the following number +923125896361 -
          +923146699944
        </p>

        <h1 className="text-base lg:text-2xl font-semibold mt-4">
          Where can I find the fall schedule?
        </h1>
        <p className="text-xs lg:text-base">
          We provide students with customized schedules according to their
          classes
        </p>

        <h1 className="text-base lg:text-2xl font-semibold mt-4">
          How much is school tuition?
        </h1>
        <p className="text-xs lg:text-base">
          Our tuition mainly depends on the program students enroll in.
        </p>
      </div>
    </div>
  );
};

export default FaqHero;
