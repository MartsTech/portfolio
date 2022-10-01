import { cmsUrlFor } from "@app/cms";
import type { RootState } from "@app/store/store-types";
import { createAction, createReducer } from "@reduxjs/toolkit";
import type {
  AboutModel,
  PositionModel,
  ProfileHydrated,
  ProfileModel,
  SocialModel,
} from "./profile-types";

export interface ProfileState {
  profile?: ProfileModel;
}

export const profileHydrated =
  createAction<ProfileHydrated>("profile/hydrated");

export const profileLoaded = createAction<{ profile: ProfileModel }>(
  "profile/loaded"
);

const initialState: ProfileState = {
  profile: undefined,
};

export const profileReducer = createReducer(initialState, (builder) => {
  builder.addCase(profileHydrated, (state, action) => {
    state.profile = action.payload.profile;
  });
  builder.addCase(profileLoaded, (state, action) => {
    state.profile = action.payload.profile;
  });
});

export const profileImageUrlSelector = (
  state: RootState
): string | undefined => {
  if (typeof state.profile.profile === "undefined") {
    return;
  }
  const { image } = state.profile.profile;

  return cmsUrlFor(image).url();
};

export const profileDescriptionSelector = (
  state: RootState
): string[] | undefined => state.profile.profile?.description;

export const profileAboutSelector = (
  state: RootState
): AboutModel | undefined => state.profile.profile?.about;

export const profilePositionSelector = (
  state: RootState
): PositionModel | undefined => state.profile.profile?.position;

export const profileEmailSelector = (state: RootState): string | undefined =>
  state.profile.profile?.contact.email;

export const profileSocialsCollectionSelector = (
  state: RootState
): SocialModel[] | undefined => state.profile.profile?.contact.socials;
