<template>
  <div class="account__wrapper"><!--изменить название-->
    <div class="account__header" v-if="width > 744">
      <div class="account__container">
        <app-header-info/>
        <HeaderBar/>
      </div>
    </div>

    <div class="account__body">
      <div class="account__body-inner">
        <account-nav/>
        <account-profile v-if="width > 744"/>
      </div>
    </div>
    <div v-if="width <= 744" class="ui-modal-account-profile">
      <div class="ui-modal-account-profile__content">
        <account-profile/>
      </div>
    </div>
    <div class="account__footer" v-if="width > 744">
      <app-footer/>
    </div>
  </div>
</template>
<script setup>
import '@/mixins/mixins.scss'

import HeaderBar from "@/components/App/app-header-bar.vue";
import AppHeaderInfo from "@/components/App/app-header-info.vue";
import AppFooter from "@/components/App/app-footer.vue";
import AccountNav from "@/components/Account/account-nav.vue";
import AccountProfile from "@/components/Account/account-profile.vue";
import {computed, onMounted, reactive, watch, watchEffect} from "vue";
import {createLogger, useStore} from "vuex";

onMounted(() => {
  store.commit('setWinWidth', window.innerWidth)
  store.commit('setWinHeight', window.innerHeight)
})

const store = useStore()

const width = computed(() => {
  return store.getters.getWidth
})
let testObject = reactive({
  name: 0, id: 0
})


window.addEventListener('resize', (e) => {
  store.commit('setWinWidth', window.innerWidth)
  store.commit('setWinHeight', window.innerHeight)
})
</script>


<style lang="scss">
@import "@/mixins/mixins";


.account__footer{
  display: flex;
  background-color: white;
}
.account__wrapper{
  height: 100vh;
}

.account__header {
  max-width: 1360px;
  margin: auto;
}

.ui-modal-account-profile {
  top: 0;
  left: 0;
  background: rgba(#030303, .3);
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;

  &__content {
    background-color: white;
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 60%;
  }
}

.account__body {
  background-color: $c-white-back;
  padding: 10px;
  height: 620px;
  @include inner-center;

  &-inner {
    max-width: 1360px;
    margin: auto;
    display: flex;
    height: 100%;
  }
}
 @media (max-width: 744px) {
   .account__body{
     display: block;
   }

 }
//.container {
//  @include container;
//}

//.footer-in-site {
//  width: 100%;
//  border-top: 1px solid rgba($c-black, .1)
//}
//
//.account-data {
//  display: flex;
//}
//
//.anru-page {
//  background-color: $c-white-back;
//  height: 98vh;
//  display: flex;
//  align-items: center;
//  justify-content: space-between;
//  flex-direction: column;
//}


//
//.mr {
//  margin-right: 10px;
//}
//
//.mb {
//  margin-bottom: 10px;
//}
//
//.df {
//  display: flex;
//}
//
//
//.img-auto {
//  width: 100%;
//  height: auto;
//}
</style>