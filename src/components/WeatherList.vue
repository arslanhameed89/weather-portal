<template>
  <div class="forecast">
    <div class="forecast-header">
      <div class="day">Tuesday</div>
    </div> <!-- .forecast-header -->
    <div class="forecast-content">
      <div class="forecast-icon">
        <img src="images/icons/icon-3.svg" alt="" width=48>
      </div>
      <div class="degree">23<sup>o</sup>C</div>
      <small>18<sup>o</sup></small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
