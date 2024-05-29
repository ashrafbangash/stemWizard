import React from "react";

const Philosphy = () => {
  return (
    <div className="main">
      <div className="sub relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <div className="text-center xl:text-start order-2 xl:order-1">
            <h1 className="text-2xl md:text-[40px]  font-medium ">
              STEM Wizards Academia Philosophy
            </h1>

            <h1 className="my-4 font-semibold">Learning With No Bounds</h1>

            <p className="text-xs md:text-base">
              With an abundance of experience as educators, our leadership has
              developed a philosophy that has proven successful throughout the
              years. Through a unique teaching approach that makes students feel
              respected, appreciated, and capable, we create an engaging and
              collaborative experience for every student. Contact us today to
              schedule a visit to our afterschool.
            </p>
          </div>
          <img
            src="./assets/aboutPhilos/philosphy.svg"
            alt="philosphy"
            className="order-1 xl:order-2 mx-auto"
          />
        </div>
        <img
          src="./assets/aboutPhilos/ico1.svg"
          className="absolute hidden xl:block top-0"
          alt="icon"
        />
        <img
          src="./assets/aboutPhilos/ico2.svg"
          className="absolute hidden xl:block top-0 left-[45%]"
          alt="icon"
        />
        <img
          src="./assets/aboutPhilos/ico3.svg"
          className="absolute hidden xl:block top-[5%] right-[10%] z-0"
          alt="icon"
        />
        <img
          src="./assets/aboutPhilos/ico4.svg"
          className="absolute hidden xl:block bottom-0 left-[15%]"
          alt="icon"
        />
        <img
          src="./assets/aboutPhilos/ico5.svg"
          className="absolute hidden xl:block top-1/2 left-[35%]"
          alt="icon"
        />
        <img
          src="./assets/aboutPhilos/ico6.svg"
          className="absolute hidden xl:block bottom-0 right-[5%]"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Philosphy;
