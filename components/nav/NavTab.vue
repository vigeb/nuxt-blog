<template>
  <div>
    <div class="w-full overflow-x-auto scroll-none">
      <ul class="w-full whitespace-no-wrap">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="inline-block mx-2"
        >
          <a
            href="#"
            :class="{ 'bg-teal-500': tabNo === index }"
            class="py-2 px-4 block rounded-lg bg-teal-400 text-white hover:text-white hover:bg-teal-500"
            @click.prevent="showTab(index)"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
    <div v-for="index in items.length" :key="index">
      <div v-if="tabNo + 1 === index">
        <slot :name="'nav-' + index"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },

  data() {
    return {
      tabNo: 0,
    }
  },

  methods: {
    showTab(index) {
      this.tabNo = index
    },
  },
}
</script>
