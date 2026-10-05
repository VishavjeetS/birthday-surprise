import "./App.css";
import BalloonBackground from "./components/balloonBackground";
import CakeStory from "./components/cakeStory";
import CandleStory from "./components/candleStory";
import HeartArrowStory from "./components/heartArrowStory";
import HeroSection from "./components/heroSection";
import MemoryStory from "./components/memoryStory";
import MessageStory from "./components/messageStory";
import SkubaCatFlash from "./components/skubaCatFlash";
import StorySection from "./components/storySection";
import SurpriseStoy from "./components/surpriseStoy";

function App() {
  return (
    <div className="w-dvw h-dvh flex flex-col gap-20 items-center relative px-20 pb-10 overflow-y-auto">
      <BalloonBackground count={15} />
      <HeroSection />

      <StorySection>
        <HeartArrowStory />
        <CandleStory />
        <CakeStory />
        <MessageStory />
        <SkubaCatFlash />
        <MemoryStory />
        <SurpriseStoy />
      </StorySection>
    </div>
  );
}

export default App;
