<script>
export default {
  name: 'PupilTrack',

  methods: {
    moveTo (url) {
      if (url) window.open(url, '_blank').focus()
    }
  }
}
</script>

<template>
  <div class="section">
    <img class="illust base" :src="require('../assets/illust/pupil-track.png')">
    <img class="illust track-left" :src="require('../assets/illust/track-left.png')">
    <div class="content">
      <div class="header">
        <div class="header__title">
          AI Pupil Tracker
        </div>
        <div class="header__desc">
          사용자가 바라보는 시선 위치를 구합니다.
        </div>
      </div>
      <div class="demo">
        <div class="demo__left">
          <img class="demo__img" :src="require('../assets/demo/track.png')">
        </div>
        <div class="demo__right">
          <div class="demo__intro">
            <img class="demo__model" :src="require('../assets/illust/model.png')">
            <ul>
              <li><a href="https://github.com/voidstellar/haar-cascade-files/blob/master/haarcascade_eye.xml" target="_blank">
                Haar-cascade classifier</a>로 사용자의 눈을 찾고,
              </li>
              <li>
                <span class="small">(간단한 전처리 뒤)</span>&nbsp;<strong>keras</strong>를 사용해서 만든 CNN 모델을 이용해서 바라보는 위치를 구합니다.
              </li>
            </ul>
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
  top: -50px;
  right: 0;

  @media (max-width: 500px) {
    right: -50px;
  }
}

.illust.base {
  filter: alpha(opacity=60);
  opacity: 0.6;
}

.illust.track-left {
  top: unset;
  right: unset;
  bottom: 0.5em;
  left: 0;
  height: 90%;
}

.demo {
  display: flex;
  align-items: center;
  margin-top: 2.5em;
  justify-items: center;
  word-break: keep-all;

  &__left,
  &__right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__intro {
    padding-right: 2.5em;
    font-size: 2.2em;
    font-weight: 300;
  }

  &__img {
    height: 60vh;
  }

  &__model {
    width: 30vw;
    margin: 0.3em;
    box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.445);
  }

  .small {
    font-size: 0.6em;
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
      // width: 100%;
    }

    &__img,
    &__model {
      width: 40%;
      height: auto;
      margin: 0;
    }

    ul {
      display: inline-block;
      width: 60%;
    }
  }
}

@media (max-width: 500px) {
  .illust.base {
    visibility: hidden;
  }

  .demo {
    &__right {
      float: right;
      text-align: right;
    }

    &__img,
    &__model {
      width: 50%;
    }

    &__intro {
      padding-right: 0.5em;
    }

    ul {
      width: 100%;
      font-size: 0.8em;
    }
  }
}
</style>
