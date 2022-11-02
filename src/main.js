import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/reset.css";
import { numPrice } from "@/composables/useTools.js";

const app = createApp(App)
app.directive('focus', {
  // 這邊只能用mounted 不能用V3 onMounted
  mounted(el) {
    el.focus()
    console.log(el)
  },
});
app.directive('price', {
  // 這邊只能用mounted 不能用V3 onMounted
  mounted(el, number) {
    console.log(el, number.value)
    const price = numPrice(number.value)
    el.innerHTML = price
  },
  // mounted 只會執行一次所以
  // 需要v-model連動 需要啟用 "更新" 這個生命週期
  updated(el, number) {
    console.log(el, number.value)
    const price = numPrice(number.value)
    el.innerHTML = price
  },
});
app.use(router)
app.mount('#app')
