const allImages = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg,mp4,gif}', { eager: true });

export const importAllPhotosFromFolder = (folderName: string) => {
  return Object.entries(allImages)
    .filter(([path]) => path.includes(`/assets/${folderName}/`))
    .map(([_, mod]: any) => mod.default);
};



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
