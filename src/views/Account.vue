<template>
  <div class="anru-page">
    <div class="container">
      <app-header-info/>
      <HeaderBar/>
      <div style="display:flex;">
        <account-nav/>
<account-profile/>
      </div>
    </div>

    <div class="footer-in-site">
      <div style="width: 1360px;">
        <app-footer/>
      </div>

    </div>

  </div>
</template>
<script setup>
import '@/mixins/mixins.scss'

import HeaderBar from "@/components/App/app-header-bar.vue";
import AccountList from "@/components/Account/account-nav.vue";
import UpdateAccount from "@/components/Account/account-profile-form.vue";
import UpdateAccountPhoneNum from "@/components/Account/account-profile-phone-num.vue";
import UpdateAccountMail from "@/components/Account/account-profile-mail.vue";
import AppHeaderInfo from "@/components/App/app-header-info.vue";
import AppFooter from "@/components/App/app-footer.vue";
import AccountNav from "@/components/Account/account-nav.vue";
import AccountProfilePhoneNum from "@/components/Account/account-profile-phone-num.vue";
import AccountProfileMail from "@/components/Account/account-profile-mail.vue";
import AccountProfile from "@/components/Account/account-profile.vue";
</script>


<style lang="scss">
@import "@/mixins/mixins";

.footer-in-site {
  width: 100%;
  border-top: 1px solid rgba($c-black, .1)
}

.container {
  @include container;
}

.anru-page {
  height: 98vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.container {
  max-width: 1360px;
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