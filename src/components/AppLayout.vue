<template>
  <div class="wrapper">
    <div class="img" :style="`background-image: url(${imgUrl})`"></div>
    <div class="main">
      <div class="btns">
        <el-button 
        v-if="isBckButtonVisable" 
        type="primary" :icon="Back" 
        circle class="back" 
        @click="backFunc" />
        <el-button class="btn" @click="goRandom">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { Back } from "@element-plus/icons-vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ROUTERS_PATH } from "@/constans";
const props = defineProps({
  imgUrl: {
    typeof: String,
    required: true,
  },
  backFunc:{
    typeof: Function
  },
  isBckButtonVisable:{
    typeof: Boolean,
    default: true
  }
});
const route = useRoute()
const router = useRouter()

const routName = computed(() => route.name)

function goRandom() {
  router.push(ROUTERS_PATH.COCKTAIL_RANDOM)
  if (routName.value === ROUTERS_PATH.COCKTAIL_RANDOM) {
    router.go()
  }
}
</script>

<style lang="scss">

</style>