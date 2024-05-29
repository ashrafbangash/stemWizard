import React from "react";

const ProgramHero = () => {
  const data = [
    {
      img: "./assets/ourprogram/vid.svg",
    },
    {
      img: "./assets/ourprogram/vid.svg",
    },
    {
      img: "./assets/ourprogram/vid.svg",
    },
    {
      img: "./assets/ourprogram/vid.svg",
    },
    {
      img: "./assets/ourprogram/vid.svg",
    },
    {
      img: "./assets/ourprogram/vid.svg",
    },
    {
      img: "./assets/ourprogram/vid.svg",
    },
    {
      img: "./assets/ourprogram/vid.svg",
    },
    {
      img: "./assets/ourprogram/vid.svg",
    },
  ];
  return (
    <>
      <div className="main bg-gray pt-10">
        <div className="sub-div items-center relative">
          <h1 className="text-2xl lg:text-[40px] text-center font-medium uppercase">
            Young girl engineer program
          </h1>
          <p className="text-xs lg:text-base mb-8 max-w-4xl text-center mt-2">
            Through Our Young Girl Engineer program, we encourage girls to
            participate in STEM learning and choose it as a career. We have
            enrolled 45 girls in our program in two months. They are actively
            taking our classes and working on different projects. We have the
            initiative to encourage girls in pursuing tech businesses.
          </p>

          <div className="flex flex-col lg:flex-row mb-28 justify-center gap-10">
            <div className="relative z-10">
              <img src="./assets/ourprogram/bg.svg" alt="main" />
              <div className="absolute top-0 flex flex-col gap-3 p-6">
                <img src="./assets/ourprogram/img3.svg" alt="main" />
                <h1 className="text-base lg:text-2xl font-semibold">
                  Yumna-Min-Allah
                </h1>
                <p className="text-xs lg:text-base">
                  Our outstanding student from MES has made a record of
                  assembling our educational keybot robot in 20 minutes.
                </p>
              </div>
            </div>
            <div className="relative z-10">
              <img src="./assets/ourprogram/bg.svg" alt="main" />
              <div className="absolute top-0 flex flex-col gap-3 p-6">
                <img src="./assets/ourprogram/img1.svg" alt="main" />
                <h1 className="text-base lg:text-2xl font-semibold">
                  Waleeja Javed
                </h1>
                <p className="text-xs lg:text-base">
                  Waleeja Javed won a worldwide milky-way galaxy competition
                  that was hosted by European Space Agency
                </p>
              </div>
            </div>
          </div>
          <img
            src="./assets/ourprogram/ico1.svg"
            alt="icons"
            className="absolute right-[5%] -bottom-[10%] z-10"
          />
          <img
            src="./assets/ourprogram/ico2.svg"
            alt="icons"
            className="absolute right-[10%] top-[25%]"
          />
          <img
            src="./assets/ourprogram/ico3.svg"
            alt="icons"
            className="absolute left-[10%] top-[35%]"
          />
        </div>
        <img
          src="./assets/ourprogram/foot.svg"
          alt="foot"
          className="-mt-32 z-0 w-screen  object-cover min-w-full h-auto"
        />
      </div>
      <div className="main">
        <div className="sub">
          <h1 className="text-2xl lg:text-[40px] text-center  font-semibold mb-5">
            The first event of the YoungGirl Engineer Program Pakistan
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((data, index) => (
              <img key={index} src={data.img} alt="img" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramHero;
