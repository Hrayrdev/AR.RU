
<template>

  <div class="update-account-phone-num">
          <div class="phone-info mb">Номер телефона</div>
          <div class="phone-num mb">+7 988 - 111 - 11 - 11</div>
          <div class="update-button mb">Изменить</div>
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

.update-account-phone-num {
  padding: 12px;
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: 5px 5px 5px 5px #d5d2d2;
}

.phone-info {
  color: rgba($c-black, .6);
}

.phone-num {
  color: $c-black;
}

.update-button {
  color: #FF541E;
}

</style>