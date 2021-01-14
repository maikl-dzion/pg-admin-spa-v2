<template>
<div style="width:100%">
  <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;"> {{title}} </h6>
<!--  <pre>{{textareaValue}}</pre>-->
  <div class="form-group" style="width:100%">
      <textarea v-model="textareaValue"
                class="form-control"
                rows="6" style="width:100%" placeholder=""></textarea>
  </div>

  <button @click="convertToArray"
          class="btn btn-outline-secondary" type="button" style="border-radius: 0px">Сохранить</button>

</div>
</template>

<script>
export default {
  name: "AddNewItemsList",
  props : ['title'],
  data: () => ({
       textareaValue : '',
  }),

  methods : {

     convertToArray() {
        const list = this.textareaValue.split("\n");
        this.$emit('get_list', list);
        this.textareaValue = '';
     },

  },

}
</script>

<style scoped>

</style>
