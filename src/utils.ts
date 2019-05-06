export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const randomFromArray: <T>(arr: T[], prev?: T) => T = (arr, prev) => {
  const selected = arr[Math.floor(Math.random() * arr.length)]

  if (selected === prev) return randomFromArray(arr, prev)
  else return selected
}
