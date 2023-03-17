<template>
  <div id="app">
    <router-view />
    <h1>App根组件</h1>
    <div>
      <i class="toutiao toutiao-sousuo"></i>
    </div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <div class="box" style="padding: 20px"></div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
.box {
  width: 200px;
  height: 80px;
  background-color: pink;
}
</style>
