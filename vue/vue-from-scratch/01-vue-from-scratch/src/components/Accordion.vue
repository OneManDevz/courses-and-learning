<template>
    <div>
        <h1>{{ item.title}}</h1>
        <h2 @click="toggle = !toggle">Details</h2>
        <p v-if="toggle">{{ item.desc }}</p>
    </div>
</template>

<script>
    export default {
        name: "Accordion",
        props: ['item'],

  data: function() {
    return {
      toggle: false
    };
  }
    }
</script>

<style scoped>

</style>