export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "reference",
      to: [{ type: "address" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
