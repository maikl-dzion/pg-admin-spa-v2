<template>
    <div>

<!--        <pre>{{tableFields}}</pre>-->

        <div class="dataItemModalBox">
            <table class="dataItemModalTable">

                <tr>
                    <th>Имя поля</th>
                    <th>Изменить имя</th>
                    <th>Тип поля</th>
                    <th></th>
                </tr>



                <tr v-for="(item, fname) in tableFields" :key="fname">
                    <td style="color:black; width:120px !important; padding:5px 5px 5px 10px !important; ">{{fname}}
                    </td>
                    <template v-if="!isAutoField(item)">
                        <td style="width:250px;">
                            <input @change="changeFieldName(fname, fields[fname]['column_name'], table_name)"
                                   v-model="fields[fname]['column_name']"
                                   class="input-text-class" style="padding:4px;" type="text"/>
                        </td>

                        <td style="width:60px;">

                            <ui-select
                                    style="width:100%; padding:0px; margin:0px"
                                    name="name"
                                    label="name"
                                    :param="{ field_name : fname,
                                             current_value : fields[fname]['input_type']}"
                                    :items="tableFieldTypes"
                                    @select_item="selectChangeType"
                            ></ui-select>

                            <!--<CustomSelect-->
                                    <!--style="width:100%; padding:0px;"-->
                                    <!--name="name"-->
                                    <!--label="name"-->
                                    <!--hover="1"-->
                                    <!--:field_name="fname"-->
                                    <!--:selected_value="fields[fname]['input_type']"-->
                                    <!--:items="tableFieldTypes"-->
                                    <!--@select_item="selectChangeType"-->
                            <!--&gt;</CustomSelect>-->
                        </td>

                        <td style="width:20px !important; color:white; background: red">
                            <i @click="commonDeleteField(fname, table_name)" class="fa fa-times"
                               style="color:white;font-size: 17px; cursor:pointer;"></i>
                        </td>

                    </template>
                    <template v-else>
                        <td>
                            <input :value="fname" type="text" style="width:100%;"
                                   class="input-text-class" disabled="true"/>
                        </td>
                        <td>{{fields[fname]['default_value']}}</td>
                        <td></td>
                    </template>

                </tr>
            </table>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TableFieldsEdit",
        props: ['fields', 'table_name'],
        computed: {
            tableFields() {
                return this.storeGet().getTableFields
            },
        },

        methods: {
            selectChangeType(data) {
                const newValue = data.value
                const fname = data.field_name
                this.changeFieldType(fname, newValue, this.table_name)
            }
        }
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
