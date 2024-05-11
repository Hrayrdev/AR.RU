<template>
  <div class="app-account-list mr">
    <div class="app-account-list__my-account mb">
      <div class="app-account-list__my-account-avatar mr"><img class="img-auto" src="@/assets/app-account-list/avatar.png"
                                                           alt="">
      </div>
      <div class="app-account-list__my-account-data">
        <div class="app-account-list__my-account-data-name">Имя Фамилия</div>
        <div class="app-account-list__my-account-data-id">ID 9659669526</div>
      </div>
    </div>

    <div class="app-account-list__profile-list">

      <!--      #Todo вынести в отдельный компонент accountapp--nav-item -->
      <div v-for="item in profileList" class="app-account-list__profile-list-item">
        <div class="app-account-list__profile-list-icon"><img class="img-auto" :src="require(`@/${item.icon}`)" alt="">
        </div>
        <div class="app-account-list__profile-list-label">{{ item.label }}</div>
      </div>
      <!--      #Todo вынести в отдельный компонент -->
    </div>

    <div class="app-account-list__exit">
      <div class="app-account-list__exit-icon"><img class="img-auto" src="@/assets/app-account-list/exit.png" alt=""></div>
      <div class="app-account-list__exit-label">Выйти</div>
    </div>

  </div>
</template>


<script setup>

import {ref} from "vue";

const profileList = ref([
  {label: 'Сводка', icon: 'assets/app-account-list/summary.png'},
  {label: 'Подписка на премиум', icon: 'assets/app-account-list/premium.png'},
  {label: 'Профиль', icon: 'assets/app-account-list/profile.png'},
  {label: 'Избранное', icon: 'assets/app-account-list/like.png'},
  {label: 'Сообщения', icon: 'assets/app-account-list/chats.png'},
  {label: 'Уведомления', icon: 'assets/app-account-list/notification.png'},
  {label: 'Жалобы', icon: 'assets/app-account-list/complaint.png'}
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


.app-account-list {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
      font-size: 14px;
      font-family: 'Semi Bold';
    }

    &-id {
      font-size: 14px;
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
      font-size: 14px;
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
    font-size: 14px;

    color: rgba($c-black, 0.6);
  }


}


</style>