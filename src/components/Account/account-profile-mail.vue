<template>
  <div class="account-profile-mail">
    <div class="mail-status  ">Не подтверждена</div>
    <div class="mail-info mb">Электронная почта</div>
    <div class="mail mb ">
      <input class="mail-input" placeholder="user@yandex.ru">
    </div>
    <div class="account-profile-mail-button">Отправить ссылку для подтвеждения</div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
$c-black: #030303;

.account-profile-mail {
  padding: 12px;
  border-radius: 10px;
}

.mail-status {
  display: inline;
  padding: 5px;
  background-color: rgba($c-black, 0.1);
  border-radius: 20px;
  font-size: 12px;
}

.mail-info {
  font-size: 14px;
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

.account-profile-mail-button {
  color: #FF541E;
  font-size: 14px;
}
</style>