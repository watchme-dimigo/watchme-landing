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
      <img class="illust" :src="require('../assets/illust/programs.png')">
      <div class="header">
        <div class="header__title">
          Running Programs
        </div>
        <div class="header__desc">
          현재 실행되는 프로그램들을 모니터링합니다.
        </div>
      </div>
      <div class="demo">
        <img class="demo__img" :src="require('../assets/mockups/time.png')">
        <div class="demo__intro">
          <strong>Windows API</strong>의 <a href="https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-getforegroundwindow">GetForegroundWindow</a>와
          <a href="https://docs.microsoft.com/ko-kr/windows/desktop/api/winuser/nf-winuser-getwindowthreadprocessid">GetWindowThreadProcessId</a>를
          이용해서 추가로 실행하는 프로그램을 가져오고 실행 시간을 모니터링합니다.
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

.illust {
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: 0;
  height: 100%;

  @media (max-width: 900px) {
    right: -100px;
  }

  @media (max-width: 500px) {
    right: -160px;
  }

  @media (max-width: 350px) {
    right: -200px;
  }
}

.demo {
  margin-top: 2.5em;

  &__img {
    height: 50vh;
    box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.445);

    @media (max-width: 1038px) {
      width: 80vw;
      height: auto;
    }
  }

  &__intro {
    width: 50%;
    margin-top: 0.8em;
    font-size: 2em;
    font-weight: 300;
    word-break: keep-all;

    @media (max-width: 500px) {
      width: 60%;
      font-size: 1.8em;
      word-break: break-word;
    }

    strong {
      font-weight: 500;
    }
  }
}
</style>
