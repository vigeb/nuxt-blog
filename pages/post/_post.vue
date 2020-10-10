<template>
  <div class="px-4 pt-28 pb-20">
    <h1 class="inline-block border-b-2 text-2xl uppercase border-teal-400 mb-4">
      {{ doc.title }}
    </h1>
    <img
      :src="doc.cover"
      :alt="doc.title"
      class="max-w-4/5 border-r-8 border-teal-400 rounded-r-lg shadow-2xl my-4"
    />
    <nuxt-content :document="doc" />
    <TableOfContents />
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

    console.log(doc)

    return {
      doc,
    }
  },
}
</script>
