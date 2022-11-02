<script>
export default {
  props: {
    msg : {
      type: String,
      default: "no name",
    },
    str: {
      type: String,
      default: "my name is 白爛貓",
    },
    bool: {
      type: Boolean,
      default: true,
    },
    num: {
      type: Number,
      default: 0,
    },
    arr: {
      type: Array,
      default: () => [],
    },
    obj: {
      type: Object,
      default: () => ({}),
    },
    HandListShow: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    console.log(`props` , props);
    return {
      props,
    };
  },
};
</script>
<template>
  <a class="title" @click="props.HandListShow">課程列表</a>
</template>

<style lang="scss" scoped>
.title {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #42b983;
  font-weight: bold;
  color: darkslategray;
  font-size: 20px;
  border-bottom: 1px solid #d2d2d2;
}
</style>
