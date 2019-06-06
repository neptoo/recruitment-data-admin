<template>
  <div class="chart-container">
    <v-pageTitle vtitle="JobChart"></v-pageTitle>
    <chart height="100%" width="100%" />
  </div>
</template>

<script>
import vPageTitle from '../common/pageTitle.vue';
import Chart from '@/components/Charts/mixChart';
export default {
  name: 'JobChart',
  components:{
      vPageTitle, Chart
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>