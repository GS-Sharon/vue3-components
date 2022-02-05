export interface MenuItem {
  // 菜单标识
  index: string,
  // 菜单icon
  icon?: string,
  // 菜单名
  name: string,
  // 菜单子项
  children?: MenuItem[]
}