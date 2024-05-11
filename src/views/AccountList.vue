<template>
  <div class="account-list mr">
    <div class="account-list__my-account mb">
      <div class="account-list__my-account-avatar mr"><img class="img-auto" src="../assets/account-list/avatar.png"
                                                           alt="">
      </div>
      <div class="account-list__my-account-data">
        <div class="account-list__my-account-data-name">Имя Фамилия</div>
        <div class="account-list__my-account-data-id">ID 9659669526</div>
      </div>
    </div>

    <div class="account-list__profile-list">
      <div v-for="item in profileList" class="account-list__profile-list-item">
        <div class="account-list__profile-list-icon"><img class="img-auto" :src="require(`@/${item.icon}`)" alt="">
        </div>
        <div class="account-list__profile-list-label">{{ item.label }}</div>
      </div>
    </div>

    <div class="account-list__exit">
      <div class="account-list__exit-icon"><img class="img-auto" src="@/assets/account-list/exit.png" alt=""></div>
      <div class="account-list__exit-label">Выйти</div>
    </div>

  </div>
</template>


<script setup>

import {ref} from "vue";

const profileList = ref([
  {label: 'Сводка', icon: 'assets/account-list/summary.png'},
  {label: 'Подписка на премиум', icon: 'assets/account-list/premium.png'},
  {label: 'Профиль', icon: 'assets/account-list/profile.png'},
  {label: 'Избранное', icon: 'assets/account-list/like.png'},
  {label: 'Сообщения', icon: 'assets/account-list/chats.png'},
  {label: 'Уведомления', icon: 'assets/account-list/notification.png'},
  {label: 'Жалобы', icon: 'assets/account-list/complaint.png'}
])


</script>


<style scoped lang="scss">
$c-black: #030303;

@font-face {
  font-family: 'Semi Bold';
  src: url("@/assets/fonts/ofont.ru_Open Sans.ttf");
}

@font-face {
  font-family: 'medium';
  src: url("@/assets/fonts/ofont.ru_Roboto Medium.ttf");

}


.account-list {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  &__my-account {
    display: flex;
    align-items: center;
    width: 250px;
    border-bottom: 1px solid rgba($c-black, 0.1);

  }

  &__my-account-avatar {
  }

  &__my-account-data {
    &-name {
      font-family: 'Semi Bold';
    }

    &-id {
      font-family: 'medium';
      color: rgba($c-black, .6);
    }
  }

  &__profile-list {
    border-bottom: 1px solid rgba($c-black, 0.1);
    width: 250px;

    &-icon {
      width: 20px;
      margin-right: 4px;
    }

    &-label {
      color: rgba($c-black, .6);

    }
  }

  &__profile-list-item {
    cursor: pointer;

    display: flex;
    margin-bottom: 5px;
  }

  &__exit {
    display: flex;
    width: 250px;
  }

  &__exit-icon {
    cursor: pointer;

    margin-right: 4px;
  }

  &__exit-label {
    cursor: pointer;

    color: rgba($c-black, 0.6);
  }


}


</style>