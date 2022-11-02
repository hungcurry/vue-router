<script>
import TransitionEL from "@/components/Transition/TransitionEL.vue";
import { ref } from "vue";
export default {
  components: {
    TransitionEL,
  },
  setup() {
    const isAmin = ref(false);
    const isAmin2 = ref(true);

    const handClick = () =>{
      isAmin.value = !isAmin.value;
    }
    const handClick2 = () =>{
      isAmin2.value = !isAmin2.value;
    }
    return {
      isAmin,
      isAmin2,
      handClick,
      handClick2
    };
  },
};
</script>

<template>
  <h1>This is an Transition</h1>
  <div class="wrap">
    <div class="outer">

        <!-- 
        1.元件跟Vue動畫名字 要錯開
        2.Vue動畫name 跟css取名要一致
        3.動畫關閉的時候 el會被拔除
        4.頻繁使用 建議用v-show 
        -->
        <!-- transition -->
        <button @click="handClick">transition</button>
        <Transition name="fade">
          <TransitionEL v-if="isAmin" />
        </Transition>

        <br>
        <br>

        <!--  animation -->
        <button @click="handClick2">animation</button>
        <Transition name="bounce">
          <TransitionEL v-if="isAmin2" />
        </Transition>

    </div>
  </div>
</template>

<style lang='scss' scoped>
h1 {
  text-align: center;
  color: white;
  margin-top: 50px;
}
.wrap {
  widows: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
// ===================
// ... transition ...
// ===================
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: opacity 0.5s ease;
}
// ... 動畫進入 ...
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
// ... 動畫離開 ...
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
// ===================
// ... animation ...
// ===================
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
