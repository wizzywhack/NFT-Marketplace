// Internal Import
import Style from "./Button.module.css";
const Button = ({ btnName, handleClick }) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={() => handleClick()}>
        {btnName}
        {/* abc */}
      </button>
    </div>
  );
};

export default Button;
