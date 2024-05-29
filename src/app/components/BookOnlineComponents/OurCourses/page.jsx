import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const OurCourses = () => {
  const sections = [
    {
      id: 1,
      title: "One-To-One Session",
      startDate: "Start Date",
      endDate: "End Date",
      btnTitle: "View Course",
    },
    {
      id: 2,
      title: "Game Design Classes",
      startDate: "Start Date",
      endDate: "End Date",
      btnTitle: "View Course",
    },
    {
      id: 3,
      title: "Coding Class",
      startDate: "Start Date",
      endDate: "End Date",
      btnTitle: "View Course",
    },
    {
      id: 4,
      title: "After School Program ",
      startDate: "Start Date",
      endDate: "End Date",
      btnTitle: "View Course",
    },
    {
      id: 5,
      title: "Office Automation",
      startDate: "Start Date",
      endDate: "End Date",
      btnTitle: "View Course",
    },
    {
      id: 6,
      title: "Level 1 Courses",
      startDate: "Start Date",
      endDate: "End Date",
      btnTitle: "View Course",
    },
    {
      id: 7,
      title: "Level 2 Courses",
      startDate: "Start Date",
      endDate: "End Date",
      btnTitle: "View Course",
    },
    {
      id: 8,
      title: "Compute Skills Training",
      startDate: "Start Date",
      endDate: "End Date",
      btnTitle: "View Course",
    },
  ];

  return (
    <div className="main">
      <div className="sub items-center relative">
        <h1 className="text-2xl md:text-[40px] font-medium mb-8">Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          {sections.map((section, index) => (
            <div key={index} className="relative">
              <img
                className="max-w-4xl w-full  absolute top-0  z-0 left-[48%] -translate-x-1/2 "
                src="./assets/bookonline/bg.svg"
                alt="about"
              />
              <img
                className="max-w-4xl w-full  relative  z-20"
                src="./assets/bookonline/green.svg"
                alt="about"
              />
              <img
                className="max-w-4xl w-full  absolute top-0 z-0 left-[52%] -translate-x-1/2 "
                src="./assets/bookonline/border.svg"
                alt="about"
              />
              <div className="absolute top-0 lg:top-3 lg:left-6 z-20">
                <img
                  src="/assets/bookonline/1.svg"
                  alt="one"
                  className="scale-90 "
                />
                <h1 className="text-xl lg:text-[28px] font-medium leading-6 px-6  ">
                  {section.title}
                </h1>
                <p className=" px-6 text-xs lg:text-base">
                  Start Date End Date
                </p>
                <Link href={`/bookonline/${section.id}`}>
                  <button className="bg-white py-3 mx-6 px-6 flex items-center gap-2 w-fit rounded-xl mt-1 text-green">
                    {section.btnTitle} <FiArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <img
          src="./assets/stemcourse/ico4.svg"
          alt="stemcourseicons"
          className="absolute hidden lg:block  -top-[0%] right-[15%]"
        />
        <img
          src="./assets/stemcourse/ico7.svg"
          alt="stemcourseicons"
          className="absolute  hidden lg:block top-[45%] right-[5%]"
        />
        <img
          src="./assets/stemcourse/ico8.svg"
          alt="stemcourseicons"
          className="absolute  hidden lg:block bottom-[0%] right-[20%]"
        />
        <img
          src="./assets/contact/contacticon.svg"
          alt="stemcourseicons"
          className="absolute  hidden lg:block bottom-[15%] right-[5%]"
        />
        <img
          src="./assets/stemcourse/ico9.svg"
          alt="stemcourseicons"
          className="absolute  hidden lg:block top-[6%] left-[25%]"
        />
        <img
          src="./assets/stemcourse/ico2.svg"
          alt="stemcourseicons"
          className="absolute  hidden lg:block top-[0%] left-[10%]"
        />
      </div>
    </div>
  );
};

export default OurCourses;
