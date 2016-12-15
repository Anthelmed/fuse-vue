<template>
  <div id="loader">
    <div class="animated-loader"></div>
  </div>
</template>

<script>
    export default{
      mounted: function() {
        setTimeout(() => {
          this.$router.push('/introduction/1')
        }, 5000);
      }
    }

</script>
