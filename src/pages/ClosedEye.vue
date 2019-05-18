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
    <img class="illust base" :src="require('../assets/illust/closed-eye.png')" />
    <img class="illust" :src="require('../assets/illust/closed.png')" />
    <div class="content">
      <div class="header">
        <div class="header__title">
          Closed Eye Detection
        </div>
        <div class="header__desc">
          사용자가 눈을 감고 있는지를 인식합니다.
        </div>
      </div>
      <div class="demo first">
        <div class="demo__left">
          <img class="demo__img alarm" :src="require('../assets/demo/alarm.png')">
        </div>
        <div class="demo__right">
          <div class="demo__intro first">
            <a href="https://github.com/davisking/dlib" target="_blank">dlib</a>의
            face landmarks predictor를 통해 확인한 눈 사이의 거리(eye aspect ratio, <strong>EAR</strong>)가
            <strong>일정 임계값</strong>보다 작으면 눈을 감고 있는 것으로 판단, 알람을 표시합니다.
          </div>
        </div>
      </div>
      <div class="demo-wrap">
        <div class="demo second">
          <div class="demo__left">
            <div class="demo__intro second">
              이때 일정 시간 동안 눈을 감고 있음으로서 사람 및 환경마다 약간씩 다른 이 특정 <strong>임계값을 자동으로 계산해 커스터마이제이션</strong>하는 기능을 제공합니다.
            </div>
          </div>
          <div class="demo__right">
            <img class="demo__img custom" :src="require('../assets/demo/custom.png')">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/section.scss';

.section {
  position: relative;
}

.content {
  margin-top: 4em;
  margin-left: 2.5em;

  @media (max-width: 720px) {
    margin-left: 0.5em;
  }
}

.header {
  margin-bottom: 2em;

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
  bottom: -8em;
  left: 0;
  width: 40vw;

  @media (max-width: 700px) {
    bottom: 0;
    width: 60vw;
  }
}

.illust.base {
  position: absolute;
  z-index: -1;
  top: 100px;
  right: 0;
  left: unset;
  filter: alpha(opacity=60);
  opacity: 0.6;

  @media (max-width: 500px) {
    visibility: hidden;
  }
}

.demo {
  display: flex;
  align-items: center;
  justify-items: center;

  &__left,
  &__right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__intro {
    padding-right: 0.5em;
    font-size: 2em;
    font-weight: 300;
    word-break: keep-all;
  }

  &__intro.first {
    width: 18em;
    padding-right: 0;
    text-align: left;

    @media (max-width: 1100px) {
      width: 95%;
    }
  }

  &__intro.second {
    width: 15em;

    @media (max-width: 800px) {
      margin-top: 1.5em;
    }
  }

  &__img.alarm {
    width: 35vw;
    margin-right: 1.5em;
    box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.445);
  }

  &__img.custom {
    height: 50vh;
    margin-top: 1.5em;
  }

  strong {
    font-weight: 500;
  }
}

@media (max-width: 800px) {
  .demo {
    display: inline-block;
    width: 100vw;

    &__left,
    &__right {
      display: inline-block;
    }

    &__intro {
      width: 95%;
      font-size: 1.3rem;
    }

    &__intro.first {
      text-align: right;
    }

    &__img {
      // margin: 0 !important;
      width: 50%;
      height: auto !important;
    }

    &__img.alarm {
      width: 60vw;
      margin-right: 1em !important;
    }

    &__img.custom {
      margin-top: 0;
    }
  }
}

.demo.first {
  text-align: right;
}

.demo-wrap {
  right: 0;
  text-align: right;
}

.demo.second {
  position: absolute;
  right: 0;
}
</style>
