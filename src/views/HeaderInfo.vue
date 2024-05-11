<script setup>

</script>

<template>

<div class="header-info"><!-- an -->
    <div class="header-info__nav"> <!-- nav -->
      <div class="header-info__nav__info"> <!-- nav-info -->
        <div class="header-info__nav__info__location"> <!-- nav-location -->
          <div class="al-center"><img class="img-auto" src="../assets/header-info/location.png" alt=""></div> <!-- al-center -->
          <div class="al-center">Московская область</div><!-- al-center -->
        </div>
        <div class="header-info__nav__info__phone-info">
          <div class="al-center"><img class="img-auto" src="../assets/header-info/phone.png" alt=""></div>
          <div class="al-center">+7 (495) 652-52-89</div>
        </div>
        <div class="header-info__nav__info__call-info">
          <div class="al-center"><img class="img-auto" src="../assets/header-info/watch.png" alt=""></div>
          <div class="al-center"  >звоните в любое время</div>
        </div>
      </div>

      <div class="header-info__nav__notification">
        <div class="al-center"><img src="../assets/header-info/like.png" alt=""></div>
        <div class="al-center"><img src="../assets/header-info/message.png" alt=""></div>
        <div class="al-center"><img src="../assets/header-info/notification.png" alt=""></div>
        <div class="header-info__nav__notification__reg-and-sign">
          <div class="al-center"><img src="../assets/header-info/avatar.png" alt=""></div>
          <div class="al-center">Вход и регистрация</div>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">

.al-center {
  display: flex;
  align-items: center;
}
.img-auto{
  height: auto;
  width: 100%;
}

.header-info {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  &__nav {
    width: 1360px;
    display: flex;
    justify-content: space-between;
    &__info {
      display: flex;
    }

    &__info__location {
      display: flex;
      width: 190px;
      justify-content: space-between;
      margin-right: 24px;
    }

    &__info__phone-info {
      display: flex;
      width: 170px;
      justify-content: space-between;
      margin-right: 24px;
    }

    &__info__call-info {
      border-radius: 15px;
      padding: 5px;
      background-color:rgba(255, 84, 30, .1);
      display: flex;
      width: 210px;
      color: #FF541E;
      justify-content: space-between;
    }

    &__notification {
      display: flex;
      justify-content: space-between;
      width: 320px;
    }

    &__notification__reg-and-sign {
      width: 190px;
      display: flex;
      justify-content: space-between;
    }
  }
}

.al-center {
}

.img-auto {
}

</style>