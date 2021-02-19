<template>
  <div class="card">
    <div class="card-body">

      <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder"> Редактирование
        полей </h6>

      <div class="table-responsive">

        <table class="table editable-table table-bordered table-striped m-b-0 item-fileds-form-table"
               style="cursor: pointer;">

          <thead>
          <tr>
            <th>Имя поля</th>
            <th>Изменить</th>
            <th>Тип поля</th>
            <th>Значение по умолчанию</th>
            <th style="width: 20px; text-align: center">X</th>
          </tr>
          </thead>

          <tbody>

          <tr v-for="(item, fname) in tableFields" :key="fname">
            <td tabindex="1">{{ item.column_name }}</td>
            <td tabindex="1">
              <input v-model="item.column_name" type="text"
                     @change="changeFieldName(fname, tableFields[fname]['column_name'], table_name)">
            </td>
            <td tabindex="1">

              <select v-model="item.input_type" style="cursor: pointer;"
                      @change="selectedUpdateFieldType(fname, tableFields[fname]['input_type'])"
                      class="form-control form-control-line pl-0">
                      <option v-for="option in tableFieldTypes"
                              :value="option.name">{{ option.title }}
                      </option>
              </select>

            </td>

            <td tabindex="1">
              <input v-model="item.column_default" type="text">
            </td>

            <td tabindex="1" style="width: 20px;">
              <div @click="commonDeleteField(fname, table_name)"
                   style="width:100%; margin:0px; padding:3px 1px 0px 0px">
                <i class="mdi mr-2 mdi-delete deleteBoxIcon"
                   style="color: red; font-size: 20px; margin-left: 17%;"></i>
              </div>
            </td>

          </tr>
          </tbody>

        </table>

      </div> <!-- /.table-responsive -->


    </div>
  </div>
</template>

<script>

// import {mapGetters, mapActions} from 'vuex';

export default {
  name: "TableFieldsEdit",
  props: ['table_name'],
  data: () => ({}),
  computed: {
    tableFields() {
      return this.storeGet().getTableFields
    },
    // ...mapGetters(['getTableFields'])
  },
  methods: {
    // ...mapActions(['fetchTableFields']),
  } // methods
}
</script>


<style scoped>

.item-fileds-form-table th {
  text-align: center;
}


.item-fileds-form-table th,
.item-fileds-form-table td {
  padding: 2px;
}

.item-fileds-form-table input {
  width: 100%;
  height: 35px;
  border: 1px #b8daff solid;
}

/*table {*/
/*  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;*/
/*  font-size: 14px;*/
/*  border-collapse: collapse;*/
/*  text-align: center;*/
/*  width: 100%;*/
/*}*/

/*table td {*/
/*  padding: 0px;*/
/*  margin: 0px;*/
/*}*/

/*th, td:first-child {*/
/*  background: #AFCDE7;*/
/*  color: white;*/
/*  padding: 10px 20px;*/
/*}*/

/*th, td {*/
/*  border-style: solid;*/
/*  border-width: 0 1px 1px 0;*/
/*  border-color: white;*/
/*}*/

/*td {*/
/*  background: #D8E6F3;*/
/*}*/

/*th:first-child, td:first-child {*/
/*  text-align: left;*/
/*}*/

.selectElemContainer {

}

.dataItemModalBox {
  position: relative;
  width: 70%;
}

.dataItemModalTable {

}

.dataItemModalTable td {
  padding: 0px !important;
  margin: 0px !important;
}

.dataItemModalTable td div {
  padding: 4px !important;
}

.data-table-textarea {
  width: 100%;
  height: 30px;
}

.data-table-input {
  width: 100%;
  height: 35px;
}

.td-first-name {
  width: 140px;
}

.td-fname {
  width: 220px;
}

.td-type {
  width: 50px;
}

.td-delete {
  width: 20px !important;
}

.input-text-class {
  width: 100%;
  height: 35px;
}

</style>
