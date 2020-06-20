<template>
  <div>
    <h1>Don't sniff around!</h1>
    <h3>The {{ resource }} is not here</h3>
    <router-link :to="{ name: 'event-list'}">Back to the Home</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>
