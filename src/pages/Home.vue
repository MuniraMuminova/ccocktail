<template>
  <AppLayout imgUrl="/src/assets/img/bg.png" :backFunc="removeIngredient" :isBckButtonVisable="!!ingredient">
    <div class="content">
      <div class="info" v-if="!ingredient ||! cocktails">
        <h2 class="title">Choose your drink</h2>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="rootStore.ingredient"
            placeholder="Choose main ingredient"
            size="large"
            class="select"
            filterable
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="@/assets/img/cocktails.png" alt="" class="img" />
      </div>
      <div class="info" v-else>
        <h2 class="title">COCKTAILS WITH {{ ingredient }}</h2>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail"/>
        </div>
      </div>
    </div>
  </AppLayout>
</template>



<script setup>
import AppLayout from "@/components/AppLayout.vue";
import CocktailThumb from "@/components/CocktailThumb.vue";
import { useRootState } from "@/store/root";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const rootStore = useRootState();
rootStore.getIngredients()
const { ingredients, cocktails, ingredient } = storeToRefs(rootStore);

function getCocktails(){
  rootStore.getCocktails(rootStore.ingredient)
}

function removeIngredient() {
  rootStore.setIngredient(null)
}
</script>

<style lang="scss">

</style>