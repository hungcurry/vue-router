<script setup>

</script>
<template>

<!-- 
1.元件跟Vue動畫名字 要錯開
2.Vue動畫name 跟css取名要一致
3.動畫關閉的時候 el會被拔除
4.頻繁使用 建議用v-show 
-->

<div class="box"></div>

</template>
<style lang='scss' scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
