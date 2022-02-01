import { ElMessage } from "element-plus"

export function useCopy(str:string) {
  //创建一个input元素
  let input = document.createElement('input')
  input.value = str
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
  ElMessage.success('复制成功！')
}