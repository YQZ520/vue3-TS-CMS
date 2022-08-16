import { App } from "vue";

/* 样式初始化 */
import "normalize.css";

/* 自定义样式 */
import "@/assets/css/index.less";

/* vuex */
import store from "@/store";

/* vue-router */
import router from "@/router";

/* register element-plus  */
import registerElementPlus from "./register-element-plus";

export default function globalRegister(app: App) {
  app.use(store);

  app.use(router);

  app.use(registerElementPlus);
}
