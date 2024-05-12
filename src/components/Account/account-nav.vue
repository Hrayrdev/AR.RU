<template>
  <div class="account-nav ">
    <div class="account-nav__user-info ">
      <div class="account-nav__avatar-wrapper ">
        <img class="account-nav__avatar"
             src="@/assets/app-account-list/avatar.png"
             alt="">
      </div>
      <div class="account-nav__user-data">
        <div class="account-nav__name">Имя Фамилия</div>
        <div class="account-nav__id">ID 9659669526</div>
      </div>
    </div>

    <div class="account-nav__list">

      <!--      #Todo вынести в отдельный компонент accountapp--nav-item -->
      <account-nav-item :profile-list="profileList"/>

      <!--      #Todo вынести в отдельный компонент -->
    </div>

    <div class="account-nav__exit">
      <div class="account-nav__exit-icon"><img class="img-auto" src="@/assets/app-account-list/exit.png" alt="">
      </div>
      <div class="account-nav__exit-label">Выйти</div>
    </div>

  </div>
</template>


<script setup>

import {ref} from "vue";
import AccountNavItem from "@/components/Account/account-nav-item.vue";

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
@import "@/mixins/mixins";
@font-face {
  font-family: 'Semi Bold';
  src: url("@/assets/fonts/ofont.ru_Open Sans.ttf");
}

@font-face {
  font-family: 'medium';
  src: url("@/assets/fonts/ofont.ru_Roboto Medium.ttf");

}


.account-nav {
  margin-right: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__user-info {
    @include mb;
    display: flex;
    align-items: center;
    width: 250px;
    border-bottom: 1px solid rgba($c-black, 0.1);

  }

  &__avatar-wrapper{
  margin-right: 10px;

  }


  &__my-account-avatar {
  }

  &__avatar{
    width: 100%;
    height: auto;
  }
  &__name {
    font-size: 14px;
    font-family: 'Semi Bold';
  }

  &__id {
    font-size: 14px;
    font-family: 'medium';
    color: rgba($c-black, .6);
  }

  &__list {
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