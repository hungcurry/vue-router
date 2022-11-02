<script>
import TemplateRefs from "@/components/Directive/TemplateRefs.vue";
import { ref } from "vue";
export default {
  components: {
    TemplateRefs,
  },
  setup() {

    return {

    };
  },
};
</script>

<template>
  <h1>This is an Directive</h1>
  <div class="wrap">
    <div class="outer">
      <TemplateRefs />
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
