<template>
  <div @mousemove="dragMove($event)" class="page-wrapper dataListPage"
       style="display: block; border:0px red solid; margin:2px;">

    <!---   Верхнее меню  --->
    <div class="page-breadcrumb" style="padding: 7px 7px 0px 7px; margin:0px;">
      <div class="row align-items-center">
        <div class="col-md-6 col-8 align-self-center">
          <div class="d-flex align-items-center">
            <nav>
              <ul class="main-nav-ul" style="display: flex !important;">

                <li v-for="(item) in getDbTables" :key="item.table_name"
                    @click="loadingDataList(item.table_name),
                               commonAction(item.table_name, $event, 'menu-active')"
                    style="cursor: pointer; font-size: 14px; color: grey;"
                    class="breadcrumb-item main-nav-li-item">{{ item.table_name }}
                </li>

              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!---  /. Верхнее меню  --->
    <!-- setActiveElement ($event, 'menu-item-active') -->

    <!-- =======  PAGE CONTENT ======= -->
    <div class="container-fluid" style="margin:2px; padding:2px;">

      <div style="margin:0px 0px 0px 4px; padding: 0px; display: flex">
        <button @click="beforyAddItem()"
                class="btn btn-outline-info" type="button" style="border-radius: 0px"> Предварительная запись
        </button>
        <button @click="addItem()"
                class="btn btn-outline-info" type="button" style="border-radius: 0px; margin-left: 10px"> Добавить новую
          запись
        </button>
      </div>
      <hr>

      <div style="display: flex; padding:3px;">
        <div class="data-list-center-panel">

          <template v-if="beforyNewItems.length">
            <div class="bw" style="padding:0px;">
              <button @click="saveNewItems()" class="btn btn-outline-info animeCustomBtn" style="border-radius: 0px;">
                Сохранить новые данные
              </button>
            </div>

            <table class="data-table">
              <tr>
                <th class="data-table-header"
                    v-for="(item, fname) in tableInfo"
                    :title="item.data_type">{{ fname }}
                </th>
              </tr>
              <tr v-for="(item, i) in beforyNewItems"
                  class="data-table-row-tr">
                <td v-for="(value, fname) in item" class="data-table-col-td">
                  <input v-model="item[fname]" class="data-table-input" type="text"/>
                </td>
              </tr>
            </table>
            <p/>
          </template>

          <div class="card">
            <div class="card-body" style="overflow: scroll;" >

              <button @click="showVertical = !showVertical"
                      class="btn btn-outline-info" type="button" style="border-radius: 0px; margin-left: 10px"> Изменить
                вид данных
              </button>
              </p>

              <template v-if="showVertical">

                <div v-for="(item, i) in tableData">
                  <table class="tablesaw table-bordered table-hover table no-wrap tablesaw-swipe">
                    <tr v-for="(value, fname) in item">
                      <td style="width:160px;">{{ fname }}</td>
                      <td class="table__td">
                        <input @change="editItem(fname, item)"
                               v-model="item[fname]"
                               class="td__input" type="text"/>
                      </td>
                    </tr>
                  </table>
                </div>

              </template>
              <template v-else>
                <table v-if="tableData.length"
                       class="tablesaw table-bordered table-hover table" style="cursor:pointer;">
                  <thead>

                  <tr> <!---- Заголовок таблицы --->
                    <th>X</th>
                    <th v-for="(item, fname) in tableInfo" scope="col" class="border"
                        :title="item.data_type +'-||-'+ item.column_default">{{ fname }}
                    </th>
                  </tr>
                  </thead>
                  <tbody>

                  <!---- Таблица с данными ---->
                  <tr v-for="(item, i) in tableData"

                      @click="trRowActive($event)"
                      @dblclick="itemEditOpen(item)">

                      <td class="table__td" style="width:10px; text-align: center"><!--- удалить строку в базе --->
                        <div style="width:10px; text-align: center; padding:4px 0px 0px 3px">
                          <i @click="deleteItem(item)" class="mr-2 mdi mdi-delete"
                             style="cursor: pointer; font-size: 18px; color:red;"></i>
                        </div>
                      </td>

                      <template v-for="(value, fname) in item">
                        <td class="table__td">
                          <input @change="editItem(fname, item)"
                                 v-model="item[fname]"
                                 class="td__input" type="text"/>
                        </td>
                      </template>
                  </tr>
                  <!---- ./ ТАБЛИЦА С ДАННЫМИ ---->

                  </tbody>
                </table>
                <div v-else>В таблице нет данных</div>
              </template>

            </div>
          </div> <!--- /.card /.card-body --->


        </div>
      </div>


    </div>
    <!-- =======  /. PAGE CONTENT ======= -->


    <!--- Модальное окно   --->
    <div v-if="modalFlag"
         class="dataItemModalContainter"
         @mousedown="dragInit($event, 'dataItemModalContainter')"
         @mouseup="dragStop($event)"
         id="move_elem_modal_container"
         style="top:60px; left:20px; ">

      <button @click="modalFlag = false" class="btn">Close</button>

      <div class="dataItemModalBox" style="overflow: auto">
        <table class="dataItemModalTable">
          <tr>
            <th>Имя поля</th>
            <th>Значение</th>
          </tr>
          <tr v-for="(value, fname) in itemData">
            <td>
              <div>{{ fname }}</div>
            </td>
            <td>
                        <textarea @change="editItem(fname, itemData)"
                                  v-model="itemData[fname]"
                                  class="data-table-textarea">
                        </textarea>

            </td>
          </tr>
        </table>
      </div>

    </div>
    <!--- / Модальное окно --->

    <!--------- FOOTER   ------->
    <footer class="footer"> © 2021</footer>
    <!-------- End footer ------->

  </div>
</template>

<script>

export default {
  name: 'DataList',

  data: () => ({
    itemData: {},
    modalFlag: false,
    deleteItemsJson: {},
    beforyNewItems: [],
    showVertical: false,
  }),

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
      this.beforyNewItems = []
      this.tableName = tableName
      this.getTableDataList(tableName)
      // this.getTableData(tableName)
    },

    getFirstItemData() {
      const tableName = this.getDbTables
      for (let tabName in this.getDbTables) {
        this.tableName = tableName
        // this.getTableData(tabName)
        this.getTableDataList(tabName)
        const elem = this.getElement('#list-menu-item-' + tabName)
        elem.classList.add('menu-item-active')
        return true;
      }
    },

    getElement(selector) {
      return document.querySelector(selector)
    },

    trRowActive(event) {
      let parent = event.target.parentNode;
      let tr = parent.parentNode;
      this.cssClassListRender('.tr-item-active', 'del_class', 'tr-item-active')
      tr.classList.add('tr-item-active')
    },

    itemEditOpen(item) {
      this.modalFlag = true;
      this.itemData = item
    },

    beforyAddItem() {
        let newItem = {}
        // lg(this.tableInfo)
        for (let fieldName in this.tableInfo) {
          let fdata = this.tableInfo[fieldName];
          newItem[fieldName] = '';
        }
        this.beforyNewItems.push(newItem)
    },

    saveNewItems() {
        const tableName = this.tableName
        for (let i in this.beforyNewItems) {
          let item = this.beforyNewItems[i];
          this.addNewItemFn(tableName, item)
        }
    },

    addNewItemFn(tableName, data) {
        const url = 'ADD_ITEM/' + tableName
        this.http(url, data, 'post').then(resp => {
            this.getTableData(tableName)
        })
    },

    // deleteItemAddToJson (item) {
    //     const idName = this.setAutoIncName()
    //     if (item[idName]) {
    //         const id = item[idName]
    //         this.deleteItemsJson[id];
    //         console.log(this.deleteItemsJson)
    //     }
    // },

  },

  mounted() {
    this.getFirstItemData()
  },
}
</script>

<style scoped>

.dataItemModalContainter {
  border: 1px grey solid;
  position: absolute;
  z-index: 999;
  width: 550px;
  min-height: 400px;
  background: gainsboro;
  margin: 3px;
  padding: 5px;

  box-shadow: -15px -15px 2px -5px rgba(160, 82, 45, .5),
  -15px 15px 2px -5px rgba(0, 255, 255, .5),
  15px -15px 2px -5px rgba(255, 0, 0, .5),
  15px 15px 2px -5px rgba(255, 255, 0, .5);
  /*top:60px;*/
  /*right:3px;*/
}

.dataItemModalBox {
  position: relative;
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

/*table {*/
/*    font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;*/
/*    font-size: 14px;*/
/*    border-collapse: collapse;*/
/*    text-align: center;*/
/*    width: 100%;*/
/*}*/

/*th, td:first-child {*/
/*    background: #AFCDE7;*/
/*    color: white;*/
/*    padding: 10px 20px;*/
/*}*/

/*th, td {*/
/*    border-style: solid;*/
/*    border-width: 0 1px 1px 0;*/
/*    border-color: white;*/
/*}*/

/*td {*/
/*    background: #D8E6F3;*/
/*}*/

/*th:first-child, td:first-child {*/
/*    text-align: left;*/
/*}*/

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

.table__td {
  margin: 0px;
  padding: 0px;
}

.td__input {
  border: 0px #b0bed9 solid;
  width: 100%;
  height: 40px;
  cursor: pointer;
  padding-left: 5px;
}

.td__input:hover {
  background: aliceblue;
}

.td__input:focus {
  background: aliceblue;
}

.tr-item-active {
  border-bottom: 5px #b0bed9 solid;
  border-left: 0px red solid;
  border-right: 0px red solid;
}

.menu-item-active {
  background: #b0bed9;
  color: black !important;
}


</style>
