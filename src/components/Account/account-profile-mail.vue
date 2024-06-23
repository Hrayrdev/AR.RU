<template>
  <div class="account-profile-mail">
    <div class="account-profile-mail-status  ">Не подтверждена</div>
    <div class="account-profile-mail-info ">Электронная почта</div>
    <div class="account-profile-mail-name mb ">
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
  background-color: white;
  border-radius: 20px;
  padding: 24px;

}

.account-profile-mail-status {
  display: inline;
  padding: 5px;
  background-color: rgba($c-black, 0.1);
  border-radius: 20px;
  font-size: 12px;
  margin-bottom: 10px;
}

.account-profile-mail-info {
  margin-bottom: 10px;
  font-size: 14px;
  color: rgba($c-black, .6);
}

.account-profile-mail-name {
  margin-bottom: 10px;
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

@media (max-width: 744px) {
  .account-profile-mail {
    border-radius: 20px;
  }
}

</style>