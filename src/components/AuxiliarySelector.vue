<template>
<div id="auxiliary" data-cy="auxiliary" class="auxiliary">
  <h2>选择元素命令</h2>
  <p>选择元素命令</p>
  <div data-cy="auxiliary-head">
    <ul id="auxiliarySelector">
      <li id="auxId1">Li1</li>
      <li class="auxClass">Li2</li>
      <li id="auxId2">Li3</li>
      <li id="auxId3" class="auxClass">Li4</li>
    </ul>
  </div>
  <div>
    <label>focus</label>
    <input name="focus" id="auxiliary-input"/>
  </div>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component
export default class AuxiliarySelector extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
