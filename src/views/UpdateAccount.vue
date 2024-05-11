<template>
  <div class="update-account">
    <div class="update-account__update-avatar mb">
      <div class="update-account__avatar">
        <div class="update-account__avatar-icon mr"><img class="img-auto" src="@/assets/account-list/avatar.png" alt="">
        </div>
        <div class="update-account__avatar-label">Аватар в формате jpg или png. Максимальный размер фалат до 10МБ</div>
      </div>
      <button class="update-account__avatar-button">
        <div class="update-account__avatar-button-icon"><img class="img-auto" src="@/assets/update-account/add.png"
                                                             alt=""></div>
        <div>Загрузить фото</div>
      </button>
    </div>

    <div class="update-account__update-data">
      <input class="update-account__input mb" placeholder="Имя" type="">
      <input class="update-account__input mb" placeholder="Фамилия" type="">
    </div>

    <div>
      <button class="update-account__update-button">Сохранить изменения</button>
    </div>


  </div>


</template>


<script setup>

</script>


<style scoped lang="scss">
$c-black: #030303;




.update-account {
  margin-right: 30px;
  width: 672px;
  padding: 24px ;
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
    width: 326px;
    color: rgba($c-black, 0.5);
  }

  &__avatar-button {
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
  &__update-button{
    border: none;
    padding: 10px;
    border-radius: 7px;
    background-color: #FF541E;
    color: white;
    cursor: pointer;
  }

}


</style>