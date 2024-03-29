export default {
  name: "company",
  title: "Company",
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
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "reference",
      to: { type: "address" },
      validation: (Rule) => Rule.required(),
    },
  ],
};
