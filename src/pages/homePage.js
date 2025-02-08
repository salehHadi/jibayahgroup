import React from "react";
import HeroSection from "../components/hero";
import TimeLine from "../components/timeLine/TimeLine";
import SecondHomeSecion from "../components/SecondHomeSecion";
import OurFeature from "../components/ourFeature/index";
import Reviews from "../components/reviews/index";
import CTAAndFAQForm from "../components/CTAForm/CTAAndFAQForm";
import Footer from "../components/footer/index";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TimeLine />
      <SecondHomeSecion />
      <OurFeature />
      <Reviews />

      <CTAAndFAQForm />
      <Footer />
    </div>
  );
}
