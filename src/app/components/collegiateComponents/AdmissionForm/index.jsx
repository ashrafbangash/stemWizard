import React from "react";
import { FiArrowRight } from "react-icons/fi";

const AdmissionForm = () => {
  return (
    <>
      <div className="main-div bg-white">
        <div className="sub-div items-center relative">
          <h1 className="text-2xl lg:text-[40px] text-center font-medium">
            Admission
          </h1>
          <div className="relative">
            <img
              src="./assets/contact/contact.svg"
              alt="contact"
              className="hidden lg:block scale-110 xl:scale-100"
            />
            <img
              src="./assets/contact/mconbg.svg"
              alt="contact"
              className="lg:hidden w-full block scale-105  object-cover"
            />

            <div className="absolute top-1/2 -translate-y-1/2 w-full  xl:px-32 p-4">
              <form className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="input-div ">
                    <label htmlFor="first name" className="input-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="input"
                    />
                  </div>

                  <div className="input-div ">
                    <label htmlFor="Last name" className="input-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="input-div ">
                    <label htmlFor="Email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input"
                    />
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="input-div ">
                    <label htmlFor="Date Of Birth" className="input-label">
                      Date Of Birth
                    </label>
                    <input type="date" name="dob" id="dob" className="input" />
                  </div>
                  <div className="input-div ">
                    <label htmlFor="Applying For" className="input-label">
                      Applying For
                    </label>
                    <input
                      type="text"
                      name="applyingFor"
                      id="applyingFor"
                      className="input"
                    />
                  </div>
                </div>

                <button className="bg-green mx-auto lg:mx-0 py-3 px-10 flex items-center gap-2 w-fit rounded-xl text-white mt-">
                  Submit <FiArrowRight />
                </button>
              </form>
            </div>
          </div>

          <img
            src="./assets/contact/contacticon.svg"
            alt="icon"
            className="absolute hidden lg:block bottom-0 right-20 z-20"
          />
        </div>
      </div>
    </>
  );
};

export default AdmissionForm;
