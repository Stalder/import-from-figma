import { Icons } from '../dsl'

import { saveIconSvg } from './resource'

const currentColor = 'black'
const currentColorRegexp = new RegExp(currentColor, 'g')

function formatComponentName(name: string) {
  const words = name
    .replace(/[^a-z0-9]+/gi, ' ')
    .trim()
    .split(' ')

  return words.map((word) => word.slice(0, 1).toLocaleUpperCase() + word.slice(1)).join('')
}

function saveIcon(name: string, text: string) {
  if (!text) {
    console.log(`incorrect icon: ${name}`)
    return
  }

  const fileName = formatComponentName(name)

  saveIconSvg(fileName, text)
}

async function writeIcons(icons: Icons) {
  Object.keys(icons).forEach(key => saveIcon(key, icons[key]))
}

export { writeIcons }
