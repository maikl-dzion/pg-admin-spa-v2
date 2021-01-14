<template>
    <div class="baseControlPage">

        <!----- LEFT SIDE BAR ---------->
        <aside class="left-sidebar" data-sidebarbg="skin6">
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">

                    <template v-if="commonActionName == 'databases'">
                        <left-panel
                                :items="getDbList"
                                @delete_item="deleteDb"
                                @select_item="commonForm"
                                title="datname"
                                icon="mdi-database"
                                :action="commonActionName"
                        ></left-panel>
                    </template>
                    <template v-else-if="commonActionName == 'tables'">
                        <left-panel
                                :items="getDbTables"
                                @delete_item="commonDeleteTable"
                                @select_item="commonForm"
                                title="table_name"
                                icon="mdi-table"
                                :action="commonActionName"
                        ></left-panel>
                    </template>
                    <template v-else-if="commonActionName == 'users'">
                        <left-panel
                                :items="getUserList"
                                @delete_item="deleteDbUser"
                                @select_item="commonForm"
                                title="usename"
                                icon="mdi-account"
                                :action="commonActionName"
                        ></left-panel>
                    </template>
                    <template v-else-if="commonActionName == 'get_roles'">
                        <left-panel
                                :items="getDbRoles"
                                @select_item="commonForm"
                                title="rolname"
                                icon="mdi-account-key"
                                :action="commonActionName"
                        ></left-panel>
                    </template>

                </nav>
                <!-- End Sidebar navigation -->
            </div>

            <!-- End Sidebar scroll-->
            <div class="sidebar-footer">
                <div class="row">
                    <div class="col-4 link-wrap">
                        <a href="" class="link" data-toggle="tooltip" title="" data-original-title="Settings"><i
                                class="ti-settings"></i></a>
                    </div>
                    <div class="col-4 link-wrap">
                        <a href="" class="link" data-toggle="tooltip" title="" data-original-title="Email"><i
                                class="mdi mdi-gmail"></i></a>
                    </div>
                    <div class="col-4 link-wrap">
                        <a href="" class="link" data-toggle="tooltip" title="" data-original-title="Logout"><i
                                class="mdi mdi-power"></i></a>
                    </div>
                </div>
            </div>

        </aside>
        <!----- END / LEFT SIDE BAR ---->

        <!----------------------------->
        <!-- PAGE CONTENT WRAPPER  ---->
        <div class="page-wrapper">

            <div class="page-breadcrumb" style="padding: 7px 7px 0px 7px; margin: 4px 4px 0px 0px;">
                <div class="row align-items-center">

                    <div class="col-md-6 col-8 align-self-center">
                        <div class="d-flex align-items-center">
                            <!--- Меню сущностей --->
                            <nav>
                                <ul class="main-nav-ul" style="display: flex !important;">
                                    <li  v-for="(title, fname) in panelSettingsMenu" :key="fname"
                                         @click="commonAction(fname, $event, 'menu-active')"
                                         style="cursor: pointer; font-size: 14px; font-weight: bold;color: grey;"
                                        class="breadcrumb-item main-nav-li-item" >{{ title }}</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Container fluid  -->
            <div class="container-fluid">


                   <div style=" background: none; position: absolute; width: 99.7%; left: 1px; top: 48px;
                                border-top: 0px gainsboro solid; height: 25px; padding:5px 5px 5px 52px; display: flex">

<!--                        <h6 v-if="commonItemName" class="card-title my-custom-card-title"-->
<!--                           style="font-size: 12px; font-weight: bold; border:0px;">-->
<!--                                {{commonActionName}} <i class="mdi mr-2 mdi-arrow-right"></i><span>{{commonItemName}}</span>-->
<!--                        </h6>-->

                     <div style="margin-right: 10px" >
                       <span class="badge badge-warning" style="font-size: 11px; font-style: italic" >Пользователь:</span>
                       <span class="badge badge-primary" style="font-size: 11px" >{{$store.state.currentUser}}</span>
                     </div>

                     <div style="margin-right: 10px" >
                       <span class="badge badge-warning" style="font-size: 11px; font-style: italic" >База:</span>
                       <span class="badge badge-primary" style="font-size: 11px" >{{$store.state.currentDb}}</span>
                     </div>

                     <div v-if="$store.state.currentTable" style="margin-right: 10px">
                       <span class="badge badge-warning" style="font-size: 11px; font-style: italic" >Таблица:</span>
                       <span class="badge badge-primary" style="font-size: 11px" >{{$store.state.currentTable}}</span>
                     </div>

                     <div v-if="commonActionName" style="margin-right: 10px" >
                       <span class="badge badge-warning" style="font-size: 11px; font-style: italic" >Entity:</span>
                       <span class="badge badge-primary" style="font-size: 11px" >{{commonActionName}}</span>
                     </div>


                   </div>

                    <template v-if="commonActionName == 'tables'">
                        <TableFielsUpdateForm
                                :fields="commonItem"
                                :table_name="tableName"
                        ></TableFielsUpdateForm>
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

            </div> <!--- .container-fluid --->
            <!-- End Container fluid  -->

            <!--------- FOOTER   --------->
            <footer class="footer"> © 2021</footer>
            <!-------- End footer ------->

        </div>
        <!-- End Page wrapper  -->

    </div>
</template>

<script>

    import LeftPanel from '@/components/main/LeftSideBar'
    import BaseSimpleForm from '@/components/BaseControlSimpleForm'
    import CreateNewObject from '../components/CreateNewObject'
    import TableFielsUpdateForm from '@/components/main/TableUpdateForm'
    import ChangeDbConfig from '@/components/db-control/ChangeDbConfig'
    import ContentSection from '@/components/db-control/ContentSection'
    import DelegateUserRole from '@/components/db-control/DelegateUserRole'
    import BlueBtn from '@/components/elements/BlueBtn'
    // import CreateNewObject from '../components/CreateNewObject'

    export default {
        name: 'BaseControl',
        data: () => ({

            selectedUserName: '',
            newPassword     : '',

            mainLeftPanelInfo : {

              databases : {
                items : 'getDbList',
                deleteFn : 'deleteDb',
                selectFn : 'deleteDb',
                title    : 'datname',
                icon     : 'mdi-database',
                action   : 'commonActionName',
              },

              tables : {
                items    : 'getDbTables',
                deleteFn : 'commonDeleteTable',
                selectFn : 'commonForm',
                title    : 'table_name',
                icon     : 'mdi-table',
                action   : 'commonActionName',
              },

              users : {
                items    : 'getUserList',
                deleteFn : 'deleteDbUser',
                selectFn : 'commonForm',
                title    : 'usename',
                icon     : 'mdi-account',
                action   : 'commonActionName',
              },

              get_roles : {
                items    : 'getDbRoles',
                selectFn : 'commonForm',
                title    : 'rolname',
                icon     : 'mdi-account-key',
                action   : 'commonActionName',
              },

            },

        }),

        components: {
            LeftPanel,
            BaseSimpleForm,
            CreateNewObject,
            TableFielsUpdateForm,
            ChangeDbConfig,
            ContentSection,
            DelegateUserRole,
            BlueBtn,
        },

        computed: {

            getDbList() {
                return this.storeGet().getDbList
            },

            getUserList() {
                return this.storeGet().getUserList
            },

            getDbTables() {
                return this.storeGet().getTableList
            },

            getDbRoles() {
                return this.storeGet().getDbRoles
            }
        },

        created() {

            this.getCurrentDbUser() // currentDbUser
            this.getCurrentDatabase() // currentDatabase
            this.getCurConfig() // получаем текущий конфиг
            this.getFileUsersConfig()

            this.storeFetch('fetchDbList')
            this.storeFetch('fetchUserList')
            this.storeFetch('fetchTableList')
            this.storeFetch('fetchDbRoles')
        },

    }
</script>

<style>

    .bw .animeCustomBtn:hover {
        background: ghostwhite;
    }

    .main-nav-li-item {
       padding:2px 5px 2px 5px;
       border-bottom: 2px white solid;
    }

    .main-nav-li-item:hover {
      background: gainsboro;
      color:orange !important;
    }

    .menu-active {
      border-bottom: 2px #1e88e5 solid ;
      color: #1e88e5 !important;
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
        outline: 0px #b0bed9 solid;
        border: 0px red solid;
        border-bottom: 1px gainsboro solid;
        height: 30px;
    }

    .baseControlPage .table_col {
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 14px;
        width: 80%;
        min-width: 400px;
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
        border-bottom: 2px solid #b0bed9;
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
        cursor: pointer;
    }

    .baseControlPage .deleteFieldBox {
        width: 50px;
        border: 1px gainsboro solid;
        margin: 2px;
        cursor: pointer;
        text-align: center
    }

    .baseControlPage .td-field-input div {
        width: 100% !important;
    }

    .baseControlPage .td-field-input {
        border: 0px blue solid;
    }

    /*****End Simple Form Tbale *******/


</style>



