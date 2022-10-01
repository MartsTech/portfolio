import { groq } from "next-sanity";

export const getProfileQuery = groq`
*[_type == "profile" && environment == $environment][0] {
  _type,
  _id,
  _rev,
  _createdAt,
  _updatedAt,
  environment,
  name,
  image,
  description,
  position -> {
    _type,
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    type
  },
  about -> {
    _type,
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    description,
    image
  },
  experiences[] -> {
    _type,
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    description,
    started,
    ended,
    company -> {
      _type,
      _id,
      _rev,
      _createdAt,
      _updatedAt,
      name,
      image,
      location -> {
        _type,
        _id,
        _rev,
        _createdAt,
        _updatedAt,
        country,
        town
      }
    },
    position -> {
      _type,
      _id,
      _rev,
      _createdAt,
      _updatedAt,
      title,
      type
    },
    technologies[] -> {
      _type,
      _id,
      _rev,
      _createdAt,
      _updatedAt,
      name,
      image
    },
  },  
  projects[] -> {
    _type,
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    title,
    summary,
    url,
    image,
    technologies[] -> {
      _type,
      _id,
      _rev,
      _createdAt,
      _updatedAt,
      name,
      image
    },
  },
  technologies[] -> {
    _type,
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    name,
    image
  },
  contact -> {
    _type,
    _id,
    _rev,
    _createdAt,
    _updatedAt,
    email,
    address -> {
      _type,
      _id,
      _rev,
      _createdAt,
      _updatedAt,
      country,
      town
    },
    socials[] -> {
      _type,
      _id,
      _rev,
      _createdAt,
      _updatedAt,
      title,
      type,
      url
    }
  },
}`;
