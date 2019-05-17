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
            <img class="member__profile" :src="require(`../assets/profile/${user.name[1]}.jpg`)"/>
          </div>
          <div class="member__content">
            <div class="member__name">
              {{ user.name[0] }}
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

  @media (max-width: 720px) {
    margin-left: 0.5em;
  }
}

.team {
  margin-top: 2em;
}

.member {
  display: flex;
  align-items: center;

  &__profile-wrap {
    margin-left: 2.5em;
    margin-bottom: 1.5em;
  }

  &__profile {
    width: 8vw;
    height: 8vw;
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

  @media (max-width: 1000px) {
    &__profile-wrap {
      margin-left: 1em;
      margin-bottom: 1.2em;
    }

    &__profile {
      width: 12vw;
      height: 12vw;
    }
  }

  @media (max-width: 700px) {
    &__profile-wrap {
      margin-left: 0;
      margin-bottom: 1.2em;
    }

    &__profile {
      width: 18vw;
      height: 18vw;
    }

    &__name,
    &__part {
      margin-left: 1rem;
    }

    &__name {
      font-size: 1.2em;
    }

    &__part {
      font-size: 1em;
    }
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
