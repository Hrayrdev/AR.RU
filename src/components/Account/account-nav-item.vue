<template>
  <div class="account-nav-item-wrapper" v-if="width>744">
    <div v-for="item in props.profileList" class="account-nav-item">
        <div class="account-nav-item__icon">
          <img class="account-nav-item__icon-img" :src="require(`@/${item.icon}`)" alt="">
        </div>
        <div class="account-nav-item__label">{{ item.label }}</div>
    </div>

  </div>

  <div class="account-nav-item-wrapper" v-else>
    <div v-for="item in props.profileList" class="account-nav-item">
      <div class="account-nav-item-inner" >
        <div class="account-nav-item__icon">
          <img class="account-nav-item__icon-img" :src="require(`@/${item.icon}`)" alt="">
        </div>
        <div class="account-nav-item__label">{{ item.label }}</div>
      </div>
      <div>
        <img class="account-nav-item__icon-img" v-if="width<744" src="@/assets/app-account-list/arrow-right.png" alt="">
      </div>
    </div>

  </div>

</template>


<script setup>

import {useStore} from "vuex";
import {computed} from "vue";

let props = defineProps({
  profileList: Array
})

const store = useStore()
const width = computed(() => {
  return store.getters.getWidth
})

</script>


<style scoped lang="scss">
$c-black: #030303;

.account-nav-item {
  cursor: pointer;
  display: flex;
  margin-bottom: 5px;

  &__icon {
    width: 20px;
    margin-right: 4px;
  }

  &__label {
    font-size: 14px;
    color: rgba($c-black, .6);
  }

}

@media (max-width: 744px) {
  .account-nav-item-wrapper {
    background-color: white;
    border-radius: 20px;
    padding: 15px;

  }
  .account-nav-item-inner {
    display: flex;
  }
  .account-nav-item {
    padding: 10px;
    justify-content: space-between;
    border-bottom: 1px solid rgba($c-black, 0.1);

    &__icon {
      &-img {
        max-width: 25px;
      }
    }

    &__label {
      color: $c-black;

    }

  }

}

</style>