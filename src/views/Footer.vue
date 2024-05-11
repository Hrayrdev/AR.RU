<template>

  <div class="footer">
    <div class="footer__info">
      <div class="footer__info-about-us">
        <div class="footer__info-about-us-logo">
          <img class="img-auto" src="@/assets/footer/logo.png" alt="">
        </div>
        <div class="footer__info-about-us-company">© 2006-2022 АН "PROНЕДВИЖИМОСТЬ"</div>
      </div>
      <div class="footer__info-links-and-contacts">
        <div class="grey-text mb">Пишите</div>
        <div class="df">
          <div class="footer__info-links">
            <div class="site-info">Правила оплаты</div>
            <div class="site-info">Правила пользования сайтом</div>
            <div class="site-info">Политика конфиденциальности</div>
          </div>
          <div class="footer__info-contacts">
            <div class="mr">
              <div class="social-media-contact">
                <div><img class="img-auto" src="@/assets/footer/mail.png" alt=""></div>
                <div>Эл.почта</div>
              </div>
              <div class="social-media-contact">
                <div><img class="img-auto" src="@/assets/footer/telegram.png" alt=""></div>
                <div>Telegram</div>
              </div>
            </div>
            <div>
              <div class="social-media-contact">
                <div><img class="img-auto" src="../assets/footer/whatsapp.png" alt=""></div>
                <div>Whatsapp</div>
              </div>
              <div class="social-media-contact">
                <div><img class="img-auto" src="../assets/footer/viber.png" alt=""></div>
                <div>Viber</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__info-phone-number">
        <div class="grey-text">Звоните</div>
        <div class="df">
          <div class="mr"><img src="@/assets/footer/phone.png" class="img-auto" alt=""></div>
          <div>+7 (495) 642-52-89</div>
        </div>
      </div>
    </div>
  </div>

</template>


<script setup>

</script>


<style scoped lang="scss">

$c-black: #030303;

@font-face {
  font-family: 'Semi Bold';
}

.footer {

    padding: 40px;

  &__info {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;


    &-about-us {
      display: flex;
      flex-direction: column;
      align-items: center;

      &-logo {
        width: 140px;
        margin-bottom: 80px;
      }

      &-company {
        font-size: 12px;
        color: rgba($c-black, .4);
      }
    }

    &-links-and-contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    &-about-site-and-contacts {
      display: flex;
    }

    &-links {
      margin-right: 100px;
    }

    &-contacts {
      display: flex;
    }

    &-phone-number{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

  }


}

.site-info {
  color: rgba($c-black, .4);
  margin-bottom: 10px;
  font-size: 12px;
}

.social-media-contact {
  display: flex;
  margin-bottom: 16px;
  font-family: "Semi Bold";
}

.grey-text {
  color: rgba($c-black, .4);
}
</style>