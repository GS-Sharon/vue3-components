
/* 
 * @Description: 大写改横杠驼峰
 * @param: String
 * @return: String
*/ 
// export function toLine(str: string) {
//   let arr = str.split('')
//   arr.forEach((item, idx) => {
//     let code:number = item.charCodeAt(0)
//     if(code>=65 && code<=90) {
//       arr[idx] = idx === 0 ? item.toLocaleLowerCase() : `-${item.toLocaleLowerCase()}`;
//     }
//   })
//   return arr.join('')
// }
export function toLine(str: string) {
  return str.replace(/([A-Z])/g, ($0, $1) => {
    return `-${$1}`
  }).toLocaleLowerCase()
}