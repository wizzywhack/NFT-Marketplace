import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";

// Internal Imports
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vero
            voluptatum id molestiae neque sit inventore deleniti est, magnam
            mollitia iusto? Veritatis commodi suscipit qui, ratione perferendis
            maxime vel aperiam.
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>
          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium discount</small>
          </div>
          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>
        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
