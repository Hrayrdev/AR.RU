<template>
  <div class="app-header-bar">
    <div class="app-header-bar__panel">
      <div class="app-header-bar__panel-logo-links">
        <div class="app-header-bar__panel-logo">
          <img class="app-header-bar__image" src="@/assets/app-header-bar/logo.png" alt="">
        </div>
        <div class="app-header-bar__panel-links">
          <div v-for="button in buttons" class="app-header-bar__panel-button">
            <div class="app-header-bar__image mr" v-if="button.icons"><img :src="require(`@/${button.icons}`)" alt=""></div>
            <div>{{ button.text }}</div>
          </div>
        </div>
      </div>

      <div class="app-header-bar__panel-button">
          <button class="app-header-bar__my-button">Разместить объявление</button>
      </div>
    </div>
  </div>


</template>

<script setup>
import {computed, ref} from "vue";

let buttons = ref([
  {text: 'Аренда', icons: ''},
  {text: 'Продажа', icons: ''},
  {text: 'Новостройки', icons: ''},
  {text: 'Ипотека', icons: ''},
  {text: 'Журнал', icons: ''},
  {text: 'Агенства', icons: ''},
  {text: 'Срочный выкуп квартир', icons: 'assets/app-header-bar/building.png'},
])
</script>

<style scoped lang="scss">
.app-header-bar__image {
  height: auto;
}



.app-header-bar {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;

  &__panel {
    display: flex;
    justify-content: space-between;
    width: 1360px;
  }

  &__panel-logo-links {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 900px;
  }

  &__panel-logo {

  }

  &__image {

  }

  &__panel-links {
    font-size: 14px;
    display: flex;
  }

  &__panel-button {
    display: flex;
    margin-right: 15px;
  }
}





.app-header-bar__my-button {
  color: white;
  font-size: 14px;
  border: none;
  padding: 7px;
  background-color: #FF541E;
  border-radius: 12px;
}


</style>
