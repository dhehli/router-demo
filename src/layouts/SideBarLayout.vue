<template>
  <div>
    <main-header />
    <b-container>
      <b-row>
        <b-col cols="4">
          <!-- TODO: This is always empty -->
          <router-view name="sideBar"/>
        </b-col>
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
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
