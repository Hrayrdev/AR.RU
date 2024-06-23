<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore()
const width = computed(() => {
  return store.getters.getWidth
})
</script>

<template>

  <div class="app-header-info" v-if="width>744"><!-- an -->
    <div class="app-header-info__nav"> <!-- nav -->
      <div class="app-header-info__nav-info"> <!-- nav-info -->
        <div class="app-header-info__nav-info-location"> <!-- nav-location -->
          <div class="app-header-info__al-center"><img class="img-auto" src="@/assets/app-header-info/location.png"
                                                       alt=""></div>
          <!-- al-center -->
          <div class="app-header-info__al-center">Московская область</div><!-- al-center -->
        </div>
        <div class="app-header-info__nav-info-phone-info">
          <div class="app-header-info__al-center"><img class="img-auto" src="@/assets/app-header-info/phone.png" alt="">
          </div>
          <div class="app-header-info__al-center">+7 (495) 652-52-89</div>
        </div>
        <div class="app-header-info__nav-info-call-info">
          <div class="app-header-info__al-center"><img class="img-auto" src="@/assets/app-header-info/watch.png" alt="">
          </div>
          <div class="app-header-info__al-center">звоните в любое время</div>
        </div>
      </div>

      <div class="app-header-info__nav-notification">
        <div></div>
        <div style='display:flex;'>
          <div class="app-header-info__al-center  app-header-info__nav-notification-log "><img src="@/assets/app-header-info/like.png" alt=""></div>
          <div class="app-header-info__al-center app-header-info__nav-notification-log"><img src="@/assets/app-header-info/message.png" alt=""></div>
          <div class="app-header-info__al-center app-header-info__nav-notification-log"><img src="@/assets/app-header-info/notification.png" alt=""></div>
          <div class="app-header-info__nav-notification-reg-and-sign">
            <div class="app-header-info__al-center"><img src="@/assets/app-header-info/avatar.png" alt=""></div>
            <div class="app-header-info__al-center">Вход и регистрация</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="app-header-info" v-else>
    <div class="app-header-info__nav">
      <div class="app-header-info__nav-logo-wrapper">
        <img class="app-header-info__nav-logo" src="@/assets/app-header-bar/logo.png" alt="">
      </div>
      <div class="app-header-info__nav-notification">
        <div></div>
      </div>
    </div>


  </div>

</template>

<style scoped lang="scss">

.app-header-info__al-center {
  font-size: 14px;
  display: flex;
  align-items: center;
}

.img-auto {
  height: auto;
  width: 100%;
}

.app-header-info {
  padding-inline: 13px;

  justify-content: center;
  margin-bottom: 20px;

  &__nav {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &-info {
      display: flex;
    }

    &-info-location {
      display: flex;
      width: 165px;
      justify-content: space-between;
      margin-right: 24px;
    }

    &-info-phone-info {
      display: flex;
      width: 145px;
      justify-content: space-between;
      margin-right: 24px;
    }

    &-info-call-info {
      border-radius: 15px;
      padding: 5px;
      background-color: rgba(255, 84, 30, .1);
      display: flex;
      width: 185px;
      color: #FF541E;
      justify-content: space-between;
    }
    &-notification-log{
      margin-right: 16px;
    }
    &-notification {
      display: flex;
      justify-content: space-between;
    }

    &-notification-reg-and-sign {
      width: 170px;
      display: flex;
      justify-content: space-between;
    }
  }
}

@media (max-width: 744px) {

}

</style>