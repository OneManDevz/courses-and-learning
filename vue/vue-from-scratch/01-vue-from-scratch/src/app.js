import Vue from 'vue';

window.axios = require('axios');

new Vue({
  el: '#app',
  components: {
    //
  },
  mounted: function() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(respone => (this.posts = respone.data))
      .catch(error => (this.posts = [{ title: 'No posts found!' }]))
      .finally(() => console.log('Data fetching complete'));
  },
  data: {
    posts: null
  }
});

// import Vue from 'vue';
// import Accordion from './components/Accordion.vue';
// import List from './components/List';

// new Vue({
//   el: '#app',
//   components: {
//     Accordion,
//     List
//   },
//   data: {
//     items: [
//       { id: 1, title: 'Title 1', desc: 'Desc for title 1' },
//       { id: 2, title: 'Title 2', desc: 'Desc for title 2' },
//       { id: 3, title: 'Title 3', desc: 'Desc for title 3' }
//     ]
//   }
// });
