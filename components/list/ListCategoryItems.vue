<template>
  <div class="category">
    <nuxt-link
      v-for="(cat, index) in cats"
      :key="index"
      :to="'/category/' + cat.slug"
      class="w-full p-4 bg-gradient-to-r from-teal-400 via-blue-400 to-teal-500 rounded-lg text-white text-center my-3 block hover:text-white active:text-white hover:bg-gradient-to-l transition-all duration-1000"
    >
      {{ cat.title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cats: [],
    }
  },

  async created() {
    const cats = await this.$content('categories')
      .only(['title', 'slug'])
      .fetch()

    this.cats = cats
  },
}
</script>
