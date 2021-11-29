export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  properties: {
    mood: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['happy', 'sad', 'surprised'],
      },
    },
  },
};
