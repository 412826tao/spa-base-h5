<template>
  <div class="empty" :class="size">
    <div class="empty-image">
      <img v-if="image" :src="imageURL" alt="">
    </div>
    <div class="empty-description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    size: {
      validator (value) {
        return value === 'small' || value === 'large' || value === 'default'
      },
      default () {
        return 'default'
      }
    },
    description: {
      type: String,
      default: '暂无数据'
    },
    image: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    imageURL () {
      if (!this.image || this.image === 'default') {
        return require('@/assets/images/empty-image-default.png')
      } else if (this.image === 'search') {
        return require('@/assets/images/empty-image-search.png')
      }
      return require('@/assets/images/empty-image-default.png')
    }
  },
  data () {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;

  .empty-description {
    text-align: center;
    margin-top: 16px;
    padding: 0 60px;
    color: #969799;
    font-size: 14px;
    line-height: 20px;
  }

  .empty-image {
    width: 140px;
    height: 140px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  &.large {
    .empty-image {
      width: 160px;
      height: 160px;
    }
  }
  &.small {
    .empty-image {
      width: 120px;
      height: 120px;
    }
  }
}
</style>
