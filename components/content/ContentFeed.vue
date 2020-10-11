<template>
  <div class="w-full md:columns-2 md:column-gap-4">
    <div
      v-for="(doc, index) in documents"
      :key="index"
      class="w-full inside-avoid pb-4"
    >
      <div
        class="w-full bg-white rounded-lg shadow-2xl p-4 border-t-8 border-teal-400 transition-all duration-500 hover:shadow-3xl hover:border-teal-700"
      >
        <div class="w-full flex items-center justify-between mb-4 relative">
          <div class="flex items-center text-blue-900">
            <nuxt-link
              to="/vigeb"
              class="w-12 h-12 rounded-full bg-teal-400 text-white leading-12 text-center mr-2 block hover:text-white active:text-white"
            >
              <svg-icon name="bear" class="w-6 h-6" />
            </nuxt-link>
            <div>
              <nuxt-link to="/vigeb" class="text-blue-900 block font-semibold"
                >Vigeb</nuxt-link
              >
              <nuxt-link
                :to="'/category/' + doc.catPath"
                class="italic text-gray-500 hover:underline"
                >{{ doc.inCategory }}</nuxt-link
              >
            </div>
          </div>
          <LazyClickOutside>
            <button
              slot="button"
              class="w-12 h-12 leading-12 text-center rounded-full bg-gray-300 hover:bg-gray-400"
            >
              <svg-icon name="envelop" class="h-6 w-6" />
            </button>
          </LazyClickOutside>
        </div>
        <nuxt-link
          :to="'/post/' + doc.slug"
          class="w-full block text-blue-900 hover:text-blue-900"
        >
          <h3 class="mb-3">{{ doc.title }}</h3>
          <p class="mb-2">
            {{ doc.description }}
          </p>
          <img
            :src="doc.cover"
            class="w-full max-w-9/10 border-r-8 border-teal-400 rounded-r-lg shadow-2xl lazyload"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import 'lazysizes'

export default {
  props: {
    documents: {
      type: Array,
      default() {
        return []
      },
    },
    isEnough: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
