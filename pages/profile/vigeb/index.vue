<template>
  <main>
    <div class="mt-20 pt-16 md:pt-0">
      <div class="w-full pl-4 pr-4 pb-20 pt-4 lg:pl-1/4 lg:pr-4">
        <div class="xl:px-2">
          <div class="my-4 mx-2">
            <ProfileAccount />
          </div>
          <NavTab :items="items">
            <LazyContentGalery slot="nav-1" />
            <div slot="nav-3" class="mx-2 my-4">
              <LazyContact />
            </div>
            <LazyAbout slot="nav-2" />
          </NavTab>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'home',

  data() {
    return {
      items: ['Tác phẩm', 'Giới thiệu', 'Liên hệ'],
    }
  },
}
</script>
