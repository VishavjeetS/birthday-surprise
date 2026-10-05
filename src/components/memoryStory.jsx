const MemoryStory = () => {
  const memoryPhotos = [
    {
      img: "mtallo/1.jpeg",
      desc: "Born with a damn cute face isn't she? Destined to be the Bauni Badmash.",
    },
    {
      img: "mtallo/2.jpeg",
      desc: "The chapri era of mtalolo. I mean totally not trying to look baddie.",
    },
    {
      img: "mtallo/3.jpeg",
      desc: "Here's the im feeling cute face. But she never realised it that she's so awesome!!!",
    },
    {
      img: "mtallo/4.jpeg",
      desc: "Some more of feeling cute era. Nonetheless she's damn fine one cutie.",
    },
    {
      img: "mtallo/5.jpeg",
      desc: "The begining of mtallo's entry in pillu's life after sending one hot damn fkin pic",
    },
    {
      img: "mtallo/6.jpeg",
      desc: "How can we forget our fav Katori? She's mtallo ki jaan just like mtallo is meri jaan.",
    },
    {
      img: "mtallo/7.jpeg",
      desc: "That damn sexy face of my mtallo. She's the best person i have ever met in my life.",
    },
    {
      img: "mtallo/8.jpeg",
      desc: "This look literally says, Bitch clothes look good when i wear them. I mean that ain't no lie.",
    },
    {
      img: "mtallo/9.jpeg",
      desc: "What can i say about this, even AI knows the look mtallo gives me. I love you mtallo.",
    },
  ];

  const handleButtonClick = () => {
    const stories = document.querySelectorAll(".story");

    stories.forEach((story) => {
      if (story.id === "surprise-story") {
        story.style.display = "flex";
      } else {
        story.style.display = "none";
      }
    });
  };

  return (
    <div
      id="memory-story"
      className="story w-full h-full flex flex-col items-center"
      style={{ display: "none" }}
    >
      <h3 className="font-handcaps text-4xl text-white">
        Mtallo's life until she met me
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-3.5 gap-y-5 mt-10">
        {memoryPhotos.map((obj, index) => {
          return (
            <div key={"memory-" + index} className="flex gap-3 items-center">
              <div className="w-62">
                <div className="w-62 aspect-square bg-gray-600 rounded-tl-xl rounded-tr-xl">
                  <img
                    src={memoryPhotos[index].img}
                    alt="memory_image"
                    className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
                  />
                </div>

                <div className="min-h-10 bg-white rounded-bl-xl rounded-br-xl">
                  <p className="text-center text-sm">
                    {memoryPhotos[index].desc}
                  </p>
                </div>
              </div>

              {index != memoryPhotos.length - 1 && (
                <img src="right-arrow.svg" alt="" className="w-20 h-20" />
              )}
            </div>
          );
        })}
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
  );
};

export default MemoryStory;
