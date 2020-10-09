<template>
  <div class="w-full flex flex-wrap">
    <div class="w-full md:w-3/6 xl:w-1/3 md:px-2">
      <div
        class="w-full bg-white rounded-lg shadow-2xl p-4 mb-4 border-t-8 border-teal-400"
      >
        <div class="w-full flex items-center justify-between mb-4 relative">
          <div class="flex items-center text-blue-900">
            <nuxt-link
              to="/profile"
              class="w-12 h-12 rounded-full bg-teal-400 text-white leading-12 text-center mr-2 block"
            >
              <svg-icon name="bear" class="w-6 h-6" />
            </nuxt-link>
            <div>
              <nuxt-link to="/profile" class="text-blue-900 block font-medium"
                >Vigeb</nuxt-link
              >
              <nuxt-link to="/cat" class="italic text-gray-500 hover:underline"
                >Category name</nuxt-link
              >
            </div>
          </div>
          <LazyClickOutside>
            <button
              slot="button"
              class="w-12 h-12 leading-12 text-center rounded-full bg-gray-300 hover:bg-gray-400"
            >
              <svg-icon name="envelop" class="h-6 w-6" />
            </button>
          </LazyClickOutside>
        </div>
        <nuxt-link
          to="/something"
          class="w-full block text-blue-900 hover:text-blue-900"
        >
          <h3 class="mb-3">This is the title of the post</h3>
          <p class="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque
            commodi vitae illum molestiae! Asperiores non sed aliquam dicta
            vitae quibusdam, velit facere, adipisci soluta ex tempore
            consectetur veritatis fugiat.
          </p>
          <img
            src="https://cdn.vietnambiz.vn/2019/10/1/skills-needed77043390s-1569911537902383116539.jpg"
            class="w-full h-40"
          />
        </nuxt-link>
      </div>
    </div>
    <div class="w-full mt-4 mb-16 text-center">
      Icons made by
      <a
        href="https://www.flaticon.com/authors/catalin-fertu"
        title="Catalin Fertu"
        >Catalin Fertu</a
      >
      from
      <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
  </div>
</template>
