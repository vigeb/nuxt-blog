<template>
  <main>
    <div class="mt-20 pt-16 md:pt-0">
      <div class="w-full px-4 pb-4 pt-4">
        <ContentCollection />
        <ContentFeed :documents="docs" :is-enough="isEnough" />
        <div v-if="isEnough" class="w-full mt-4 mb-16 text-center">
          Icons made by
          <a
            href="https://www.flaticon.com/authors/catalin-fertu"
            title="Catalin Fertu"
            >Catalin Fertu</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com</a
          >
        </div>
        <div v-else v-observe-visibility="fetchOnScroll"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const docs = await $content('articles').sortBy('createdAt').limit(2).fetch()

    return {
      docs,
    }
  },

  data() {
    return {
      page: 1,
      isEnough: false,
    }
  },

  methods: {
    async fetchOnScroll(isVisible) {
      if (!isVisible) return

      const newDocs = await this.$content('articles')
        .sortBy('createdAt')
        .skip(this.page * 2)
        .limit(2)
        .fetch()

      if (newDocs.length) {
        this.page++
        this.docs = this.docs.concat(newDocs)
      } else {
        this.isEnough = true
      }
    },
  },
}
</script>
