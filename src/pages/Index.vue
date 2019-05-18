<script>
export default {
  name: 'Index',

  methods: {
    isWindows () {
      return window.navigator.appVersion.indexOf('Win') !== -1
    },
    download (platform) {
      this.$swal('이런!', '준비중입니다.', 'error')
    },
    moveTo (url) {
      if (url) window.open(url, '_blank').focus()
    }
  }
}
</script>

<template>
  <div class="section">
    <img class="illust" :src="require('../assets/illust/main.png')">
    <div class="content">
      <div class="left">
        <div class="header">
          <h1 class="header__title">WATCHME</h1>
          <p class="header__desc">당신의 생산성을 높이는.</p>
        </div>
        <div class="demo">
          <img class="demo__img" :src="require('../assets/mockups/main.png')">
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
            @click="moveTo('https://github.com/watchme-dimigo')"
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

.section {
  position: relative;
}

.illust {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  height: 100%;

  @media (max-width: 600px) {
    right: -300px;
  }
}

.left {
  position: relative;
  height: 100%;
  flex: 1;
  margin-left: 2.5em;

  @media (max-width: 720px) {
    margin-left: 0.5em;
  }
}

.buttons {
  position: absolute;
  // bottom: 5em;
  bottom: 3.5rem;
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
    bottom: 1em;
    width: 100%;
    margin-left: 0.5em;
  }

  &__desc-strong {
    margin-right: 0.5em;
    font-weight: 400;
  }

  &__desc {
    margin-bottom: 0.5em;
    font-weight: 100;
  }

  &__desc.github {
    display: inline-block;
    margin-top: 0.8em;
  }
}

.button {
  width: 45%;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    width: 200px !important;
    margin: auto;
    margin-bottom: 0.2em;
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

// .github {
//   border-color: #b4b4b4;
//   color: #b4b4b4;
//   cursor: not-allowed;
// }

.demo {
  margin-top: 3.5em;

  &__img {
    width: 30vw;
    box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.445);

    @media (max-width: 1200px) {
      width: 40vw;
    }

    @media (max-width: 900px) {
      width: 55vw;
    }

    @media (max-width: 720px) {
      margin-left: 0.5em;
    }

    @media (max-width: 700px) {
      width: 60vw;
    }

    @media (max-width: 500px) {
      // margin-top: 1.5em;
      width: 75vw;
    }
  }
}
</style>
