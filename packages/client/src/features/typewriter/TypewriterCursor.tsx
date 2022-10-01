import type { FC } from "react";

interface CursorProps {
  cursorStyle?: string;
  cursorColor?: string;
}

const TypewriterCursor: FC<CursorProps> = ({
  cursorStyle = "|",
  cursorColor = "inherit",
}) => {
  return (
    <span
      style={{ color: cursorColor }}
      className="relative left-1 top-0 animate-ping text-inherit"
    >
      {cursorStyle}
    </span>
  );
};

export default TypewriterCursor;
