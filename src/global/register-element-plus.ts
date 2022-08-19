import { App } from "vue";

/* 导入element-plus样式 */
import "element-plus/dist/index.css";

import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElTabPane,
  ElTabs,
} from "element-plus";
import {
  UserFilled,
  Iphone,
  Tools,
  Monitor,
  Goods,
  ChatLineRound,
} from "@element-plus/icons-vue";

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
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
];

const icons = [UserFilled, Iphone, Tools, Monitor, Goods, ChatLineRound];

export default function registerElementPlus(app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }

  for (const icon of icons) {
    app.component(icon.name, icon);
  }
}
