export default () => ({
  ckeditor: {
    enabled: true,
    config: {
      fontSize: {
        options: [8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 50, 71],
      },
    },
  },
  "platform-field": {
    enabled: true,
    resolve: "./src/plugins/platform-field",
  },
});
