export default {
  name: "address",
  title: "Address",
  type: "document",
  fields: [
    {
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "town",
      title: "Town",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      town: "town",
      country: "country",
    },
    prepare(selection) {
      const { town, country } = selection;
      return {
        title: town + " · " + country,
      };
    },
  },
};
