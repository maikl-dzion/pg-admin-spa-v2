<template>
  <div class="row" style="">

    <div class="col-lg-6 col-md-8">

      <div class="card"><div class="card-body">

          <button @click="setDefaultConfig()"
                  style="border-radius: 0; "
                  class="btn btn-outline-info">
                  Установить конфигурацию по умолчанию
          </button>

      </div></div>

      <div class="card"><div class="card-body">
        <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder">Настройки базы</h6>
        <table class="tablesaw no-wrap table-bordered table-hover table tablesaw-swipe item-info-table" >
          <thead>
               <tr><th class="border" >Имя поля</th><th class="border" >Значение</th></tr>
          </thead>
          <tbody>
              <tr v-for="(param, fname) in dbConf" :key="fname">
                  <td class="title tablesaw-swipe-cellhidden tablesaw-swipe-cellpersist" style="width: 25%; padding:4px;">{{fname}}</td>
                  <td class="" :title="value"><input v-model="dbConf[fname]" type="text" ></td>
              </tr>
          </tbody>
        </table>

        <div style="display: flex">
            <div style="width: 50%; margin-right: 4px;">
                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder">Выбрать пользователя</h6>
                <select
                    v-model="dbConf['user']" class="form-control" style="cursor:pointer;"
                    @change="selectUserPassword(dbConf['user'], getUserList)">
                    <option
                        v-for="(item) in getUserList"
                        :value="item.usename">{{ item.usename }}
                    </option>
                </select>
            </div>

            <div style="width: 50%; margin-left: 4px;">
                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder">Выбрать базу</h6>
                <select
                    style="cursor:pointer;"
                    v-model="dbConf['dbname']" class="form-control">
                    <option v-for="(item) in getDbList"
                            :value="item.datname">{{ item.datname }}
                    </option>
                </select>
            </div>
        </div>

        <div >
          <button  @click="saveConfig()"
                   type="button" class="btn btn-info" style="border-radius: 0px; margin:10px 4px 4px 0px;"> Сохранить конфиг </button>
        </div>

      </div></div>

    </div> <!-- col-lg-6 -->

    <div class="col-lg-6 col-md-8">

      <div class="card">
        <div class="card-body">
          <pre>{{ dbConf }}</pre>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "UpdateDbConfig",

  computed: {

    getDbList() {
      return this.$store.getters.getDbList;
    },

    getUserList() {
        // let users     = this.storeGet().getUserList
        let users     = this.$store.getters.getUserList
        let fileUsers = this.fileUsersConfig
        return this.combineUsersConfig(fileUsers, users)
    },

  },

  created() {

    this.getCurrentDbUser() // currentDbUser
    this.getCurrentDatabase() // currentDatabase
    this.getCurConfig()     // получаем текущий конфиг
    this.getFileUsersConfig()
    this.getUsersConfigFromFile();

    // this.storeFetch('fetchDbList')
    // this.storeFetch('fetchUserList')
    // this.storeFetch('fetchTableList')
    // this.storeFetch('fetchDbRoles')
  },
  methods: {

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

.item-info-table td {
  margin: 0px;
  padding: 0px;
}

.item-info-table td input {
  width: 100%; height: 32px;
  padding-left:6px;
  border: 0px gainsboro solid;
}


</style>
