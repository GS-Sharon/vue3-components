export interface ListItem {
  // 头像
  avator: string,
  // 标题
  title: string,
  // 描述 
  desc?: string,
  // 时间
  time?: string,
  // 标签内容
  tag?: string,
  // 标签类型
  tagType?: 'success' | 'info' | 'warning' | 'danger'
}
export interface ListOptions {
  title: string,
  content: ListItem[],
  actions?: ActionsOption[]
}
interface ClickFn {
  (list: ListOptions[], activeName: string): null
}
export interface ActionsOption {
  text: string,
  icon?: string,
  click?: ClickFn
}