<template>
  <div id="contains" data-cy="contains" class="contains">
    <h2>Contains命令</h2>
    <div data-cy="contains-head">
      <span class="block">Testing with Cypress</span>
    </div>
    <form data-cy="contains-form">
      <div>
        <label>name</label>
        <input name="name" />
      </div>
      <button type="submit">Proceed</button>
    </form>
    <div data-cy="contains-pre">
      <pre>   hello   ,world</pre>
      <p class="hello">   hello   ,world</p>
    </div>
    <div data-cy="contains-nbsp">
      <span>hello&nbsp;world</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Contains extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
