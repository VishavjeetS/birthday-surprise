import { useEffect, useMemo, useState } from "react";

const useTypeWriter = (text, speed = 50, enabled = true) => {
  const [typingState, setTypingState] = useState({ text, index: 0 });
  const index = typingState.text === text ? typingState.index : 0;

  useEffect(() => {
    if (!enabled || index >= text.length) return;

    const timeoutId = setTimeout(() => {
      setTypingState((prev) => ({
        text,
        index: (prev.text === text ? prev.index : 0) + 1,
      }));
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [index, speed, text, enabled]);

  const displayText = useMemo(() => text.slice(0, index), [text, index]);

  return displayText;
};

export default useTypeWriter;
