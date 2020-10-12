import Masonry from 'masonry-layout'

const grid = document.querySelector('.grid')
const masonry = new Masonry(grid, {
  itemSelector: '.grid-item',
})
console.log(masonry)
