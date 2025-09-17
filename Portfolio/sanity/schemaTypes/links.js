export default {
  name: "links",
  title: "Links",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
    },
    {
      name: "accounts",
      title: "Accounts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image", // upload PNG/SVG here
              options: {
                hotspot: true,
              },
            },
            {
              name: "link",
              title: "Link",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
};
