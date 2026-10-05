import { useRef, useState } from "react";
import "../styles/heart.css";

const HeartArrowStory = () => {
  const [phase, setPhase] = useState("ready");
  const [pullDistance, setPullDistance] = useState(0);
  const [shotOffset, setShotOffset] = useState({ x: 0, y: 0 });
  const arrowRef = useRef(null);
  const heartRef = useRef(null);
  const pullDistanceRef = useRef(0);
  const pointerStartRef = useRef(null);

  const handleContinue = () => {
    const stories = document.querySelectorAll(".story");

    stories.forEach((story) => {
      story.style.display = story.id === "candle-story" ? "flex" : "none";
    });
  };

  const startShot = (distance) => {
    const arrow = arrowRef.current;
    const heart = heartRef.current;

    if (!arrow || !heart) return;

    const arrowBounds = arrow.getBoundingClientRect();
    const heartBounds = heart.getBoundingClientRect();
    const arrowBaseTop = arrowBounds.top - pullDistanceRef.current;

    pullDistanceRef.current = distance;
    setPullDistance(distance);
    setShotOffset({
      x:
        heartBounds.left +
        heartBounds.width / 2 -
        (arrowBounds.left + arrowBounds.width / 2),
      y: heartBounds.top + heartBounds.height / 2 - arrowBaseTop,
    });
    setPhase("shooting");
  };

  const handlePointerDown = (event) => {
    if (phase !== "ready") return;

    event.currentTarget.setPointerCapture(event.pointerId);
    pointerStartRef.current = { pointerId: event.pointerId, y: event.clientY };
    setPhase("dragging");
  };

  const handlePointerMove = (event) => {
    const pointerStart = pointerStartRef.current;
    if (!pointerStart || pointerStart.pointerId !== event.pointerId) return;

    const distance = Math.min(96, Math.max(0, event.clientY - pointerStart.y));
    pullDistanceRef.current = distance;
    setPullDistance(distance);
  };

  const handlePointerUp = (event) => {
    if (pointerStartRef.current?.pointerId !== event.pointerId) return;

    pointerStartRef.current = null;
    const distance = pullDistanceRef.current;

    if (distance < 12) {
      pullDistanceRef.current = 0;
      setPullDistance(0);
      setPhase("ready");
      return;
    }

    startShot(distance);
  };

  const handlePointerCancel = () => {
    pointerStartRef.current = null;
    pullDistanceRef.current = 0;
    setPullDistance(0);
    setPhase("ready");
  };

  const handleArrowKeyDown = (event) => {
    if (phase !== "ready" || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    startShot(72);
  };

  return (
    <div id="heart-story" className="story heart-story">
      <h3
        className="heart-hint font-handcaps text-2xl font-bold"
        aria-live="polite"
      >
        {phase === "ready" || phase === "dragging"
          ? "Pull the arrow down, then release"
          : phase === "done"
            ? "Happy Birthday My Queen".toUpperCase()
            : ""}
      </h3>

      <div className="heart-scene">
        {phase === "done" && (
          <img
            src="mtallo/queen.png"
            alt=""
            className="w-full h-full object-contain rounded-2xl"
          />
        )}

        {phase !== "done" && (
          <div>
            <img
              ref={heartRef}
              src="heart.svg"
              alt=""
              aria-hidden="true"
              className={`heart-target${phase === "hit" || phase === "done" ? " is-hit" : ""}`}
              onAnimationEnd={() => {
                if (phase === "hit") setPhase("done");
              }}
            />
            <img src="bow.png" alt="bow" className="heart-bow" />
          </div>
        )}
        {phase !== "hit" && phase !== "done" && (
          <img
            ref={arrowRef}
            src="arrow.png"
            alt="Pull back and release the arrow to shoot the heart"
            role="button"
            tabIndex={phase === "ready" ? 0 : -1}
            draggable="false"
            className={`heart-arrow${phase === "dragging" ? " is-dragging" : ""}${phase === "shooting" ? " is-shooting" : ""}`}
            style={{
              "--pull-distance": `${pullDistance}px`,
              "--shot-x": `${shotOffset.x}px`,
              "--shot-y": `${shotOffset.y}px`,
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onKeyDown={handleArrowKeyDown}
            onAnimationEnd={() => {
              if (phase === "shooting") setPhase("hit");
            }}
          />
        )}
      </div>

      {phase === "done" && (
        <button
          type="button"
          className="heart-continue"
          onClick={handleContinue}
        >
          Let's Go
        </button>
      )}
    </div>
  );
};

export default HeartArrowStory;
