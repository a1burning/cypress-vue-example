<template>
<div id="browser" data-cy="browser" class="browser">
  <h2>浏览器命令</h2>
  <div data-test="browser-head">
  </div>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component
export default class Browser extends Vue {
  mounted () {
    window.hello = {
      foo: 'bar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
