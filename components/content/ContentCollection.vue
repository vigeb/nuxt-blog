<template>
  <div class="w-full my-3">
    <Slide>
      <div slot="slide-items" class="whitespace-no-wrap">
        <label for="all" class="inline-block">
          <input id="all" type="radio" class="hidden checkbox" checked />
          <div
            class="px-4 py-2 transition-all duration-500 bg-teal-400 rounded-lg text-white checked-bg-transparent checked-text-blue-900 checked-border checked-border-gray-400 hover:bg-teal-500 cursor-pointer"
          >
            Tất cả
          </div>
        </label>
        <label for="all" class="inline-block">
          <input id="all" type="radio" class="hidden checkbox" />
          <div
            class="px-4 py-2 transition-all duration-500 bg-teal-400 rounded-lg text-white checked-bg-transparent checked-text-blue-900 checked-border checked-border-gray-400 hover:bg-teal-500 cursor-pointer"
          >
            Mới nhất
          </div>
        </label>
        <label for="all" class="inline-block">
          <input id="all" type="radio" class="hidden checkbox" />
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
