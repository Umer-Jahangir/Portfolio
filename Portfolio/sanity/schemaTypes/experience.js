export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role / Position',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company / Organization',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'string', // or "date" if you want date picker
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'string',
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
