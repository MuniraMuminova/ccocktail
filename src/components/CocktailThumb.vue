<template>
  <div class="content">
    <router-link :to="`/cocktails/${cocktail.idDrink}`" class="content__items">
    <div
      class="pic"
      :style="`background-image: url(${cocktail.strDrinkThumb})`"
    ></div>
    <div class="name">{{ cocktail.strDrink }}</div>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  cocktail: {
    typeof: Object,
  },
});
</script>

<style>
.pic {
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.cocktails {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 38px;
  max-height: 500px;
  overflow-y: auto;
}
::-webkit-scrollbar{
  background: #141414;
}        
::-webkit-scrollbar-thumb   {
  background: #ff0f82;
  border-radius: 10px;

}     

.name {
  color: #fff;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1.6px;
  
}
.content__items{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}
</style>