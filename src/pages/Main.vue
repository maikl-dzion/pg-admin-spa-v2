<template>
    <div class="baseControlPage1" >

        <!----- LEFT SIDE BAR ---------->
        <aside class="left-sidebar" data-sidebarbg="skin6">
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">

<!--                  <pre>{{mainLeftPanelInfo[commonActionName]}}</pre>-->

<!--                  <template v-if="mainLeftPanelInfo[commonActionName]" >-->
<!--                      <left-panel-->
<!--                          :items="mainLeftPanelInfo[commonActionName].items"-->
<!--                          @delete_item="mainLeftPanelInfo[commonActionName].delete"-->
<!--                          @select_item="mainLeftPanelInfo[commonActionName].select"-->
<!--                          :title="mainLeftPanelInfo[commonActionName].title"-->
<!--                          :icon="mainLeftPanelInfo[commonActionName].icon"-->
<!--                          :action="commonActionName"-->
<!--                      ></left-panel>-->
<!--                  </template>-->


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
        <div class="page-wrapper" style="display: block;" >

            <!---   Верхнее меню  --->
            <div class="page-breadcrumb" style="padding: 0px; margin:0px;">
                    <div style="margin-left:5px; padding:2px; font-style: italic; font-size: 11px" > Главная / {{commonActionName}} / {{commonItemName}}</div>
                    <!-- <div class="row align-items-center"><div class="col-md-6 col-8 align-self-center"><div class="d-flex align-items-center">-->
                    <ul class="main-nav-ul" style="display: flex !important; border-bottom:1px gainsboro solid; margin-top:10px;">

                          <tempate v-for="(title, fname) in panelSettingsMenu"  >
<!--                                        <li v-if="fname == commonActionName" :key="fname"-->
<!--                                             @click="componentMenuActionRun(fname, $event, 'menu-active')"-->
<!--                                             style="cursor: pointer; font-size: 14px; color: grey;"-->
<!--                                             class="breadcrumb-item main-nav-li-item menu-active" >{{ title }}</li>-->

                                <li :key="fname"
                                    @click="componentMenuActionRun(fname, $event, 'menu-active')"
                                    style="cursor: pointer; font-size: 14px; color: grey;"
                                    class="breadcrumb-item main-nav-li-item" >{{ title }}</li>

                          </tempate>

                    </ul>
                    <!--  </div></div></div>-->
            </div>
            <!---  /. Верхнее меню  --->

            <!-- Container fluid  -->
            <div class="container-fluid" style="margin:2px; padding:6px;" >

                    <template v-if="commonActionName == 'tables'">
                        <TableUpdateForm
                                :fields="commonItem"
                                :table_name="tableName"
                        ></TableUpdateForm>
                    </template>
                    <template v-else-if="commonActionName == 'databases'">
                        <DataBaseUpdateForm
                               :db_name = "selectDbName"
                        ></DataBaseUpdateForm>
                    </template>
                    <template v-else-if="commonActionName == 'users'">
                        <DbUserUpdateForm
                            :user_name = "selectUserName"
                        ></DbUserUpdateForm>
                    </template>
                    <template v-else-if="commonActionName == 'get_roles'">
                        <DbRoleUpdateForm
                          :role_name = "selectRole"
                        ></DbRoleUpdateForm>
                    </template>
                    <template v-else-if="commonActionName == 'db_settings'">
                        <DbConfigUpdate ></DbConfigUpdate>
                    </template>
                    <template v-else-if="commonActionName == 'sql_editor'">
                         <SqlEditor ></SqlEditor>
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

    import TableUpdateForm from '@/components/main/TableUpdateForm'
    import DataBaseUpdateForm   from '@/components/main/DataBaseUpdateForm'
    import DbUserUpdateForm    from "@/components/main/DbUserUpdateForm";
    import DbRoleUpdateForm    from "@/components/main/DbRoleUpdateForm";
    import DbConfigUpdate    from "@/components/DbConfigUpdate";
    import SqlEditor from "@/components/SqlEditor"

    export default {
        name: 'Main',
        data: () => ({
            selectUserName    : '',
            newPassword       : '',
            mainLeftPanelInfo : {},
        }),

        components: {
            LeftPanel,
            TableUpdateForm,
            DataBaseUpdateForm,
            DbUserUpdateForm,
            DbRoleUpdateForm,
            DbConfigUpdate,
            SqlEditor,
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

        methods : {
            // createLeftPanelInfo(commonActionName) {
            //
            //     this.mainLeftPanelInfo = {
            //
            //         databases : {
            //             items    : this.getDbList,
            //             delete   : this.deleteDb,
            //             select   : this.commonForm,
            //             title    : 'datname',
            //             icon     : 'mdi-database',
            //             action   : 'databases',
            //         },
            //
            //         tables : {
            //             items    : this.getDbTables,
            //             delete   : this.commonDeleteTable,
            //             select   : this.commonForm,
            //             title    : 'table_name',
            //             icon     : 'mdi-table',
            //             action   : 'tables',
            //         },
            //
            //         users : {
            //             items    : this.getUserList,
            //             delete   : this.deleteDbUser,
            //             select   : this.commonForm,
            //             title    : 'usename',
            //             icon     : 'mdi-account',
            //             action   : 'users',
            //         },
            //
            //         get_roles : {
            //             items    : this.getDbRoles,
            //             delete   : null,
            //             select   : this.commonForm,
            //             title    : 'rolname',
            //             icon     : 'mdi-account-key',
            //             action   : 'get_roles',
            //         },
            //     };
            // },
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
       color:cornflowerblue !important;
    }

    .main-nav-li-item:hover {
      background: lightsteelblue;
      color:white !important;
    }

    .menu-active {
      border-bottom: 2px #1e88e5 solid ;
      color: #1e88e5 !important;
    }


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


</style>



