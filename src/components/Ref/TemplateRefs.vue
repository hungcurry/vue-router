<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const textInput = ref(null);
    const box = ref(null);
    onMounted(() => {
      console.log(textInput.value);
      console.log(box.value);

      textInput.value.focus();
    });

    return { textInput , box };
  },
};
</script>

<template>
  <input ref="textInput" id="textBar" type="text" placeholder="input text"/>
  <!-- 
    複數不行 只會抓到最後一個
    <div class="box1" data-v-044101b4="">3</div>
  -->
  <div ref="box" class="box1">1</div>
  <div ref="box" class="box1">2</div>
  <div ref="box" class="box1">3</div>
</template>

<style scoped>
input {
  display: block;
  width: 100%;
  height: 30px;
  background-color: rgb(200, 219, 219);
  padding-left: 10px;
}
</style>
