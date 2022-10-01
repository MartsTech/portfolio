import type { CmsImage } from "@app/cms/cms-types";

export interface ProfileHydrated {
  profile: ProfileModel;
}

export interface ProfileModel {
  _type: "profile";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  environment: ProfileEnvironmentType;
  name: string;
  image: CmsImage;
  description: string[];
  position: PositionModel;
  about: AboutModel;
  experiences: ExperienceModel[];
  projects: ProjectModel[];
  technologies: TechnologyModel[];
  contact: ContactModel;
}

export type ProfileEnvironmentType = "production" | "development";

export interface PositionModel {
  _type: "position";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  type: PositionType;
}

export type PositionType = "full-time" | "part-time";

export interface AboutModel {
  _type: "about";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  description: any[];
  image: CmsImage;
}

export interface ExperienceModel {
  _type: "experience";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  started: string;
  ended: string | null;
  description: string[];
  position: PositionModel;
  company: CompanyModel;
  technologies: TechnologyModel[];
}

export interface CompanyModel {
  _type: "company";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  name: string;
  image: CmsImage;
  location: AddressModel;
}

export interface TechnologyModel {
  _type: "technology";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  name: string;
  image: CmsImage;
}

export interface ProjectModel {
  _type: "project";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  summary: string;
  url: string;
  image: CmsImage;
  technologies: TechnologyModel[];
}

export interface ContactModel {
  _type: "contact";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  email: string;
  address: AddressModel;
  socials: SocialModel[];
}

export interface AddressModel {
  _type: "address";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  country: string;
  town: string;
}

export interface SocialModel {
  _type: "social";
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  url: string;
  type: SocialType;
}

export type SocialType =
  | "github"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "gmail";
