<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
  },
}
</script>

<style lang="scss">
@import "assets/sass/style.scss";
</style>


<template>
  <router-view></router-view>
</template>

