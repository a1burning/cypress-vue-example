<template>
  <div class="about">
    <div class="flex-4">
      <Browser />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Browser from '@/components/Browser.vue'
@Component({
  components: {
    Browser
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
