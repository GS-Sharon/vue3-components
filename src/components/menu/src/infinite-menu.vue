<!-- tsx递归菜单 -->
<script lang="tsx">
import { defineComponent, h, PropType, resolveComponent } from "vue";
import { MenuItem } from "./type";

export default defineComponent({
  props: {
    defaultActive: {
      type: String,
      default: ''
    },
    data: {
      type: Array as PropType<MenuItem[]>,
      default: () => []
    }
  },
  setup(props, {}) {
    const createMenuItem = (data: MenuItem) => {
      if(!data.children || !data.children.length) {
        const slots = {title: () => <span>{data.name}</span>}
        return (
          <el-menu-item index={data.index} v-slots={slots}>
            {
              data.icon
              ? <el-icon>
                  { h(resolveComponent(data.icon))}
                </el-icon>
              : null
            }
          </el-menu-item>
        )
      } else {
        const slots = {
          title: () => (
            <>
              {
                data.icon
                ? <el-icon>
                  { h(resolveComponent(data.icon))}
                </el-icon>
                : null
              }
              <span>{data.name}</span>
            </>
          )
        }
        return (
          <el-sub-menu index={data.index} v-slots={slots}>
            {
              data.children.map(child => (createMenuItem(child)))
            }
          </el-sub-menu>
        )
      }
    }
    return () => {
      return (
        <el-menu
          default-active={props.defaultActive}
          class="el-menu-vertical-demo"
        >
          {
            props.data.map(item => {
              return createMenuItem(item)
            })
          }
        </el-menu>
      )
    }
  }
})
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
