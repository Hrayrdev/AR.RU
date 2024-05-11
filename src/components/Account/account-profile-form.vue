<template>
  <div class="account-profile-form">
    <div class="account-profile-form__update-avatar mb">
      <div class="account-profile-form__avatar">
        <div class="account-profile-form__avatar-icon mr"><img class="img-auto" src="@/assets/app-account-list/avatar.png" alt="">
        </div>
        <div class="account-profile-form__avatar-label">Аватар в формате jpg или png. Максимальный размер фалат до 10МБ</div>
      </div>
      <button class="account-profile-form__avatar-button">
        <div class="account-profile-form__avatar-button-icon">
          <img class="img-auto" src="@/assets/app-update-account/add.png" alt="">
        </div>
        <div>Загрузить фото</div>
      </button>
    </div>

    <div class="account-profile-form__update-data">
      <input class="account-profile-form__input mb" placeholder="Имя" type="">
      <input class="account-profile-form__input mb" placeholder="Фамилия" type="">
    </div>

    <div>
      <button class="account-profile-form__update-button">Сохранить изменения</button>
    </div>


  </div>


</template>


<script setup>

</script>


<style scoped lang="scss">
$c-black: #030303;


.account-profile-form {
  margin-right: 30px;
  width: 672px;
  padding: 24px;
  border: 1px solid white;
  box-shadow: 3px 3px 3px 3px #d5d2d2;
  border-radius: 40px;

  &__update-avatar {
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  &__avatar {
    display: flex;
    align-items: center;
  }

  &__avatar-icon {

  }

  &__avatar-label {
    font-size: 14px;
    width: 326px;
    color: rgba($c-black, 0.5);
  }

  &__avatar-button {
    font-size: 14px;
    border: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    background-color: $c-black;
    cursor: pointer;

    &-icon {
      display: flex;
      margin-right: 5px;
    }
  }


  &__update-data {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }

  &__input {
    color: $c-black;
    padding: 10px;
    border: 1px solid rgba($c-black, 0.2);
    border-radius: 10px;
  }

  &__update-button {
    font-size: 14px;
    border: none;
    padding: 10px;
    border-radius: 7px;
    background-color: #FF541E;
    color: white;
    cursor: pointer;
  }

}


</style>