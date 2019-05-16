<template>
  <div class="section">
    <div class="content">
      <div class="team">
        <!-- <div class="member">
          <div class="member__profile"/>
          <div class="member__content">
            <div class="member__name">
              dddd
            </div>
          </div>
        </div>
        <div class="member">
          <div class="member__profile"/>
          <div class="member__content">
            <div class="member__name">
              dddd
            </div>
          </div>
        </div>
        <div class="member">
          <div class="member__profile"/>
          <div class="member__content">
            <div class="member__name">
              dddd
            </div>
          </div>
        </div> -->
        <div class="member">
          <div class="member__profile-wrap">
            <img class="member__profile" :src="require('../assets/profile/4.jpg')"/>
          </div>
          <div class="member__content">
            <div class="member__name">
              JUNHO YEO
            </div>
            <div class="member__part">
              AI
            </div>
          </div>
        </div>
      </div>
      <div class="inu">
        INU makes New Universe
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.member {
  display: table;

  &__profile-wrap {
    margin-left: 2.5em;
    margin-bottom: 1.5em;
  }

  &__profile {
    width: 10vw;
    border: 1px solid lightgray;
    border-radius: 50%;
    display: table-cell;
    vertical-align: middle;
  }

  &__content {
    display: table-cell;
    vertical-align: middle;
  }

  &__name,
  &__part {
    margin-left: 1.5rem;
    font-size: 2rem;
  }

  &__name {
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
  }
}

.inu {
  width: 100%;
  margin-left: 2.5em;
  font-size: 2em;
  font-weight: 900;
  font-style: italic;
}
</style>
