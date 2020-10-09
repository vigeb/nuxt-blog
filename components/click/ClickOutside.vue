<template>
  <div>
    <div v-click-outside="close" @click.prevent="toggle">
      <slot name="button"></slot>
    </div>
    <transition name="opacity-show-up">
      <div
        v-if="show"
        class="w-full p-4 bg-white rounded-lg shadow-3xl absolute right-0 top-0 mt-16"
      >
        <div class="flex flex-wrap">
          <div class="flex items-center w-full my-2">
            <div
              class="w-10 h-10 leading-10 text-center rounded-full bg-teal-400 text-white mr-2"
            >
              <svg-icon name="facebook" class="h-5 w-5" />
            </div>
            <a
              href="https://www.facebook.com"
              class="whitespace-no-wrap font-medium"
              >www.facebook.com/shshsh</a
            >
          </div>
          <div class="flex items-center w-full my-2">
            <div
              class="w-10 h-10 leading-10 text-center rounded-full bg-teal-400 text-white mr-2"
            >
              <svg-icon name="mobile" class="h-5 w-5" />
            </div>
            <a href="tel:0336086407" class="whitespace-no-wrap font-medium"
              >0336086407</a
            >
          </div>
          <div class="flex items-center w-full my-2">
            <div
              class="w-10 h-10 leading-10 text-center rounded-full bg-teal-400 text-white mr-2"
            >
              <svg-icon name="envelop" class="h-5 w-5" />
            </div>
            <a
              href="mailto:reach2101@gmail.com"
              class="whitespace-no-wrap font-medium"
              >reach2101@gmail.com</a
            >
          </div>
          <div class="flex items-center w-full my-2">
            <div
              class="w-10 h-10 leading-10 text-center rounded-full bg-teal-400 text-white mr-2"
            >
              <svg-icon name="facebook" class="h-5 w-5" />
            </div>
            <span>Phú Nhuận - Hồ Chí Minh</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside,
  },
  data() {
    return {
      show: false,
    }
  },

  mounted() {
    this.popupItem = this.$el
  },

  methods: {
    toggle() {
      this.show = !this.show
    },
    close() {
      this.show = false
    },
  },
}
</script>
