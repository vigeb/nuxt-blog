<template>
  <div class="px-4 sm:px-16 md:px-24 lg:pl-1/4 lg:pr-1/4 pt-28 pb-20">
    <div class="px-0 lg:px-6">
      <h1
        id="title-post"
        class="inline-block border-b-2 text-2xl uppercase border-teal-400 mb-4"
      >
        {{ doc.title }}
      </h1>
      <img
        :src="doc.cover"
        :alt="doc.title"
        class="max-w-4/5 border-r-8 border-teal-400 rounded-r-lg shadow-2xl mt-4 mb-8"
      />
      <div
        class="w-full mb-4 border border-dashed border-teal-500 p-4 lg:hidden"
      >
        <h3 class="uppercase mb-4 text-center">Mục lục:</h3>
        <ul>
          <li class="my-3">
            <a href="#title-post" class="inline-block text-teal-500">
              <span class="ml-2 font-semibold">{{ doc.title }}</span>
              <div class="border-t w-full border-teal-400"></div>
            </a>
          </li>
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
      <LazyTableOfContents :items="doc.toc" :title-post="doc.title" />
      <div class="my-4 w-full text-center">
        Icons made by
        <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy"
          >Dave Gandy</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com</a
        >
      </div>
    </div>
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
