# src

## Notes:

### Masonry columns (column cards)

Masonry layout is the layout in which the posts are put just like pinterest.com

Use "vue-colcade" check it out here [https://github.com/alexiscolin/vue-colcade](https://github.com/alexiscolin/vue-colcade)

To user vue-colcade with nuxt, just do like this:

**Step 1:**

Install vue-colcade with npm

```bash
# npm
$ npm i --save vue-colcade
```

**Step 2:**

In your component, add html like this:

(for example: in *example.vue*)

```bash
# implement html
<div class="grid">
  # columns, here, i divided my layout into 3 columns, so I created 3 div with class '.grid-col'

  # But if you want to divide your layout in 2 or more columns, you can create 2 or more div ... 
  <div class="grid-col"></div>
  <div class="grid-col"></div>
  <div class="grid-col"></div>
  # items
  <div class="grid-item">
    item 1
  </div>
  <div class="grid-item">
    item 2
  </div>
  <div class="grid-item">
    item 3
  </div>
  ....
</div>
```

**Step 3:**

In /plugins/vueColcade.client.js, add things like this.

```bash
# implement plugin in directory /plugins/vueColcade.client.js

# Don't forget the '.client.js' at the end of the file, because nuxtjs will recognize it as client side only plugin, read the document of nuxtjs here: https://nuxtjs.org/guide/plugins/
import Vue from 'vue';
import VueColcade from 'vue-colcade';

Vue.use(VueColcade);
```

**Step 4:**

Add the plugin into your nuxt.config.js:

```bash
export default {
  ...
  plugins: ['~/plugins/vueColcade.client.js']
}
```

**Step 5:**

In your vue component (for example *example.vue*), simply add this:

```bash
<template>
  <div>
    ....
  </div>
</template>

<script>
  export default {
    ...

    mounted() {
      this.$colcade.create({
        name: 'yourGridName',
        el: '.grid',
        config: {
          columns: '.grid-col',
          items: '.grid-item',
        },
      });
    },
    
    beforeUpdate() {
      this.$colcade.update('yourGridName')
    },

    beforeDestroy() {
      this.$colcade.destroy('yourGridName')
    }
  }
</script>
```

That's it. Now you can custom css styles for your items...

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
