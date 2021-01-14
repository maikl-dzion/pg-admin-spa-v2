<template>
  <div>
        <div v-if="preloaderState"
             class="preloader" style="background: grey !important; opacity: 0.4; !important">
             <div class="lds-ripple">
                <div class="lds-pos" style="border: 4px darkblue solid !important;" ></div>
                <div class="lds-pos" style="border: 4px darkblue solid !important;" ></div>
             </div>
        </div>
  </div>
</template>

<script>
export default {
  name : "Preloader",
  data: () => ({
      showStatus : false,
  }),

  computed: {
      preloaderState() {
         return this.$store.state.preloader;
      }
  },

}
</script>

<style scoped>

</style>
