import React from "react";
import { FiArrowRight } from "react-icons/fi";

const JoinEvents = () => {
  return (
    <div className="main bg-redish ">
      <div className="sub mb-10 relative">
        <img
          src="./assets/events/ico4.svg"
          alt="icon"
          className="absolute hidden lg:block -top-20 left-1/2"
        />
        <img
          src="./assets/events/ico5.svg"
          alt="icon"
          className="absolute hidden lg:block bottom-0 left-1/4"
        />
        <img
          src="./assets/events/ico6.svg"
          alt="icon"
          className="absolute hidden lg:block bottom-0 right-20"
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center ">
          <form className="">
            <h1 className="text-2xl lg:text-[40px]  font-medium capitalize mb-10">
              Join Our Competitions
            </h1>
            <h1 className="text-xl lg:text-[28px] my-4">
              Attend Our Hackathones
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="input-div ">
                <label htmlFor="Firstname" className="input-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstName"
                  className="input"
                />
              </div>

              <div className="input-div ">
                <label htmlFor="Lastname" className="input-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="Lastname"
                  id="LastName"
                  className="input"
                />
              </div>
            </div>

            <div className="input-div ">
              <label htmlFor="address" className="input-label">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="input"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="input-div ">
                <label htmlFor="Email" className="input-label">
                  Email
                </label>
                <input type="email" name="email" id="email" className="input" />
              </div>
              <div className="input-div ">
                <label htmlFor="phone" className="input-label">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="input"
                />
              </div>
            </div>
            <div className="input-div ">
              <label htmlFor="Message" className="input-label">
                Message
              </label>
              <input
                type="textarea"
                name="message"
                id="message"
                className="input"
              />
            </div>
            <button className="bg-green py-3 px-10 flex items-center gap-2 w-fit rounded-xl text-white mt-">
              Submit <FiArrowRight />
            </button>
          </form>
          <div className="relative z-0 overflow-hidden">
            <img
              src="./assets/startup/stabg.svg"
              alt="startup"
              className="z-10 ml-10"
            />
            <img
              src="./assets/startup/staborder.svg"
              alt="startup"
              className="absolute z-0 top-0 -left-10"
            />
            <img
              src="./assets/startup/startup4.svg"
              alt="startup"
              className="absolute z-0 top-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinEvents;
