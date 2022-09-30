export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "Url",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
