<template>
  <div ref="slide" class="relative w-full">
    <div
      ref="slideScroll"
      class="w-full overflow-x-auto scroll-none scroll-smooth"
    >
      <div ref="slideItems">
        <slot name="slide-items"></slot>
      </div>
    </div>
    <div v-if="hasPrev" @click.prevent="prev">
      <slot name="prev"></slot>
    </div>
    <div v-if="hasNext" @click.prevent="next">
      <slot name="next"></slot>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  data() {
    return {
      hasNext: false,
      hasPrev: false,
      step: 100,
      itemsWidth: null,
      slideScroll: null,
    }
  },

  mounted() {
    this.itemsWidth = this.$refs.slideItems.scrollWidth
    this.step = this.$refs.slide.clientWidth

    this.slideScroll = this.$refs.slideScroll

    if (this.itemsWidth > this.step) {
      this.hasNext = true

      this.slideScroll.addEventListener(
        'scroll',
        debounce(() => this.onScroll(), 100)
      )
    }
  },

  methods: {
    next() {
      this.slideScroll.scrollBy(this.step, 0)
    },
    prev() {
      this.slideScroll.scrollBy(this.step * -1, 0)
    },
    onScroll() {
      const scrollX = this.slideScroll.scrollLeft
      const scrollEnd = this.step + scrollX

      if (scrollX > 0) {
        this.hasPrev = true
      } else {
        this.hasPrev = false
      }

      if (scrollEnd < this.itemsWidth) {
        this.hasNext = true
      } else {
        this.hasNext = false
      }
    },
  },
}
</script>
