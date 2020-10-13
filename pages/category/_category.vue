<template>
  <main>
    <div class="mt-20 pt-16 md:pt-0">
      <div class="w-full pl-4 pr-4 pb-4 pt-4 lg:pl-1/4 lg:pr-4">
        <div class="xl:px-2">
          <Content :initial-docs="docs" fetch="articles" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const param = params.category

    const docs = await $content('articles')
      .sortBy('updatedAt')
      .where({
        catPath: param,
      })
      .limit(10)
      .fetch()

    return {
      docs,
      param,
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
        .sortBy('updatedAt')
        .where({
          catPath: this.param,
        })
        .skip(this.page * 10)
        .limit(10)
        .fetch()

      if (newDocs.length) {
        this.page++
        this.docs = this.docs.concat(newDocs)
      } else {
        this.isEnough = true
      }
    },
  },

  layout: 'home',
}
</script>
