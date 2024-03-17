// gatsby-config.js

module.exports = {
    plugins: [
      {
        resolve: '@chakra-ui/gatsby-plugin',
        options: {
          /**
           * @property {boolean} [resetCSS=true]
           * if false, this plugin will not use `<CSSReset />
           */
          resetCSS: true,
          /**
           * @property {number} [portalZIndex=undefined]
           * The z-index to apply to all portal nodes. This is useful
           * if your app uses a lot z-index to position elements.
           */
          portalZIndex: undefined,
        },
      },
    ],
  }