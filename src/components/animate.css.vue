<template>
  <div class="d-flex flex-row">
    <div class="card" style="width: 25rem">
      <h1 class="m-4" :class="activeClass">
          <span>Animation Text</span>
      </h1>
      <div class="card-body">
        <h5 class="card-title">Animate.css</h5>
        <p class="card-text">Animations using animate css 4.1.1</p>
      </div>
    </div>

    <div class="ms-3" v-for="(anim, i) in animations" :key="i">
      <button :disabled="anim.status" type="button" class="btn btn-info" @click.stop="toggleClass(anim.class, anim.id)">
        <span v-if="anim.status" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        <span>{{ anim.name }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: -1,
      loading: false,
      activeClass: "test",
      animations: [
        { id: 0, status: false, name: "bounce", class: "animate__bounce animate__animated" },
        { id: 1, status: false, name: "flash", class: "animate__flash animate__animated" },
        { id: 2, status: false, name: "head shake", class: "animate__headShake animate__animated" }
      ]
    };
  },
  methods: {
    toggleClass(name, id) {
      this.activeClass = name;
      this.animations[id].status = true
      setTimeout(()=> {
        this.activeClass = "";
        this.animations[id].status = false
      },2000);
    },
    findId(id) {
      const filter = this.animations.filter(e => e.id == id)
      console.log(filter[0].id)
      return filter[0].id
    }
  }
};
</script>
