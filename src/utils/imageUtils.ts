export const getImageUrl = async(filename: string): Promise<string> => {
  try {
    const module = await import(`../assets/images/${filename}`)
    return module.default
  } catch (error) {
    return ''
  }
}

const imageModules = (import.meta as any).glob('../assets/images/*', {
  eager: true
})

export const getImageUrlSync = (filename: string): string => {
  const imagePath = `../assets/images/${filename}`
  const module = imageModules[imagePath] as {default: string}
  return module?.default || ''
}