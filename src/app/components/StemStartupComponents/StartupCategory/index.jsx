import React from "react";
import Join from "../../../../../public/assets/stemStartup/Join the Hub.svg";
import Link from "next/link";
const StartupCategory = () => {
  return (
    <>
      <div className="main bg-white">
        <div className="sub items-center relative">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center ">
            <div className="border">
              <h1 className="text-2xl lg:text-[40px]  font-medium capitalize mb-10">
                Categories for startups
              </h1>

              <h1 className="text-xl lg:text-[28px] font-medium">Hub A</h1>
              <p className="text-xs lg:text-base max-w-md mb-6">
                This category is for young children who want to be an
                entrepreneur and run their businesses.
              </p>

              <h1 className="text-xl lg:text-[28px] font-medium">Hub B</h1>
              <p className="text-xs lg:text-base max-w-md mb-6">
                This category is for university and College Students who want to
                be an entrepreneur and run their businesses.
              </p>

              <h1 className="text-xl lg:text-[28px] font-medium">Hub C</h1>
              <p className="text-xs lg:text-base max-w-md">
                This category is for Home and small business owners who want to
                expand especially women .
              </p>
            </div>
            <div className="relative z-0 overflow-hidden border sm:m-5">
              <img
                src="./assets/startup/stabg.svg"
                alt="startup"
                className="z-10 ml-4"
              />
              <img
                src="./assets/startup/staborder.svg"
                alt="startup"
                className="absolute z-0 top-0 -left-4"
              />
              <img
                src="./assets/startup/startup4.svg"
                alt="startup"
                className="absolute z-0 top-0"
              />
            </div>
          </div>

          <img
            src="./assets/startup/ico4.svg"
            alt="icon"
            className="absolute hidden lg:block top-1/4 left-[40%]"
          />
          <img
            src="./assets/startup/ico5.svg"
            alt="icon"
            className="absolute hidden lg:block bottom-[15%] left-[30%]"
          />
        </div>
      </div>

      <div className="main relative">
        <img
          src="./assets/startup/joinbg.svg"
          alt="head"
          className="-mt-10  z-0 w-screen  object-cover min-w-full h-72 xl:h-auto"
        />
        <div className="sub items-center absolute  -top-6 xl:-top-6">
          <h1 className="text-2xl lg:text-[40px] xl:h-[60px] font-semibold join-gradiant h-20">
            Join the hub
          </h1>
          <p className="font-medium text-white">
            To join our hub go to the link given below and fill out the form
          </p>
          <p className="max-w-4xl hover:underline  text-white break-all text-center text-wrap font-sm mt-3">
            <Link href="https://docs.google.com/forms/d/1BFfa09o8o2hCDt7Dix4d7SMNIlhQMii8zMKcTT1qP9E/edit?chromeless=1">
              https://docs.google.com/forms/d/1BFfa09o8o2hCDt7Dix4d7SMNIlhQMii8zMKcTT1qP9E/edit?chromeless=1
            </Link>
          </p>
        </div>
        <img
          src="./assets/startup/ico6.svg"
          alt="icon"
          className="absolute hidden lg:block -top-[50%] right-[5%]"
        />
      </div>
    </>
  );
};

export default StartupCategory;
