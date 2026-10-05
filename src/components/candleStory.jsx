import { useAppContext } from "../hooks/useAppContext";
import Candle from "./candle";

const CandleStory = () => {
  const { isCandlesLit } = useAppContext();

  const handleButtonClick = () => {
    const stories = document.querySelectorAll(".story");

    stories.forEach((story) => {
      if (story.id === "cake-story") {
        story.style.display = "flex";
      } else {
        story.style.display = "none";
      }
    });
  };

  return (
    <div
      id="candle-story"
      style={{ display: "none" }}
      className="story flex flex-col gap-4 items-center"
    >
      <h3 className="font-handcaps text-4xl text-white">
        This day is special, you know why?
      </h3>
      <p className="text-2xl text-white">Light up the candles my love</p>

      <div className="flex gap-10 w-full justify-center items-center mt-20">
        {Array.from({ length: 3 }).map((_, index) => {
          return <Candle key={"canlde-" + index} />;
        })}
      </div>

      <span className="text-lg text-white/70">Tap the candles to light</span>

      {isCandlesLit && (
        <button
          onClick={handleButtonClick}
          className="bg-white/70 cursor-pointer text-black py-2 px-4 rounded-xl font-handcaps"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default CandleStory;
