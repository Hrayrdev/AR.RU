<template>

  <div class="account-profile-phone-num-wrapper">
    <div class="account-profile-phone-info mb">Номер телефона</div>
    <div class="account-profile-phone-num mb">+7 988 - 111 - 11 - 11</div>
    <div class="account-profile-phone-num-button mb">Изменить</div>
  </div>


</template>
<script setup>
import '@/mixins/mixins.scss'

</script>
<style scoped lang="scss">
$c-black: #030303;

@font-face {
  font-family: 'Semi Bold';
  src: url("@/assets/fonts/ofont.ru_Open Sans.ttf");
}

.account-profile-phone-num-wrapper {
  padding: 24px;
  background-color: white;
  border-radius: 20px;

}

.account-profile-phone-info {
  margin-bottom: 10px;
  font-size: 14px;
  color: rgba($c-black, .6);
}

.account-profile-phone-num {
  margin-bottom: 10px;
  font-size: 14px;
  color: $c-black;
}

.account-profile-phone-num-button {
  font-size: 14px;
  color: #FF541E;
}

@media (max-width: 744px) {
  .account-profile-phone-num-wrapper {

    border-radius: 20px;
  }

}

</style>