<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- 选择器 -->
    <Selector />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Selector from '@/components/Selector.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    Selector
  }
})
export default class HomeView extends Vue {}
</script>
