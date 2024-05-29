import React from "react";

const MissionStatement = () => {
  return (
    <div className="main">
      <div className="sub relative">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <img
            src="./assets/aboutMission/missionimg.svg"
            className="mx-auto order-2 hidden xl:block xl:order-1"
            alt="Mission Image"
          />
          <div className="flex flex-col text-center xl:text-start order-1 xl:order-2">
            <h1 className="lg:text-[40px] text-2xl  font-medium ">
              Mission Statement
            </h1>

            <h1 className="text-base md:text-2xl font-semibold my-8">
              <span className="text-red ">Tom</span>
              <span className="text-orange">or</span>
              <span className="text-blue">row</span>{" "}
              <span className="text-yellow">Sta</span>
              <span className="text-blue">rts Now</span>
            </h1>
            <p className="text-sm md:text-base mb-4">
              We strive to empower young people from all backgrounds to pursue
              their potential in STEM education (science, technology,
              engineering, and mathematics). We believe that connecting with
              others from across the globe in person and exchanging ideas is
              vital to form and establish networks. We enable discussion about
              global issues and scientific advancements in our world today.
            </p>
            <img
              src="./assets/aboutMission/missionimg.svg"
              className="mb-4 block xl:hidden "
              alt="Mission Image"
            />

            <p className="text-sm md:text-base mb-4">
              STEM Wizards academia equips our students to take their place in
              the world as global citizens.Now spreading our branches in
              Pakistan especially choosing the city of schools Abbottabad to
              facilitate students with field-based STEM education.
            </p>
            <p className="text-sm md:text-base mb-4">
              Our mission is to provide the students of Pakistan with stem and
              steam education and recommending international scholarships for
              students who excel in any of the disciplines (science, technology,
              engineering, and mathematics). To provide them opportunities to
              compete in international science, robotics, and programming
              competitions
            </p>
          </div>
        </div>
        <img
          src="./assets/aboutMission/ico1.svg"
          className="absolute hidden lg:block top-1/4 left-10"
          alt="icon"
        />
        <img
          src="./assets/aboutMission/ico2.svg"
          className="absolute hidden lg:block top-0 left-1/4"
          alt="icon"
        />
        <img
          src="./assets/aboutMission/ico3.svg"
          className="absolute hidden lg:block -top-10 right-1/4"
          alt="icon"
        />
        <img
          src="./assets/aboutMission/ico4.svg"
          className="absolute hidden lg:block bottom-32 right-1/4"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default MissionStatement;
