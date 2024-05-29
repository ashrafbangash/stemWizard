import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CollegiateProgram = () => {
  const data = [
    {
      level: "Level1",
      title: "Ui/Ux Designing",
      desc: "Month Course - Internship Included",
    },
    {
      level: "Level1",
      title: "Ui/Ux Designing",
      desc: "Month Course - Internship Included",
    },
    {
      level: "Level1",
      title: "Ui/Ux Designing",
      desc: "Month Course - Internship Included",
    },
    {
      level: "Level1",
      title: "Ui/Ux Designing",
      desc: "Month Course - Internship Included",
    },
    {
      level: "Level1",
      title: "Ui/Ux Designing",
      desc: "Month Course - Internship Included",
    },
    {
      level: "Level1",
      title: "Ui/Ux Designing",
      desc: "Month Course - Internship Included",
    },
    {
      level: "Level1",
      title: "Ui/Ux Designing",
      desc: "Month Course - Internship Included",
    },
  ];
  return (
    <div className="main ">
      <img
        src="./assets/program/header.svg"
        alt="foot"
        className="mt-8 z-20 w-screen  object-cover min-w-full h-auto"
      />
      <div className="sub-div bg-redish items-center relative">
        <h1 className="text-2xl lg:text-[40px] text-center font-medium ">
          Programs Available
        </h1>
        <h1 className="text-base lg:text-2xl font-semibold my-3">
          Dedication. Expertise. Passion.
        </h1>
        <p className="text-xs lg:text-base mb-8 max-w-4xl text-center mt-2">
          Our courses are designed to help you develop a range of skills that
          are highly valued by employers, such as communication,
          problem-solving, critical thinking, and leadership. Our expert
          instructors will guide you through the course materials, which are
          based on real-world scenarios and challenges, so you can learn by
          doing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((data, index) => (
            <div key={index} className="mb-6">
              <img src="./assets/program/img.svg" alt="img" />
              <h4 className="text-base font-medium mt-4">{data.level}</h4>
              <h1 className="text-2xl lg:text-[28px] font-medium">
                {data.title}
              </h1>
              <p className="text-base lg:text-2xl mb-5">{data.desc}</p>
              <button className="bg-green py-3 px-6 flex items-center gap-2 w-fit rounded-xl text-white">
                Get In Touch <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
        <img
          src="./assets/program/ico1.svg"
          alt="icon"
          className="absolute top-0 right-0"
        />
      </div>
      <img
        src="./assets/program/footer.svg"
        alt="foot"
        className=" z-0 w-screen  object-cover min-w-full h-auto"
      />
    </div>
  );
};

export default CollegiateProgram;
