<template>
  <div>
    <h2>cypress选择器</h2>
    <div id="selector" data-cy="selector" class="selector">
      <div class="name">cypress选择器第一个子元素</div>
      <div class="name">cypress选择器第二个子元素</div>
      <div class="name">cypress选择器第三个子元素</div>
      <div class="name">cypress选择器第四个子元素</div>
      <div class="name">cypress选择器第五个子元素</div>
    </div>
    <div class="next" data-cy="selector-next">cypress选择器的相邻元素</div>
    <div data-cy="selector-input">
      <div>
        <input type="radio" checked="true"/>选中
      </div>
      <div>
        <input type="radio"/>未选中
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Selector extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
