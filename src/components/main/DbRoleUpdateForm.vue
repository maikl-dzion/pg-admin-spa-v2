<template>
  <div class="">

    <div class="row">
      <div class="col-lg-12 col-md-8">

        <div class="card"><div class="card-body" >
              <div v-if="role_name">
                  <span style="font-style: italic;">Выбранная роль : </span>
                  <span style="color:green;margin-left:10px;" >{{role_name}}</span>
              </div>

<!--              <div v-if="datacl" style="margin-left: 0px;">-->
<!--                  <span style="font-style: italic;">Пользователи базы : </span>-->
<!--                  <span style="color:green;margin-left:10px;" >{{datacl}}</span>-->
<!--              </div>-->
        </div></div>

<!--        <pre>{{getUserItemInfo}}</pre>-->

      </div>
    </div>


    <div class="row" >

        <!--- Центральный Контент Блок -->
        <div class="col-lg-6 col-md-8">

<!--          <div class="card"><div class="card-body">-->

<!--            &lt;!&ndash;&#45;&#45;&#45;&#45;  Создать нового пользователя  -&ndash;&gt;-->
<!--            <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder;  margin-top:10px;"> Создать нового пользователя </h6>-->
<!--            <div class="row">-->
<!--              <div class="col-md-6"><div class="form-group">-->
<!--                     <input v-model="newUser.name" type="text" class="form-control" placeholder="Имя пользователя">-->
<!--              </div></div>-->
<!--              <div class="col-md-6"><div class="form-group">-->
<!--                     <input v-model="newUser.password" type="text" class="form-control" placeholder="Пароль">-->
<!--              </div></div>-->
<!--            </div>-->

<!--            <div class="row">-->
<!--                <div class="col-md-8"><div style="border:0px red solid">-->
<!--                    <input v-model="newUser.superUser" id="super_user_status" type="checkbox"-->
<!--                           class="material-inputs filled-in chk-col-light-blue"  style="border-radius: 0px;">-->
<!--                    <label for="super_user_status"> Права суперпользователя</label>-->
<!--                </div></div>-->

<!--                <div class="col-md-4"><div style="border:0px red solid; text-align: right">-->
<!--                     <button @click="createDbUser()" class="btn btn-outline-info" type="button" style="border-radius: 0px">Создать пользователя</button>-->
<!--                </div></div>-->
<!--            </div>-->
<!--            &lt;!&ndash;&#45;&#45;&#45;&#45; / Создать нового пользователя -&ndash;&gt;-->

<!--            <template v-if="role_name" >-->


<!--                &lt;!&ndash;-&#45;&#45; Удалить пользователя -&ndash;&gt;-->
<!--                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;"> Изменить пароль пользователя </h6>-->
<!--                <div class="input-group">-->
<!--                  <input v-model="newPassword" type="text" class="form-control" placeholder="Новый пароль">-->
<!--                  <div class="input-group-append">-->
<!--                    <button @click="changePassword(user_name, newPassword)" class="btn btn-outline-info" type="button" style="border-radius: 0px">Изменить пароль</button>-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;&#45;&#45; / Удалить  пользователя  -&ndash;&gt;-->

<!--                &lt;!&ndash;-&#45;&#45; Удалить пользователя -&ndash;&gt;-->
<!--                <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;"> Удалить пользователя </h6>-->
<!--                <div class="input-group">-->
<!--                  <input v-model="user_name" type="text" class="form-control" disabled>-->
<!--                  <div class="input-group-append">-->
<!--                       <button @click="deleteDbUser(user_name)" class="btn btn-outline-danger" type="button" style="border-radius: 0px">Удалить пользователя</button>-->
<!--                  </div>-->
<!--                </div>-->
<!--                &lt;!&ndash;&#45;&#45; / Удалить  пользователя  -&ndash;&gt;-->

<!--            </template>-->

<!--          </div></div>-->

          <!----- ПРОСМОТР ПОЛЕЙ    ------->
          <div v-if="role_name"  class="card"><div class="card-body">
               <ShowItemInfo
                   title="Информация о пользователе"
                   :item_info="getRoleItemInfo"
               ></ShowItemInfo>
          </div></div>

        </div><!--- ./col-lg-6 --->

        <!-------------------------->
        <!--- Правый Контент Блок -->
        <div class="col-lg-6 col-md-4" >

<!--              <div v-if="role_name"  class="card"><div class="card-body">-->

<!--                  &lt;!&ndash;-&#45;&#45; Задать права пользователю -&ndash;&gt;-->
<!--                  <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder; margin-top:30px;">Задать права пользователю </h6>-->
<!--                  <div class="input-group">-->
<!--                       <table style="background: none">-->
<!--                         <tr> <td>Пользователь</td> <td> Список баз</td> </tr>-->
<!--                         <tr> <td style="width:40%; padding:0px; margin:0px;">-->
<!--                                <input v-model="user_name" type="text" class="form-control" disabled style="width: 100%" >-->
<!--                              </td>-->
<!--                              <td>-->
<!--                                 <select v-model="selectedDbName" style="cursor: pointer;"-->
<!--                                         class="form-control form-control-line pl-0" >-->
<!--                                         <option v-for="(item, i) in getDbList"-->
<!--                                                 :key="item.datname"-->
<!--                                                 :value="item.datname" >{{ item.datname }}-->
<!--                                         </option>-->
<!--                                 </select>-->
<!--                              </td>-->
<!--                         </tr>-->
<!--                       </table>-->
<!--                  </div>-->

<!--                  <div style="text-align: right">-->
<!--                    <div class="btn-group" role="group" style="margin:5px 0px 0px 0px; width: 60%">-->
<!--                        <button @click="changeUserRole(selectedDbName, user_name, 'set')" type="button"-->
<!--                                class="btn btn-success" style="border-radius: 0px; color:white" >Установить права</button>-->
<!--                        <button @click="changeUserRole(selectedDbName, user_name, 'delete')" type="button"-->
<!--                                class="btn btn-danger" style="border-radius: 0px; margin-left:2px;" >Удалить права</button>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  &lt;!&ndash;&#45;&#45; / Задать права пользователю   -&ndash;&gt;-->


<!--                  <h6 class="card-title my-custom-card-title" style="font-size: 15px; font-weight: bolder">Права суперпользователя</h6>-->
<!--                  <div style="text-align: right">-->

<!--                      <input v-model="user_name" type="text" class="form-control" disabled style="width: 50%" >-->

<!--                      <div class="btn-group" role="group" style="margin:5px 0px 0px 0px; width: 100%">-->

<!--                          <button @click="setUserSuperStatus(user_name)" type="button"-->
<!--                                  class="btn btn-success" style="border-radius: 0px; color:white" >Установить права суперпользователя</button>-->
<!--                          <button @click="delUserSuperStatus(user_name)" type="button"-->
<!--                                  class="btn btn-danger" style="border-radius: 0px; margin-left:2px;" >Удалить права суперпользователя</button>-->
<!--                      </div>-->
<!--                  </div>-->

<!--              </div></div>-->

              <div class="card"><div class="card-body">
                  <button @click="showToggleJson = !showToggleJson" type="button" class="btn btn-info" style="border-radius: 0px; margin:4px 20px 4px 4px;"> Показать Json</button>
                  <div><pre v-if="showToggleJson" >{{ getRoleItemInfo }}</pre></div>
              </div></div>

        </div> <!--- ./col-lg-4 --->

    </div>


  </div>
</template>

<script>

import { mapGetters, mapActions} from 'vuex';
import ShowItemInfo from "@/components/main/ShowItemInfo";

export default {
  name: "DbRoleUpdateForm",
  props: ['role_name'],
  components : {
    ShowItemInfo,
  },
  data: () => ({

      showToggleJson : false,
      newPassword    : '',
      selectedDbName : '',

  }),

  computed: {

     ...mapGetters([
          'getDbList',
          'getUserList',
          'getRoleItemInfo'
     ]),

  },


  methods: {

    ...mapActions([
      'fetchDbList',
      'fetchUserList',
      'fetchUserItemInfo'
    ]),

    changePassword(userName, newPassword) {
       this.changeUserPassword(userName, newPassword).then(resp => {
            this.alertShow('Пароль пользователя изменен');
       });
    },

    changeUserRole(dbName, userName, action = 'set') {
        switch (action) {
          case 'set'    : this.setUserPrivileges(userName, dbName, this.saveResponseHandle); break;
          case 'delete' : this.delUserPrivileges(userName, dbName, this.saveResponseHandle); break;
        }
    },

    saveResponseHandle(resp) {
       this.fetchDbList(resp.dbName);
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
