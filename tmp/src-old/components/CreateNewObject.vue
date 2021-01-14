<template>
    <div style="width:100%;">

        <hr class="delimiter-line" style="margin-top:6px"/>
        <div class="delimiter-title" >Создание базы</div>

        <!-- Создание базы, изменение пароля пользователя  --->
        <div style="display: flex">

            <!-- Добавляем новую базу -->
            <div style="width:500px; background: aliceblue; border:2px gainsboro solid;
                        padding:6px; display: flex">

                <div class="vFieldContainer" style="width:60%; margin:0px 10px 0px 0px;">
                    <input v-model="newDbName" style="outline: none"
                           class="vInputText" type="text" required>
                    <label>Имя базы</label>
                </div>
                <button @click="btnClick('create_db')"
                        style="width:40%;height: 34px; margin:0px; border-radius: 0; "
                        class="btn btn-success btn-sm px-2 waves-effect export-to-snippet">
                        <i class="fa fa-database"></i> &nbsp; Добавить новую базу
                </button>
            </div>

        </div><hr/>
        <!-- / Создание базы, изменение пароля пользователя  --->

        <hr class="delimiter-line" />
        <div class="delimiter-title" >Добавление таблиц</div>

        <!--  Добавление таблиц  -->
        <div>
            <CreateTableSetRow/>
        </div><hr/>
        <!--  / Добавление таблиц -->

        <hr class="delimiter-line" />
        <div class="delimiter-title" >Копирование объектов</div>

        <div style="display: flex">
            <!-- Копирование объектов  --->
            <CopyObject></CopyObject>
            <!-- /Копирование объектов --->
        </div><hr/>

        <hr class="delimiter-line" />
        <div class="delimiter-title" style="width: 350px">Добавление пользователя, новых полей</div>

        <div style="display: flex">

            <!-----  Добавление пользователя ------>
            <CreateUser></CreateUser>
            <!--<div class="create-form-container">-->

                <!--<div class="my-form">-->
                    <!--<div class="my-form__label">Добавить пользователя</div>-->
                    <!--<hr class="my-form__delimiter">-->
                    <!--<div class="my-form__container">-->

                        <!--<div class="my-form__elem-box">-->
                            <!--<input v-model="newUser.name" class="form__inp-text" type="text" required="">-->
                            <!--<label class="form__inp-label">Имя пользователя</label>-->
                        <!--</div>-->

                        <!--<div class="my-form__elem-box">-->
                            <!--<input v-model="newUser.password" class="form__inp-text" type="text" required="">-->
                            <!--<label class="form__inp-label">Пароль</label>-->
                        <!--</div>-->

                        <!--<div class="div-checkbox">-->
                            <!--<input v-model="newUser.superUser" type="checkbox" id="super-user-role">-->
                            <!--<label for="super-user-role">-->
                                <!--Права суперпользователя</label>-->
                        <!--</div>-->

                        <!--<div class="my-form__select-box" style="margin-top:10px !important;">-->
                            <!--<label class="select-label"> Выбрать базу</label>-->
                            <!--<select v-model="newUser.dbName" class="custom-select-elem">-->
                                <!--<option v-for="(db) in getDbList" :value="db.datname">-->
                                    <!--{{db.datname}}-->
                                <!--</option>-->
                            <!--</select>-->
                        <!--</div>-->

                    <!--</div>-->

                    <!--<hr class="my-form__delimiter">-->
                    <!--<div class="my-form__btn-box">-->
                        <!--<a @click="btnClick('create_user')" class="my-form__btn">-->
                            <!--<span></span><span></span><span></span><span></span>-->
                            <!--Сохранить-->
                        <!--</a>-->
                    <!--</div>-->

                <!--</div>-->

            <!--</div>-->
            <!-----  / Добавление пользователя ---->

            <!-----  Добавление новых полей ------->
            <AddNewFields></AddNewFields>
            <!--<div class="create-form-container" style="margin-left:10px">-->
                <!--<div class="my-form">-->
                    <!--<div class="custom-btn-container">-->
                        <!--<button @click="pushFieldToArray(true)" class="custom-btn">-->
                            <!--<i class="fa fa-plus-circle"></i>-->
                        <!--</button>-->
                    <!--</div>-->
                    <!--<div class="my-form__label">Добавить новые поля</div>-->
                    <!--<hr class="my-form__delimiter">-->
                    <!--<div class="my-form__container">-->

                        <!--<div class="my-form__select-box" style="margin-bottom:10px !important;">-->
                            <!--<label class="select-label"> Выбрать таблицу </label>-->
                            <!--<select v-model="selectTableName" class="custom-select-elem">-->
                                <!--<option v-for="(item) in getDbTables"-->
                                        <!--:value="item.table_name">-->
                                    <!--{{item.table_name}}-->
                                <!--</option>-->
                            <!--</select>-->
                        <!--</div>-->

                        <!--<div v-for="(field) in newFieldsListSecond"-->
                             <!--class="my-form__flex-box">-->
                            <!--<div class="my-form__elem-box">-->
                                <!--<input v-model="field.name" class="form__inp-text" type="text" required="">-->
                                <!--<label class="form__inp-label">Имя поля</label>-->
                            <!--</div>-->
                            <!--<div class="margin-box"></div>-->
                            <!--<div class="my-form__select-box-flex" style="width: 45%">-->
                                <!--<label class="select-label">Тип поля</label>-->
                                <!--<select v-model="field.type" class="custom-select-elem">-->
                                    <!--<option v-for="(item) in tableFieldTypes"-->
                                            <!--:value="item.name">-->
                                        <!--{{item.name}}-->
                                    <!--</option>-->
                                <!--</select>-->
                            <!--</div>-->
                        <!--</div>-->

                    <!--</div>-->

                    <!--<br/><br/>-->
                    <!--<hr class="my-form__delimiter">-->
                    <!--<div class="my-form__btn-box">-->
                        <!--<a @click="btnClick('create_fields')" class="my-form__btn">-->
                            <!--<span></span><span></span><span></span><span></span>-->
                            <!--Сохранить-->
                        <!--</a>-->
                    <!--</div>-->

                <!--</div>-->
            <!--</div>-->
            <!------ / Добавление новых полей ----->

        </div><hr/>

    </div>
</template>

<script>

    //import DelegateUserRole from '@/components/db-control/DelegateUserRole'
    import CopyObject from '@/components/db-control/CopyDbObject'
    import CreateTableSet from '@/components/db-control/CreateTableSet'
    import CreateTableSetRow from '@/components/db-control/CreateTableSetRow'
    import CreateUser from '@/components/db-control/CreateUser'
    import AddNewFields from '@/components/db-control/AddNewTableFields'

    export default {
        name: 'CreateNewObjects',
        created() {
            this.pushFieldToArray(true)
            this.pushTableToArray()
        },

        data: () => ({
            // selectTableName: '',
            //selectedUserName: '',
            //newPassword: '',
        }),

        components: {
            // DelegateUserRole,
            CopyObject,
            CreateTableSet,
            CreateTableSetRow,
            CreateUser,
            AddNewFields,
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

        methods: {
            btnClick(action) {
                switch (action) {

                    case 'copy_db'       :
                        this.copyDb();
                        break
                    case 'copy_table'    :
                        this.copyTable();
                        break
                    case 'create_db'     :
                        this.addNewDb();
                        break
                    case 'create_user'   :
                        this.createDbUser();
                        break
                    //------------------
                    case 'create_fields' :
                        this.addNewFieldsForeach(this.newFieldsListSecond,
                            this.selectTableName)
                        break
                    //------------------
                    case 'change_user_password' :
                        this.changeUserPassword(this.selectedUserName, this.newPassword)
                            .then(resp => {
                                this.alertShow('Пароль пользователя изменен');
                            })
                        break
                    //-----------------
                    case 'create_table_list' :
                        let table = {}
                        for (let i in this.createTableList) {
                            table = this.createTableList[i]
                            this.createTableListFn(table.name, table.idName)
                        }
                        break
                }

                const param = {action}
                this.$emit('btn_click', param)
            },

        }
    }
</script>

<style scoped>

    select, input {
        cursor: pointer;
    }

    .delimiter-line {
        margin-top:25px;
        border: 1px red solid;
    }

    .delimiter-title {
        margin: -30px 0px 5px 40px;
        background: white;
        width: 220px;
        text-align: center;
        font-style: italic;
    }

    .create-form-container {
        margin: 0px;
        width: 350px;
        border: 2px lightslategrey solid;
        padding: 4px;
        -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
        -moz-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
        box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
    }

    .custom-select {
        margin-top: 44px;
        border-radius: 0px;
        background: royalblue;
        color: white;
        cursor: pointer;
    }

</style>
