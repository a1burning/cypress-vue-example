<template>
  <div id="lodash" data-cy="lodash" class="lodash">
    <h2>Cypress._</h2>
    <div data-cy="lodash-head">
      <span class="block">_.each</span>
      <ul data-cy="lodash-list">
        <li>list1</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Lodash extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
