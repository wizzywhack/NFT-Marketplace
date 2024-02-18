import React from "react";
import Image from "next/image";

// Internal Imports
import Style from "./HeroSection.module.css";
import images from "../../img";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect and sell NFTs 🏞️</h1>
          <p>Discover the most outstanding NFTs in all topics.</p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
