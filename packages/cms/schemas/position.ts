export default {
  name: "position",
  title: "Position",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [{ title: "Part-time", value: "part-time" }],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
