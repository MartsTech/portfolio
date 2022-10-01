import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  createCurrentUserHook,
  createPreviewSubscriptionHook,
} from "next-sanity";
import { cmsConfig } from "./cms-config";

export const cmsUrlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(cmsConfig).image(source);

export const useCmsPreviewSubscription =
  createPreviewSubscriptionHook(cmsConfig);

export const useCmsCurrentUser = createCurrentUserHook(cmsConfig);
