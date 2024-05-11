
<template>
  <account-profile-form/>
  <div style="display:flex; flex-direction: column; justify-content: space-between">
    <account-profile-phone-num/>
    <account-profile-mail/>
  </div>




</template>

<style scoped lang="scss">

</style>
<script setup>
import AccountProfilePhoneNum from "@/components/Account/account-profile-phone-num.vue";
import AccountProfileMail from "@/components/Account/account-profile-mail.vue";
import AccountProfileForm from "@/components/Account/account-profile-form.vue";
</script>