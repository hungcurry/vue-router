<script>
import TitleBar from "@/components/Props/TitleBar.vue";
import ListItem from "@/components/Props/ListItem.vue";
import { ref } from "vue";
export default {
  components: {
    TitleBar,
    ListItem,
  },
  setup() {
    const isOpen = ref(true);
    const HandListShow = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      isOpen,
      HandListShow,
    };
  },
};
</script>

<template>
  <h1>This is an Props</h1>
  <div class="wrap">
    <div class="outer">
      <TitleBar :HandListShow="HandListShow" />
      <ListItem :isOpen="isOpen" />
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
.outer {
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
}
</style>
