<template>
  <div class="w-full flex flex-wrap grid">
    <div class="w-full md:w-3/6 xl:w-1/3 md:px-2 grid-col"></div>
    <div class="w-full md:w-3/6 xl:w-1/3 md:px-2 grid-col"></div>
    <div class="w-full md:w-3/6 xl:w-1/3 md:px-2 grid-col"></div>
    <div v-for="(doc, index) in documents" :key="index" class="grid-item">
      <div
        class="w-full bg-white rounded-lg shadow-2xl p-4 mb-4 border-t-8 border-teal-400"
      >
        <div class="w-full flex items-center justify-between mb-4 relative">
          <div class="flex items-center text-blue-900">
            <nuxt-link
              to="/vigeb"
              class="w-12 h-12 rounded-full bg-teal-400 text-white leading-12 text-center mr-2 block"
            >
              <svg-icon name="bear" class="w-6 h-6" />
            </nuxt-link>
            <div>
              <nuxt-link to="/vigeb" class="text-blue-900 block font-medium"
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
            src="https://cdn.vietnambiz.vn/2019/10/1/skills-needed77043390s-1569911537902383116539.jpg"
            class="w-full h-40"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
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

  mounted() {
    this.$colcade.create({
      name: 'masonry',
      el: this.$el.querySelector('.grid'),
      config: {
        columns: '.grid-col',
        items: '.grid-item',
      },
    })
  },
}
</script>
