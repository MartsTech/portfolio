import { useCallback, useEffect, useReducer, useRef } from "react";
import { typewriterReducer } from "./typewriter-state";
import type { TypewriterProps } from "./typewriter-types";

export const useTypewriter = ({
  words = [],
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  onLoopDone,
  onType,
}: TypewriterProps): (string | number)[] => {
  const [{ isDeleting, speed, text, count }, dispatch] = useReducer(
    typewriterReducer,
    {
      isDeleting: false,
      speed: typeSpeed,
      text: "",
      count: 0,
    }
  );

  const loops = useRef(0);
  const isDone = useRef(false);

  const handleTyping = useCallback(() => {
    const index = count % words.length;
    const fullWord = words[index];

    if (isDeleting) {
      dispatch({ type: "DELETE", payload: fullWord, speed: deleteSpeed });

      if (text === "") {
        dispatch({ type: "COUNT" });
      }

      return;
    }

    dispatch({ type: "TYPE", payload: fullWord, speed: typeSpeed });

    if (onType) {
      onType(count);
    }

    if (text === fullWord) {
      dispatch({ type: "SPEED", payload: delaySpeed });

      if (loop > 0) {
        loops.current += 1;

        if (loops.current / words.length === loop) {
          isDone.current = true;
        }
      }
    }
  }, [
    isDeleting,
    count,
    delaySpeed,
    deleteSpeed,
    loop,
    typeSpeed,
    words,
    text,
    onType,
  ]);

  useEffect(() => {
    const typing = setTimeout(handleTyping, speed);

    if (!isDone.current) {
      return () => clearTimeout(typing);
    }

    clearTimeout(typing);

    if (onLoopDone) {
      onLoopDone();
    }

    return () => clearTimeout(typing);
  }, [handleTyping, speed, onLoopDone]);

  return [text, count + 1];
};
