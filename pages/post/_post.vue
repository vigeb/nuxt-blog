<template>
  <div class="px-4 sm:px-16 md:px-24 lg:pl-8 lg:pr-88 pt-28 pb-20">
    <h1 class="inline-block border-b-2 text-2xl uppercase border-teal-400 mb-4">
      {{ doc.title }}
    </h1>
    <img
      :src="doc.cover"
      :alt="doc.title"
      class="max-w-4/5 border-r-8 border-teal-400 rounded-r-lg shadow-2xl mt-4 mb-8"
    />
    <div class="w-full mb-4 border border-dashed border-teal-500 p-4">
      <h3 class="uppercase mb-4 text-center">Mục lục:</h3>
      <ul>
        <li v-for="item in doc.toc" :key="item.id" class="my-3">
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
                'ml-6 border-l border-teal-400 pl-2 italic': item.depth === 3,
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
    <nuxt-content :document="doc" />
    <LazyTableOfContents :items="doc.toc" />
  </div>
</template>

<script>
export default {
  layout: 'post',

  async asyncData({ $content, params, error }) {
    const doc = await $content('articles', params.post).fetch()

    if (!doc)
      return error({
        message: 'error',
        statusCode: 404,
      })

    return {
      doc,
    }
  },
}
</script>
