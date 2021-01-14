import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

class HttpService {

  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  async send(url, method = 'get', data = null) {

      const apiUrl = this.apiUrl + url

      // this.$store.state.preloader = true;
      let response = await fetch(apiUrl)
      // this.$store.state.preloader = false;

      if (response.ok) {
        const result = await response.json()
        return result.data
      }

      alert('Ошибка HTTP: ' + response.status)
  }

}

const http = new HttpService(apiUrl);

export default new Vuex.Store({
  state: {

    preloader : false,

    tableName : '',
    dbName    : '',
    userName  : '',

    currentUser: '',
    currentDb: '',
    currentTable: '',
    currentConfig: {},

    dababaseList: [],
    userList    : [],
    tableList   : [],
    dbRoles     : [],
    tableData   : [],
    tableFields : {},

    dbItemInfo : [],
    userItemInfo : [],
    roleItemInfo : [],
  },
  mutations: {

    setPreloader(state, newState) {
       // state.preloader = !state.preloader
       state.preloader = newState
    },

    setDbList(state, data) {
      state.dababaseList = data
    },
    setDbItemInfo(state, data) {
      state.dbItemInfo = data
    },

    setUserList(state, data) {
      state.userList = data
    },
    setUserItemInfo(state, data) {
      state.userItemInfo = data
    },

    setTableList(state, data) {
      state.tableList = data
    },

    setDbRoles(state, data) {
      state.dbRoles = data
    },
    setRoleItemInfo(state, data) {
      state.roleItemInfo = data
    },

    setTableData(state, data) {
      state.tableData = data
    },
    setTableFields(state, data) {
      state.tableFields = data
    },
    setCurrentTable(state, table) {
      state.currentTable = table
    },
    setParam(state, data) {
      const value = data.value
      const name = data.name
      state[name] = value
    }
  },
  actions: {

    changePreloader(context, newState = null) {
       context.commit('setPreloader', newState)
    },

    async fetchDbList(context, dbName = null) {
      let url = '/SHOW_DATABASE_LIST'
      let dbList = await http.send(url)
      context.commit('setDbList', dbList)

      if(!dbName)
        return false;

      for (let i in dbList) {
          let dbInfo = dbList[i];
          if(dbInfo.datname != dbName) continue;
          context.commit('setDbItemInfo', dbInfo)
          return dbInfo;
      }
      return false;
    },

    fetchDbItemInfo(context, data) {
      let dbList = data.dbList;
      let dbName = data.dbName;

      for (let i in dbList) {
          let dbInfo = dbList[i];
          if(dbInfo.datname != dbName) continue;
          context.commit('setDbItemInfo', dbInfo)
          return dbInfo;
      }

    },

    setCurrentTable(context, table) {
      context.commit('setCurrentTable', table)
    },

    async fetchUserList(context) {
      let url = '/getDbUsersList'
      let data = await http.send(url)
      context.commit('setUserList', data)
    },

    fetchUserItemInfo(context, data) {
      let userList = context.state.userList
      let userName   = data.userName;

      for (let i in userList) {
        let item = userList[i];
        if(item.usename != userName) continue;
        context.commit('setUserItemInfo', item)
        return item;
      }
      return false;
    },

    async fetchTableList(context) {
      let url = '/GET_TABLE_LIST'
      let data = await http.send(url)
      context.commit('setTableList', data)
    },

    async fetchDbRoles(context) {
      let command = 'SELECT * FROM pg_roles'
      let url = '/EXEC_SQL_COMMAND/' + command + '/query'
      let data = await http.send(url)
      context.commit('setDbRoles', data)
    },

    fetchRoleItemInfo(context, data) {
      let items = context.state.dbRoles;
      let name  = data.roleName;

      for (let i in items) {
        let item = items[i];
        if(item.rolname != name) continue;
        context.commit('setRoleItemInfo', item)
        return item;
      }
      return false;
    },

    async fetchTableData(context, tableName) {
      const url = '/GET_TABLE_DATA/' + tableName
      let data = await http.send(url)
      context.commit('setTableData', data)
    },

    async fetchTableFields(context, tableName) {
      const url = '/GET_TABLE_FIELDS/' + tableName
      let data = await http.send(url)
      context.commit('setTableFields', data)
    },

    setParam(context, data) {
      context.commit('setParam', data)
    },

    async saveAddFields(context, data) {

      let table = data.table;
      let fields = data.fields;
      let resp = [];

      if (!table) {
        alert('Нет имени таблицы');
        return false
      }

      for (let i in fields) {
        let item = fields[i];
        if (!item.name)
          continue;
        let url = '/ADD_FIELD/' + table + '/' + item.name + '/' + item.type;
        let r = await http.send(url)
        resp.push(r);
      }

      let apiUrl = '/GET_TABLE_FIELDS/' + table;
      let items = await http.send(apiUrl)
      context.commit('setTableFields', items);

      return resp;
    }
  },
  getters: {

    getUserList: state => {
      return state.userList
    },

    getUserItemInfo: state => {
      return state.userItemInfo;
    },

    getDbList: state => {
      return state.dababaseList
    },

    getDbItemInfo: state => {
      return state.dbItemInfo;
    },

    getTableList: state => {
      return state.tableList
    },

    getDbRoles: state => {
      return state.dbRoles
    },

    getRoleItemInfo: state => {
      return state.roleItemInfo;
    },

    getDataList: state => {
      return state.tableData
    },

    getTableFields: state => {
      return state.tableFields
    },

    getCurrentTable: state => {
      return state.currentTable;
    },

    getParam: (state, name) => {
      return state[name]
    },
  }
})
