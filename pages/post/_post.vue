<template>
  <div class="px-4 pt-28">
    <nuxt-content :document="doc" />
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
