"use strict";
exports.__esModule = true;
exports.generateReactArtifacts = void 0;
var colors_1 = require("./colors");
var fonts_1 = require("./fonts");
var icons_1 = require("./icons");
function generateReactArtifacts(typographies, colors, icons) {
    if (typographies) {
        fonts_1.writeFonts(typographies);
    }
    if (colors) {
        colors_1.writeColors(colors);
    }
    if (icons) {
        icons_1.writeIcons(icons);
    }
}
exports.generateReactArtifacts = generateReactArtifacts;
