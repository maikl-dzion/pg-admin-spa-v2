<template>
    <div class="select-container" >

        <!--<select class="select-element">-->
            <!--<option value="hide">&#45;&#45; Year &#45;&#45;</option>-->
            <!--<option value="2010">2010</option>-->
            <!--<option value="2011">2011</option>-->
            <!--<option value="2012">2012</option>-->
            <!--<option value="2013">2013</option>-->
            <!--<option value="2014">2014</option>-->
            <!--<option value="2015">2015</option>-->
        <!--</select>-->
    </div>
</template>

<script>
export default {
  name: 'CustomSelect',

  methods: {

    init () {

    },

  },

  mounted () {
    this.init()
  }
}
</script>

<style scoped>
    .select-container {
        border: 1px green solid;
        width: 100%;
    }

    .select-element {
        width: 100%;
        border: 1px red solid;
    }

</style>
