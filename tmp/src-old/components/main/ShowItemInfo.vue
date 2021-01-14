<template><div>

    <!----- ПРОСМОТР ПОЛЕЙ ------->
    <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder">{{title}}</h6>
    <table class="tablesaw no-wrap table-bordered table-hover table tablesaw-swipe item-info-table" style="">
      <thead>
           <tr>
             <th class="border" >Имя поля</th>
             <th class="border" >Значение</th>
           </tr>
      </thead>
      <tbody>
          <tr v-for="(value, fname) in item_info" :key="fname">
            <td class="title tablesaw-swipe-cellhidden tablesaw-swipe-cellpersist" style="width: 25%; padding:4px;">{{fname}}</td>
            <td class="" :title="value"><input :value="value" type="text" style="" ></td>
          </tr>
      </tbody>
    </table>

</div></template>

<script>
export default {
  name: "ShowEntityInfo",
  props:['title', 'item_info']
}
</script>

<style scoped>
   .item-info-table td {
        margin: 0px;
        padding: 0px;
   }

   .item-info-table td input {
        width: 100%; height: 32px;
        padding-left:6px;
        border: 0px gainsboro solid;
   }

</style>
