import { App } from "vue";

/* 导入element-plus样式 */
import "element-plus/dist/index.css";

import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLink,
  ElTabPane,
  ElTabs,
} from "element-plus";
import { UserFilled, Iphone } from "@element-plus/icons-vue";

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
];

const icons = [UserFilled, Iphone];

export default function registerElementPlus(app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }

  for (const icon of icons) {
    app.component(icon.name, icon);
  }
}
