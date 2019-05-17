<script>
import users from '../assets/users.json'

export default {
  name: 'Team',

  data () {
    return {
      users
    }
  },

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
          TEAM INU
        </div>
        <div class="header__desc">
          INU makes New Universe
        </div>
      </div>
      <div class="team">
        <div
          class="member"
          v-for="(user, idx) in users"
          :key="idx"
        >
          <div class="member__profile-wrap">
            <img class="member__profile" :src="require('../assets/profile/3.jpg')"/>
          </div>
          <div class="member__content">
            <div class="member__name">
              {{ user.name }}
              <i
                class="fab fa-facebook-square"
                v-if="user.facebook"
                @click="moveTo(user.facebook)"
              />
              <i
                class="fab fa-github-square"
                v-if="user.github"
                @click="moveTo(user.github)"
              />
            </div>
            <div class="member__part">
              {{ user.part }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/section.scss';

.content {
  margin-left: 2.5em;
  margin-top: 4em;
}

.header {
  &__title {
    color: #000;
    font-size: 3em;
    font-weight: bold;
    line-height: 1;
    padding-bottom: 0.2em;
    border-bottom: 2px solid #000;
    width: 800px;
    font-family: 'Montserrat', sans-serif;
  }

  &__desc {
    font-size: 1.5em;
    margin-top: 0.5em;
  }
}

.team {
  margin-top: 2em;
}

.member {
  display: flex;
  align-items: center;
  // justify-content: center;

  &__profile-wrap {
    margin-left: 2.5em;
    margin-bottom: 1.5em;
  }

  &__profile {
    width: 8vw;
    // border: 1px solid lightgray;
    border-radius: 50%;
    box-shadow: 15px 19px 32px -18px rgba(21, 19, 19, 0.2);
  }

  &__name,
  &__part {
    margin-left: 1.5rem;
    font-size: 2rem;
  }

  &__name {
    text-transform: uppercase;
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
  }

  &__part {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 100;
  }
}

.fab {
  color: #000;
  margin-right: 0.2em;
  cursor: pointer;
}

.fa-facebook-square:hover {
  color: #3C5A99;
}

.fa-github-square:hover {
  color: #767676;
}
</style>
