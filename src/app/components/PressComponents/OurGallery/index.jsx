import React from "react";

const OurGallery = () => {
  return (
    <div className="main">
      <div className="sub items-center">
        <h1 className="text-2xl lg:text-[40px]  font-medium capitalize mb-10 ">
          our Gallery
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <img src="./assets/press/pimg.svg" alt="image" />
          <img src="./assets/press/pimg.svg" alt="image" />
          <img src="./assets/press/pimg.svg" alt="image" />
        </div>

        <h1 className="text-2xl lg:text-[40px]  font-medium capitalize mt-20 mb-10">
          Our Youtube Channel
        </h1>
        <div className="relative z-0 overflow-hidden">
          <img
            src="./assets/press/pbg.svg"
            alt="press"
            className="z-10 ml-10"
          />
          <img
            src="./assets/press/pborder.svg"
            alt="press"
            className="absolute z-0 top-0 -left-10"
          />
          <img
            src="./assets/press/ppimg.png"
            alt="press"
            className="absolute z-0 top-0"
          />
        </div>
        <div className="flex gap-2 mt-16">
          <p className="h-2 w-3 bg-black  rounded-r-full rounded-tl-full rounded-bl-lg "></p>
          <p className="h-2 w-3 bg-orange rounded-r-full rounded-tl-full rounded-bl-lg "></p>
          <p className="h-2 w-3 bg-black  rounded-r-full rounded-tl-full rounded-bl-lg "></p>
          <p className="h-2 w-3 bg-black  rounded-r-full rounded-tl-full rounded-bl-lg "></p>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
