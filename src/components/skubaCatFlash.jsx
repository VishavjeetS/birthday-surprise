import { useState } from "react";

const SkubaCatFlash = () => {
  const [timesClicked, setTimesClicked] = useState(0);

  const [buttonLocation, setButtonLocation] = useState({ x: 0, y: 0 });

  const BUTTON_TEXTS = {
    0: "Let's go",
    1: "Sike Biyaaaaatchhhhh",
    2: "Mtallo thak gyi",
    3: "Me is here",
    4: "Okay this is last time",
    5: "Sike Biyaaaaatchhhhh again",
    6: "Okay fr this is last time",
  };

  const handleButtonClick = () => {
    if (timesClicked < 7) {
      setTimesClicked((prev) => prev + 1);

      setButtonLocation({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      return;
    }

    const stories = document.querySelectorAll(".story");

    stories.forEach((story) => {
      if (story.id === "memory-story") {
        story.style.display = "flex";
      } else {
        story.style.display = "none";
      }
    });
  };

  return (
    <div
      id="skuba-story"
      className="w-full h-full story"
      style={{ display: "none" }}
    >
      <img
        src="skuba-cat.gif"
        alt=""
        className="w-full h-full absolute top-0 left-0 "
      />

      <h3 className="font-handcaps text-4xl text-white">Hehahahehahehaheha</h3>

      {timesClicked === 0 ? (
        <button
          onClick={handleButtonClick}
          className="absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2 bg-white/70 cursor-pointer text-black py-2 px-4 rounded-xl font-handcaps"
        >
          Click Me
        </button>
      ) : (
        <button
          onClick={handleButtonClick}
          className="absolute bg-white/70 cursor-pointer text-black py-2 px-4 rounded-xl font-handcaps whitespace-nowrap"
          style={{
            left: `${buttonLocation.x}px`,
            top: `${buttonLocation.y}px`,
          }}
        >
          {BUTTON_TEXTS[timesClicked] || "Let's go fr"}
        </button>
      )}
    </div>
  );
};

export default SkubaCatFlash;
