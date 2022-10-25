<template>
  <div id="get" data-cy="get" class="get">
    <h2>cypressGet命令</h2>
    <div>
      <p data-cy="get-todos">别名是todos</p>
    </div>
    <div id="get-within" class="get-within">within</div>
    <h3>cy.get vs .find</h3>
    <div class="get-test-title">cy.get vs .find</div>
    <section id="get-find">
      <div class="get-test-feature">Both are querying commands</div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Get extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
