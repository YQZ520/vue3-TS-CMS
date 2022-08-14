import { App } from "vue";

/* 导入element-plus样式 */
import "element-plus/dist/index.css";

import { ElButton } from "element-plus";

const components = [ElButton];

export default function registerElementPlus(app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
