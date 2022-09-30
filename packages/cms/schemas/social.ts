export default {
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "Url",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Instagram", value: "instagram" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Gmail", value: "gmail" },
          { title: "GitHub", value: "github" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
