<template>

  <div class="account-profile-phone-num">
    <div class="phone-info mb">Номер телефона</div>
    <div class="phone-num mb">+7 988 - 111 - 11 - 11</div>
    <div class="account-profile-phone-num-button mb">Изменить</div>
  </div>


</template>
<script setup>

</script>
<style scoped lang="scss">
$c-black: #030303;

@font-face {
  font-family: 'Semi Bold';
  src: url("@/assets/fonts/ofont.ru_Open Sans.ttf");
}

.account-profile-phone-num {
  padding: 12px;
  border-radius: 10px;
  background-color: white;
}

.phone-info {
  font-size: 14px;
  color: rgba($c-black, .6);
}

.phone-num {
  font-size: 14px;
  color: $c-black;
}

.account-profile-phone-num-button {
  font-size: 14px;
  color: #FF541E;
}

</style>