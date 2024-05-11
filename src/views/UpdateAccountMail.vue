<template>
  <div class="update-account-mail">
    <div class="mail-status  ">Не подтверждена</div>
    <div class="mail-info mb">Электронная почта</div>
    <div class="mail mb ">
      <input class="mail-input" placeholder="user@yandex.ru">
    </div>
    <div class="update-mail-button">Отправить ссылку для подтвеждения</div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
$c-black: #030303;

.update-account-mail {
  padding: 12px;
  border-radius: 10px;
  border: 1px solid white;
  box-shadow: 5px 5px 5px 5px #d5d2d2;
}

.mail-status {
  display: inline;
  padding: 5px;
  background-color: rgba($c-black, 0.1);
  border-radius: 20px;
  font-size: 12px;
}

.mail-info {
  margin-top: 10px;
  color: rgba($c-black, .6);
}

.mail {
}

.mail-input {
  color: $c-black;
  padding: 10px;
  border: 1px solid rgba($c-black, 0.2);
  border-radius: 10px;
}

.update-mail-button {
  color: #FF541E;
  font-size: 13px;
}
</style>