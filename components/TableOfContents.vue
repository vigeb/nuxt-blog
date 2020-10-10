<template>
  <div>
    <div
      class="fixed z-10 bottom-0 right-0 p-2 mb-2 bg-white rounded-l-full shadow-3xl"
    >
      <button
        class="py-2 px-4 rounded-full bg-teal-400 text-white"
        @click.prevent="toggle"
      >
        Mục lục
      </button>
    </div>
    <div
      :class="isViewed"
      class="fixed top-0 right-0 h-full w-80 px-4 pt-28 pb-20 bg-white shadow-2xl transform transition-all duration-500"
    >
      <div class="w-full h-full relative">
        <h3 class="text-base uppercase">Mục lục:</h3>
        <div class="absolute top-0 right-0 w-full h-full pt-12">
          <ul class="h-full overflow-y-auto">
            <li class="my-3">
              <nuxt-link to="/shsh" class="inline-block text-teal-500">
                <span class="ml-2 font-semibold">Danh muc one:</span>
                <div class="border-t w-full border-teal-400"></div>
              </nuxt-link>
            </li>
            <li class="my-3">
              <nuxt-link to="/shsh" class="inline-block text-blue-900">
                <span class="ml-6 border-l border-teal-400 pl-2 italic"
                  >Danh muc one</span
                >
              </nuxt-link>
            </li>
            <li class="my-3">
              <nuxt-link to="/shsh" class="inline-block text-blue-900">
                <span class="ml-6 border-l border-teal-400 pl-2 italic"
                  >Danh muc two</span
                >
              </nuxt-link>
            </li>
            <li class="my-3">
              <nuxt-link to="/shsh" class="inline-block text-blue-900">
                <span class="ml-6 border-l border-teal-400 pl-2 italic"
                  >Danh muc Three</span
                >
              </nuxt-link>
            </li>
            <li class="my-3">
              <nuxt-link to="/shsh" class="inline-block text-teal-500">
                <span class="ml-2 font-semibold">Danh muc one:</span>
                <div class="border-t w-full border-teal-400"></div>
              </nuxt-link>
            </li>
            <li class="my-3">
              <nuxt-link to="/shsh" class="inline-block text-blue-900">
                <span class="ml-6 border-l border-teal-400 pl-2 italic"
                  >Danh muc one</span
                >
              </nuxt-link>
            </li>
            <li class="my-3">
              <nuxt-link to="/shsh" class="inline-block text-blue-900">
                <span class="ml-6 border-l border-teal-400 pl-2 italic"
                  >Danh muc two</span
                >
              </nuxt-link>
            </li>
            <li class="my-3">
              <nuxt-link to="/shsh" class="inline-block text-teal-500">
                <span class="ml-2 font-semibold">Danh muc one:</span>
                <div class="border-t w-full border-teal-400"></div>
              </nuxt-link>
            </li>
            <li class="my-3">
              <nuxt-link to="/shsh" class="inline-block text-blue-900">
                <span class="ml-6 border-l border-teal-400 pl-2 italic"
                  >Danh muc one</span
                >
              </nuxt-link>
            </li>
            <li class="my-3">
              <nuxt-link to="/shsh" class="inline-block text-blue-900">
                <span class="ml-6 border-l border-teal-400 pl-2 italic"
                  >Danh muc two</span
                >
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
  data() {
    return {
      show: false,
    }
  },

  computed: {
    isViewed() {
      return this.show ? 'translate-x-0' : 'translate-x-full'
    },
  },

  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>
