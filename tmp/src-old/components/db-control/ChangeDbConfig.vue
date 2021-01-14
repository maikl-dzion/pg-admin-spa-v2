<template>
    <div style="position: relative; width:100%;">

        <!--<pr>{{dbConf}}</pr>-->
        <table class="db-config-table" >
                <tr v-for="(value, confName) in dbConf" >
                    <td style="width: 100px;">{{confName}}</td>

                    <template v-if="confName == 'user'">
                        <td><select
                                v-model="dbConf[confName]"
                                @change="selectUserPassword(dbConf[confName], getUserList)"
                                class="form-control">
                                <option v-for="(item) in getUserList"
                                        :value="item.usename">{{item.usename}}
                                </option>
                        </select></td>
                    </template>
                    <template v-else-if="confName == 'dbname'">
                        <td><select
                                v-model="dbConf[confName]"
                                class="form-control">
                                <option v-for="(item) in getDbList"
                                        :value="item.datname">{{item.datname}}
                                </option>
                        </select></td>
                    </template>
                    <template v-else >
                        <td><input v-model="dbConf[confName]" type="text" /></td>
                    </template>
                </tr>

                <tr><td colspan="2">
                    <div class="my-form my-form__btn-box">
                        <a @click="saveConfig()" class="my-form__btn" style="width:100%">
                            <span></span><span></span><span></span><span></span>
                            Сохранить конфиг
                        </a>
                    </div>
                </td></tr>

        </table>

    </div>
</template>

<script>
    export default {
        name: "ChangeDbConfig",
        computed: {
            getDbList() {
                return this.storeGet().getDbList
            },

            getUserList() {
                let users = this.storeGet().getUserList
                let fileUsers = this.fileUsersConfig
                return this.combineUsersConfig(fileUsers, users)
            },

            // getDbTables() {
            //     return this.storeGet().getTableList
            // },
            //
            // getDbRoles() {
            //     return this.storeGet().getDbRoles
            // }
        },

        created() {

            this.getCurrentDbUser() // currentDbUser
            this.getCurrentDatabase() // currentDatabase
            this.getCurConfig() // получаем текущий конфиг
            this.getFileUsersConfig()
            this.getUsersConfigFromFile();

            // this.storeFetch('fetchDbList')
            // this.storeFetch('fetchUserList')
            // this.storeFetch('fetchTableList')
            // this.storeFetch('fetchDbRoles')
        },
        methods : {

            async getUsersConfigFromFile() {
                const url = 'GET_FILE_USERS_CONFIG';
                this.fileUsersConfig = await this.http(url);
            },

            combineUsersConfig(fileUsers, users) {
                for (let i in users) {
                    let userName = users[i]['usename']
                    let item = users[i]
                    if (userName in fileUsers) {
                        let us = fileUsers[userName]
                        let passwd = us['passwd']
                        for (var f in us) {
                            item[f] = us[f]
                        }
                        users[i] = item
                    }
                }
                return users
            },
        }
    }
</script>

<style scoped>

    .db-config-table {
        background: ghostwhite;
    }

    .db-config-table td{
        border:1px gainsboro solid;
    }

    .db-config-table td:first-child{
        padding:2px 2px 2px 5px;
    }

    .form-control {
        border-radius: 0px;
        cursor: pointer;
    }

</style>
