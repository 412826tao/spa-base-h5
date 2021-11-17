<template>
  <div>
    <div class="home-main">
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info" class="ml20">信息按钮</van-button>
    </div>
    <div>
      <van-button type="primary" block>块级元素</van-button>
      <div class="testrem">
        1
      </div>
      <div class="testrem1">
        2
      </div>
      <div style="width: 200px;height: 200px;background:yellow;">
        3
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeIndex',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.home-main {
  display: flex;
  // width: 500px;
}
.testrem {
  width: 200px;
  height: 200px;
  background: red;
}
.testrem1 {
  width: 200px;
  height: 200px;
  background: green;
}
</style>
