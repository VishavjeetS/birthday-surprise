import { useState } from "react";

const SurpriseStoy = () => {
  const [clickTime, setClickTime] = useState(0);
  const [showAccpeted, setShowAccepted] = useState(false);

  const DEFAULT_TEXTS = [
    "No?",
    "Fir soch lo",
    "Pakka?",
    "Please?",
    "Mtallo no loves me",
  ];

  var isRejected = clickTime === DEFAULT_TEXTS.length - 1;

  const handleButtonClick = (e) => {
    const button = e.target.closest("button");
    const isRejected = button.classList.contains("no");

    if (isRejected) {
      setClickTime((prev) =>
        prev === DEFAULT_TEXTS.length - 1 ? prev : prev + 1,
      );

      button.innerText = DEFAULT_TEXTS[clickTime];
    } else {
      setShowAccepted(true);
      setClickTime(0); // Reset clickTime when
    }
  };

  const rejectedText = [
    "Me so sad",
    "Mtallo no loves me",
    "Daaru on top",
    "Ab meri maalkin kon hogi",
    "Dukh Dard Peedah Tanhai",
  ];

  const acceptedText = [
    "I love you so much meri pyaari si tmallo",
    "I know I'm little rough on the efforts vaala part, but I promise I'll do everything to make you feel loved in this relatioinship",
    "With you, I exist and I wish for all the upcoming days in our life",
    "I love you Drishty Patel",
  ];

  return (
    <div
      id="surprise-story"
      className="story flex flex-col items-center gap-4 w-full max-w-xl overflow-hidden min-w-xl"
      style={{ display: "none" }}
    >
      <h3 className="font-handcaps text-4xl text-white">A small gift</h3>

      <iframe
        src="https://samplelib.com/mp4/sample-5s.mp4"
        // width="100%"
        // height="300"
        allowFullScreen
        className="w-full h-80 object-cover rounded-2xl"
      />

      <div className="w-full max-h-80 h-auto">
        {isRejected && (
          <div className="flex flex-row items-start justify-between w-full gap-4 h-full">
            <img src="mtallo/no.png" className="h-full rounded-2xl" alt="" />
            <div className="flex flex-col w-full gap-2 items-start">
              {rejectedText.map((text, idx) => {
                return (
                  <p
                    key={idx + "-text"}
                    className="text-start text-black/80 font-medium text-xl"
                  >
                    {text}
                  </p>
                );
              })}

              <div className="mt-5">
                <p className=" text-black/80 font-medium text-2xl">
                  Chal chup chaap ye neeche button ko daba bhdwdi.
                </p>
                <button
                  onClick={handleButtonClick}
                  className="bg-white/70 yes cursor-pointer text-black py-2 px-4 rounded-xl font-handcaps"
                >
                  Ji Maalik
                </button>
              </div>
            </div>
          </div>
        )}

        {showAccpeted && !isRejected && (
          <div className="flex flex-row items-start justify-between w-full gap-4 h-full">
            <img src="mtallo/yes.png" className="h-full rounded-lg " alt="" />
            <div className="flex flex-col w-full gap-2 items-start">
              {acceptedText.map((text, idx) => {
                return (
                  <p
                    key={idx + "-text"}
                    className="text-start text-black/80 font-medium text-xl"
                  >
                    {text}
                  </p>
                );
              })}

              <div className="mt-5">
                <p className=" text-black/80 font-medium text-2xl">
                  HAPPY BIRTHDAYYY BIIYAAATCHHHH
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-evenly w-full">
        <button
          onClick={handleButtonClick}
          className="bg-white/70 yes cursor-pointer text-black py-2 px-4 rounded-xl font-handcaps"
        >
          Biklul Ha
        </button>

        <button
          onClick={handleButtonClick}
          className="bg-white/70 no cursor-pointer text-black py-2 px-4 rounded-xl font-handcaps"
        >
          {DEFAULT_TEXTS[clickTime] ||
            DEFAULT_TEXTS.at(DEFAULT_TEXTS.length - 1)}
        </button>
      </div>
    </div>
  );
};

export default SurpriseStoy;
