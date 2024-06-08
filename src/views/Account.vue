<template>
  <div class="anru-page" v-if="width > 744">
    <div class="container">
      <app-header-info/>
      <HeaderBar/>
      <div class="account-data">
        <account-nav/>
        <account-profile/>
      </div>
    </div>

    <div class="footer-in-site">
      <app-footer/>

    </div>
  </div>

  <div v-else class="anru-mobile-page">
    <div>
      <account-profile/>
    </div>
  </div>

  <button @click="updateObj">owodwodwo</button>

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

const store = useStore()
store.commit('setWinWidth')
store.commit('setWinHeight')
const width = computed(() => {
  return store.getters.getWidth
})
let testObject = reactive({
  name: 0, id: 0
})


function updateObj() {
  testObject.id++
  testObject.name++
}
window.addEventListener('resize',(e)=> {
  console.log(window.innerWidth)
})

</script>


<style lang="scss">

@import "@/mixins/mixins";

.footer-in-site {
  width: 100%;
  border-top: 1px solid rgba($c-black, .1)
}

.account-data {
  display: flex;
}

.anru-page {
  background-color: $c-white-back;
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.container {
  @include container;

  display: flex;
  justify-content: center;
  flex-direction: column;
}

.mr {
  margin-right: 10px;
}

.mb {
  margin-bottom: 10px;
}

.df {
  display: flex;
}


.img-auto {
  width: 100%;
  height: auto;
}
</style>