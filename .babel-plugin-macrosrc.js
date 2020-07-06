module.exports = {
  styledComponents: {
    displayName: process.env.NODE_ENV !== 'production',
  },
  tailwind: {
    config: "./src/tailwind.config.js",
    format: "auto",
  },
};
