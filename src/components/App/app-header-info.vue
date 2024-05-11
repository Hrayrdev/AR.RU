<script setup>

</script>

<template>

<div class="app-header-info"><!-- an -->
    <div class="app-header-info__nav"> <!-- nav -->
      <div class="app-header-info__nav-info"> <!-- nav-info -->
        <div class="app-header-info__nav-info-location"> <!-- nav-location -->
          <div class="al-center"><img class="img-auto" src="@/assets/app-header-info/location.png" alt=""></div> <!-- al-center -->
          <div class="al-center">Московская область</div><!-- al-center -->
        </div>
        <div class="app-header-info__nav-info-phone-info">
          <div class="al-center"><img class="img-auto" src="@/assets/app-header-info/phone.png" alt=""></div>
          <div class="al-center">+7 (495) 652-52-89</div>
        </div>
        <div class="app-header-info__nav-info-call-info">
          <div class="al-center"><img class="img-auto" src="@/assets/app-header-info/watch.png" alt=""></div>
          <div class="al-center"  >звоните в любое время</div>
        </div>
      </div>

      <div class="app-header-info__nav-notification">
        <div class="al-center"><img src="@/assets/app-header-info/like.png" alt=""></div>
        <div class="al-center"><img src="@/assets/app-header-info/message.png" alt=""></div>
        <div class="al-center"><img src="@/assets/app-header-info/notification.png" alt=""></div>
        <div class="app-header-info__nav-notification-reg-and-sign">
          <div class="al-center"><img src="@/assets/app-header-info/avatar.png" alt=""></div>
          <div class="al-center">Вход и регистрация</div>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">

.al-center {
  font-size: 14px;
  display: flex;
  align-items: center;
}
.img-auto{
  height: auto;
  width: 100%;
}

.app-header-info {
  padding-left: 10px;
  padding-right: 13px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  &__nav {
    width: 1360px;
    display: flex;
    justify-content: space-between;
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
      background-color:rgba(255, 84, 30, .1);
      display: flex;
      width: 185px;
      color: #FF541E;
      justify-content: space-between;
    }

    &-notification {
      display: flex;
      justify-content: space-between;
      width: 280px;
    }

    &-notification-reg-and-sign {
      width: 170px;
      display: flex;
      justify-content: space-between;
    }
  }
}


</style>