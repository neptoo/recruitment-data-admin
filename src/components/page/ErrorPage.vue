<template>
  <div>
  <v-pageTitle vtitle="ErrorPage"></v-pageTitle>
  <Error></Error>
  </div>
</template>

<script>
import vPageTitle from '../common/pageTitle.vue';
import Error from '../Error.vue';
export default {
  name: 'ErrorPage',
  components:{
      vPageTitle,Error
  }
}
</script>

<style lang="scss" scoped>

</style>