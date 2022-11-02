<script>
import SlotsTitle from '@/components/Slot/SlotsTitle.vue';
export default {
  components: {
    SlotsTitle,
  },
  setup() {
    return {}
  },
}
</script>
<template>
<h1>This is an Slots</h1>
  <div class="wrap">
    <div class="outer">
      <slots-title>白爛貓</slots-title>
      <slots-title>麻糬</slots-title>
      <slots-title>鴨子</slots-title>
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
