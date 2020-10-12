<template>
  <div class="w-full my-3">
    <Slide>
      <div slot="slide-items" class="whitespace-no-wrap">
        <label for="all" class="inline-block mx-2">
          <input
            id="all"
            v-model="field"
            type="radio"
            name="sort"
            value=""
            class="hidden checkbox"
            checked
            @change="sortBy"
          />
          <div
            class="px-4 py-2 transition-all duration-500 bg-teal-400 rounded-lg text-white checked-bg-transparent checked-text-blue-900 checked-border checked-border-gray-400 hover:bg-teal-500 cursor-pointer"
          >
            Tất cả
          </div>
        </label>
        <label for="newest" class="inline-block mr-2">
          <input
            id="newest"
            v-model="field"
            type="radio"
            name="sort"
            value="updatedAt"
            class="hidden checkbox"
            @change="sortBy"
          />
          <div
            class="px-4 py-2 transition-all duration-500 bg-teal-400 rounded-lg text-white checked-bg-transparent checked-text-blue-900 checked-border checked-border-gray-400 hover:bg-teal-500 cursor-pointer"
          >
            Mới nhất
          </div>
        </label>
        <label for="recommend" class="inline-block mr-2">
          <input
            id="recommend"
            v-model="field"
            type="radio"
            name="sort"
            value="recommend"
            class="hidden checkbox"
            @change="sortBy"
          />
          <div
            class="px-4 py-2 transition-all duration-500 bg-teal-400 rounded-lg text-white checked-bg-transparent checked-text-blue-900 checked-border checked-border-gray-400 hover:bg-teal-500 cursor-pointer"
          >
            Đề xuất
          </div>
        </label>
      </div>
    </Slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      field: '',
    }
  },

  methods: {
    sortBy() {
      this.$emit('sortBy', this.field)
    },
  },
}
</script>
