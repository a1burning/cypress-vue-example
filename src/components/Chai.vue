<template>
  <div id="chai" data-cy="chai" class="chai">
    <h2>Chai-jQuery</h2>
    <div data-cy="chai-jQuery">
      <div class="topic-main-flex">
        <!-- attr,prop,css,data,class,id,match -->
        <img
          id="chai-jquery-cover"
          src="https://img2.baidu.com/it/u=3618236253,1028428296&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          style="width: 150px; height: 160px;"
          alt="主题"
          class="cover"
          data-test="chai-jquery-cover">
        <!-- text,contain -->
        <h3 data-test="chai-jquery-title">主题</h3>
        <!-- html,descendants -->
        <p data-test="chai-jquery-desc"></p>
        <!-- empty -->
        <div data-test="chai-jquery-empty"></div>
        <!-- visible,hidden -->
        <div data-test="chai-jquery-visible">
          <p style="display: block;"></p>
          <p style="width: 0px;height: 2px;">02</p>
          <p style="width: 2px;height: 0px;">20</p>
          <p style="display: none;">visible-display-block</p>
          <p style="display: block;">visible-display-block</p>
          <p style="visibility: visible;"></p>
          <p style="visibility: hidden;">visible-visibility-visible</p>
          <p style="visibility: visible;">visible-visibility-visible</p>
        </div>
        <!-- exist -->
        <div data-test="chai-jquery-exist">
          <p style="display: none;">exist</p>
        </div>
        <div data-test="chai-jquery-form">
          <!-- value,focus,enabled,disabled -->
          <input
            data-test="chai-jquery-input"
            :disabled="disabled"/>
          <button
            data-test="chai-jquery-btn"
            @click="changeInput">切换输入框禁用</button>
          <!-- checked -->
          <div data-test="chai-jquery-check">
            <input type="radio" id="chai-left" name="chai" value="left" checked="true"/>
            <label for="chai-left">左边</label>
            <input type="radio" id="chai-right" name="chai" value="right"/>
            <label for="chai-right">右边</label>
          </div>
          <!-- selected -->
          <select
            name="province"
            data-test="chai-jquery-select">
            <option value="">请选择</option>
            <option value="1">北京</option>
            <option value="2">上海</option>
            <option value="2">广州</option>
          </select>
        </div>
      </div>
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
    const p = document.querySelector('[data-test=chai-jquery-desc]')
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
