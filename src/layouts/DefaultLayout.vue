<template>
  <div>
    <main-header />
    <router-view />
    <main-footer />
  </div>
</template>

<script>
  import MainHeader from '@/layouts/MainHeader.vue'
  import MainFooter from '@/layouts/MainFooter.vue'

  export default {
    components: {
      MainHeader,
      MainFooter
    }
  }
</script>

<style>

</style>
