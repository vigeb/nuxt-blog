<template>
  <div class="w-full">
    <div class="w-full px-2 mt-4">
      <div
        class="w-full border border-dashed border-teal-400 bg-green-100 text-center py-3 text-teal-500 font-semibold"
      >
        Phần lớn tác phẩm trong này tôi chưa từng làm, nhưng tôi tin mình hoàn
        toàn có thể làm được
      </div>
    </div>
    <div class="galery w-full flex flex-wrap">
      <div class="galery-col w-full px-2 sm:w-1/2 md:w-1/3"></div>
      <div class="galery-col w-full px-2 sm:hidden md:block md:w-1/3"></div>
      <div class="galery-col hidden w-full px-2 md:w-1/3 md:block"></div>
      <LazyGaleryItem
        v-for="(image, index) in galery"
        :key="index"
        :image="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galery: [],
    }
  },

  async created() {
    const galery = await this.$content('galery').fetch()

    this.galery = galery
  },

  mounted() {
    this.$colcade.create({
      name: 'galery',
      el: '.galery',
      config: {
        columns: '.galery-col',
        items: '.galery-item',
      },
    })
  },

  beforeUpdate() {
    this.$colcade.update('galery')
  },

  beforeDestroy() {
    this.$colcade.destroy('galery')
  },
}
</script>
