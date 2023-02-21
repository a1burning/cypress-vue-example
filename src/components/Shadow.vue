<template>
<div id="shadow" data-cy="shadow" class="shadow">
  <h2>Shadow DOM</h2>
  <div data-cy="shadow-head">
    <user-card id="shadow-card">
      <span slot="username">Shadow DOM</span>
      <span slot="day">2023.02</span>
    </user-card>
  </div>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component
export default class Shadow extends Vue {}
</script>
<script>
customElements.define('user-card', class extends HTMLElement {
  connectedCallback () {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <div>Name:
        <slot name="username"></slot>
      </div>
      <div>Day:
        <slot name="day"></slot>
      </div>
    `
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
