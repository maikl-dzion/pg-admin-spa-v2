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

    commonActionName : '',
    commonItemName   : '',

  },
  mutations: {

    setPreloader(state, newState) {
       // state.preloader = !state.preloader
       state.preloader = newState
    },

    setCommonActionName(state, value) {
       state.commonActionName = value
    },

    setCommonItemName(state, value) {
       state.commonItemName = value
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
      const name  = data.name
      state[name] = value
    },

  },
  actions: {

    changePreloader(context, newState = null) {
       context.commit('setPreloader', newState)
    },

    setCurrentTable(context, table) {
      context.commit('setCurrentTable', table)
    },

    setCommonActionName(context, value) {
       context.commit('setCommonActionName', value)
    },

    setCommonItemName(context, value) {
       context.commit('setCommonItemName', value)
    },

    fetchItemFor(context, data) {
        const items = data.items;
        const fn    = data.fn;

        let name, value = '';
        if(data.name) name  = data.name;
        if(data.value) value = data.value;

        if(name && value) {
          for (let i in items) {
            let item = items[i];
            if(item[name] != value) continue;
            context.commit(fn, item)
            return item;
          }
        } else {
          for (let i in items) {
            let item = items[i];
            context.commit(fn, item)
            return item;
          }
        }
        return false;
    },

    // Получить все база
    async fetchDbList(context, dbName = null) {
      let url = '/SHOW_DATABASE_LIST'
      let dbList = await http.send(url)
      context.commit('setDbList', dbList)

      if(!dbName)
        return false;

      const data = { items : dbList, fn : 'setDbItemInfo'};

      if(dbName == 'first_load') {
        return context.dispatch('fetchItemFor', data);
      } else {
        data['name']  = 'datname';
        data['value'] = dbName;
        return context.dispatch('fetchItemFor', data);
      }
      return false;
    },

    // Получить информацию о базе
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

    // Получить всех пользователей
    async fetchUserList(context, firstLoad = false) {
      let url = '/getDbUsersList'
      let data = await http.send(url)
      context.commit('setUserList', data)
      if(!firstLoad)
          return false

      const info = { items : data, fn : 'setUserItemInfo'};
      return context.dispatch('fetchItemFor', info);
    },

    // Получить 1 пользователя
    fetchUserItemInfo(context, data) {
        let userList = context.state.userList
        let userName = data.userName;
        for (let i in userList) {
            let item = userList[i];
            if(item.usename != userName) continue;
            context.commit('setUserItemInfo', item)
            return item;
        }
        return false;
    },

    async fetchTableList(context, firstLoad = false) {
      let url = '/GET_TABLE_LIST'
      let data = await http.send(url)
      context.commit('setTableList', data)
      if(!firstLoad)
        return false

      for(let name in data) {
        let item = data[name];
        context.commit('setTableFields', item)
        return { name, item };
      }

      return false;
    },

    async fetchTableFields(context, tableName) {
      const url = '/GET_TABLE_FIELDS/' + tableName
      let data = await http.send(url)
      context.commit('setTableFields', data)
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
    },

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

    getCommonActionName: state => {
      return state.commonActionName;
    },

    getCommonItemName: state => {
      return state.commonItemName;
    },

  }
})
