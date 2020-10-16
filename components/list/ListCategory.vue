<template>
  <div>
    <div
      class="fixed bottom-0 left-0 py-2 px-4 flex justify-center w-full z-10 lg:hidden"
    >
      <div class="inline-block p-2 bg-white rounded-full shadow-3xl">
        <button
          class="py-2 px-4 bg-teal-400 text-white rounded-full flex items-center"
          @click.prevent="toggle"
        >
          <svg-icon name="collection" class="h-5 w-5 mr-2" />
          Danh mục
        </button>
      </div>
    </div>
    <div
      :class="[isViewed, isHome]"
      class="fixed w-full h-full top-0 left-0 px-4 transform transition-all duration-500 md:pt-28 lg:w-1/4 lg:transform"
    >
      <div
        class="bg-white shadow-3xl w-full h-full px-4 pt-4 pb-28 rounded-t-lg lg:pb-5"
      >
        <h3 class="text-base uppercase">Danh mục:</h3>
        <div class="w-full h-full overflow-y-auto">
          <ListCategoryItems />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHomePage: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      show: false,
    }
  },

  computed: {
    isViewed() {
      return this.show
        ? 'translate-y-0 scale-1 opacity-100'
        : 'translate-y-full scale-0 opacity-0 lg:translate-y-0 lg:scale-1 lg:opacity-100'
    },
    isHome() {
      return this.isHomePage ? 'pt-40' : 'pt-28'
    },
  },

  watch: {
    $route() {
      this.show = false
    },
  },

  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>
