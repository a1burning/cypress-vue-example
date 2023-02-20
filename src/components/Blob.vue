<template>
  <div id="blob" data-cy="blob" class="blob">
    <h2>Cypress.Blob</h2>
    <div data-cy="blob-head">
      <p class="block">使用图像夹具进行 jQuery 插件上传</p>
      <input type="file" fileupload/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Blob extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
