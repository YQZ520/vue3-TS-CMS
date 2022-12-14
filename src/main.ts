import { createApp } from "vue";
import App from "./App.vue";

import globalRegister from "./global";

const app = createApp(App);
app.use(globalRegister);

app.mount("#app");
