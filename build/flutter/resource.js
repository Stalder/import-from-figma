"use strict";
exports.__esModule = true;
exports.saveIconSvg = exports.saveFonts = exports.saveColors = exports.initializeFlutterResource = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var shelljs_1 = require("shelljs");
var BASE_FOLDER;
var FONTS_FOLDER;
var COLORS_FOLDER;
var ICONS_FOLDER;
function initializeFlutterResource(config) {
    var outputDir = config.outputDir, iconsDir = config.iconsDir, colorsDir = config.colorsDir, typographyDir = config.typographyDir;
    BASE_FOLDER = outputDir;
    FONTS_FOLDER = typographyDir ? path_1.join(BASE_FOLDER, typographyDir) : path_1.join(BASE_FOLDER, 'fonts');
    COLORS_FOLDER = colorsDir ? path_1.join(BASE_FOLDER, colorsDir) : path_1.join(BASE_FOLDER, 'colors');
    ICONS_FOLDER = iconsDir ? path_1.join(BASE_FOLDER, iconsDir) : path_1.join(BASE_FOLDER, 'icons');
    fs_1.rmdirSync(FONTS_FOLDER, { recursive: true });
    fs_1.rmdirSync(COLORS_FOLDER, { recursive: true });
    fs_1.rmdirSync(ICONS_FOLDER, { recursive: true });
    shelljs_1.mkdir('-p', FONTS_FOLDER);
    if (COLORS_FOLDER !== FONTS_FOLDER)
        shelljs_1.mkdir('-p', COLORS_FOLDER);
    if (ICONS_FOLDER !== FONTS_FOLDER && ICONS_FOLDER !== COLORS_FOLDER)
        shelljs_1.mkdir('-p', ICONS_FOLDER);
}
exports.initializeFlutterResource = initializeFlutterResource;
function saveColors(name, content) {
    fs_1.writeFileSync(path_1.join(COLORS_FOLDER, name + ".g.dart"), content, {
        encoding: 'utf-8'
    });
}
exports.saveColors = saveColors;
function saveFonts(name, content) {
    fs_1.writeFileSync(path_1.join(FONTS_FOLDER, name + ".g.dart"), content, {
        encoding: 'utf-8'
    });
}
exports.saveFonts = saveFonts;
function saveIconSvg(name, content) {
    fs_1.writeFileSync(path_1.join(ICONS_FOLDER, name + ".svg"), content, {
        encoding: 'utf-8'
    });
}
exports.saveIconSvg = saveIconSvg;
