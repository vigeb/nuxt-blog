<template>
  <div>
    <div
      class="fixed z-40 bottom-0 right-0 p-2 mb-2 bg-white rounded-l-full shadow-3xl"
    >
      <button
        class="py-2 px-4 rounded-full bg-teal-400 text-white lg:hidden"
        @click.prevent="toggle"
      >
        Mục lục
      </button>
    </div>
    <div
      :class="isViewed"
      class="fixed top-0 right-0 h-full w-80 max-w-full px-4 pt-28 pb-20 bg-white shadow-2xl transform transition-all duration-500 lg:w-1/4 lg:pb-5"
    >
      <div class="w-full h-full relative">
        <h3 class="text-base uppercase">Mục lục:</h3>
        <div class="absolute top-0 right-0 w-full h-full pt-12">
          <ul class="h-full overflow-y-auto">
            <li class="my-3">
              <a href="#title-post" class="inline-block text-teal-500">
                <span class="ml-2 font-semibold">{{ titlePost }}</span>
                <div class="border-t w-full border-teal-400"></div>
              </a>
            </li>
            <li v-for="item in items" :key="item.id" class="my-3">
              <nuxt-link
                :to="'#' + item.id"
                class="inline-block"
                :class="{
                  'text-teal-500': item.depth === 2,
                  'text-blue-900': item.depth === 3,
                }"
              >
                <span
                  :class="{
                    'ml-2 font-semibold': item.depth === 2,
                    'ml-6 border-l border-teal-400 pl-2 italic':
                      item.depth === 3,
                  }"
                  >{{ item.text }}</span
                >
                <div
                  v-if="item.depth === 2"
                  class="border-t w-full border-teal-400"
                ></div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
    titlePost: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      show: false,
    }
  },

  computed: {
    isViewed() {
      return this.show ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
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
