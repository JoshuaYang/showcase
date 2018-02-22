<template>
  <section class="container">
    <h2>todos count: {{list.length}}</h2>
    <button @click="add({id:1,text:2})">add todo item</button>
    <hr>
    <nuxt-link to="/about">goto about</nuxt-link>
  </section>
</template>

<script>
import {
  mapState,
  mapMutations,
} from 'vuex';

export default {
  async asyncData (context) {

  },
  computed: {
    ...mapState('todos', [
      'list',
    ]),
  },
  methods: {
    ...mapMutations('todos', [
      'add',
    ]),
  },
  components: {
  },
};
</script>

<style lang="scss">
// :root {
//   --bgc: $demo;
// }
//
// html {
//   color: var(--bgc);
//   @include demo(55px);
// }
//
// @media (max-width: 500px) {
//   :root {
//     --bgc: blue;
//   }
// }

</style>
