export default {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "reference",
      to: [{ type: "position" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
