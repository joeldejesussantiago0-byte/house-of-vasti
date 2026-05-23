import sharp from 'sharp'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const publicDir = resolve(process.cwd(), 'public')
const source = resolve(process.cwd(), 'assets/favicon-source.png')

if (!existsSync(source)) {
  console.error('Error: assets/favicon-source.png no existe.')
  process.exit(1)
}

const input = sharp(source)

const sizes = [
  { name: 'favicon.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
]

await Promise.all(
  sizes.map(({ name, size }) =>
    input
      .clone()
      .resize(size, size, { fit: 'cover', position: 'centre' })
      .png({ compressionLevel: 9, palette: size <= 32 })
      .toFile(resolve(publicDir, name)),
  ),
)

console.log('Favicons generados en public/')
