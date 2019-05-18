<script>
export default {
  name: 'ClosedEye',

  methods: {
    moveTo (url) {
      if (url) window.open(url, '_blank').focus()
    }
  }
}
</script>

<template>
  <div class="section">
    <div class="content">
      <div class="header">
        <div class="header__title">
          Closed Eye Detection
        </div>
        <div class="header__desc">
          사용자가 눈을 감고 있는지를 인식합니다.
        </div>
      </div>
      <img class="illust" :src="require('../assets/illust/closed-eye.png')" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/section.scss';

.content {
  position: relative;
  margin-left: 2.5em;
  margin-top: 4em;

  @media (max-width: 720px) {
    margin-left: 0.5em;
  }
}

.header {
  &__title {
    font-size: 3.5em;

    @media (max-width: 790px) {
      word-spacing: 150vw;
      font-size: 2.5em;
    }
  }
}

.illust {
  top: 100px;
  position: absolute;
  right: 0;
  z-index: -1;

  @media (max-width: 500px) {
    right: -50px;
  }
}
</style>
