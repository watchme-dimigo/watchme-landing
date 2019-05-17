<script>
export default {
  name: 'Index',

  methods: {
    isWindows () {
      return window.navigator.appVersion.indexOf('Win') !== -1
    },
    download (platform) {
      this.$swal('이런!', '준비중입니다.', 'error')
    }
  }
}
</script>

<template>
  <div class="section">
    <div class="content">
      <div class="left">
        <div class="header">
          <h1 class="header__title">WATCHME</h1>
          <p class="header__desc">당신의 생산성을 높이기 위해</p>
        </div>
        <div class="buttons">
          <p class="buttons__desc">
            <span class="buttons__desc-strong">다운로드</span>
            데스크탑 애플리케이션
          </p>
          <div
            class="button download-windows"
            :class="{ selected: this.isWindows() }"
            @click="download('win')"
          >
            <i class="fab fa-windows"></i> Windows
          </div>
          <div
            class="button download-mac"
            :class="{ selected: !this.isWindows() }"
            @click="download('mac')"
          >
            <i class="fab fa-apple"></i> Mac OS X
          </div>
          <p class="buttons__desc github">
            <span class="buttons__desc-strong">개발</span>
            깃허브 소스 코드
          </p>
          <div
            class="button github"
          >
            <i class="fab fa-github"></i> Github
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/section.scss';

.left {
  height: 100%;
  flex: 1;
  position: relative;
  margin-left: 2.5em;
  margin-top: 4em;

  @media (max-width: 720px) {
    margin-left: 0.5em;
  }
}

.buttons {
  position: absolute;
  bottom: 5em;
  width: 40%; // crashes under width 1390px
  font-size: 1.5em;

  @media (max-width: 1390px) {
    width: 50%;
  }

  @media (max-width: 1120px) {
    width: 60%;
  }

  @media (max-width: 940px) {
    width: 70%;
  }

  @media (max-width: 820px) {
    width: 80%;
  }

  @media (max-width: 720px) {
    width: 90%;
    font-size: 1.3em;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0.5em;
  }

  &__desc-strong {
    font-weight: 400;
    margin-right: 0.5em;
  }

  &__desc {
    font-weight: 100;
    margin-bottom: 0.5em;
  }

  &__desc.github {
    margin-top: 0.8em;
    display: inline-block;
  }
}

.button {
  font-size: 1.5rem;
  width: 45%;

  @media (max-width: 600px) {
    margin: auto;
    margin-bottom: 0.2em;
    width: 200px !important;
    float: unset !important;
    font-size: 1.2rem;
  }
}

.button.download-windows {
  float: left;
}

.button.download-mac {
  float: right;
}

.button.github {
  width: 100%;
  width: -webkit-fill-available;
}

.github {
  color: #b4b4b4;
  border-color: #b4b4b4;
  cursor: not-allowed;
}
</style>
