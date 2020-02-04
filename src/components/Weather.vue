<template>
  <div class="forecast" @click="detailPage">
    <div class="forecast-header">
      <div class="day">{{title}}</div>
    </div> <!-- .forecast-header -->
    <div class="forecast-content">
      <div class="forecast-icon">
        <img :src="icon" alt="" width=48>
      </div>
      <div class="degree">{{temprature}}</div>
      <small>{{minTemprature}}<sup>min</sup></small> <br>
      <small>{{minTemprature}}<sup>max</sup></small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  props : ['title', 'temprature', 'minTemprature', 'maxTemprature', 'icon'],
  methods : {
    detailPage () {
      this.$emit('detailPage')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
