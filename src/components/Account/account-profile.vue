<template>
  <div class="account-profile" v-if="width >744">
    <div class="account-profile__form-wrapper">
      <account-profile-form/>
    </div>
    <div class="account-profile__info">
      <div class="account-profile__phone-wrapper">
        <account-profile-phone-num/>
      </div>
      <div class="account-profile__email-wrapper">
        <account-profile-mail/>
      </div>
    </div>
  </div>

  <div class="account-profile" v-else>
    <div class="account-profile__form-wrapper">
      <account-profile-form/>
    </div>
    <div class="account-profile__ui-info-wrapper">
      <div class="account-profile__ui-info">
        <div class="account-profile__phone-wrapper">
          <account-profile-phone-num/>
        </div>
        <div class="account-profile__email-wrapper">
          <account-profile-mail/>
        </div>

      </div>
      <div class="account-profile__save-button">
        <ui-button :button-text="'Сохранить изменения'"/>
      </div>
    </div>


  </div>
</template>
<script setup>
import AccountProfilePhoneNum from "@/components/Account/account-profile-phone-num.vue";
import AccountProfileMail from "@/components/Account/account-profile-mail.vue";
import AccountProfileForm from "@/components/Account/account-profile-form.vue";
import UiButton from "@/components/Ui/ui-button.vue";

import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore()
const width = computed(() => {
  return store.getters.getWidth
})


</script>
<style scoped lang="scss">
$c-black: #030303;


.account-profile {
  height: 100%;
  margin: auto;
  display: flex;

  &__form-wrapper {
    border-radius: 20px;
    max-height: 290px;
    padding: 20px;

    margin-right: 60px;
    background-color: white;
  }


  &__phone-wrapper {
    margin-bottom: 16px;
  }


  &__email-wrapper {
  }
}

.account-profile-phone-mail {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1400px) {

  .account-profile {
    flex-direction: column;
  }
  .account-profile__form-wrapper {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .account-profile__phone-wrapper {
    margin-right: 10px;
    background-color: white;
    height: 100%;
    border-radius: 20px;
  }
  .account-profile__email-wrapper {
  }
  .account-profile__info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    gap: 10px;

  }
  .account-profile__ui-modal-background {
    background-color: white;
  }
  @media (max-width: 744px) {
    .account-profile__ui-info-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      padding-bottom: 35px
    }
    .account-profile {
      height: 100%;
      padding: 20px;
    }
    .account-profile__email-wrapper {
      height: 100%;
      border: 1px solid rgba($c-black, 0.2);
      border-radius: 20px;

    }
    .account-profile__phone-wrapper {
      border-radius: 20px;
      height: 100%;
      border: 1px solid rgba($c-black, 0.2);
      margin-right: 0px;
    }
    .account-profile__form-wrapper {
      margin-right: 0px;


    }
    .account-profile__ui-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

    }

    .account-profile__save-button {
      height: 52px;
    }
  }
}


</style>
