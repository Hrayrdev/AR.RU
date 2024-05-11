<template>
  <div class="anru-page">
    <div style="width: 1360px;">
      <HeaderInfo/>
      <HeaderBar/>
      <div style="display:flex;">
        <AccountList/>
        <update-account/>
        <div style="display:flex; flex-direction: column; justify-content: space-between">
          <update-account-phone-num/>
          <update-account-mail/>
        </div>
      </div>
    </div>

    <div class="footer-in-site">
      <Footer/>
    </div>

  </div>
</template>
<script setup>

import HeaderInfo from "@/views/HeaderInfo.vue";
import HeaderBar from "@/views/HeaderBar.vue";
import AccountList from "@/views/AccountList.vue";
import UpdateAccount from "@/views/UpdateAccount.vue";
import UpdateAccountPhoneNum from "@/views/UpdateAccountPhoneNum.vue";
import UpdateAccountMail from "@/views/UpdateAccountMail.vue";
import Footer from "@/views/Footer.vue";
</script>


<style lang="scss">
$c-black: #030303;

.footer-in-site {
  width: 100%;
  border-top: 1px solid rgba($c-black, .1)
}

.anru-page {
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
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