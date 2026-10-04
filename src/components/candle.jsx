import { useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import "../styles/candle.css";

const Candle = ({
  height = "150",
  width = "60",
  className = "",
  isActive = false,
}) => {
  const { setNumberOfCandlesLit } = useAppContext();

  const handleOnClick = (e) => {
    const candle = e.target.closest(".candle");
    const flame = candle.querySelector(".flame");
    const glow = candle.querySelector(".glow");
    flame.classList.add("active");
    glow.classList.add("active");

    setNumberOfCandlesLit((prev) => prev + 1);
  };

  return (
    <div style={{ height: `${height}px`, width: `${width}px` }}>
      <div
        className={`candle relative cursor-pointer ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
        onClick={(e) => handleOnClick(e)}
      >
        <div className="wick"></div>
        <div className={`flame ${isActive ? "active" : ""}`}></div>
        <div className={`glow ${isActive ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default Candle;
