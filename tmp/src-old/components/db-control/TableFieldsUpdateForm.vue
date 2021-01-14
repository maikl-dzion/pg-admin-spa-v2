<template>
<div class="card-body">

        <div class="row" >
           <div class="col-lg-12 col-md-8" ><div class="card"><div class="card-body" style="display:flex; text-align:right">
                
              <button @click="showToggleJson = !showToggleJson"
                               type="button" class="btn btn-info" style="border-radius: 0px; margin:4px 20px 4px 4px;"> Показать Json </button>

              <!-- <button @click="showToggleJson = !showToggleJson "
                    type="button" class="btn btn-info" style="border-radius: 0px; margin:4px;"> Удалить таблицу ({{table_name}}) </button> -->

           </div></div></div>
        </div>   

        <div class="row" >

            <!-- <div class="col-lg-8 col-md-8" ><div class="card"><div class="card-body">
                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder" >Создать новую таблицу</h6>

                <div class="row" >
                    <div class="col-md-5"><div class="form-group">
                            <input v-model="newTableItem.name" type="text" class="form-control" placeholder="Имя таблицы">
                    </div></div>
                    <div class="col-md-5"><div class="form-group">
                        <input v-model="newTableItem.id_fname" type="text" class="form-control" placeholder="Имя Id поля" >
                    </div></div>
                    <div class="col-md-2"><div class="form-group">
                        <button @click="createNewTable()"
                                type="button" class="btn btn-outline-info"
                                style="border-radius: 0px; margin: 0px 0px 0px 15px">Создать</button>
                    </div></div>
                </div>
            </div></div></div> -->

            <!----- ДОБАВЛЕНИЕ НОВЫХ ПОЛЕЙ----->
           <div class="col-lg-8 col-md-8" ><div class="card"><div class="card-body">
                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder" >Добавление новый полей</h6>
                <AddTableFieldsForm @save_new_fields="saveNewFields" />
           </div></div></div>

            <div class="col-lg-4 col-md-5"><div class="card"><div class="card-body">

                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder" >Создать новую таблицу</h6>
                <div class="row" >
                    <div class="col-lg-5"><div class="form-group">
                            <input v-model="newTableItem.name" type="text" class="form-control" placeholder="Имя таблицы">
                    </div></div>
                    <div class="col-lg-4"><div class="form-group">
                        <input v-model="newTableItem.id_fname" type="text" class="form-control" placeholder="Имя Id поля" >
                    </div></div>
                    <div class="col-lg-2"><div class="form-group">
                        <button @click="createNewTable()"
                                type="button" class="btn btn-outline-info"
                                style="border-radius: 0px; margin: 0px 0px 0px 10px">Создать</button>
                    </div></div>
                </div> 
                

                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder;  margin-top:10px;" >Изменить имя таблицы</h6>
                <div class="input-group">
                    <input v-model="table_name" type="text" class="form-control" >
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" style="border-radius: 0px">Изменить</button>
                    </div>
                </div>

        
                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;" >Копировать таблицу</h6>
                <div class="input-group">
                    <input v-model="table_name" type="text" class="form-control" placeholder="Имя новой таблицы">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" style="border-radius: 0px">Создать копию</button>
                    </div>
                </div>

            </div></div></div>
       

       <!-- <div class="row" >
          
           <div class="col-lg-8 col-md-8" ><div class="card"><div class="card-body">
                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder" >Добавление новый полей</h6>
                <AddTableFieldsForm @save_new_fields="saveNewFields" />
           </div></div></div>

           <div class="col-lg-4 col-md-5"><div class="card"><div class="card-body">
                   <div><pre v-if="showToggleJson">{{tableFields}}</pre></div>
           </div></div></div>

       </div> -->

    

            <!----- РЕДАКТИРОВАНИЕ ПОЛЕЙ ТАБЛИЦЫ----->
            <div class="col-lg-8 col-md-7" ><div class="card">
                <div class="card-body">
                    <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder" > Редактирование полей </h6>
                    <!----- ПОЛЯ ТАБЛИЦЫ ----->
                    <form action="#"><div class="form-body">

                        <template v-for="(item, fname) in tableFields">
                            <div class="form-group row" :key="fname" >
                                <label class="col-md-2"> {{fname}} </label>
                                <div class="col-md-10">
                                    <div class="row">

                                        <template v-if="!isAutoField(item)">
                                            <!-- Изменяем имя поля -->
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input @change="changeFieldName(fname, tableFields[fname]['column_name'], table_name)"
                                                           v-model="fields[fname]['column_name']"
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

                </div>
            </div></div>

             <div class="col-lg-4 col-md-5"><div class="card"><div class="card-body">
                   <div><pre v-if="showToggleJson">{{tableFields}}</pre></div>
            </div></div></div>

            <!------------------>
            <!--<div class="col-lg-4 col-md-5"><div class="card">-->

                    <!--<div class="card-body">-->
                        <!--<h3 class="card-title">Our Visitors </h3>-->
                        <!--<h6 class="card-subtitle">Different Devices Used to Visit</h6>-->
                        <!--fghhhhhhhhhhh-->
                    <!--</div>-->
                <!---->
                    <!--<div><hr class="m-t-0 m-b-0"></div>-->
                    <!--<div class="card-body text-center ">-->
                        <!--<ul class="list-inline d-flex justify-content-center align-items-center mb-0">-->
                            <!--<li class="mr-4"><h6 class="text-info"><i class="fa fa-circle font-10 mr-2 "></i>Mobile</h6></li>-->
                            <!--<li class="mr-4"><h6 class=" text-primary"><i class="fa fa-circle font-10 mr-2"></i>Desktop</h6></li>-->
                            <!--<li class="mr-4"><h6 class=" text-success"><i class="fa fa-circle font-10 mr-2"></i>Tablet</h6></li>-->
                        <!--</ul>-->
                    <!--</div>-->
            <!--</div></div>-->

        </div>

        <!--<div class="card">-->
            <!--<div class="card-body">-->
                <!--<h4 class="card-title">Special title treatment</h4>-->
                <!--<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
                <!--<a href="javascript:void(0)" class="btn btn-info">Go somewhere</a>-->
            <!--</div>-->
        <!--</div>-->

</div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';
    import AddTableFieldsForm from '@/components/main/AddTableFieldsForm';

    export default {
        name: "TableFieldsUpdateForm",
        props: ['fields', 'table_name'],
        components: {
            AddTableFieldsForm,
        },
        data: () => ({
           
            showToggleJson: false,
            newFieldsList : [],
            newFieldItem  : {
               name : '',
               type : 'varchar',
               default_value: '',
            },
            newTableItem  : {
                name    : '',
                id_fname : 'id',
                type    : 'serial',
            },
        }),
        computed: {

            tableFields() {
                return this.storeGet().getTableFields
                // return this.$store.state.tableFields;
            },

            // ...mapGetters([
            //     'getTableFields'
            //   ])
         
        },
       
        methods: {

            ...mapActions([
                'saveAddFields',
                'fetchTableFields',
              ]),

            selectedUpdateFieldType(fieldName, newTypeValue) {
                const fname = fieldName;
                const newValue = newTypeValue;
                this.changeFieldType(fname, newValue, this.table_name)
            },

            async createNewTable() {
                let tableName   = this.newTableItem.name;
                let idFieldName = this.newTableItem.id_fname;
                if(!tableName) {
                    alert('Не задано имя новой таблицы');
                    return false;
                }
                const url = 'CREATE_TABLE/' + tableName + '/' + idFieldName
                const response = await this.http(url);
                this.alertShow('Новая таблица создана')
            },

            // addFieldToForm() {
            //     const field = Object.assign({}, this.newFieldItem);
            //     this.newFieldsList.push(field);
            // },

            async saveNewFields(fieldsList) {

                let records = [];
                const table   =  this.table_name;
                const fields  =  fieldsList;
                
                // this.saveAddFields({ table, fields }).then(response => {})
                for(let i in fields) {
                    const item = fields[i];
                    const resp = await this.addNewField(table, item.name,  item.type,  item.default_value);
                    records.push(resp);
                }
                
                this.saveResponseHandle(table);
            },

        
            addNewField(tableName, name, type, defaultValue = null){
                if (!name || !tableName)  return false;
                const url = 'ADD_FIELD/' + tableName + '/' + name + '/' + type;
                return this.http(url);
            },
            
    
            saveResponseHandle(tableName) {
                this.fetchTableList ()
                this.fetchTableFields (tableName)
                this.getTableFields(tableName, resp => {
                    this.commonItem = resp
                    this.alertShow('Новые поля добавлены'); 
                });
                this.getTableListSheme();
            }

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
