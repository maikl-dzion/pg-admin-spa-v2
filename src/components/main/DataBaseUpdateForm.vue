<template>
  <div class="">

    <div class="row">
      <div class="col-lg-12 col-md-8">

        <div class="card"><div class="card-body" >
              <div v-if="db_name">
                  <span style="font-style: italic;">Выбранная база : </span>
                  <span style="color:green;margin-left:10px;" >{{db_name}}</span>
              </div>

              <div v-if="datacl" style="margin-left: 0px;">
                  <span style="font-style: italic;">Пользователи базы : </span>
                  <span style="color:green;margin-left:10px;" >{{datacl}}</span>
              </div>
        </div></div>

      </div>
    </div>


    <div class="row" >

        <!--- Центральный Контент Блок -->
        <div class="col-lg-6 col-md-8">

          <div class="card"><div class="card-body">

            <!------  Создать новую базу  --->
            <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder;  margin-top:10px;">Создать новую базу</h6>
            <div class="input-group">
                <input v-model="newDbName" type="text" class="form-control" placeholder="Имя новой базы" >
                <div class="input-group-append">
                    <button @click="addNewDb()" class="btn btn-outline-secondary" type="button" style="border-radius: 0px">Создать базу</button>
                </div>
            </div>
            <!------ / Создать новую базу --->

            <template v-if="db_name" >
                <!----- Скопировать базу --->
                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;">Копировать базу</h6>
                <div class="input-group">
                  <input v-model="newCopyDbName" type="text" class="form-control" placeholder="Задать имя копии базы">
                  <div class="input-group-append">
                    <button @click="copyDb(db_name, newCopyDbName)"
                            class="btn btn-outline-secondary" type="button" style="border-radius: 0px">Создать копию</button>
                  </div>
                </div>
                <!---- / Скопировать базу --->

                <!----- Удалить  базу --->
                <template v-if="!checkSystemName(db_name)" >
                  <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;">Удалить базу </h6>
                  <div class="input-group">
                    <input v-model="db_name" type="text" class="form-control" disabled>
                    <div class="input-group-append">
                      <button @click="deleteDb(db_name)" class="btn btn-outline-danger" type="button" style="border-radius: 0px">Удалить базу</button>
                    </div>
                  </div>
                </template>
                <!---- / Удалить  базу  --->
            </template>

          </div></div>

          <!----- ПРОСМОТР ПОЛЕЙ БАЗЫ    ------->
          <div v-if="db_name" class="card" style="margin-top:20px;" ><div class="card-body" >
              <ShowItemInfo
                  title="Информация о базе"
                  :item_info="getDbItemInfo"
              ></ShowItemInfo>
          </div></div>

        </div><!--- ./col-lg-6 --->

        <!-------------------------->
        <!--- Правый Контент Блок -->
        <div class="col-lg-6 col-md-4" >

              <!----- Задать права пользователю --->
              <div v-if="db_name" class="card"><div class="card-body">
                    <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;">Задать права пользователю </h6>
                    <div class="input-group">
                         <table style="background: none">
                           <tr> <td>База</td> <td>Пользователь</td> </tr>
                           <tr> <td style="width:40%; padding:0px; margin:0px;">
                                  <input v-model="db_name" type="text" class="form-control" disabled style="width: 100%" >
                                </td>
                                <td>
                                   <select v-model="userName" style="cursor: pointer;"
                                           class="form-control form-control-line pl-0" >
                                           <option v-for="(user, i) in getUserList"
                                                   :key="user.usename"
                                                   :value="user.usename" >{{ user.usename }}
                                           </option>
                                   </select>
                                </td>
                           </tr>
                         </table>
                    </div>

                    <div style="text-align: right">
                      <div class="btn-group" role="group" style="margin:5px 0px 0px 0px; width: 60%">
                          <button @click="changeUserRole(db_name, userName, 'set')" type="button"
                                  class="btn btn-success" style="border-radius: 0px; color:white" >Установить права</button>
                          <button @click="changeUserRole(db_name, userName, 'delete')" type="button"
                                  class="btn btn-danger" style="border-radius: 0px; margin-left:2px;" >Удалить права</button>
                      </div>
                    </div>

              </div></div>
              <!---- / Задать права пользователю   --->

              <div class="card"><div class="card-body">

                  <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;">Прикрепленные к базе пользователи</h6>
                  <div v-for="(item, i) in attachedUsers" :key="item.name">
                       <template v-if="i == 0">
                          <div >{{item.name}} <span style="color:green">(admin</span>)</div>
                       </template>
                       <template v-else >
                          <div >{{item.name}}</div>
                       </template>
                  </div>

                  <hr>

                  <button @click="showToggleJson = !showToggleJson" type="button" class="btn btn-info" style="border-radius: 0px; margin:4px 20px 4px 4px;"> Показать Json</button>
                  <div><pre v-if="showToggleJson" >{{ getDbItemInfo }}</pre></div>
              </div></div>

        </div> <!--- ./col-lg-4 --->

    </div>


  </div>
</template>

<script>

import { mapGetters, mapActions} from 'vuex';
import ShowItemInfo from "@/components/main/ShowItemInfo";

export default {
  name: "DataBaseUpdateForm",
  props: ['db_name'],
  data: () => ({
      showToggleJson  : false,
      newCopyDbName   : '',
      newRenameDbName : '',
      userName        :  '',
      // attachedUsers : [],
  }),

  components : {
     ShowItemInfo,
  },

  computed: {
     ...mapGetters([
          'getDbList',
          'getUserList',
          'getDbItemInfo'
     ]),

     datacl() {
       return this.getDbItemInfo.datacl;
     },

     attachedUsers() {
        return this.getAttachedDbUsers();
     },

  },

  methods: {
    ...mapActions([
      'fetchDbList',
      'fetchUserList',
      'changePreloader',
    ]),

    changeUserRole(dbName, userName, action = 'set') {
        switch (action) {
          case 'set'    : this.setUserPrivileges(userName, dbName, this.saveResponseHandle); break;
          case 'delete' : this.delUserPrivileges(userName, dbName, this.saveResponseHandle); break;
        }
    },

    saveResponseHandle(resp) {
       this.fetchDbList(resp.dbName);
    },

    getAttachedDbUsers() {

         let datacl = this.datacl;
         let items = [];
         for(let i in this.getUserList) {
            let user = this.getUserList[i];
            let name = user.usename;
            let num = datacl.indexOf(name);
            if(num !== -1) {
               items.push({name, num});
            }
         }

         items.sort((a, b) => {
             return a.num - b.num;
         })

         return items;
    },

  } // methods
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
