<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  emits: {
    TimeOut: (num) => {
      if (num.value === 0) {
        return true;
      } else {
        return false;
      }
      // return num.value === 0
    },
  },
  /* 原本寫法
    setup( props , context ) {
      context.emit("TimeOut", num);
    }
  */
  setup(props, { emit }) {
    const num = ref(5);
    let timer = null;
    onMounted(() => {
      timer = setInterval(() => {
        num.value--;
        if (num.value === 0) {
          clearInterval(timer);
          emit("TimeOut", num);
        }
      }, 1000);
    });
    // 離開頁面取消
    onUnmounted(()=>{
      clearInterval(timer);
    })
    return {
      num,
    };
  },
};
</script>
<template>
  <p>{{ num }}</p>
</template>
<style lang='scss' scoped>
p {
  margin: 0;
  font-size: 150px;
}
</style>
