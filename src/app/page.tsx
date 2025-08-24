import React from "react";
import HeroSection from "@/app/components/HeroSection";
import Featured from "@/app/components/featured";
import Testimonies from "@/app/components/testimonies";

const page = () => {
  return (
    <div>
      <HeroSection />
      {/* You can add more components or content here as needed */}
      <Featured />
      {/* Additional sections can be added here */}
      <Testimonies />
      {/* You can add more components or content here as needed */}
      {/* Consider adding a call to action or footer section */}
    </div>
  );
};

export default page;
