module.exports = {
  plugins: {
    "posthtml-modules": {},
    "posthtml-shorten": {
      shortener: {
        process: function (url) {
          return new Promise((resolve, reject) => {
            resolve(url.replace(".html", ""));
          });
        },
      },
      tag: ["a"], // Allowed tags for URL shortening
      attribute: ["href"], // Attributes to replace on the elements
    },
  },
};
