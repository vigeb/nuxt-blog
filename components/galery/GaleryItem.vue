<template>
  <div
    v-observe-visibility="isStopped === false ? visibilityChanged : false"
    class="galery-item w-full relative rounded-lg shadow-3xl my-4 group overflow-hidden"
  >
    <img
      :src="image.src"
      :alt="image.title"
      class="w-full rounded-lg lazyload"
    />
    <a
      :href="image.attr"
      target="_blank"
      class="w-full h-full absolute top-0 left-0 z-10 group-hover:bg-black group-hover:bg-opacity-50 transition-all duration-500 hidden group-hover:block rounded-lg"
    ></a>
    <a
      :href="image.attr"
      target="_blank"
      class="block w-full px-4 py-4 text-center bg-gradient-to-r from-green-600 via-teal-500 to-blue-500 text-white rounded-t-lg absolute top-0 left-0 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 z-10 uppercase font-semibold hover:text-white"
    >
      Xem ảnh
    </a>
    <div
      class="absolute bottom-0 left-0 bg-gradient-to-r from-teal-400 via-blue-400 to-teal-300 rounded-b-lg w-full py-2 px-4 text-center z-10"
    >
      Nguồn:
      <a :href="image.attr" class="text-white hover:text-white" target="_blank">
        {{ image.source }}
      </a>
    </div>
  </div>
</template>

<script>
import 'lazysizes'

export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isStopped: false,
    }
  },

  methods: {
    visibilityChanged(isVisible, entry) {
      if (!isVisible) return

      if (entry.intersectionRatio > 0) {
        entry.target.style.cssText =
          'animation-name: slide-up; animation-duration: 1s; animation-iteration-count: 1s;'

        this.isStopped = true
      }
    },
  },
}
</script>
