<script>
import { ref , watch } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const isOpen = ref(false);
    const route = useRoute();
    const reuteArr = ["", "slot", "courses"];
    const idx = ref(0);

    // 做 無嵌套路由的下一層 動態id 能保有active效果
    // 監控網址變化--監控物件中的單一值
    watch( () => route.path , ( newV, oldV ) => {
      // console.log(route.path); // 監控網址變化
      reuteArr.forEach((item, index) => {
          // 先字串分割 substr()
          const rp = route.path.substr(1) // slot , courses , courses/123
          // 字串轉陣列 split()
          // courses/123 => ['courses' , 123] 取第０個
          const rp2 = rp.split("/")[0];

          // 最後結果 都分割完畢// slot , courses , courses
          // console.log(rp);
          
          if (rp2 === item) {
            idx.value = index;
          }
      });
    });

    const HandMenuOpen = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      HandMenuOpen,
      isOpen,
      idx,
    };
  },
};
</script>
<template>
  <header :class="{ openMenu: isOpen }">
    <nav>
      <a id="moblie_menu" @click="HandMenuOpen" href="javascript:;"></a>
      <div>
        <router-link class="Title" to="/" :class="{ active: idx === 0 }">index</router-link>
        <router-link to="/props">Props</router-link>
        <router-link to="/emit">Emit</router-link>
        <router-link to="/transition">Transition</router-link>
        <router-link to="/transition2">Transition2</router-link>
        <router-link to="/ref">Ref</router-link>
        <router-link to="/directive">directive</router-link>
        <router-link to="/slot" :class="{ active: idx === 1 }">slot</router-link>
        <router-link to="/courses" :class="{ active: idx === 2 }">course</router-link>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
h6 {
  color: greenyellow;
  font-size: 40px;
}
header {
  background-color: #373c3f;
  width: 100%;
  height: 97px;
  @media screen and (max-width: 640px) {
    transition: height 0.2s;
    height: 37px;
    overflow: hidden;
    &.openMenu {
      height: 232px;
    }
  }
  > nav {
    position: relative;
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      height: 232px;
    }
    > .Title {
      line-height: 97px;
      font-size: 18px;
      float: left;
      color: #fff;
      margin-right: 20px;
      @media screen and (max-width: 1044px) {
        margin-left: 5%;
      }
      @media screen and (max-width: 640px) {
        line-height: 37px;
      }
    }
    > div {
      width: 100%;
      height: 100%;
      @media screen and (max-width: 640px) {
        clear: both;
        width: 100%;
        height: 195px;
      }
      > a {
        display: block;
        line-height: 97px;
        font-size: 15px;
        float: left;
        color: #fff;
        padding: 0 10px;
        @media screen and (max-width: 640px) {
          width: 100%;
          height: auto;
          overflow: hidden;
          line-height: 37px;
          text-align: center;
        }
      }
      > a.active {
        color: #42b983;
      }
      // .router-link-active{
      //   color: #42b983;
      // }
      // .router-link-exact-active {
      //   color: blueviolet;
      // }
    }
  }
}
a#moblie_menu {
  display: none;
  @media screen and (max-width: 640px) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 37px;
    height: 37px;
    background-image: url("~@/assets/images/menu.jpg");
    background-position: 50% 50%;
    background-size: 95% auto;
    background-repeat: no-repeat;
  }
}
</style>
