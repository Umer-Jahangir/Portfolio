export default {
  name: "Skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Skill Name",
              type: "string",
            },
            {
              name: "icon",
              title: "Skill Icon",
              type: "image", // upload PNG/SVG here
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
