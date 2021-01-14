<template>
    <div class="DbScheme">

        <section class="breadcrumbs">
            <div class="container-fluid">
                <div class="d-flex">
                    <div class="link__div_flex">
                        <div v-for="(title, fname) in panelSettingsMenu" class="link_div"
                             @click="schemeMenuAction(fname, $event, 'link_item_active')">
                            <div class="link_item">{{title}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--<pre>{{tableInfoList}}</pre>-->

        <section class="scheme-section" style="padding:0px; margin:0px">
            <div class="container-fluid" style="padding:0px; margin:0px">
                <div @mousemove="dragMove($event)" class="canvas-container">

                    <template v-if="commonActionName == 'databases'">
                        databases
                    </template>
                    <template v-else-if="commonActionName == 'tables'">

                        <div class="row-1" style="padding:0px; margin:0px;">
                                <div v-for="(item, i) in tableInfoList" class="">

                                    <div class="divItemBox"
                                        @mousedown="dragInit($event, 'divItemBox')"
                                        @mouseup="dragStop($event)"
                                        :id="`move_elem_${item.name}`"
                                        :style="`left: ${item.left}px; top:${item.right}px; z-index: ${zIndex}`">
                                        <div class="item__tableName">
                                            {{item.name}}
                                        </div>
                                        <table class="tableFieldsBox">
                                            <tr v-for="(field, fname) in item.fields">
                                                <td class="tdFieldName">
                                                    <input @change="changeFieldName(fname, field.column_name, item.name)"
                                                            v-model="field.column_name"></td>
                                                <td class="tdFieldType">
                                                    <select v-model="field.input_type"
                                                            @change="changeFieldType(fname, field.input_type, item.name)"
                                                            class="custom-select-elem">
                                                            <option v-for="(item) in tableFieldTypes"
                                                                    :value="item.name">
                                                                    {{item.name}}
                                                            </option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                </div>
                        </div>

                    </template>
                    <template v-else-if="commonActionName == 'users'">
                        users
                    </template>
                    <template v-else-if="commonActionName == 'get_roles'">
                        get_roles
                    </template>
                </div>
                <!--<div class="row">22</div>-->
            </div>
        </section>

    </div>
</template>

<script>

    // import LeftPanel from './BaseControlLeftPanel'
    // import BaseSimpleForm from './BaseControlSimpleForm'
    // import CreateNewObject from './CreateNewObject'
    // import SimpleBlueForm from './SimpleBlueForm'
    // import SimpleButton from './SimpleButton'

    import ScemeMixin from '../plugins/scheme'

    export default {
        name: 'DbScheme',
        mixins: [ScemeMixin],
        data: () => ({}),
        components: {},
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
            this.getCurConfig()      // получаем текущий конфиг
            this.getFileUsersConfig()

            this.storeFetch('fetchDbList')
            this.storeFetch('fetchUserList')
            this.storeFetch('fetchTableList')
            this.storeFetch('fetchDbRoles')

            this.schemeMenuAction('tables')
        },

        methods: {}
    }
</script>

<style>
    .canvas-container {
        background: url('/assets/img/page-grid.jpg') !important;
        background-repeat: repeat !important;
        min-height: 700px !important;
        border: 0px red solid;
    }

    .divItemBox {
        position: absolute;
        border: 2px darkslategrey solid;
        background: ghostwhite;
        width: 270px !important;
        padding: 3px;
        margin: 3px;
        z-index: 1;

        box-shadow:
                -15px -15px 2px -5px rgba(160,82,45,.5),
                -15px 15px 2px -5px rgba(0,255,255,.5),
                15px -15px 2px -5px rgba(255,0,0,.5),
                15px 15px 2px -5px rgba(255,255,0,.5);

        box-shadow:
                inset rgba(0,0,0,.5) -3px -3px 8px,
                inset rgba(255,255,255,.9) 3px 3px 8px,
                rgba(0,0,0,.8) 3px 3px 8px -3px;

        box-shadow: 6px 6px #989898, 12px 12px #6c6666;
    }

    .item__tableName {
        text-align: center;
        cursor: move;
    }

    .tableFieldsBox {
        width: 100%;
    }

    .tableFieldsBox td {
        border: 1px #b0bed9 solid;
        margin: 0px;
        padding: 0px;
    }

    .tdFieldName {

    }

    .tdFieldType {

    }

    .tdFieldName input {
        width: 100%;
        /*outline: none;*/
        border-radius: 0px;
        border: 1px gainsboro solid;
    }

    .tdFieldType {

    }

    /*.item__tableName {*/
    /*text-align: center;*/
    /*}*/

    /*.item__fieldBox {*/
    /*display: flex;*/
    /*}*/

    /*.item__fieldBox .fieldName {*/

    /*}*/

    /*.item__fieldBox .fieldType {*/

    /*}*/

</style>
