<template>
  <div class="relative w-full slide">
    <div
      class="my-2 w-full overflow-x-auto scroll-none slide-scroll scroll-smooth"
    >
      <div class="whitespace-no-wrap slide-items">
        <label for="all" class="inline-block">
          <input
            id="all"
            name="category"
            type="radio"
            class="checkbox hidden"
            checked
          />
          <div
            class="py-1 px-3 bg-teal-300 rounded-lg text-white text-sm cursor-pointer hover:bg-teal-500 active:bg-teal-500 checked-bg-teal-500"
          >
            Tất cả
          </div>
        </label>
        <label for="ca-nhan" class="inline-block">
          <input
            id="ca-nhan"
            name="category"
            type="radio"
            class="checkbox hidden"
          />
          <div
            class="py-1 px-3 text-sm bg-teal-300 rounded-lg text-white cursor-pointer hover:bg-teal-500 active:bg-teal-500 checked-bg-teal-500"
          >
            Cá nhân
          </div>
        </label>
        <label for="ky-nang-lap-trinh" class="inline-block">
          <input
            id="ky-nang-lap-trinh"
            name="category"
            type="radio"
            class="checkbox hidden"
          />
          <div
            class="py-1 px-3 text-sm bg-teal-300 rounded-lg text-white cursor-pointer hover:bg-teal-500 active:bg-teal-500 checked-bg-teal-500"
          >
            kỹ năng lập trình
          </div>
        </label>
      </div>
    </div>
    <div
      v-if="hasPrev"
      class="bg-gradient-to-l from-transparent via-white to-white pr-6 py-1 absolute top-0 left-0"
    >
      <button
        class="w-8 h-8 rounded-full leading-8 text-center bg-gray-300 hover:text-white mr-2 hover:bg-teal-400 active:bg-teal-400 shadow-2xl"
        @click.prevent="prev"
      >
        <svg-icon name="cheveron-left" class="h-4 w-4" />
      </button>
    </div>
    <div
      v-if="hasNext"
      class="bg-gradient-to-r from-transparent via-white to-white pl-6 py-1 absolute top-0 right-0"
    >
      <button
        class="w-8 h-8 rounded-full leading-8 text-center bg-gray-300 hover:text-white ml-2 hover:bg-teal-400 active:bg-teal-400 shadow-2xl"
        @click.prevent="next"
      >
        <svg-icon name="cheveron-right" class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasNext: false,
      hasPrev: false,
    }
  },

  mounted() {
    const slide = document.querySelector('.slide')
    const slideItems = document.querySelector('.slide-items')

    const slideWidth = slide.clientWidth
    const itemsScrollWidth = slideItems.scrollWidth

    console.log('slide width: ' + slideWidth)
    console.log('items width: ' + itemsScrollWidth)

    if (itemsScrollWidth > slideWidth) {
      this.hasNext = true
      const slideScroll = document.querySelector('.slide-scroll')

      slideScroll.addEventListener('scroll', () => {
        const scrollX = slideScroll.scrollLeft
        if (scrollX > 0) {
          this.hasPrev = true
        } else {
          this.hasPrev = false
        }

        const scrollEnd = slideWidth + scrollX

        if (scrollEnd < itemsScrollWidth) {
          this.hasNext = true
        } else {
          this.hasNext = false
        }
        console.log(scrollX)
        console.log('end: ' + scrollEnd)
      })
    }
  },

  methods: {
    next() {
      const step = document.querySelector('.slide').clientWidth
      const slideScroll = document.querySelector('.slide-scroll')

      slideScroll.scrollBy(step, 0)
      console.log(slideScroll.scrollLeft)
    },
    prev() {
      const step = document.querySelector('.slide').clientWidth
      const slideScroll = document.querySelector('.slide-scroll')

      slideScroll.scrollBy(step * -1, 0)
      console.log(slideScroll.scrollLeft)
    },
  },
}
</script>
