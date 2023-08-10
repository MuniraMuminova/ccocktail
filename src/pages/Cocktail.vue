<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFunc="goBack">
      <div class="info">
        <h2 class="title">{{cocktail.strDrink}}</h2>
        <div class="line"></div>
        <div class="list">
          <div class="list__item" v-for="(item, idx) in ingredient" :key="idx">
            {{item.name}}
            <span v-if="item.measure">
           | {{item.measure}}
            </span>

          </div>
        </div>
        <div class="instructions">
          <p class="instructions__category">
            Category: {{ cocktail.strCategory }}
          </p>
          <p class="instructions__cocktail">
            {{ cocktail.strInstructions }}
          </p>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import AppLayout from "@/components/AppLayout.vue";
import { computed } from "vue";
import {COCKTAILS_BY_ID } from "@/constans";
import axios from 'axios'
import { ref } from "vue";

const route = useRoute()
const router = useRouter()

const cocktailId = computed(() => route.path.split('/').pop())
const cocktail = ref(null)


const ingredient = computed(() =>{
  const ingredients = []

  for (let i = 1; i <= 15; i++) {
   if(!cocktail.value[`strIngredient${i}`]) break
   
   const ingredient= {}
     ingredient.name = cocktail.value[`strIngredient${i}`]
    ingredient.measure = cocktail.value[`strMeasure${i}`]

   ingredients.push(ingredient)
    
  }
  return ingredients
})


async function getCocktail() {
  const data = await axios.get(`${COCKTAILS_BY_ID}${cocktailId.value}`);
  cocktail.value = data.data.drinks[0];
}
getCocktail();

function goBack() {
  router.go(-1)
}

</script>

<style lang="scss">
.list{
  width: 560px;
  padding: 50px 0 0 80px;
text-align: left;
display: flex;
flex-direction: column;
  gap: 20px;
  margin-left: 40px;
}
.list__item{
  position: relative;
  padding-left: 30px;
  color: #FFF;
font-size: 18px;
line-height: 27px;
letter-spacing: 1.8px;
  &::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: url('@/assets/img/heart.svg')no-repeat 50%;
    width: 17px;
    height: 17px;
    margin-right: 20px;
 
  }

}
.instructions{
  padding-top: 30px;
  color: #D3D3D3;
text-align: center;
font-size: 24px;
font-weight: 400;
line-height: 36px;
letter-spacing: 2.4px;
max-width: 516px;
width: 100%;
margin: 0 auto;
&__category{
  margin-bottom: 30px;
}
}

</style>