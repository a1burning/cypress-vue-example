<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- 选择器 -->
    <div class="flex-4">
      <Selector />
      <Get />
      <Find />
      <Contains />
    </div>
    <div class="flex-4">
      <Lodash />
      <Blob />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Selector from '@/components/Selector.vue' // @ is an alias to /src
import Get from '@/components/Get.vue' // @ is an alias to /src
import Find from '@/components/Find.vue' // @ is an alias to /src
import Contains from '@/components/Contains.vue' // @ is an alias to /src
import Lodash from '@/components/Lodash.vue' // @ is an alias to /src
import Blob from '@/components/Blob.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    Selector,
    Get,
    Find,
    Contains,
    Lodash,
    Blob
  }
})
export default class HomeView extends Vue {}
</script>
<style lang="less" scoped>
  .flex-4 {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #bbb;
    padding: 15px 0;
  }
</style>
