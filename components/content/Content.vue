<template>
  <div>
    <ContentCollection @sortBy="sortBy" />
    <ContentFeed :documents="docs" />
    <div v-if="isEnough" class="w-full mt-4 mb-16 text-center">
      Icons made by
      <a
        href="https://www.flaticon.com/authors/catalin-fertu"
        title="Catalin Fertu"
        >Catalin Fertu</a
      >
      from
      <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
    <div v-else v-observe-visibility="fetchOnScroll"></div>
  </div>
</template>

<script>
export default {
  props: {
    initialDocs: {
      type: Array,
      default() {
        return []
      },
    },
    fetch: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      docs: this.initialDocs,
      field: 'updatedAt',
      page: 1,
      isEnough: false,
    }
  },

  methods: {
    async fetchOnScroll(isVisible) {
      if (!isVisible) return

      const newDocs = await this.$content('articles')
        .sortBy(this.field, 'asc')
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
    async sortBy(field) {
      this.field = field
      const sortedDocs = await this.$content(this.fetch)
        .sortBy(this.field, 'asc')
        .limit(10)
        .fetch()

      this.docs = sortedDocs
      this.page = 1
      console.log(this.field)
    },
  },
}
</script>
