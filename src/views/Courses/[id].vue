<script>
import axios from "axios";
import { onMounted, reactive, ref , computed, onUnmounted , watch} from "vue";
import { useRoute , useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const pageDetail = reactive({ data : [] });
    const isError = ref(false);
    const message = ref("");
    let cleanTimer = null;

    // 重組資料
    const data = computed(() => {
      return pageDetail.data
    });

    // 更新id
    watch( () => route.params.id , ( newV ) => {
      // console.log('new' , newV);
      if(newV !== undefined){
        axios.get(`https://vue-lessons-api.herokuapp.com/courses/${newV}`)
        .then((res) => {
          pageDetail.data = res.data.data[0];
        })
      }
    });
    onMounted(()=>{
      // console.log(route.params.id);
      axios.get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`)
      .then((res) => {
        pageDetail.data = res.data.data[0];
      })
      .catch((error)=>{
        isError.value = true;
        message.value = error.response.data;
        console.log(message.value);
        // 轉導回頁面
        cleanTimer = setTimeout(() => {
          router.push({path: "/courses"})
          // or
          // router.go(-1)
        }, 3000);
      })
    });
    // 離開頁面銷毀
    onUnmounted(()=>{
      clearTimeout(cleanTimer);
    })
    return { data , isError , message , cleanTimer};
  },
};
</script>
<template>
  <div v-if="!isError" class="outer">
    <div >
      <h1>{{ data.name }}</h1>
      <h2>NTD: {{ data.money }}</h2>
      <img :src="data.photo" alt="" />

      <!-- 第一種 轉陣列去判斷有無存在 -->
      <!-- <div v-if="Object.keys(data).length !== 0">
        <img :src="data.teacher.img" alt="" />
        <p>{{ data.teacher.name }}</p>
      </div> -->
      <!-- 第二種 可選串連算符？ -->
      <div>
        <img :src="data.teacher?.img" alt="" />
        <p>{{ data.teacher?.name }}</p>
      </div>

    </div>
  </div>
  <!-- 錯誤處理 -->
  <h1 v-else-if="isError">{{ message.error_message }}</h1>
</template>

<style lang='scss' scoped>
.outer, h1 {
  text-align: center;
}
img {
  display: inline-block;
}
</style>

