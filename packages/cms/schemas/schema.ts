import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import about from "./about";
import address from "./address";
import company from "./company";
import contact from "./contact";
import experience from "./experience";
import position from "./position";
import profile from "./profile";
import project from "./project";
import social from "./social";
import technology from "./technology";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    about,
    address,
    company,
    contact,
    experience,
    position,
    profile,
    project,
    social,
    technology,
  ]),
});
