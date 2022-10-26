<template>
  <div id="find" data-cy="find" class="find">
    <h2>Find命令</h2>
    <div data-cy="find-head">
      <p class="block">find block</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Find extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
