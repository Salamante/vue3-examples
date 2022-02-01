<template>
  <div class="main-container d-flex m-5">
    <div class="badge-box mx-5">
      <div class="badge">
      </div>
    </div>
    <div class="test-box">
      <button data-count="5">TEST</button>
      <button data-count="5" class="badge-top-right"></button>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      const debounce = (func, wait) => {
        let timeout;

        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };

          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      };

      var returnedFunction = debounce(function() {
          console.log("resized")
        }, 250);

        window.addEventListener('resize', returnedFunction);

        const to = setTimeout(() => {
          console.log("%ctimeout func", "color: red")
        },2000)

        const to2 = setTimeout(() => {
          clearTimeout(to)
          console.log("%ctimeout is cleared", "color: red")
        },500)
    })
  },
}
</script>

<style lang="scss" scoped>
button {
    background: linear-gradient(to bottom, rgba(37,130,188,1) 0%,rgba(41,137,216,1) 32%,rgba(41,137,216,1) 42%,rgba(175,224,234,1) 100%);
    width: 60px;
    height: 60px;
    border-radius: 10px;
    border: none;
    margin-top: 40px;
    margin-left: 40px;
    position: relative;
    box-shadow: 0 2px 5px rgba(0,0,0,0.4);
}

button:before {
    content: attr(data-count);
    width: 18px;
    height: 18px;
    line-height: 14px;
    text-align: center;
    display: block;
    border-radius: 50%;
    background: rgb(67, 151, 232);
    border: 1px solid #FFF;
    box-shadow: 0 1px 3px rgba(0,0,0,0.4);
    color: #FFF;
    position: absolute;
    top: -7px;
    left: -7px;
}

button.badge-top-right:before {
    left: auto;
    right: -7px;
}

button.badge-bottom-right:before {
    left: auto;
    top: auto;
    right: -7px;
    bottom: -7px;
}

button.badge-bottom-left:before {
    top: auto;
    bottom: -7px;
}
.badge-box {
  z-index: 1;
  width: 150px;
  height: 150px;
  background: rgb(5, 73, 73);
  position: relative;
}
.badge {
  z-index: 3;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgb(136, 15, 15);
  display: block;
  position: absolute;
  right: -10px;
  top: -10px;
  &::before {
    z-index: 2;
    content: "";
    position: relative;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    margin-top: -12px;
    margin-left: -16px;
    background: transparent;
    display: block;
    opacity: 0.5;
  }
}

</style>