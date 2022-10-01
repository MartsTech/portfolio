import { createClient } from "next-sanity";
import { cmsConfig } from "./cms-config";

export const cmsClient = createClient(cmsConfig);

export const cmsPreviewClient = createClient({
  ...cmsConfig,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export const getCmsClient = (usePreview: boolean) =>
  usePreview ? cmsPreviewClient : cmsClient;
