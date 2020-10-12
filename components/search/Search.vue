<template>
  <div class="w-full relative">
    <form
      v-click-outside="stopSearch"
      class="w-full relative"
      @submit.prevent="search"
      @keydown.enter.prevent="search"
    >
      <input
        v-model="query"
        type="text"
        class="w-full pl-5 pr-12 h-12 leading-12 rounded-full border border-gray-200"
        placeholder="Search something..."
        @input="search"
      />
      <button
        class="w-12 h-12 leading-12 mr-1 text-center rounded-full absolute top-0 right-0 text-blue-800"
      >
        <svg-icon name="search" class="h-5 w-5" />
      </button>
    </form>
    <div
      v-if="isSearching"
      class="fixed w-full mt-20 md:absolute md:w-160 md:pt-0 md:pb-0 md:mt-14 top-0 right-0"
    >
      <div
        :class="isHome"
        class="bg-white w-full lg:w-160 p-4 rounded-lg shadow-3xl h-full overflow-hidden"
      >
        <div class="w-full h-full">
          <h3 class="text-center uppercase border-b border-gray-300">
            Search results
          </h3>
          <Slide />
          <div class="w-full h-full">
            <div
              class="w-full h-full overflow-y-auto scroll-none max-h-50vh md:scroll-auto"
            >
              <nuxt-link
                v-for="(result, index) in results"
                :key="index"
                :to="'/post/' + result.slug"
                class="flex border-l-2 border-teal-400 my-3 text-blue-900 hover:text-blue-900"
              >
                <div class="min-w-3/4 ml-2">
                  <nuxt-link :to="'/post/' + result.slug" class="text-blue-900">
                    <h3 class="text-base">{{ result.title }}</h3>
                  </nuxt-link>
                  <nuxt-link
                    :to="'/category/' + result.catPath"
                    class="text-gray-600 italic hover:underline"
                  >
                    >> {{ result.inCategory }}
                  </nuxt-link>
                  <p class="truncate">
                    {{ result.description }}
                  </p>
                </div>
                <div class="max-w-1/4">
                  <img :src="result.cover" class="w-full" />
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside,
  },

  props: {
    isHomePage: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      query: '',
      isSearching: false,
      results: null,
    }
  },

  computed: {
    isHome() {
      return this.isHomePage ? '' : ''
    },
  },

  watch: {
    $route() {
      this.isSearching = false
    },
  },

  mounted() {
    this.popupItem = this.$el
  },

  methods: {
    async search() {
      this.isSearching = true
      const results = await this.$content('articles')
        .where()
        .search(this.query)
        .limit(10)
        .fetch()

      if (results.length > 0) {
        this.results = results
      }
    },

    stopSearch() {
      this.isSearching = false
    },
  },
}
</script>
