<template>
  <p>&copy; {{ year(2017) }} Nick</p>

  <a rel="me" href="https://mastodon.social/@noobping">Mastodon</a>
</template>

<script>
export default {
  name: 'copyright',
  methods: {
    year(n) {
      const y = new Date().getFullYear();
      return n && parseInt(n) <= y ? n + " - " + y : y;
    }
  }
}
</script>

<style scoped>
p {
  margin: auto;
  padding: 1em;
  text-align: center;
  font-size: 1em;
}
</style>
