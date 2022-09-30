import type { TypewriterAction, TypewriterState } from "./typewriter-types";

export const typewriterReducer = (
  state: TypewriterState,
  action: TypewriterAction
): TypewriterState => {
  switch (action.type) {
    case "SPEED":
      return {
        ...state,
        isDeleting: true,
        speed: action.payload,
      };
    case "TYPE":
      return {
        ...state,
        speed: action.speed,
        text: action.payload?.substring(0, state.text.length + 1),
      };
    case "DELETE":
      return {
        ...state,
        speed: action.speed,
        text: action.payload?.substring(0, state.text.length - 1),
      };
    case "COUNT":
      return {
        ...state,
        isDeleting: false,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
