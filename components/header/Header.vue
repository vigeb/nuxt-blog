<template>
  <header>
    <div
      class="bg-teal-400 w-full py-4 px-4 fixed top-0 left-0 shadow-2xl flex flex-col items-center md:flex-row md:justify-between z-10"
    >
      <nuxt-link to="/" class="text-white hover:text-white active:text-white">
        <svg-icon name="vigeb" class="h-12 w-24" />
      </nuxt-link>
      <div class="w-full sm:w-4/6 md:w-80 my-2 md:my-0">
        <Search />
      </div>
    </div>
  </header>
</template>
