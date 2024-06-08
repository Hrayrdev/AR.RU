<template>
  <div class="" v-if="props.profileList">
    <div v-for="item in props.profileList" class="account-nav-item">
      <div class="account-nav-item__icon">
        <img class="" :src="require(`@/${item.icon}`)" alt="">
      </div>
      <div class="account-nav-item__label">{{ item.label }}</div>
    </div>
  </div>
</template>


<script setup>

let props = defineProps({
  profileList: Array
})

</script>


<style scoped lang="scss">
$c-black: #030303;

.account-nav-item {
  cursor: pointer;
  display: flex;
  margin-bottom: 5px;

  &__icon {
    width: 20px;
    margin-right: 4px;
  }

  &__label {
    font-size: 14px;
    color: rgba($c-black, .6);
  }

}


</style>