<template>
  <div class="card fixed-top">
  <div class="card-body">
    Scroll Position: {{ scrollWatcher }}
  </div>
</div>
  <div class="d-flex flex-column justify-content-center">
    <div v-for="n in 10" :key="n" style="width:640px">
      <h1>PLACEHOLDER</h1>
      <p>
        Set the direction of flex items in a flex container with direction
        utilities. In most cases you can omit the horizontal class here as the
        browser default is row. However, you may encounter situations where you
        needed to explicitly set this value (like responsive layouts). Use
        .flex-row to set a horizontal direction (the browser default), or
        .flex-row-reverse to start the horizontal direction from the opposite
        side. Quickly manage the layout, alignment, and sizing of grid columns,
        navigation, components, and more with a full suite of responsive flexbox
        utilities. For more complex implementations, custom CSS may be necessary.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollWatcher: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    console.log(window.scrollY)
  },
  methods: {
    onScroll() {
      this.scrollWatcher = window.scrollY.toFixed(1)
    }
  },
  watch: {
    scrollWatcher(val) {
      console.log(val)
    }
  }
}
</script>