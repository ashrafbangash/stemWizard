import React from "react";

const PressHero = () => {
  return (
    <div className="main bg-redish">
      <div className="sub items-center">
        <h1 className="text-2xl lg:text-[40px]  font-medium capitalize mb-10 ">
          Gallery and news
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-0 overflow-hidden">
            <img
              src="./assets/startup/staborder.svg"
              alt="startup"
              className="z-10 ml-10"
            />
            <img
              src="./assets/startup/stabg.svg"
              alt="startup"
              className="absolute z-0 top-0 -left-10"
            />
            <img
              src="./assets/startup/startup4.svg"
              alt="startup"
              className="absolute z-0 top-0"
            />
          </div>
          <div>
            <h1 className="text-base lg:text-2xl font-semibold">
              Descovery and Learning
            </h1>
            <p className="text-xs lg:text-base my-6">
              Student life at STEM Wizards Academia is incredibly supportive.{" "}
            </p>
            <p className="text-xs lg:text-base ">
              Our teachers develop caring relationships with our students,
              allowing for the adaptation of curricula to meet the social,
              emotional and educational needs of everyone. Our student
              experience is enriched by athletics, volunteer opportunities,
              class trips and other exciting extracurricular activities. Reach
              out to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressHero;
