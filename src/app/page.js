
import Header from "@/components/Header";
import ContactUs from "@/components/HomeComponents/ContactUs";
import CourseOverView from "@/components/HomeComponents/CourseOverView";
import GrowingChild from "@/components/HomeComponents/GrowingChild";
import Hero from "@/components/HomeComponents/Hero";
import NewsAndHeadlines from "@/components/HomeComponents/NewsAndHeadlines";
import StemStartup from "@/components/HomeComponents/StemStartup";
import WhatIsStem from "@/components/HomeComponents/WhatIsStem";
import WorkWithus from "@/components/HomeComponents/WorkWithUs";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <Hero/>
      <WhatIsStem/>
      <GrowingChild/>
      <StemStartup/>
      <CourseOverView/>
      <NewsAndHeadlines/>
      <WorkWithus/>
      <ContactUs/>

    </div>
  );
}
