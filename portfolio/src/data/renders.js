// Every image in src/assets/blender becomes a tile in the Blender section.
const files = import.meta.glob('../assets/blender/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

// "02-low-poly-house.png" -> "Low poly house"
function titleFromPath(path) {
  const name = path.split('/').pop().replace(/\.[^.]+$/, '')
  const words = name.replace(/^\d+[-_ ]*/, '').replace(/[-_]+/g, ' ').trim()
  return words.charAt(0).toUpperCase() + words.slice(1)
}

const renders = Object.keys(files)
  .sort()
  .map((path) => ({ src: files[path], title: titleFromPath(path) }))

export default renders
