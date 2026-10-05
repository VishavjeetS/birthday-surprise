import { useState } from "react";
import Candle from "./candle";

const CakeStory = () => {
  const [showNextButton, setShowNextButton] = useState(false);
  const handleCakeClick = () => {
    document.querySelectorAll(".candle").forEach((candle) => {
      candle.querySelector(".flame").classList.remove("active");
      candle.querySelector(".glow").classList.remove("active");
    });

    document.getElementById("make-wish").innerText =
      "Close your eyes and make a wish, darling";

    setInterval(() => {
      setShowNextButton(true);
    }, 3000);
  };

  const handleButtonClick = () => {
    const stories = document.querySelectorAll(".story");

    stories.forEach((story) => {
      if (story.id === "message-story") {
        story.style.display = "flex";
      } else {
        story.style.display = "none";
      }
    });
  };
  return (
    <div
      id="cake-story"
      className="story flex flex-col items-center"
      style={{ display: "none" }}
    >
      <h3 id="make-wish" className="font-handcaps text-4xl text-white">
        Blow the candles, my love
      </h3>
      <div className="flex">
        {showNextButton && (
          <div className="flex flex-col items-center">
            <img src="skuba-cat.gif" alt="" />
            <p className="text-2xl text-white">
              I know what ya wished for you dirty hoe
            </p>
          </div>
        )}
        <div>
          <div className="flex gap-5 w-full justify-center items-center mt-20">
            {Array.from({ length: 3 }).map((_, index) => {
              return (
                <Candle
                  key={"canlde-" + index}
                  height={80}
                  width={20}
                  className="-bottom-5"
                  isActive={true}
                />
              );
            })}
          </div>
          <img
            onClick={handleCakeClick}
            src="cake.png"
            alt="cake"
            width={300}
            className="cursor-pointer"
          />
        </div>

        {showNextButton && (
          <div className="flex flex-col items-center">
            <img src="skuba-cat.gif" alt="" />
            <p className="text-2xl text-white">yes!! exactly that.</p>
          </div>
        )}
      </div>

      <span className="text-lg text-white/70">
        Tap on the cake on blow the candles
      </span>

      <div className="mt-5">
        {showNextButton && (
          <button
            onClick={handleButtonClick}
            className="bg-white/70 cursor-pointer text-black py-2 px-4 rounded-xl font-handcaps"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CakeStory;
