import "./App.css";
import BalloonBackground from "./components/balloonBackground";
import CakeStory from "./components/cakeStory";
import CandleStory from "./components/candleStory";
import HeroSection from "./components/heroSection";
import MemoryStory from "./components/memoryStory";
import MessageStory from "./components/messageStory";
import SkubaCatFlash from "./components/skubaCatFlash";
import StorySection from "./components/storySection";

function App() {
  return (
    <div className="w-dvw h-dvh flex flex-col gap-20 items-center relative px-20">
      <BalloonBackground count={15} />
      <HeroSection />

      <StorySection>
        <CandleStory />
        <CakeStory />
        <MessageStory />
        <SkubaCatFlash />
        <MemoryStory />
      </StorySection>
    </div>
  );
}

export default App;
