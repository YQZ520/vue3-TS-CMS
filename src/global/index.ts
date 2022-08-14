import { App } from "vue";

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
