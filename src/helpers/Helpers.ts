export const importAllPhotosFromFolder = (r: { keys: () => string[]; (path: string): string }) => {
  return r.keys().map(r);
}


export const getIndexOfImage = (allImages: string[], name: string) => {
  for (let i = 0; i < allImages.length; i++) {
    let currentImage = allImages[i]
    if (currentImage.includes(name)) return i
  }
  return -1
}

export const getImageName = (image: string) => {
  const path = image.split("/");
  return path[path.length - 1].split(".")[0];
}
