<template>
  <header>
    <div
      class="fixed top-0 left-0 z-10 w-full py-4 px-4 bg-teal-400 flex items-center justify-between shadow-2xl"
    >
      <nuxt-link
        to="/"
        class="text-white mr-4 hover:text-white active:text-white"
      >
        <svg-icon name="vigeb" class="h-12 w-24" />
      </nuxt-link>
      <div class="w-full max-w-xs">
        <Search />
      </div>
    </div>
  </header>
</template>
