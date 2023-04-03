import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DisplayData from "./components/DisplayData.vue";

const app = createApp(App).use(router);
app.component("DisplayData", DisplayData);
app.mount("#app");
