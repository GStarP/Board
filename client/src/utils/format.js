/**
 * 删去 '20px' 中的 'px' 得到 20
 */
export function removepx(str) {
  return Number.parseInt(str.substr(0, str.length - 2));
}
