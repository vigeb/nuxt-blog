<template>
<<<<<<< HEAD
  <div class="px-4 pt-24">
=======
  <div class="px-4 pt-28">
>>>>>>> 120a370357b129074e50fe9fac1c1880a0518f03
    <nuxt-content :document="doc" />
  </div>
</template>

<script>
export default {
  layout: 'post',

  async asyncData({ $content, params, error }) {
    const doc = await $content('articles', params.post).fetch()

<<<<<<< HEAD
    console.log(doc)

=======
>>>>>>> 120a370357b129074e50fe9fac1c1880a0518f03
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
