const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withCss({
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals)
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader"
        });
      }
      return config;
    }
  })
)

module.exports = {
  env: {
    API_DOMAIN: "http://127.0.0.1:8000/api/v1/"
    // API_DOMAIN: "http://booster.gazri.net:8000/api/v1/"
  },
}

