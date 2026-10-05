import { useState } from "react";
import useTypeWriter from "../hooks/useTypeWriter";

const MessageStory = () => {
  const [showLetter, setShowLetter] = useState(false);

  const handleButtonClick = () => {
    const stories = document.querySelectorAll(".story");

    stories.forEach((story) => {
      if (story.id === "skuba-story") {
        story.style.display = "flex";
      } else {
        story.style.display = "none";
      }
    });
  };

  const text = [
    "You mean the world to me. And I would want to put everything in front of you to make you happy.",
    "I want you to achieve everything we swore and dreamed of together. I have so much trust in you. I'm so proud of you my love.",
    "Always remember, in your life you'll never be alone. You'll always have me by your side and I'll always be there for you.",
    "I love you so much Drishty Patel meri pyari Mtallo❤️",
  ].join("\n\n");

  const displayText = useTypeWriter(text, 50, showLetter);

  return (
    <div
      id="message-story"
      className="story flex flex-col gap-4 items-center w-full max-w-120"
      style={{ display: "none" }}
    >
      <h3 className="font-handcaps text-4xl text-white">
        Here's a letter for you, my love
      </h3>

      {!showLetter && (
        <div className="flex flex-col items-center pb-5">
          <img
            src="mail.svg"
            alt="mail"
            onClick={() => setShowLetter(true)}
            className="w-full h-full cursor-pointer"
          />
          <span className="text-lg text-white/70">
            Tap on envelop to read the message
          </span>
        </div>
      )}

      <div
        className={`${showLetter ? "opacity-100" : "opacity-0 hidden"} transform duration-250 transition-opacity w-full h-full flex flex-col items-center`}
      >
        <div className="bg-white  flex flex-col p-4 max-w-110 w-full min-h-100">
          <p className="text-black text-xl">Dear Drishty,</p>

          <div className="text-black text-xl mt-3">
            <p className="whitespace-pre-line">{displayText}</p>
            {displayText === text && (
              <p className="mt-5 w-full text-right">Pillu xx</p>
            )}
          </div>
        </div>

        <div className="mt-5">
          <button
            onClick={handleButtonClick}
            className="bg-white/70 cursor-pointer text-black py-2 px-4 rounded-xl font-handcaps"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageStory;
