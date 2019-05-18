<script>
export default {
  name: 'Programs',

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
          Running Programs
        </div>
        <div class="header__desc">
          현재 실행되는 프로그램들을 모니터링합니다.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/section.scss';

.content {
  position: relative;
  margin-top: 4em;
  margin-left: 2.5em;

  @media (max-width: 720px) {
    margin-left: 0.5em;
  }
}

.header {
  &__title {
    font-size: 3.5em;

    @media (max-width: 790px) {
      font-size: 2.5em;
      word-spacing: 150vw;
    }
  }
}
</style>
