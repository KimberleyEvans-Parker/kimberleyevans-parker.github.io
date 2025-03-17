export const importAllPhotosFromFolder = (r: { keys: () => string[]; (path: string): string }) =>{
    return r.keys().map(r);
  }

