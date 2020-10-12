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
      :class="isHome"
      class="fixed w-full md:absolute md:w-160 md:pt-0 md:pb-0 md:mt-14 top-0 right-0"
    >
      <div
        class="bg-white w-full lg:w-160 p-4 rounded-lg shadow-3xl h-full overflow-hidden"
      >
        <div class="w-full h-full">
          <h3 class="text-center uppercase border-b border-gray-300">
            Search results
          </h3>
          <div class="my-2">
            <Slide>
              <div slot="slide-items" class="whitespace-no-wrap">
                <label for="all" class="inline-block mr-1">
                  <input
                    id="all"
                    v-model="catPath"
                    name="category"
                    type="radio"
                    value=""
                    class="checkbox hidden"
                    checked
                    @change="search"
                  />
                  <div
                    class="py-1 px-3 bg-teal-300 rounded-lg text-white text-sm cursor-pointer hover:bg-teal-500 active:bg-teal-500 checked-bg-teal-500"
                  >
                    Tất cả
                  </div>
                </label>
                <label
                  v-for="(cat, index) in categories"
                  :key="index"
                  :for="cat.slug"
                  class="inline-block mr-2"
                >
                  <input
                    :id="cat.slug"
                    v-model="catPath"
                    :value="cat.slug"
                    name="category"
                    type="radio"
                    class="checkbox hidden"
                    @change="search"
                  />
                  <div
                    class="py-1 px-3 text-sm bg-teal-300 rounded-lg text-white cursor-pointer hover:bg-teal-500 active:bg-teal-500 checked-bg-teal-500"
                  >
                    {{ cat.title }}
                  </div>
                </label>
              </div>
              <div
                slot="prev"
                class="bg-gradient-to-l from-transparent via-white to-white pr-6 py-1 absolute top-0 left-0 hidden md:block"
              >
                <button
                  class="w-8 h-8 rounded-full leading-8 text-center bg-gray-300 hover:text-white mr-2 hover:bg-teal-400 active:bg-teal-400 shadow-2xl"
                >
                  <svg-icon name="cheveron-left" class="h-4 w-4" />
                </button>
              </div>
              <div
                slot="next"
                class="bg-gradient-to-r from-transparent via-white to-white pl-6 py-1 absolute top-0 right-0 hidden md:block"
              >
                <button
                  class="w-8 h-8 rounded-full leading-8 text-center bg-gray-300 hover:text-white ml-2 hover:bg-teal-400 active:bg-teal-400 shadow-2xl"
                >
                  <svg-icon name="cheveron-right" class="h-4 w-4" />
                </button>
              </div>
            </Slide>
          </div>
          <div class="w-full h-full">
            <div
              class="w-full h-full overflow-y-auto scroll-none max-h-45vh md:scroll-auto"
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
                    class="flex items-center text-gray-600 italic hover:underline"
                  >
                    <svg-icon name="chevrons-right" class="h-4 w-4 mr-2" />
                    {{ result.inCategory }}
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
      categories: [],
      catPath: '',
    }
  },

  computed: {
    isHome() {
      return this.isHomePage ? 'mt-32' : 'mt-20'
    },
    filter() {
      return this.catPath === '' ? {} : { catPath: this.catPath }
    },
  },

  watch: {
    $route() {
      this.isSearching = false
    },
  },

  async created() {
    const cats = await this.$content('categories')
      .only(['title', 'slug'])
      .fetch()

    this.categories = cats
  },

  mounted() {
    this.popupItem = this.$el
  },

  methods: {
    async search() {
      this.isSearching = true
      const results = await this.$content('articles')
        .where(this.filter)
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
