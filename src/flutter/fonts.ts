import { camelCase } from 'change-case';
import { Typography } from '../dsl';
import { saveFonts } from './resource';

function formatFont(fontNode: Typography) {
  const { italic, fontWeight, fontSize, lineHeightPx, fontFamily } = fontNode

  return `TextStyle(
        fontFamily: '${fontFamily.replace(' ', '-')}',
        fontSize: ${fontSize},
        fontWeight: FontWeight.w${fontWeight},
        letterSpacing: 0,
      )`
}

function parseColorName(fullName: string) {
  const fullNameWithoutSize = fullName.split('-')[0].trim()
  return camelCase(fullNameWithoutSize.replace(/[ /%()+#,".]+/g, ''))
}

async function writeFonts(typographies: Typography[],) {
  const typographyProps = typographies
    .map(
      (node) => `  static const ${parseColorName(node.name)} = ${formatFont(node)};`
    )
    .join('\n  ')

  const content = `// Generated by import-from-figma. Do not modify by hand

import 'package:flutter/widgets.dart';

class FigmaTypography {
${typographyProps}
}
`
  saveFonts('figma_typography', content)
}

export { writeFonts };

