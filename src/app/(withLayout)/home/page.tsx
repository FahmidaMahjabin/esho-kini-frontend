import Banner from "@/components/ui/Banner";

import AboutUs from "@/components/ui/AboutUs";
import React from "react";
import Reviews from "@/components/ui/Reviews";
import AllServices from "@/components/ui/AllServices";
import OurGoal from "@/components/ui/OurGoal";
import NewIdea from "@/components/ui/NewIdea";

export default function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <div style={{ margin: "50px 20px" }}>
        <AboutUs></AboutUs>
      </div>
      <OurGoal></OurGoal>
      <NewIdea></NewIdea>
      <Reviews></Reviews>
      <AllServices></AllServices>
    </div>
  );
}
