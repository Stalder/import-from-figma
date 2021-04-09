import { writeFileSync, rmdirSync } from 'fs'
import { join } from 'path'
import { mkdir } from 'shelljs'

import { Config } from '../config'

let BASE_FOLDER: string
let FONTS_FOLDER: string
let COLORS_FOLDER: string
let ICONS_FOLDER: string

function initializeFlutterResource(config: Config) {
  const { outputDir, iconsDir, colorsDir, typographyDir } = config

  BASE_FOLDER = outputDir
  FONTS_FOLDER = typographyDir ? join(BASE_FOLDER, typographyDir) : join(BASE_FOLDER, 'fonts')
  COLORS_FOLDER = colorsDir ? join(BASE_FOLDER, colorsDir) : join(BASE_FOLDER, 'colors')
  ICONS_FOLDER = iconsDir ? join(BASE_FOLDER, iconsDir) : join(BASE_FOLDER, 'icons')

  rmdirSync(FONTS_FOLDER, { recursive: true })
  rmdirSync(COLORS_FOLDER, { recursive: true })
  rmdirSync(ICONS_FOLDER, { recursive: true })

  mkdir('-p', FONTS_FOLDER)
  if (COLORS_FOLDER !== FONTS_FOLDER) mkdir('-p', COLORS_FOLDER)
  if (ICONS_FOLDER !== FONTS_FOLDER && ICONS_FOLDER !== COLORS_FOLDER) mkdir('-p', ICONS_FOLDER)
}

function saveColors(name: string, content: string) {
  writeFileSync(join(COLORS_FOLDER, `${name}.g.dart`), content, {
    encoding: 'utf-8',
  })
}

function saveFonts(name: string, content: string) {
  writeFileSync(join(FONTS_FOLDER, `${name}.g.dart`), content, {
    encoding: 'utf-8',
  })
}

function saveIconSvg(name: string, content: string) {
  writeFileSync(join(ICONS_FOLDER, `${name}.svg`), content, {
    encoding: 'utf-8',
  })
}

export { initializeFlutterResource, saveColors, saveFonts, saveIconSvg }
