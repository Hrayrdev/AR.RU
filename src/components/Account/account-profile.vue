<template>
  <div class="pc-style" v-if="useStore().state.winWidth >744">
    <account-profile-form/>
    <div class="account-profile-phone-mail">
      <account-profile-phone-num/>
      <account-profile-mail/>
    </div>
  </div>

  <div v-else>
    <account-profile-form/>
    <div>
      <account-profile-phone-num/>
      <account-profile-mail/>
    </div>
  </div>

</template>

<style scoped lang="scss">
.pc-style{
  display: flex;
}
.account-profile-phone-mail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
<script setup>
import AccountProfilePhoneNum from "@/components/Account/account-profile-phone-num.vue";
import AccountProfileMail from "@/components/Account/account-profile-mail.vue";
import AccountProfileForm from "@/components/Account/account-profile-form.vue";
import {useStore} from "vuex";
</script>