import { ColorData, Icons, Typography } from '../dsl'

import { writeColors } from './colors'
import { writeFonts } from './fonts'
import { writeIcons } from './icons'

function generateFlutterArtifacts(typographies?: Typography[], colors?: ColorData[], icons?: Icons) {
    if (typographies) {
        writeFonts(typographies)
    }

    if (colors) {
        writeColors(colors)
    }

    if (icons) {
        writeIcons(icons)
    }
}

export { generateFlutterArtifacts }