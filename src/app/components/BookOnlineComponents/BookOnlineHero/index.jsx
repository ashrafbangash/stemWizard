import React from "react";

const BookOnlineHero = () => {
  return (
    <div className="main">
      <div className="sub items-center relative">
        <h1 className="text-[30px] xl:text-[40px] font-medium mb-8">
          Book Online{" "}
        </h1>
      </div>

      <img
        src="./assets/stemStartup/cloud.svg"
        alt="bg"
        className="-mt-14 lg:-mt-20 h-32 xl-mt-28 z-20 w-screen  object-cover min-w-full xl:h-auto"
      />
      <div className="relative">
        <img
          src="./assets/OverView/cloude.svg"
          alt="bg"
          className="-mt-5 h-32 z-10 w-screen relative object-cover min-w-full xl:h-auto"
        />
        <img
          src="./assets/OverView/cloude.svg"
          alt="bg"
          className="-mt-28 xl:-mt-40 h-32 z-0 w-screen relative object-cover min-w-full xlh-auto"
        />
        <h1 className="text-xs lg:text-base max-w-2xl text-center z-20  absolute -top-12 xl:top-0 left-1/2 -translate-x-1/2">
          We strive to empower young people from all backgrounds to pursue their
          potential in STEM education (science, technology, engineering, and
          mathematics).
        </h1>
        <img
          src="./assets/stemcourse/ico8.svg"
          alt="stemcourseicons"
          className="absolute z-20  hidden lg:block bottom-[25%] left-[20%]"
        />
      </div>
    </div>
  );
};

export default BookOnlineHero;
