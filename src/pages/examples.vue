<template>
  <div class="d-flex">
    <div class="">
      <router-link
        v-slot="{ navigate, href }"
        to="/smooth-scroll">
      <a @click="navigate" class="btn btn- btn-primary" :href="href" role="button">Smooth Scroll</a>
      </router-link>
    </div>

    <div class="ms-3">
      <router-link
        v-slot="{ navigate, href }"
        to="/animate">
      <a id="animations" @click="navigate" class="btn btn-primary" :href="href" role="button">Animations</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import Valid from "../services/validate"
export default {
  data() {
    return {
      isActive: false,
      text:""
    }
  },
  mounted() {
        const testVar = Valid;
        console.log(testVar);
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  watch: {
    isActive(val) {
      console.log(val);
    }
  }
}
</script>

<style>
#animations {
      font-size: v-bind(text);
}

</style>