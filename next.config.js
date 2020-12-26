const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withFont = require("next-fonts");

module.exports = withFont(withImages(withCSS));
