import React from "react";
import { FiArrowRight } from "react-icons/fi";

const EventsHero = () => {
  return (
    <div className="main bg-gray">
      <div className="sub items-center">
        <h1 className="text-2xl lg:text-[40px]  font-medium capitalize mb-10 ">
          Competitions
        </h1>
        <p className="text-base mb-8 max-w-4xl text-center mt-2">
          STEM Wizards Academia is participating in different STEM Competitions
          In Canada. We believe kids could learn and evolve with the
          ever-evolving world of STEAM through competing in different national
          and international level competitions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src="./assets/events/events.svg" alt="events" />
            <h1 className="text-base lg:text-[28px] font-medium mt-5">
              Robotics Competition
            </h1>
            <p className="text-sm lg:text-2xl mt-2">
              Join Our Local Robotics Competition
            </p>
            <button className="bg-green py-3 px-6 flex items-center gap-2 w-fit rounded-xl mt-6 text-white">
              Learn More <FiArrowRight />
            </button>
          </div>
          <div>
            <img src="./assets/events/events.svg" alt="events" />
            <h1 className="text-base lg:text-[28px] font-medium mt-5">
              Robotics Competition
            </h1>
            <p className="text-sm lg:text-2xl mt-2">
              Join Our Local Robotics Competition
            </p>
            <button className="bg-green py-3 px-6 flex items-center gap-2 w-fit rounded-xl mt-6 text-white">
              Learn More <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsHero;
