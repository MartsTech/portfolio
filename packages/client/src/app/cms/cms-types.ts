export interface CmsImage {
  _type: "image";
  asset: CmsAsset;
}

export interface CmsAsset {
  _type: "reference";
  _ref: string;
}
