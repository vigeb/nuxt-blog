<template>
  <transition name="opacity-show-up">
    <div v-show="show" class="w-full bg-white rounded-lg shadow-3xl">
      <div class="w-full rounded-t-lg h-40">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9LTSwnC25skXC43MdON215vBb_Ecx0Py2jw&usqp=CAU"
          alt=""
          class="w-full h-full rounded-t-lg"
        />
      </div>
      <div class="w-full flex items-center flex-col -mt-16 pb-4">
        <div
          class="w-28 h-28 leading-28 text-center rounded-full bg-white shadow-3xl text-teal-400 cursor-pointer mb-2"
        >
          <svg-icon name="vigeb" class="w-20 h-20" />
        </div>
        <!-- <h3 class="text-xl mb-2">Vigeb</h3> -->
        <p class="px-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          reprehenderit totam incidunt.
        </p>
      </div>
      <!-- <div class="p-4 flex w-full flex-wrap">
        <div class="w-full md:w-1/2 flex items-center my-2">
          <div
            class="h-10 w-10 rounded-full bg-teal-400 text-white leading-10 text-center mr-2"
          >
            <svg-icon name="facebook" class="h-5 w-5" />
          </div>
          <a href="#" class="font-semibold text-blue-900"
            >www.facebook.com/hfkffk</a
          >
        </div>
        <div class="w-full md:w-1/2 flex items-center my-2">
          <div
            class="h-10 w-10 rounded-full bg-teal-400 text-white leading-10 text-center mr-2"
          >
            <svg-icon name="envelop" class="h-5 w-5" />
          </div>
          <a href="#" class="font-semibold text-blue-900"
            >reach2101@gmail.com</a
          >
        </div>
        <div class="w-full md:w-1/2 flex items-center my-2">
          <div
            class="h-10 w-10 rounded-full bg-teal-400 text-white leading-10 text-center mr-2"
          >
            <svg-icon name="mobile" class="h-5 w-5" />
          </div>
          <a href="#" class="font-semibold text-blue-900">0336086407</a>
        </div>
        <div class="w-full md:w-1/2 flex items-center my-2">
          <div
            class="h-10 w-10 rounded-full bg-teal-400 text-white leading-10 text-center mr-2"
          >
            <svg-icon name="location2" class="h-5 w-5" />
          </div>
          <span class="font-semibold">Phú Nhuận - Hồ Chí Minh</span>
        </div>
      </div> -->
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },

  mounted() {
    this.show = true
  },
}
</script>
