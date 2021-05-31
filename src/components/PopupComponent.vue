<template>
  <div v-if="isOpen" :class="$style.popup__wrap" @click="close">
    <div :class="$style.popup" @click.stop>
      <h2>{{ textContent }}</h2>
      <slot name="actions" :close="close" :confirm="confirm"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  popupController: null,

  data() {
    return {
      isOpen: false,
      textContent: '',
    }
  },

  methods: {
    open(text) {
      this.textContent = text

      let resolve
      let reject

      const popupPromise = new Promise((ok, fail) => {
        resolve = ok
        reject = fail
      })

      this.$options.popupController = { resolve, reject }
      this.isOpen = true

      return popupPromise
    },

    confirm() {
      this.$options.popupController.resolve(true)
      this.isOpen = false
      this.textContent = ''
    },

    close() {
      this.$options.popupController.resolve(false)
      this.isOpen = false
      this.textContent = ''
    },

    handleKeydown(e) {
      if (this.isOpen && e.key === 'Escape') {
        this.close()
      }
    },
  },

  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown)
  },

  // methods: {
  //   async firstButton() {
  //     const popupResult = await this.$refs.popup.open('first button')

  //     if (popupResult) {
  //       console.log('hi popup first')
  //     }
  //   },

  //   async secondButton() {
  //     const popupResult = await this.$refs.popup.open('second button')

  //     if (popupResult) {
  //       console.log('hi popup second')
  //     }
  //   },

  //   async thirdButton() {
  //     const popupResult = await this.$refs.popup.open('third button')

  //     if (popupResult) {
  //       console.log('hi popup third')
  //     }
  //   },
  // },
}
</script>

<style lang="scss" module>
.popup__wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
}
.popup {
  padding: 1rem;
  border: thin solid black;
}
</style>
