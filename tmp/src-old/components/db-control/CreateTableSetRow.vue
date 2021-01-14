<template>
    <div class="newCreateFormContainer">

        <div style="margin:0px 0px 10px 0px">
            <button  @click="pushTableToArray()"
                 style="margin:0px; border-radius: 0;"
                 class="btn btn-primary btn-sm px-2 waves-effect export-to-snippet">
                <i class="fa fa fa-plus"></i> &nbsp; Добавить таблицу
            </button>

            <button @click="clearTableList"
                style="border-radius: 0; color:white; width: 140px;"
                class="btn btn-blue-grey btn-sm px-2 waves-effect export-to-snippet">
                <i class="fa fa-repeat" style="color:white"></i> &nbsp; Очистить
            </button>

            <button @click="addTableList"
                style="width: 180px; margin:0px 10px 0px 20px; border-radius: 0;"
                class="btn btn-success btn-sm px-2 waves-effect export-to-snippet">
                <i class="fa fa-floppy-o" ></i> &nbsp; Сохранить результат
            </button>

        </div>


        <div class="row" style="" >
            <div v-for="(item, i) in createTableList" class="col-4" style="">

                <!-- ############ -->
                <!-- Блок таблицы -->
                <div class="newTableBox" :id="'newTableBox-' + i" >

                    <div class="newTableName" :id="'newTableName-' + i"
                         style="display: flex" >

                        <!-- Имя таблицы -->
                        <div class="vFieldContainer" style="width:60%">
                            <input v-model="item.name" style="outline: none"
                                   class="vInputText" type="text" required>
                            <label>Имя таблицы</label>
                        </div>

                        <!-- Имя поля Id -->
                        <div class="vFieldContainer" style="width:38%; margin-left:5px; margin-right:5px;">
                            <input v-model="item.idName" style="outline: none"
                                   class="vInputText" type="text" required>
                            <label>Поле Id</label>
                        </div>

                        <!-- Кнопка добавления нового поля -->
                        <button @click="pushNewField(i)"
                                style="width:37px; margin:0px; margin-right:2px; outline: none !important; border-radius: 0px;"
                                class="btn btn-primary btn-sm px-2 waves-effect export-to-snippet">
                                <i class="fa fa fa-plus"></i>
                        </button>

                    </div>

                    <div class="newTableFieldsBox" :id="'newFieldsBox-' + i"
                         v-if="item.fields.length" >

                        <table>
                            <tr><th>Имя поля</th>
                                <th>Тип поля</th>
                            </tr>

                            <tr v-for="(field) in item.fields" >
                                <!-- Имя поля -->
                                <td style="width:70%">
                                    <div class="vFieldContainer" style="width:100%">
                                        <input v-model="field.name" style=""
                                               class="vInputText" type="text" required>
                                        <label></label>
                                    </div>
                                </td>
                                <!-- Тип поля -->
                                <td style="width:30%">
                                    <v-select
                                        style="width:100%;"
                                        label="title"
                                        name="name"
                                        :items="tableFieldTypes"
                                        :param="{width: 98, value : field.type}"
                                        @select_item="data => {field.type = data.value}"
                                    ></v-select>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
                <!-- / Блок таблицы -->
                <!-- ############## -->

            </div><!-- Col -->
        </div><!-- Row -->

    </div>
</template>

<script>
    export default {
        name: "CreateTableSetRow",

        data: () => ({}),

        created() {
            this.pushTableToArray()
        },

        methods: {

            clearTableList() {
                this.createTableList = [];
                this.pushTableToArray()
            },

            pushNewField(i) {
                this.createTableList[i]['fields'].push({name: '', type: 'varchar'})
                console.log(this.createTableList);
            },

            addTableList() {
                let table = {}
                const len = this.createTableList.length;
                let tableList = Object.assign({}, this.createTableList)
                for (let i in tableList) {
                    table = tableList[i];
                    this.addTableAndFieldsAsync(table.name, table.idName, table.fields, response => {
                         console.log(response);
                    });
                }
            },

            async addTableAndFieldsAsync(tableName, idName, tableFields = null, callback = null) {
                if (!tableName) {
                    this.warn('Нет имени таблицы');
                    return false
                }

                const url = 'CREATE_TABLE/' + tableName + '/' + idName
                const response = await this.http(url)
                this.successAddTable(tableName);
                let respFields = [];
                if(tableFields) {
                    for(let i in tableFields) {
                        const fieldItem = tableFields[i];
                        let resp = this.addFieldFnAsync(tableName, fieldItem)
                        respFields.push(resp);
                    }
                }

                if(callback) {
                    callback({ table: response, fields : respFields, tableName})
                }
            },

            async addFieldFnAsync(tableName, fieldItem) {
                let name = fieldItem.name;
                let type = fieldItem.type;
                if (!name)
                    return false
                const url = 'ADD_FIELD/' + tableName + '/' + name + '/' + type
                const response = this.http(url)
                this.successAddField(tableName)
                return response;
            },

            successAddTable(tableName = null) {
                this.fetchTableList()
                this.alertShow('Новая таблица создана')
                this.getTableList()
            },

            successAddField(tableName = null) {
                this.alertShow('Новое поле добавлено')
                this.getTableFields(tableName, resp => {
                    this.commonItem = resp
                })
                this.getTableListSheme()
            },
        },
    }
</script>

<style>

    .newCreateFormContainer .row,
    .newCreateFormContainer .col-4 {
        border:0px red solid;
        margin:0px ;
        padding:0px;
    }

</style>


<style scoped>

    .newCreateFormContainer .newTableBox {
        border:2px gainsboro solid;
        margin: 4px;
        padding:10px 2px 10px 5px;
        background: aliceblue;
        /*box-shadow: 3px 4px 5px rgba(68, 68, 68, 0.4);*/
    }

    .newCreateFormContainer .newTableFieldsBox {
        border-top:0px ghostwhite solid;
        margin-top:10px;
        padding:2px;
    }

    .newTableFieldsBox table td,
    .newTableFieldsBox table th {
        border: 1px gainsboro solid;
    }

    .newTableFieldsBox table th {
        text-align: center;
        color: gainsboro;
        font-style: italic;
    }

    .newTableFieldsBox table td {
        padding:0px;
        margin:0px;
    }

    .newTableFieldsBox table td input{
        /*border: 0px grey solid;*/
        border-radius: 0px;
        outline:0px;
    }

    /*.new-create-form-container {*/
        /*border: 0px gainsboro solid;*/
        /*width: 100%;*/
        /*background: white;*/
    /*}*/

    /*.new-create-form-header {*/
        /*display: flex;*/
        /*padding: 3px;*/
        /*height: 43px;*/
        /*border-bottom: 3px #326690 solid;*/
    /*}*/

</style>
