<template><div class="baseControlPage" >

    <!-- ======= Base Control Section ======= -->
    <section class="breadcrumbs">
        <div class="container-fluid">
            <div class="d-flex justify-content-between align-items-center">
                <!--<h2>Blog</h2>-->
                <!---- Верхнее меню      ---->

                <div class="link__div_flex">
                    <div v-for="(title, fname) in panelSettingsMenu"
                         @click="commonAction(fname, $event, 'link_item_active')" class="link_div">
                        <div class="link_item">{{title}}</div>
                    </div>
                </div>

                <!--<button type="button" class="btn btn-mdb-color waves-effect btn-sm"-->
                        <!--style="margin: 0px 0px 0px auto; color:white;"-->
                        <!--data-toggle="modal" data-target="#fullHeightModalRight">-->
                        <!--Создание объектов-->
                <!--</button>-->

            </div>
        </div>
    </section><!-- End Blog Section -->

    <!--<pre>{{showDbList}}</pre>-->

    <!--<CustomSelect-->
        <!--style="width:240px; padding:4px;"-->
        <!--title="Выбрать пользователя"-->
        <!--name="userId"-->
        <!--label="userName"-->
        <!--:selected_value="39"-->
        <!--:items="[-->
           <!--{ userId : 34, userName : 'Игнатов'},-->
           <!--{ userId : 39, userName : 'Силантьев'},-->
           <!--{ userId : 55, userName : 'Григорин'},-->
        <!--]"-->
        <!--@select_item="r => t1 = r.value"-->
    <!--&gt;</CustomSelect>-->

    <!-- ======= Page Section ======= -->
    <section class="blog" style="margin:0px; padding:0px;">
        <div class="container-fluid" style="margin:0px; padding:0px;" >
            <div class="row-flex" >

                <!--- Left Panel --->
                <div class="leftPanel"><div class="sidebar-left">

                    <div class="content__left_panel">
                        <div class="content__panel_header">
                            {{commonActionName}}
                        </div>
                        <hr>
                        <template v-if="commonActionName == 'databases'">
                            <left-panel
                                    :items="getDbList"
                                    @delete_item="deleteDb"
                                    @select_item="commonForm"
                                    title="datname"
                                    icon="fas fa-database"
                                    :action="commonActionName"
                            ></left-panel>
                        </template>
                        <template v-else-if="commonActionName == 'tables'">
                            <left-panel
                                    :items="getDbTables"
                                    @delete_item="commonDeleteTable"
                                    @select_item="commonForm"
                                    title="table_name"
                                    icon="far fa-credit-card"
                                    :action="commonActionName"
                            ></left-panel>
                        </template>
                        <template v-else-if="commonActionName == 'users'">
                            <left-panel
                                    :items="getUserList"
                                    @delete_item="deleteDbUser"
                                    @select_item="commonForm"
                                    title="usename"
                                    icon="fas fa-address-card"
                                    :action="commonActionName"
                            ></left-panel>
                        </template>
                        <template v-else-if="commonActionName == 'get_roles'">
                            <left-panel
                                    :items="getDbRoles"
                                    @select_item="commonForm"
                                    title="rolname"
                                    icon="fas fa-address-card"
                                    :action="commonActionName"
                            ></left-panel>
                        </template>

                    </div>

                    <!--<div class="sidebar-item categories">-->
                        <!--<ul>-->
                            <!--<li><a href="#">General <span>(25)</span></a></li>-->
                            <!--<li><a href="#">Lifestyle <span>(12)</span></a></li>-->
                        <!--</ul>-->
                    <!--</div>-->

                </div></div>
                <!-- End leftPanel -->

                <!--<SimpleBlueForm></SimpleBlueForm>-->
                <!--<SimpleButton></SimpleButton>-->

                <div class="centerPanel mainContent" >
                    <div class="content__main_panel"  >

                        <div class="content__panel_header">

                            <button @click="createObjPanelOpen=!createObjPanelOpen"
                                    class="btn btn-mdb-color waves-effect btn-sm"
                                    style="margin: 0px 0px 0px auto; color:white; border-radius: 0px;">
                                    Панель создание объектов
                            </button>

                        </div><hr>

                        <!--<SimpleButton></SimpleButton>-->
                        <!--<SimpleForm></SimpleForm>-->

                        <template v-if="createObjPanelOpen" >
                            <CreateNewObject
                               @btn_click="getActionResponse"
                            ></CreateNewObject>
                        </template>
                        <template v-else >

                            <template v-if="commonActionName == 'tables'" >

                                <!--<pre>{{commonItem}}</pre>-->
                                <!--<button @click="g()">dfdggdg</button>-->

                                <table class="table_col">
                                    <colgroup>
                                        <col style="background:#C7DAF0;">
                                    </colgroup>
                                    <!--<tr>-->
                                        <!--<th>Имя поля</th>-->
                                        <!--<th>Значение</th>-->
                                    <!--</tr>-->
                                    <tr v-for="(item, fname) in commonItem" :key="fname" >

                                        <td class="td-field-input" style="width: 20% !important;" >
                                            <div style="">{{fname}}</div>
                                        </td>

                                        <template v-if="!isAutoField(item)">

                                            <td class="td-field-input"
                                                style="width: 50% !important;"><div>
                                                <input @change="changeFieldName(fname, commonItem[fname]['column_name'])"
                                                       v-model="commonItem[fname]['column_name']"
                                                       class="input-text-class" type="text"/>
                                            </div></td>

                                            <td class="td-field-input"
                                                style="width: 20% !important; border-bottom:0px" ><div>
                                                <select v-model="commonItem[fname]['input_type']"
                                                        @change="changeFieldType(fname, commonItem[fname]['input_type'])"
                                                        class="form-control" >
                                                        <option v-for="(item, i) in tableFieldTypes"
                                                                :value="item.name" >
                                                                {{item.name}}
                                                        </option>
                                                </select>
                                            </div></td>

                                            <td class="td-field-input"
                                                style="width: 10% !important; border-bottom:0px; " >
                                                <div @click="commonDeleteField(fname)" class="deleteFieldBox">
                                                    <i class="far fa-trash-alt" style="color:red;"></i>
                                                </div></td>

                                        </template>
                                        <template v-else >
                                            <td class="td-field-input"><div>
                                                    <input :value="fname" type="text" style="width:100%;"
                                                           class="input-text-class" disabled="true" />
                                            </div></td>
                                            <td class="td-field-input" style="border-bottom:0px" >
                                                <div></div>
                                            </td>
                                            <td class="td-field-input" style="border-bottom:0px" >
                                                <div></div>
                                            </td>
                                        </template>

                                    </tr>
                                </table>

                            </template>
                            <template v-else-if="commonActionName == 'databases'">
                                <BaseSimpleForm
                                        :item="commonItem"
                                        name="datname"
                                        :fields="['datname']"
                                        @input_item="inputFormItem"
                                ></BaseSimpleForm>
                            </template>
                            <template v-else-if="commonActionName == 'users'">
                                <BaseSimpleForm
                                        :item="commonItem"
                                        name="usename"
                                        :fields="['usename', 'passwd']"
                                        @input_item="inputFormItem"
                                ></BaseSimpleForm>
                            </template>
                            <template v-else-if="commonActionName == 'get_roles'">
                                <BaseSimpleForm
                                        :item="commonItem"
                                        name="rolname"
                                        :fields="['rolname', 'rolpassword']"
                                        @input_item="inputFormItem"
                                ></BaseSimpleForm>
                            </template>

                        </template>

                        <!--<pre>{{commonItem}}</pre>-->

                    </div>
                </div>
                <!-- End blog -->

            </div><!-- End .row -->
        </div><!-- End .container -->
    </section><!-- End Blog Section -->

</div></template>

<script>

import LeftPanel from '@/components/main/LeftSideBar'
import BaseSimpleForm from '@/components/BaseControlSimpleForm'
import CreateNewObject from '@/components/CreateNewObject'
import SimpleBlueForm from '@/components/SimpleBlueForm'
import SimpleButton from '@/components/SimpleButton'

export default {
  name: 'BaseControl',
  data: () => ({ t1 : ''}),
  components: {
    LeftPanel,
    BaseSimpleForm,
    CreateNewObject,
    SimpleBlueForm,
    SimpleButton
  },

  computed: {

    getDbList () {
      return this.storeGet().getDbList
    },

    getUserList () {
      return this.storeGet().getUserList
    },

    getDbTables () {
      return this.storeGet().getTableList
    },

    getDbRoles () {
      return this.storeGet().getDbRoles
    }

  },

  created () {

    this.getCurrentDbUser() // currentDbUser
    this.getCurrentDatabase() // currentDatabase
    this.getCurConfig() // получаем текущий конфиг
    this.getFileUsersConfig()

    // this.showDatabaseList() // databaseList
    // this.getDbUsersList() // usersList
    // this.getTableList() // получаем таблицы

    // this.fetchDbList()
    // this.fetchUserList()
    // this.fetchTableList()
    // this.fetchDbRoles()

    this.storeFetch('fetchDbList')
    this.storeFetch('fetchUserList')
    this.storeFetch('fetchTableList')
    this.storeFetch('fetchDbRoles')
  },

  methods: {
    selectItemTest(data) {
        // lg(data)
    },

    getActionResponse (response) {
      // let action = response.action
      // // debugger;
      // switch (action) {
      //   case 'create_db' :
      //       // this.fetchDbList()
      //       break
      // }
    }

  }
}
</script>

<style >

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

    /*.td-field-input {*/
        /*width: 150px !important;*/
        /*border:1px #b0bed9 solid !important;*/
    /*}*/

    /*.td-field-input select{*/
        /*border-radius: 0px;*/
        /*width:100%;*/
        /*height: 100%;*/
        /*cursor:pointer*/
    /*}*/

    /*.table_col td {*/
        /*border-right: 20px solid white;*/
        /*border-left: 20px solid white;*/
        /*!* color: #8b8e91; *!*/
        /*color: grey !important;*/
        /*border-bottom: 1px grey solid;*/
    /*}*/

    /***********************************/
    /**** Simple Form Table ************/
    .input-text-class {
        width: 100%;
        outline:0px #b0bed9 solid;
        border:0px red solid;
        border-bottom:1px gainsboro solid;
        height: 30px;
    }

    .baseControlPage .table_col {
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 14px;
        width: 80%;
        min-width:400px;
        background: white;
        text-align: left;
        border-collapse: collapse;
        color: #3E4347;
        border: 0px red solid;
    }
    .baseControlPage .table_col th:first-child, .table_col td:first-child {
        color: #F5F6F6;
        border-left: none;
    }
    .baseControlPage .table_col th {
        font-weight: normal;
        border-bottom: 2px solid #b0bed9 ;
        border-right: 20px solid white;
        border-left: 20px solid white;
        padding: 4px;
    }
    .baseControlPage .table_col td {
        border-right: 20px solid white;
        border-left: 20px solid white;
        padding: 4px;
        /*color: #8b8e91;*/
        color: grey !important;
        border-bottom: 1px #0e4377 solid;
    }

    .baseControlPage .table_col input {
        width: 100% !important;
        border: 0px grey solid;
    }

    .baseControlPage .table_col select {
        width: 100%;
        border-radius: 0px;
        cursor:pointer;
    }

    .baseControlPage .deleteFieldBox {
        width: 50px;
        border: 1px gainsboro solid;
        margin:2px;
        cursor:pointer;
        text-align:center
    }

    .baseControlPage .td-field-input div {
        width: 100% !important;
    }

    .baseControlPage .td-field-input {
        border: 0px blue solid;
    }
    /*****End Simple Form Tbale *******/

</style>
