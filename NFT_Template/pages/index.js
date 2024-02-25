import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

// Internal Imports
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
} from "@/components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics"
      />
      <Filter />
      <Title
        heading="Browse by Category"
        paragraph="Explore the NFTs in the most featured categories"
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
