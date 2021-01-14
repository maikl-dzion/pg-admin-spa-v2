<template>
    <div @mousemove="dragMove($event)" class="dataListPage" >

        <section class="breadcrumbs">
            <div class="container-fluid">
                <div class="d-flex justify-content-between align-items-center">

                </div>
            </div>
        </section>

        <!--- Модальное окно редактирования --->
        <div v-if="modalFlag"

             class="dataItemModalContainter"
             @mousedown="dragInit($event, 'dataItemModalContainter')"
             @mouseup="dragStop($event)"
             id="move_elem_modal_container"
             style="top:60px; left:20px; " >

             <button @click="modalFlag = false" class="btn">Close</button>

             <div class="dataItemModalBox" style="overflow: auto">
                <table class="dataItemModalTable">
                    <tr >
                        <th>Имя поля</th>
                        <th>Значение</th>
                    </tr>
                    <tr v-for="(value, fname) in itemData" >
                        <td><div>{{fname}}</div></td>
                        <td>
                            <textarea @change="editItem(fname, itemData)"
                                   v-model="itemData[fname]"
                                   class="data-table-textarea" >
                            </textarea>

                            <!--<input @change="editItem(fname, itemData)"-->
                                   <!--v-model="itemData[fname]"-->
                                   <!--class="data-table-input" type="text"/>-->
                        </td>
                    </tr>
                </table>
             </div>
        </div>
        <!--- / Модальное окно редактирования --->

        <!--<pre>{{tableData}}</pre>-->

        <section class="blog" style="margin:0px; padding:0px;">
            <div class="sidebar" style="padding: 4px; margin:0px;">
                <div class="sidebar-item tags" style="margin:0px;">
                    <ul>
                        <li v-for="(item) in getDbTables"
                            @click="loadingDataList(item.table_name)">
                            <a @click="setActiveElement ($event, 'menu-item-active')"
                               :id="'list-menu-item-' + item.table_name" class="list-menu-item">
                                {{item.table_name}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ======= Page Section ======= -->
        <section class="data-section blog" style="margin:0px; padding:0px;">
            <div style="display: flex; padding:3px;">

                <!--<div class="data-list-left-panel">-->
                    <!--<div v-for="(item) in getDbTables" >-->
                       <!--<div>{{item.table_name}}</div>-->
                    <!--</div>-->
                <!--</div>-->

                <div class="data-list-center-panel">
                    <table class="data-table">
                        <tr>
                            <th class="data-table-header"
                                v-for="(item, fname) in tableData[0]">{{fname}}
                            </th>
                        </tr>

                        <tr v-for="(item) in tableData"
                            @click="trRowActive($event)" @dblclick="itemEditOpen(item)"
                            class="data-table-row-tr" style="">
                            <td v-for="(value, fname) in item"
                                class="data-table-col-td" >
                                <input @change="editItem(fname, item)" v-model="item[fname]"
                                       class="data-table-input" type="text"/>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>

        </section>

    </div>
</template>

<script>

    // import LeftPanel from './BaseControlLeftPanel'

    export default {
        name: 'DataList',
        data: () => ({
            itemData : {},
            modalFlag : false,
        }),
        components: {},
        computed: {
            getDbTables() {
                return this.storeGet().getTableList
            },
            getDataList() {
                return this.storeGet().getDataList
            },
        },

        created() {
            this.storeFetch('fetchTableList')
        },
        methods: {

            loadingDataList(tableName) {
                this.tableName = tableName
                this.getTableData(tableName)
            },

            getFirstItemData() {
                const tableName = this.getDbTables
                for (let tabName in this.getDbTables) {
                    this.tableName = tableName
                    this.getTableData(tabName)
                    const elem = this.getElement('#list-menu-item-' + tabName)
                    elem.classList.add('menu-item-active')
                    return true;
                }
            },

            getElement(selector) {
                return document.querySelector(selector)
            },

            trRowActive(event){
                 let parent = event.target.parentNode;
                 let tr = parent.parentNode;
                 this.cssClassListRender('.tr-item-active', 'del_class', 'tr-item-active')
                 tr.classList.add('tr-item-active')
            },

            itemEditOpen(item) {
                this.modalFlag = true;
                this.itemData = item
            },

        },
        mounted() {
            this.getFirstItemData()
        },
    }
</script>

<style scoped>


    .dataItemModalContainter {
        border:1px grey solid;
        position:absolute;
        z-index:999;
        width:550px;
        min-height: 400px;
        background: gainsboro;
        margin: 3px;
        padding:5px;

        box-shadow:
                -15px -15px 2px -5px rgba(160,82,45,.5),
                -15px 15px 2px -5px rgba(0,255,255,.5),
                15px -15px 2px -5px rgba(255,0,0,.5),
                15px 15px 2px -5px rgba(255,255,0,.5);
        /*top:60px;*/
        /*right:3px;*/
    }

    .dataItemModalBox {
        position:relative;
    }

    .dataItemModalTable {

    }

    .dataItemModalTable td{
        padding:0px !important;
        margin:0px !important;
    }

    .dataItemModalTable td div{
        padding:4px !important;
    }

    .data-table-textarea {
        width: 100%;
        height: 30px;
    }


    .data-list-left-panel,
    .data-list-center-panel {
        border: 0px red solid;
        width: 100%;
        padding: 1px;
    }

    .data-list-left-panel {
        width: 20%;
    }

    .data-list-center-panel {

    }

    table {
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 14px;
        border-collapse: collapse;
        text-align: center;
        width: 100%;
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

    .data-table-header {
        color: black
    }

    /*  поля и строки таблицы */
    .data-table-row-tr {
        border: 0px red solid;
    }

    .data-table-col-td {
        margin: 0px;
        padding: 0px !important;
        border: 0px gainsboro solid !important;
    }

    .data-table-input {
        border: 1px gainsboro solid;
        width: 100%;
    }

    .data-table-row-tr:hover .data-table-input {
        background: gainsboro;
        cursor: pointer;
    }

    /* .поля и строки таблицы */

    .menu-item-active {
        background: #b0bed9;
        color: black !important;
    }

    .tr-item-active {
        border-bottom:3px red solid;
        border-left:3px red solid;
        border-right:3px red solid;
    }


    /*@media (min-width: 992px) {*/
    /*.modal .modal-full-height {*/
    /*width: 60%;*/
    /*max-width: 60%;*/
    /*}*/
    /*}*/

    /*@media (max-width: 400px) {*/
    /*.modal .modal-full-height {*/
    /*width: 60%;*/
    /*max-width: 60%;*/
    /*}*/
    /*}*/

    /*@media (min-width: 576px) {*/
    /*.modal-dialog {*/
    /*max-width: 95%;*/
    /*}*/
    /*}*/

</style>
