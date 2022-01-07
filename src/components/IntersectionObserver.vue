<template>
<div class="obs-container d-flex flex-lg-column">
  <div class="item show m-3 d-flex">
    <h1 class="">sdfasd Ipsum 🚀 </h1>
  </div>
  <div v-for="i in 20" :key="i" class="item m-3 d-flex">
    <h1 class="">sdfasd Ipsum 🚀 </h1>
  </div>
</div>
</template>

<script>
import { onMounted } from "vue"
export default {
  setup() {
    onMounted(() => {
      let options = {
        threshold: 1
      }
      let observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
        })
      }, options)

      let targets = document.querySelectorAll('.item')
      targets.forEach(target => {
        observer.observe(target)
      })
    })
  }
}
</script>


<style lang="scss">
.obs-container {
}
.item {
  width: 20%;
  height: 100px;
  border: 1px solid black;
  border-radius: 10px;
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.2s linear ;
}
h1 {
  margin: auto;
}
.show {
  opacity: 1;
  transform: translateX(0px);
}
</style>