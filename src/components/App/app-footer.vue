<template>

  <div class="app-footer">
    <div class="app-footer__inner">

      <div class="app-footer__info">
        <div class="app-footer__info-logo-wrapper">
          <div class="app-footer__info-logo">
            <div class="app-footer__info-logo-inner">
              <img class="img-auto" src="@/assets/app-footer/logo.png" alt="">
            </div>
            <div class="app-footer__info-company">© 2006-2022 АН "PROНЕДВИЖИМОСТЬ"</div>
          </div>
        </div>

        <div class="app-footer__info-links">
          <div class="">
            <div class="site-info">Правила оплаты</div>
            <div class="site-info">Правила пользования сайтом</div>
            <div class="site-info">Политика конфиденциальности</div>
          </div>
        </div>

        <div class="app-footer__info-links-and-contacts">
          <div>
            <div class="app-footer__info-title ">Пишите</div>
            <div>

              <div class="app-footer__info-contacts">
                <div>
                  <div class="social-media-contact">
                    <div><img class="img-auto" src="@/assets/app-footer/mail.png" alt=""></div>
                    <div>Эл.почта</div>
                  </div>
                  <div class="social-media-contact">
                    <div><img class="img-auto" src="@/assets/app-footer/telegram.png" alt=""></div>
                    <div>Telegram</div>
                  </div>
                </div>
                <div>
                  <div class="social-media-contact">
                    <div><img class="img-auto" src="@/assets/app-footer/whatsapp.png" alt=""></div>
                    <div>Whatsapp</div>
                  </div>
                  <div class="social-media-contact">
                    <div><img class="img-auto" src="@/assets/app-footer/viber.png" alt=""></div>
                    <div>Viber</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="app-footer__info-phone-number-wrapper">
          <div>
            <div class=" app-footer__info-title ">Звоните</div>
            <div class="app-footer__info-phone-number">
              <div class="mr"><img src="@/assets/app-footer/phone.png" class="img-auto" alt=""></div>
              <div>+7 (495) 642-52-89</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>


<script setup>
import '@/mixins/mixins.scss'

</script>

<style scoped lang="scss">


$c-black: #030303;

@font-face {
  font-family: 'Semi Bold';
}

.app-footer {
  width: 100%;
  &__inner {
    margin: auto;
    width: 100%;
    max-width: 1360px;
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: center;

  }

  &__info {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;


    &-title {

      padding-left: 1px;
      font-size: 16px;
      height: 50px;
      color: rgba($c-black, .4);
    }

    &-logo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%
    }

    &-logo-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 10px;


      &-company {
        font-size: 12px;

        color: rgba($c-black, .4);
      }
    }

    &-links-and-contacts {

    }

    &-about-site-and-contacts {
      display: flex;
    }

    &-links {

      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
    }

    &-contacts {
      display: flex;
    }

    &-phone-number-wrapper {
      font-size: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-phone-number {
      font-size: 16px;
      font-weight: 1000;
      display: flex;
    }

  }


}

.app-footer__info-company {
  font-size: 12px;

  color: rgba($c-black, .4);
}

.site-info {
  color: rgba($c-black, .4);
  margin-bottom: 10px;
  font-size: 12px;
}

.social-media-contact {
  display: flex;
  margin-right: 10px;
  margin-bottom: 16px;
  font-family: "Semi Bold";
}

.grey-text {
  color: rgba($c-black, .4);
}
</style>