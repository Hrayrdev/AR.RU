<template>

  <button class="ui-button"> {{ buttonText }}
  </button>


</template>


<script setup>

let props = defineProps({
  buttonText: String,
  buttonType: Number,
})

</script>


<style scoped lang="scss">
.ui-button{
  width: 100%;
  height: 100%;
  font-size: 14px;
  border: none;
  padding: 10px;
  border-radius: 7px;
  background-color: #FF541E;
  color: white;
  cursor: pointer;
}
</style>