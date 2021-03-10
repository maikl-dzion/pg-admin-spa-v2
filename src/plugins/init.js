
import AlertMessage from '../components/helpers/AlertMessage'
import Preloader from '@/components/helpers/Preloader'
import WarnMessage from "@/components/helpers/WarnMessage";

// import WarnMessage from '../components/WarnMessage'
// import TabPanel from '@/components/elements/TabPanel'
// import AnimeButton from '@/components/elements/AnimeButton'
// import CustomTable from '@/components/elements/Table'
// import Select from '@/components/elements/Select'
// import Checkbox from '@/components/elements/Checkbox'
// import UiSelect from '@/components/elements/UI-Select'
// import vInputText from '@/components/elements/v-input-text'
// import vSelect from '@/components/elements/v-select'
// import CustomButton from '@/components/elements/CustomButton'

const InitApp = {

    install(Vue, options) {
        Vue.component('AlertMessage', AlertMessage)
        Vue.component('Preloader'   , Preloader)
        Vue.component('WarnMessage' , WarnMessage)

        // Vue.component('WarnMessage', WarnMessage)
        // Vue.component('CustomSelect', Select)
        // Vue.component('CustomTable', CustomTable)

        // Vue.component('TabPanel', TabPanel)
        // Vue.component('AnimeButton', AnimeButton)
        // Vue.component('Checkbox', Checkbox)
        // Vue.component('ui-select', UiSelect)
        // Vue.component('v-input-text', vInputText)
        // Vue.component('v-select', vSelect)
        // Vue.component('CustomButton', CustomButton)

        Vue.mixin({
            // mixins: [Http, BaseMixin, DataFormMixin, DragMixin],
            data: function () {
                var fieldModel = {
                    name: '',
                    type: 'varchar',
                    size: ''
                }

                return {
                    inputHasClass: false,
                    pageName: 'base_control',
                    showPanel: true,
                    panelDbPageShow: true,
                    panelDataPageShow: true,
                    confDbUpdateModalOpen: false,

                    tableName: '',
                    tableListSheme: [],
                    tableList: [],
                    tableInfo: [],
                    tableData: [],
                    newFieldsJson: [],
                    // dbUser : {},

                    newField: fieldModel,
                    newFieldModel: fieldModel,

                    renameName: {
                        oldName: '',
                        newName: ''
                    },

                    newTable: {
                        name: '',
                        idName: 'id'
                    },

                    showModalOne: false,
                    showModalConf: false,
                    addFieldFlag: false,
                    addTableFlag: false,
                    createObjPanelOpen: true,
                    autoIncName: '',
                    rowItem: {},
                    formDialog: false,

                    panelSettingsMenu: {
                        databases: 'Базы данных',
                        tables: 'Таблицы',
                        users: 'Пользователи',
                        get_roles: 'Роли',
                        db_settings: 'Настройки базы',
                        sql_editor : 'Sql-редактор',
                    },

                    sitePagesMenu: {
                        base_control: 'Управление базой',
                        data_control: 'Управление данными',
                        sql_editor: 'SQL-редактор'
                    },

                    sqlCommandListMenu: {
                        select_data: {title: 'Выборка данных', type: 'query'},
                        create_table: {title: 'Создание таблицы', type: 'exec'},
                        create_field: {title: 'Создание поля', type: 'exec'},
                        copy_db: {title: 'Скопировать базу', type: 'exec'}
                    },

                    userPriv: {
                        setName: '',
                        delName: ''
                    },

                    queryResultItems: {},

                    newFieldsList: [],
                    newFieldsListSecond: [],

                    copyDbItem: {
                        dbName: '',
                        newDbName: ''
                    },

                    copyTableItem: {
                        name: '',
                        newName: ''
                    },

                    createTableList: []

                }
            },

            methods: {

                createElemId(name = '') {
                    let num = Math.random() + 'i';
                    let a   = num.split('.')
                    let elemId = name + a[1] +'-'+ a[0]
                    return elemId;
                },

                getRoutesNav() {
                    let routes = [];
                    for (let i in this.$router.options.routes) {
                        let r = this.$router.options.routes[i]
                        let route = {
                            path: r.path,
                            title: r.title,
                            name: r.name,
                        }
                        routes.push(route)
                    }
                    return routes;
                },

                customForIn(items, fn) {
                    let results = [];
                    for (let i in items) {
                        let item = items[i];
                        let r = fn(item);
                        results.push(r);
                    }
                    return results;
                },

                isAutoField(item) {
                    const compare = 'nextval'
                    const column = item.column_default
                    // console.log(column)
                    if (!column) {
                        return false
                    } else {
                        const index = column.indexOf(compare)
                        if (index != -1) {
                            return true
                        }
                    }

                    return false
                },

                rulesDeleteItem(item, actionName) {
                    let name = ''
                    switch (actionName) {
                        case 'databases' :
                            name = item.datname
                            if (name === 'template1' ||
                                name === 'template0' ||
                                name === 'maikldb' ||
                                name === 'postgres') {
                                return false
                            }
                        case 'users' :
                            name = item.usename
                            if (name === 'postgres' ||
                                name === 'w1user') {
                                return false
                            }
                        case 'get_roles' :
                            name = item.rolname
                            if (name === 'postgres' ||
                                name === 'w1user') {
                                return false
                            }
                    }
                    return true
                },

                checkSystemName(name) {
                    let check = false;
                    switch (name) {
                      case 'template1' :
                      case 'template0' :
                      case 'postgres'  :
                      case 'maikldb'   :
                      case 'w1user'    :
                           check = true;
                           break;
                    }
                    return check;
                },

                inputFormItem(data) {
                    let item = data.item;
                    let fname = data.fname;
                    console.log(data);
                },

                /// ////////////////
                // EVENT BUS
                sendEventBus(eventName, data = null) {
                    this.$eventBus.$emit(eventName, data)
                },

                getEventBus(eventName, callBack) {
                    this.$eventBus.$on(eventName, (item) => {
                        callBack(item)
                    })
                },

                /// ////////////////
                // SET SCC CLASS
                setActiveElement(event, activeClass) {
                    let elements = document.querySelectorAll('.' + activeClass)
                    for (let elem of elements) {
                        elem.classList.remove(activeClass)
                    }

                    let target = event.currentTarget
                    target.classList.add(activeClass)
                    // console.log(target)
                },

                cssClassListRender(selector, action, className) {
                    let elements = document.querySelectorAll(selector)
                    switch (action) {
                        case 'del_class' :
                            for (let elem of elements)
                                elem.classList.remove(className)
                            break;

                        case 'set_class' :
                            for (let elem of elements)
                                elem.classList.add(className)
                            break;
                    }
                },

                htmlElementsRender(selector, fn) {
                    let elements = document.querySelectorAll(selector)
                    for(let i in elements) {
                        let elem = elements[i];
                        fn(elem);
                    }
                },

                jqSetActiveElement(elemId, activeClass, listClass) {
                    $('.' + listClass).removeClass(activeClass)
                    $('#' + elemId).addClass(activeClass)
                },

                /// //////////////////////
                // Start App Service

                pushFieldToArray(type = false) {
                    if (!type) {
                        this.newFieldsList.push({name: '', type: 'varchar'})
                    } else {
                        this.newFieldsListSecond.push({name: '', type: 'varchar'})
                    }
                },

                pushTableToArray() {
                    this.createTableList.push({name: '', idName: 'id', fields: []})
                },

                addNewFieldsForeach(fieldList = null, tableName = null) {
                    if (!fieldList)
                        fieldList = this.newFieldsList

                    if (!tableName)
                        tableName = this.tableName

                    let addFieldFn = (tableName, name, type, end = false) => {
                        if (!name) return false
                        var url = 'ADD_FIELD/' + tableName + '/' + name + '/' + type
                        this.http(url).then(resp => {
                            if (end) {
                                this.alertShow('Новые поля добавлены')
                                this.getTableFields(tableName, resp => {
                                    this.commonItem = resp
                                })
                                this.getTableListSheme()
                            }
                        })
                    }

                    let ch = 0
                    let end = false
                    let len = fieldList.length

                    for (let i in fieldList) {
                        ch++
                        let f = fieldList[i]
                        if (ch == len) end = true
                        addFieldFn(tableName, f.name, f.type, end)
                    }

                    this.newFieldsList = []
                    this.newFieldsListSecond = []
                    this.pushFieldToArray(true)
                },

                copyDb(dbName = null, newDbName = null) {
                    if (!dbName || !newDbName) {
                        newDbName = this.copyDbItem.newDbName
                        dbName = this.copyDbItem.dbName
                    }

                    if (!newDbName) {
                        this.warn('Имя базы пустое')
                        return false
                    }

                    this.sqlCommandType = 'exec'
                    this.sqlCommand = 'CREATE DATABASE ' + newDbName + ' WITH TEMPLATE ' + dbName
                    this.execSqlCommand(null, (response) => {
                        const message = `Новая копия базы "${newDbName}" успешно создана`
                        this.alertShow(message)
                        this.$store.dispatch('fetchDbList')
                        this.showDatabaseList()
                    });
                },

                copyTable(name = null, newName = null) {
                    if (!name || !newName) {
                        newName = this.copyTableItem.newName
                        name = this.copyTableItem.name
                    }

                    if (!newName)
                      newName = name + '_copy'

                    this.sqlCommandType = 'exec'
                    this.sqlCommand = 'CREATE TABLE ' + newName + ' AS TABLE ' + name
                    this.execSqlCommand(null, (response) => {
                        this.fetchTableList()
                        this.alertShow('Таблица успешно скопирована')
                        this.getTableList()
                    })
                },

                createTableAndFields() {
                    var tableName = this.newTable.name
                    if (!tableName) return false
                    this.createTable(this.addNewFieldsForeach)
                },

                setSqlCommandType(sqlName, commandType) {
                    this.sqlCommandType = commandType
                    let sql = `SELECT * FROM table_name`
                    switch (sqlName) {
                        case 'select_data' :
                            break
                        case 'create_table' :
                            sql = `CREATE TABLE  tableName (
                                  id SERIAL,
                                  name VARCHAR(250) NULL,
                                  role INTEGER NULL,
                                  note TEXT NULL,
                                  email VARCHAR (350) UNIQUE NOT NULL,
                                  created_at TIMESTAMP NOT NULL
                              )`
                            break
                        case 'create_field' :
                            sql = `ALTER TABLE  tableName (
                                 ADD new_field varchar(250)
                          )`
                            break

                        case 'copy_db' :
                            sql = `CREATE DATABASE new_db_copy
                                   WITH TEMPLATE   source_db`;
                            break
                    }

                    this.sqlCommand = sql
                },

                queryExecute() {
                    if (!this.sqlCommand) {
                        alert('Пустая команда')
                        return false
                    }
                    if (!this.sqlCommandType) {
                        this.sqlCommandType = 'query'
                    }
                    this.execSqlCommand('queryResultItems')
                },

                setPageName(pageName) {
                    this.pageName = pageName
                    $('.wcPanelTab').removeClass('wcPanelTabActive')
                },

                formEmitDataRender(data) {
                    let item = data.item
                    let event = data.event

                    switch (event) {
                        case 'add_user' :
                        case 'create_user' :
                            this.newUser.name = item.name.value
                            this.newUser.password = item.password.value
                            this.createDbUser()
                            break

                        case 'add_table' :
                        case 'create_table' :
                            this.newTable.name = item.name.value
                            this.newTable.idName = item.auto.value
                            this.createTable()
                            break
                    }
                },

                warn(message, type = null) {
                    const item = {type, message}
                    this.sendEventBus('warn_message_event', item)
                },

                alertShow(message = 'Успешное сохранение', type = 1) {
                    const item = {type, message}
                    this.sendEventBus('response_alert_message', item)
                },

                infoShow(message, type = 3) {
                    this.warn(message, type)
                },

                tdDataBoxClick(className, index, param = null) {
                    let defaultColor = 'white'
                    let newColor = 'gainsboro'
                    let tagName = 'td'

                    if (param) {
                        if (param[0]) newColor = param[0]
                        if (param[1]) tagName = param[1]
                        if (param[2]) defaultColor = param[2]
                    }

                    let elemId = className + index
                    $('.' + className + ' ' + tagName).css({'background-color': defaultColor})
                    $('#' + elemId + ' ' + tagName).css({'background-color': newColor})
                },

                tdDataBoxDbClick(item) {
                    this.rowItem = item
                    this.formDialog = true
                },

                dataTableSizeChange() {
                    let currentClass = 'input.form-control-input'
                    let newClassName = 'inputTextMinView'

                    if (this.inputHasClass) {
                        $(currentClass).removeClass(newClassName)
                        this.inputHasClass = false
                        return false
                    }

                    this.inputHasClass = true
                    $(currentClass).addClass(newClassName)
                },

                openFormBtnClick(formId) {
                    $('#' + formId).toggle()
                },

                leftPanelBtnClick(event) {
                    let activeClass = 'aciTreeSelected'
                    $('li.aciTreeLi').removeClass(activeClass)
                    let el = event.currentTarget
                    el.classList.add(activeClass)
                },

                cssClassToggle(event, elemsClass, activeClass) {
                    // debugger;
                    $(elemsClass).removeClass(activeClass)
                    let el = event.currentTarget
                    el.classList.add(activeClass)
                },

                addFieldOpen() {
                    (this.addFieldFlag) ? this.addFieldFlag = false
                        : this.addFieldFlag = true
                },

                addTableOpen() {
                    (this.addTableFlag) ? this.addTableFlag = false
                        : this.addTableFlag = true
                },

                editItem(fieldName, item) {
                    var newValue = item[fieldName]
                    var itemId   = item['id']
                    var url = 'EDIT_ITEM/' + this.tableName + '/' + fieldName + '/' + itemId + '/' + newValue
                    this.http(url).then(resp => {
                        this.getTableListSheme()
                        // this.getTableData(this.tableName);
                    })
                },

                deleteItem(item, tableName = null) {
                    const idName = this.setAutoIncName()
                    if(!tableName)
                        tableName = this.tableName

                    if (!item[idName]) {
                       this.warn('Не найдено поле auto_increment');
                       return false
                    }

                    const id = item[idName]
                    const url = 'DELETE_ITEM/' + tableName + '/' + idName + '/' + id
                    this.http(url).then(resp => {
                        this.alertShow('Строка удалена');
                        this.getTableDataList(tableName);
                        // this.getTableData(tableName)
                    })
                },

                setAutoIncName() {
                    var fields = this.tableInfo
                    for (var fName in fields) {
                        if (fields[fName].auto_increment) {
                            this.autoIncName = fName
                        }
                    }
                    return this.autoIncName
                },

                addItem(data, table = null) {

                    table = (table) ? table : this.tableName;

                    const url = 'ADD_ITEM/' + table
                    this.http(url, data, 'post').then(resp => {
                        this.getTableData(table)
                        this.getTableListSheme()
                    })

                },

                clickOpenPanel() {
                    if (this.showPanel) this.showPanel = false
                    else this.showPanel = true
                },

                // Получить имя поля autoincrement
                getTableIdName(tableName) {
                    if (!tableName) tableName = this.tableName
                    var url = 'GET_TABLE_ID_NAME/' + tableName
                    this.http(url).then(resp => {
                        this.autoIncName = resp['column_name']
                    })
                },

                // Получить все таблицы
                getTableList() {
                    var url = 'GET_TABLE_LIST'
                    this.http(url).then(resp => {
                        this.tableList = resp
                        this.getTableListSheme()
                        // lg(resp)
                    })
                },

                // Получить поля таблицы
                getTableFields(tableName, callback = null) {
                    this.tableInfo = []
                    this.tableName = tableName
                    var url = 'GET_TABLE_FIELDS/' + this.tableName
                    this.http(url).then(resp => {
                        if (callback) {
                            callback(resp)
                            return
                        }
                        this.tableInfo = resp
                        this.getTableData(this.tableName)
                    })
                },

                // Получить все таблицы с полями
                getTableListSheme() {
                    var url = 'GET_TABLE_LIST_SHEME'
                    this.http(url).then(resp => {
                        var ch = 0
                        var _left = 0
                        var _top = 0
                        for (var i in resp) {
                            if (ch > 5) {
                                _left = _top = ch = 0
                            }

                            if (ch > 0) {
                                _left = _left + 45
                                _top = _top + 30
                            }

                            resp[i]['top'] = _top
                            resp[i]['left'] = _left

                            ch++
                        }
                        this.tableListSheme = resp
                    })
                },

                getTableData(tableName) {
                    const url = 'GET_TABLE_DATA/' + tableName
                    this.http(url).then(resp => {
                        this.tableData = resp
                    })
                },

                async getTableDataList(tableName) {
                    this.tableData = await this.http('GET_TABLE_DATA/' + tableName)
                    this.tableInfo = await this.http('GET_TABLE_FIELDS/' + tableName)

                    this.fetchTableData(tableName)
                    this.fetchTableFields(tableName)
                    this.localStore('tableData', this.tableData)
                    this.localStore('tableFields', this.tableInfo)
                    return {data: this.tableData, fields: this.tableInfo}
                },

                isInt(value) {
                    let type = (value ^ 0) === value
                    return type
                },

                addField() {
                    var name = this.newField.name
                    var type = this.newField.type
                    if (!name) return false

                    var url = 'ADD_FIELD/' + this.tableName + '/' + name + '/' + type
                    this.http(url).then(resp => {
                        // this.getTableFields(this.tableName);
                        this.addFieldFlag = false
                        this.getTableFields(this.tableName, resp => {
                            this.commonItem = resp
                        })
                        this.alertSuccess('Новое поле успешно добавлено')
                        this.getTableListSheme()
                    })
                },

                multipleAddField() {
                    for (var i in this.newFieldsJson) {
                        var field = this.newFieldsJson[i]
                        if (!field.name) continue
                        var url = 'ADD_FIELD/' + this.tableName + '/' + field.name + '/' + field.type
                        this.http(url).then(resp => {
                            // this.alertSuccess('Новое поле успешно добавлено');
                        })
                    }

                    setTimeout(() => {
                        this.getTableFields(this.tableName)
                        this.alertSuccess('Новые поле успешно добавлены')
                        this.showModalOpen()
                    }, 1000)

                    // this.getTableFields(this.tableName);
                },

                showModalOpen() {
                    this.newFieldsJson = []
                    if (this.showModalOne) {
                        this.showModalOne = false
                    } else {
                        this.addModalField()
                        this.showModalOne = true
                    }
                },

                confModalOpen() {
                    if (this.showModalConf) {
                        this.showModalConf = false
                    } else {
                        this.showModalConf = true
                    }
                },

                addModalField() {
                    this.newFieldsJson.push(Object.assign({}, this.newFieldModel))
                },

                deleteField(fieldName, _return = false, tableName = null) {
                    if (!tableName) tableName = this.tableName
                    const url = 'DELETE_FIELD/' + tableName + '/' + fieldName
                    if (_return)
                        return this.http(url)
                    this.http(url).then(resp => {
                        this.getTableFields(this.tableName)
                        this.getTableListSheme()
                    })
                },

                deleteTable() {
                    var url = 'DELETE_TABLE/' + this.tableName
                    this.http(url).then(resp => {
                        this.tableName = ''
                        this.getTableListSheme()
                        this.http('GET_TABLE_LIST').then(resp => {
                            this.tableList = resp
                            for (var name in resp) {
                                this.getTableFields(name)
                                return
                            }
                        })
                    })
                },

                createTable(callback = null) {
                    var tableName = this.newTable.name
                    var idName = this.newTable.idName
                    if (!tableName) return false

                    var url = 'CREATE_TABLE/' + tableName + '/' + idName
                    this.http(url).then(resp => {
                        this.tableName = tableName
                        if (callback) {
                            callback(tableName)
                        }
                        this.getTableList()
                        this.getTableFields(this.tableName)
                        this.getTableListSheme()
                        this.alertShow('Новая таблица успешно создана')
                    })
                },

                createTableListFn(tableName, idName, addFieldsFn = null) {
                    if (!tableName) {
                        this.warn('Нет имени таблицы');
                        return false
                    }
                    var url = 'CREATE_TABLE/' + tableName + '/' + idName
                    this.http(url).then(resp => {
                        if (addFieldsFn) {
                            addFieldsFn(tableName)
                        }
                        this.fetchTableList()
                        this.alertShow('Новая таблица создана')
                        this.getTableList()
                    })
                },

                initRenameField(fieldName) {
                    var name = this.tableInfo[fieldName]['column_name']
                    this.renameName.oldName = fieldName
                },

                renameTable(tableName, newTableName) {

                    if ( !tableName || !newTableName || tableName == newTableName) {
                      alert('Не все поля заполнены');
                      return false;
                    }

                    const url = 'RENAME_TABLE/' + tableName + '/' + newTableName
                    return this.http(url);
                },

                renameField(fieldName) {
                    var name = this.tableInfo[fieldName]['column_name']
                    this.renameName.newName = name

                    var newName = this.renameName.newName
                    var oldName = this.renameName.oldName

                    if (oldName == newName) return

                    var url = 'RENAME_FIELD/' + this.tableName + '/' + oldName + '/' + newName
                    this.http(url).then(resp => {
                        this.getTableListSheme()
                        this.getTableFields(this.tableName)
                    })
                },
                // End App Service
                /// /////////////////////

                test1() {
                    alert('Все работает')
                }

            } // Methods
        }) // VueMixin
    }
}

export default InitApp
