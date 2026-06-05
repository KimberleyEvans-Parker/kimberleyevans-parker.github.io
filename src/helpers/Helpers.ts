const allImages = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg,mp4,gif,JPG}', { eager: true })

export const importAllPhotosFromFolder = (folderName: string) => {
  return Object.entries(allImages)
    .filter(([path]) => path.includes(`/assets/${folderName}/`))
    .map(([_, mod]: any) => mod.default)
}

export const getIndexOfImage = (allImages: string[], name: string) => {
  for (let i = 0; i < allImages.length; i++) {
    let currentImage = allImages[i]
    const pathParts = currentImage.split('/')
    const decodedName = decodeURIComponent(pathParts[pathParts.length - 1].split('.')[0])
    
    if (decodedName === name) return i
  }
  return -1
}

function removepath(path: string) {
  const pathParts = path.split('/')
  return pathParts[pathParts.length - 1]
}

function removeExtension(fileName: string) {
  return fileName.split('.')[0]
}

function removeMinifiedSuffix(fileName: string) {
  return fileName.replace(/-[a-zA-Z0-9]{8}(?=\.[a-zA-Z0-9]+$)/, '')
}

export const getImageName = (image: string) => {
  const name = removeMinifiedSuffix(removeExtension(removepath(image)))
  return decodeURIComponent(name)
}

export const isImageOnLeft = (index: number) => {
  return index % 2 === 0
}
