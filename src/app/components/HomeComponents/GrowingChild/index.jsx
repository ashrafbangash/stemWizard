import React from "react";
import { FiArrowRight } from "react-icons/fi";

const GrowingChild = () => {
  const sections = [
    {
      title: "Science",
      img1Src: "./assets/growingChild/science1.svg",
      img2Src: "./assets/growingChild/science2.svg",
      description:
        "Science education is most effective when students learn how to gather evidence and formulate arguments.",
      class: "bottom-16 md:bottom-2 lg:bottom-6 xl:bottom-3",
    },
    {
      title: "Technology",
      img1Src: "./assets/growingChild/tech2.svg",
      img2Src: "./assets/growingChild/tech1.svg",
      description:
        "Technology offers opportunities for active learning of STEM concepts as well as scientific reasoning.",
      class: "bottom-16 md:bottom-2 lg:bottom-9 xl:bottom-3",
    },
    {
      title: "Engineering",
      img1Src: "./assets/growingChild/enng2.svg",
      img2Src: "./assets/growingChild/enng1.svg",
      description:
        "Engineers are also inventors, developers of new products, and ways of doing business.",
      class: "bottom-16 md:bottom-10 lg:bottom-10 xl:bottom-6",
    },
    {
      title: "Math",
      img1Src: "./assets/growingChild/math2.svg",
      img2Src: "./assets/growingChild/math1.svg",
      description:
        "Mathematics is critical to the study of any STEM subject; indeed, historically the development of science.",
      class: "bottom-16 md:bottom-8 lg:bottom-6 xl:bottom-2",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center pb-4  bg-white">
        <img
          src="./assets/growingChild/cloude2.svg"
          alt="cloude"
          className="relative w-screen object-cover min-w-full h-auto"
        />
        <div className="relative sub-div items-center mt-4">
          <h1 className="text-2xl md:text-[40px] font-medium ">
            We Are Growing Child In
          </h1>

          <img
            src="./assets/home/rocket.svg"
            alt="underline"
            className="absolute mt-1 hidden lg:block top-0 left-1/4"
          />
          <img
            src="./assets/home/crane2.svg"
            alt="underline"
            className="absolute hidden lg:block bottom-0 right-1/4 w-[166px] h-[166px]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-10">
            {sections.map((section, index) => (
              <div key={index} className="relative">
                <img
                  className="max-w-xs h-auto scale-90 md:scale-100"
                  src={section.img1Src}
                  alt="growingChild"
                />
                <img
                  className="max-w-[270px] absolute top-4 left-6 h-auto scale-90 md:scale-100"
                  src={section.img2Src}
                  alt="growingChild"
                />
                <div className={`absolute ${section.class} text-center px-10`}>
                  <h1 className="text-[20px] md:text-[28px] font-medium">
                    {section.title}
                  </h1>
                  <p className="text-xs md:text-base">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-green mb-28  py-3 px-6 flex items-center gap-2 w-fit rounded-xl text-white mt-10">
            Explore More <FiArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default GrowingChild;
