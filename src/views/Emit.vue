<script>
import TimerBox from "@/components/Emit/TimerBox.vue";
import { ref } from "vue";
export default {
  components: {
    TimerBox,
  },
  setup() {
    const handTimeOut = (num) => {
      console.log("time is over", num.value);
    };
    return {
      handTimeOut
    };
  },
};
</script>

<template>
  <h1>This is an Emit</h1>
  <div class="wrap">
    <div class="outer">
      <TimerBox @TimeOut="handTimeOut" /> 
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
</style>
