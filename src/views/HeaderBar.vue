<template>
  <div class="header-bar">
    <div class="header-bar__panel">
      <div class="header-bar__panel-logo-links">
        <div class="header-bar__panel-logo">
          <img class="header-bar__image" src="../assets/header-bar/logo.png" alt="">
        </div>
        <div class="header-bar__panel-links">
          <div v-for="button in buttons" class="header-bar__panel-button">
            <div class="header-bar__image mr" v-if="button.icons"><img :src="require(`@/${button.icons}`)" alt=""></div>
            <div>{{ button.text }}</div>
          </div>
        </div>
      </div>

      <div class="header-bar__panel-button">
          <button class="header-bar__my-button">Разместить объявление</button>
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
  {text: 'Срочный выкуп квартир', icons: 'assets/header-bar/building.png'},
])
</script>

<style scoped lang="scss">
.header-bar__image {
  height: auto;
}



.header-bar {
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
    display: flex;
  }

  &__panel-button {
    display: flex;
    margin-right: 10px;
  }
}


.grid-test {
  display: grid;
  grid-template-columns: repeat(5, 20%);


}

.grid-item {
  border: 1px solid;

}

.grid-pop {
  background-color: red;

}


.header-bar__my-button {
  border: none;
  padding: 7px;
  background-color: #FF541E;
  border-radius: 7px;
}


</style>
