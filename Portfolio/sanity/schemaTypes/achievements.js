export default {
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'icon',
      title: 'Achievement Icon',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url', // ✅ add external link field
    },
  ],
};
