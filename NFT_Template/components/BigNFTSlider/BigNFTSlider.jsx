import { useCallback, useState } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import {
  TbArrowBigLeftLine,
  TbArrowBigRightLine,
  TbArrowBigLine,
} from "react-icons/tb";

// Internal Imports
import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import Button from "../Button/Button";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Anas M Shaikh",
      collection: "Best",
      price: "0000000000212 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 27,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "YOLO NFT",
      id: 2,
      name: "Sayma M Shaikh",
      collection: "Best",
      price: "0000000000212 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 37,
        hours: 24,
        minutes: 51,
        seconds: 45,
      },
    },
    {
      title: "Bye NFT",
      id: 3,
      name: "Habibi",
      collection: "notBest",
      price: "00000000671212 ETH",
      like: 23,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 37,
        hours: 40,
        minutes: 17,
        seconds: 49,
      },
    },
    {
      title: "cool NFT",
      id: 4,
      name: "Nargis M Shaikh",
      collection: "TheBest",
      price: "000000008772 ETH",
      like: 2043,
      image: images.user4,
      nftImage: images.nft_image_2,
      time: {
        days: 7,
        hours: 1,
        minutes: 11,
        seconds: 33,
      },
    },
  ];

  //   Increment
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  // Decrement
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.BigNFTSlider}>
      <div className={Style.BigNFTSlider_box}>
        <div className={Style.BigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.BigNFTSlider_box_left_creator}>
            <div className={Style.BigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.BigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.BigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}
                  {""}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className={Style.BigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.BigNFTSlider_box_left_creator_collection_icon}
              />
              <div
                className={Style.BigNFTSlider_box_left_creator_collection_info}
              >
                <p>collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className={Style.BigNFTSlider_box_left_bidding}>
            <div className={Style.BigNFTSlider_box_left_bidding_box}>
              <small>Current bid</small>
              <p>
                {sliderData[idNumber].price}
                <span>$221.21</span>
              </p>
            </div>
            <p className={Style.BigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.BigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in </span>
            </p>
            <div className={Style.BigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>
              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>
              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>
              <div
                className={Style.BigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>
            <div className={Style.BigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>
          <div className={Style.BigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLine
              className={Style.BigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.BigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>
        <div className={Style.BigNFTSlider_box_right}>
          <div className={Style.BigNFTSlider_box_right_box}>
            <Image
              className={Style.BigNFTSlider_box_right_box_img}
              src={sliderData[idNumber].nftImage}
              alt="NFT Image"
            />
            <div className={Style.BigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
