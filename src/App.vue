<template>
  <component :is="layout">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </component>
</template>

<script>
  const defaultLayout = 'default'

  export default {
    computed: {
      layout () {
        return (this.$route.meta.layout || defaultLayout) + '-layout'
      }
    }
  }
</script>
