<template>
  <div class="galery w-full flex flex-wrap">
    <div class="galery-col w-full px-2 sm:w-1/2 md:w-1/3"></div>
    <div class="galery-col w-full px-2 sm:w-1/2 md:w-1/3"></div>
    <div
      class="galery-col w-full px-2 sm:w-1/2 sm:hidden md:w-1/3 md:block"
    ></div>
    <div
      v-for="(image, index) in galery"
      :key="index"
      class="galery-item w-full relative rounded-lg shadow-3xl my-4 group"
    >
      <img :src="image.src" :alt="image.title" class="w-full rounded-lg" />
      <div
        class="w-full h-full absolute top-0 left-0 z-10 group-hover:bg-black group-hover:bg-opacity-50 transition-all duration-500 hidden group-hover:block rounded-lg"
      ></div>
      <div
        class="absolute bottom-0 left-0 bg-gradient-to-r from-teal-400 via-blue-400 to-teal-300 rounded-b-lg w-full py-2 px-4 text-center"
      >
        Nguồn:
        <a :href="image.attr" class="text-white hover:text-white">{{
          image.source
        }}</a>
      </div>
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
