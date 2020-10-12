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
  async asyncData({ $content }) {
    const docs = await $content('articles')
      .sortBy('updatedAt')
      .limit(10)
      .fetch()

    return {
      docs,
    }
  },

  layout: 'home',
}
</script>
