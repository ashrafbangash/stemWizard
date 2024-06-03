import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";

const BlogDetail = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="sub items-center">
          <h1 className="text-2xl lg:text-[40px]  font-medium capitalize mb-10">
            Our Blogs
          </h1>

          <div className="flex flex-col">
            <div className="flex justify-between items-end mb-2">
              {/* <img src="./assets/blog/blgimg.svg" alt="" /> */}
              <div className="flex gap-4 items-center text-sm lg:text-base">
                <span>23 Mar 2023 2 Min</span> <FaEye size={20} />
                <span>5 Views</span> <CiHeart size={20} />
              </div>
            </div>

            <h1 className="text-base lg:text-2xl lg:text-[40px]  font-medium capitalize ">
              The Importance Of STEM Education For Kids: Why It Matters
            </h1>
            <p className="mb-6 text-xs lg:text-base">
              The world is changing rapidly and the skills that children need to
              succeed are changing with it. In order to prepare children for the
              jobs of the future, we need to make sure they are receiving a
              high-quality STEM education.
            </p>
            <p className=" text-xs lg:text-base">
              STEM stands for Science, Technology, Engineering, and Mathematics.
              These are the fields that are going to be in high demand in the
              coming years and the skills that children learn in these fields
              will be essential for their future success.
            </p>
            <p className="mb-6 text-xs lg:text-base">
              A recent study showed that for every one percent increase in STEM
              graduates, there is a corresponding decrease in unemployment of
              0.5 percent. This demonstrates the importance of STEM education in
              the current job market. In addition to preparing children for the
              jobs of the future, STEM education is also important for
              developing critical thinking and problem-solving skills. These
              skills are going to be essential no matter what field children
              eventually choose to pursue. So, why is STEM education so
              important? Keep reading to find out!{" "}
            </p>
            <p className="mb-6 text-xs lg:text-base">
              1. STEM Education prepares children for the jobs of the future
            </p>
            <p className=" text-xs lg:text-base">
              As the world changes, so do the skills that are in demand. In
              order to prepare children for the jobs of the future, we need to
              make sure they are receiving a high-quality STEM education
            </p>
            <p className="mb-6 text-xs lg:text-base">
              2. STEM Education develops critical thinking and problem-solving
              skills No matter what field children eventually choose to pursue,
              critical thinking and problem-solving skills will be essential.
              STEM education is important for developing these skills.
            </p>
            <p className="mb-6 text-xs lg:text-base">
              3. STEM Education is important for the economy A recent study
              showed that for every one percent increase in STEM graduates,
              there is a corresponding decrease in unemployment of 0.5 percent.
              This demonstrates the importance of STEM education in the current
              job market.
            </p>
            <p className="mb-10 text-xs lg:text-base">
              4. STEM Education fosters creativity and innovation Creativity and
              innovation are essential skills for success in any field.STEM
              education fosters these skills by teaching children how to think
              outside the box and come up with new solutions to problems.
            </p>

            <h1 className="text-base lg:text-2xl font-semibold mb-6">
              Comments
            </h1>

            <div className="flex flex-col  pb-6 mb-4 border-b border-[#999999]">
              <div className="flex gap-4 items-center mb-4 lg:text-base text-sm font-medium">
                <span>Niala Saleem</span> <FaEye size={20} />
                <span>5 Views</span> <CiHeart size={20} />
              </div>
              <p className=" text-xs lg:text-base">
                The world is changing rapidly and the skills that children need
                to succeed are changing with it. In order to prepare children
                for the jobs of the future, we need to make sure they are
                receiving a high-quality STEM education.
              </p>
            </div>

            <div className="flex flex-col  pb-6 mb-4 border-b border-[#999999]">
              <div className="flex gap-4 items-center mb-4 lg:text-base text-sm font-medium">
                <span>Niala Saleem</span> <FaEye size={20} />
                <span>5 Views</span> <CiHeart size={20} />
              </div>
              <p className=" text-xs lg:text-base">
                The world is changing rapidly and the skills that children need
                to succeed are changing with it. In order to prepare children
                for the jobs of the future, we need to make sure they are
                receiving a high-quality STEM education.
              </p>
            </div>

            <div className="flex flex-col  pb-6 mb-4 border-b border-[#999999]">
              <div className="flex gap-4 items-center mb-4 lg:text-base text-sm font-medium">
                <span>Niala Saleem</span> <FaEye size={20} />
                <span>5 Views</span> <CiHeart size={20} />
              </div>
              <p className=" text-xs lg:text-base">
                The world is changing rapidly and the skills that children need
                to succeed are changing with it. In order to prepare children
                for the jobs of the future, we need to make sure they are
                receiving a high-quality STEM education.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
