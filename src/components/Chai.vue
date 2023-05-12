<template>
  <div id="chai" data-cy="chai" class="chai">
    <h2>Chai</h2>
    <div data-cy="chai">
      <h3 data-test="chai-name">Tom</h3>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component
export default class Chai extends Vue {
  disabled = false

  mounted (): void {
    const text = '<span class="desc">简介</span>'
    const p = document.querySelector('[data-test=chai-desc]')
    if (p) {
      p.innerHTML = text
    }
  }

  changeInput () {
    this.disabled = !this.disabled
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
