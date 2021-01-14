<template>
<div class="card"><div class="card-body">

   <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder"> Редактирование полей </h6>

   <!----- ПОЛЯ ТАБЛИЦЫ ----->
   <form action="#"><div class="form-body">

            <template v-for="(item, fname) in tableFields">
              <div class="form-group row" :key="fname">
                <label class="col-md-2"> {{ fname }} </label>
                <div class="col-md-10">
                  <div class="row">

                    <template v-if="!isAutoField(item)">
                      <!-- Изменяем имя поля -->
                      <div class="col-md-6">
                        <div class="form-group">
                          <input @change="changeFieldName(fname, tableFields[fname]['column_name'], table_name)"
                                 v-model="tableFields[fname]['column_name']"
                                 type="text" class="form-control" :placeholder="fname">
                        </div>
                      </div>

                      <!-- Изменяем тип поля -->
                      <div class="col-md-4">
                        <div class="form-group">
                          <!--<label class="col-sm-12">{{fields[fname]['input_type']}}</label>-->
                          <div class="col-sm-12">
                            <select v-model="tableFields[fname]['input_type']"
                                    style="cursor: pointer;"
                                    @change="selectedUpdateFieldType(fname, tableFields[fname]['input_type'])"
                                    class="form-control form-control-line pl-0">
                              <option v-for="option in tableFieldTypes"
                                      :key="option.name"
                                      :value="option.name">
                                {{ option.title }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <!-- Удаление поля -->
                      <div class="col-md-2">
                        <div class="form-group">
                          <div class="col-sm-2">
                            <i @click="commonDeleteField(fname, table_name)"
                               class="mdi mr-2 mdi-delete-forever"
                               style="color:red; font-size: 26px; cursor:pointer; margin:0px; padding:0px; border: 0px gainsboro solid"
                            ></i>
                          </div>
                        </div>
                      </div>

                    </template>
                    <template v-else>

                      <div class="col-md-12">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Id" :value="fname"
                                 disabled>
                        </div>
                      </div>

                    </template>


                  </div>
                </div>
              </div>
            </template>

   </div></form>

</div></div>
</template>

<script>

// import {mapGetters, mapActions} from 'vuex';

export default {
  name: "TableFieldsEdit",
  props: ['table_name'],
  data: () => ({ }),
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

table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  border-collapse: collapse;
  text-align: center;
  width: 100%;
}

table td {
  padding: 0px;
  margin: 0px;
}

th, td:first-child {
  background: #AFCDE7;
  color: white;
  padding: 10px 20px;
}

th, td {
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
}

td {
  background: #D8E6F3;
}

th:first-child, td:first-child {
  text-align: left;
}

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
