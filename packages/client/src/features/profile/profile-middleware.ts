import type { AppMiddleware } from "@app/store/store-types";
import type { AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { profileHydrated } from "./profile-state";

export const profileMiddleware: AppMiddleware = (store) => {
  return (next) => {
    return (action: AnyAction) => {
      if (action.type === HYDRATE) {
        const state = store.getState();

        if (typeof state.profile.profile !== "undefined") {
          return;
        }

        if (typeof action.payload.profile.profile === "undefined") {
          return;
        }

        store.dispatch(
          profileHydrated({
            profile: action.payload.profile.profile,
          })
        );
      }

      const result = next(action);

      return result;
    };
  };
};
