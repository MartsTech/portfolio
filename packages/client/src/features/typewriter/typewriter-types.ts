export interface TypewriterProps {
  onLoopDone?: () => void;
  onType?: (counter: number) => void;
  words: string[];
  loop?: number | boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export type TypewriterState = {
  speed: number;
  text: string;
  isDeleting: boolean;
  count: number;
};

export type TypewriterAction =
  | { type: "SPEED"; payload: number }
  | { type: "TYPE"; payload: string; speed: number }
  | { type: "DELETE"; payload: string; speed: number }
  | { type: "COUNT" };
