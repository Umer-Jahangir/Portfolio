export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "bannerImg",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "link",
      title: "Project Link",
      type: "url",
    },
    {
      name: "github",
      title: "GitHub Repo",
      type: "url",
    },
  ],
};
