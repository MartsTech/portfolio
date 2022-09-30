export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "position",
      title: "Position",
      type: "reference",
      to: [{ type: "position" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "company",
      title: "Company",
      type: "reference",
      to: [{ type: "company" }],
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
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "started",
      title: "Started",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ended",
      title: "Ended",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "position.title",
      type: "position.type",
      subtitle: "company.name",
      media: "company.image",
    },
    prepare(selection) {
      const { title, type, subtitle, media } = selection;
      return {
        title,
        subtitle:
          subtitle + " · " + type.charAt(0).toUpperCase() + type.slice(1),
        media,
      };
    },
  },
};
