export function isImageExist(string: string | null) {
  return string && string.indexOf('Default') < 0;
}