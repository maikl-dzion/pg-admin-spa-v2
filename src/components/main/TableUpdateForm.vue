<template>
  <div class="">

    <div class="row">
      <div class="col-lg-12 col-md-8"><div class="card"><div class="card-body" >

          <div v-if="table_name">
            <span style="font-style: italic;">Выбранная таблица : </span>
            <span style="color:green;margin-left:10px;" >{{table_name}}</span>
          </div>

      </div></div></div>
    </div>

    <div class="row" >

        <!--- Центральный Контент Блок -->
        <div class="col-lg-7 col-md-8">

          <!----- ДОБАВЛЕНИЕ НОВЫХ ПОЛЕЙ    ------->
          <div class="card"><div class="card-body">
              <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder">Добавление новый полей</h6>
              <AddTableFieldsForm @save_new_fields="saveNewFields"/>
          </div></div>

          <!----- РЕДАКТИРОВАНИЕ ПОЛЕЙ ТАБЛИЦЫ ----->
          <TableFieldsEdit :table_name="table_name" />
          <!---- / Редактирование полей  --->

<!--          <pre>{{getTableList}}</pre>-->

        </div><!--- ./col-lg-8 --->

        <!-------------------------->
        <!--- Правый Контент Блок -->
        <div class="col-lg-5 col-md-4" >

              <div class="card"><div class="card-body">

                    <!----  Создание таблицы --->
                    <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder">Создать новую таблицу</h6>
                    <div class="row" >
                          <div class="col-lg-6"><div class="form-group">
                              <input v-model="newTableItem.name" type="text" class="form-control" placeholder="Имя таблицы">
                          </div></div>
                          <div class="col-lg-6"><div class="form-group">
                              <input v-model="newTableItem.id_fname" type="text" class="form-control" placeholder="Имя Id поля">
                          </div></div>
                          <div class="col-lg-12">
                             <button @click="createNewTable()" type="button" class="btn btn-outline-info" style="border-radius: 0px; margin:0px">Создать таблицу</button>
                          </div>
                    </div>
                    <!------ / Создание таблицы --->

                    <template v-if="table_name" >
                        <!----- Изменить имя таблицы --->
                        <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder;  margin-top:10px;">Изменить имя таблицы</h6>
                        <div class="input-group">
                            <input v-model="newRenameTableName" type="text" class="form-control" placeholder="Изменить имя таблицы" >
                            <div class="input-group-append">
                                 <button @click="changeTableName(newRenameTableName, table_name)"
                                         class="btn btn-outline-secondary" type="button" style="border-radius: 0px">Изменить</button>
                            </div>
                        </div>
                        <!---- / Изменить имя таблицы --->

                        <!----- Скопировать таблицу --->
                        <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;">Копировать таблицу</h6>
                        <div class="input-group">
                            <input v-model="newCopyTableName" type="text" class="form-control" placeholder="Задать имя новой таблицы">
                            <div class="input-group-append">
                                 <button @click="copyTable(table_name, newCopyTableName)"
                                         class="btn btn-outline-secondary" type="button" style="border-radius: 0px">Создать копию</button>
                            </div>
                        </div>
                        <!---- / Скопировать таблицу --->

                        <!----- Удалить  таблицу --->
                        <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;">Удалить  таблицу </h6>
                        <div class="input-group">
                            <input v-model="table_name" type="text" class="form-control" disabled>
                            <div class="input-group-append">
                               <button @click="commonDeleteTable(table_name)" class="btn btn-outline-danger" type="button" style="border-radius: 0px">Удалить таблицу</button>
                            </div>
                        </div>
                        <!---- / Удалить  таблицу  --->
                    </template>

              </div></div>

              <div class="card">

                  <div class="card-body" style="display: flex" >

                    <TextConvertToArray
                      style="width:45%; margin-right: 20px;"
                      title="Добавление новых таблиц списком"
                      @get_list="createTablesList"
                    ></TextConvertToArray>

                    <TextConvertToArray
                        v-if="table_name"
                        style="width:45%; margin-left: 20px;"
                        title="Добавление новых полей списком"
                        @get_list="createFieldsList"
                    ></TextConvertToArray>

                  </div>

              </div>

              <div class="card">
                  <div class="card-body">
                    <button @click="showToggleJson = !showToggleJson" type="button" class="btn btn-info" style="border-radius: 0px; margin:4px 20px 4px 4px;"> Показать Json</button>
                    <div><pre v-if="showToggleJson">{{ tableFields }}</pre></div>
                  </div>
              </div>

        </div> <!--- ./col-lg-4 --->

    </div>


  </div>
</template>

<script>

import { mapGetters, mapActions} from 'vuex';
import TableFieldsEdit from '@/components/main/TableFieldsEdit';
import AddTableFieldsForm from '@/components/main/AddTableFieldsForm';
import TextConvertToArray from "@/components/TextConvertToArray";

export default {
  name: "TableFieldsUpdateForm",
  props: ['fields', 'table_name'],
  components: {
      AddTableFieldsForm,
      TableFieldsEdit,
      TextConvertToArray
  },
  data: () => ({

      showToggleJson: false,
      newCopyTableName   : '',
      newRenameTableName : '',

      newFieldsList: [],

      newFieldItem: {
        name: '',
        type: 'varchar',
        default_value: '',
      },

      newTableItem: {
        name    : '',
        id_fname: 'id',
        type    : 'serial',
      },

  }),

  created () {

      // this.fetchTableList(true).then(name => {
      //    this.table_name = name;
      // });

     this.componentMenuActionRun('tables');
    // this.newRenameTableName = this.table_name;
  },

  computed: {

      ...mapGetters([
         'getTableList'
      ]),

      tableFields() {
        return this.storeGet().getTableFields
      },

      // ...mapGetters(['getTableFields'])
  },

  methods: {

    ...mapActions([
      'saveAddFields',
      'fetchTableFields',
      'fetchTableList',
    ]),

    async createNewTable() {

        let tableName   = this.newTableItem.name;
        let idFieldName = this.newTableItem.id_fname;

        if (!tableName) {
          alert('Не задано имя новой таблицы');
          return false;
        }

        const url = 'CREATE_TABLE/' + tableName + '/' + idFieldName
        const response = await this.http(url);
        const message = `Новая таблица "${tableName}" создана`;
        this.saveResponseHandle(tableName, message);
    },

    async saveNewFields(fieldsList, table = null) {

        let records = [];
        if(!table) table = this.table_name;
        const fields = fieldsList;

        // this.saveAddFields({ table, fields }).then(response => {}) // создание через vuex store

        for (let i in fields) {
            const item = fields[i];
            const resp = await this.addNewField(table, item.name, item.type, item.default_value);
            records.push(resp);
        }

        this.fetchTableFields(table);

        this.saveResponseHandle(table);
    },

    addNewField(tableName, name, type, defaultValue = null) {
        if (!name || !tableName) return false;
        const url = 'ADD_FIELD/' + tableName + '/' + name + '/' + type;
        return this.http(url);
    },

    async changeTableName(newTableName, tableName = null) {
       if(!tableName)
           tableName = this.table_name;
       const resp = await this.renameTable(tableName, newTableName);
       const message = `Имя таблицы "${tableName}" изменено на "${newTableName}"`;
       this.saveResponseHandle(newTableName, message);
    },

    async createTablesList(list) {
        let tableName = '';
        let idName    = '';
        for(let i in list) {
              if(!list[i]) continue;

              idName    = 'id';
              tableName = list[i].trim();
              const url = 'CREATE_TABLE/' + tableName + '/' + idName
              const response = await this.http(url);
        }

        this.fetchTableList();

        this.alertShow(`Новые таблицы  созданы`);
    },

    async createFieldsList(list) {

        let fields = [];

        for(let i in list) {
            if(!list[i]) continue;
            let name = list[i].trim();
            let type = 'varchar'
            let item = { name, type }
          fields.push(item);
        }

        if(fields.length)
           this.saveNewFields(fields);
    },

    saveResponseHandle(tableName, alertMessage = 'Новые поля добавлены') {
        this.fetchTableList()
        this.fetchTableFields(tableName)
        this.getTableFields(tableName, resp => {
            this.commonItem = resp
            this.alertShow(alertMessage);
        });
        this.getTableListSheme();
    }

  }, // methods


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
