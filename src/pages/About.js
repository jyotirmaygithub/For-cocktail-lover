import React from "react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="m-8 mt-32">
        <p className="aboutus">
          At Cocktail, we embody more than just a team; we constitute a united
          passion for pushing boundaries and achieving excellence. Built on the
          principle that every idea, regardless of its size, holds the power to
          make a significant impact, we set forth on a mission to redefine
          conventional norms. Our team, a blend of visionaries, innovators, and
          action-takers, collaborates seamlessly to devise solutions that go
          beyond expectations. Cocktail is more than a company; it is a
          community propelled by an unwavering commitment to advancement. Join
          us as we explore the realms of possibility, transforming dreams into
          accomplishments and forging a legacy that resonates through the
          corridors of innovation
        </p>
      </div>
      <div className="fixed bottom-0 mb-4">
        <Footer />
      </div>
    </>
  );
}
