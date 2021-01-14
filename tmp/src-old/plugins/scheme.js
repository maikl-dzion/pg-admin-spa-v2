export default {
    // --- Data
    data: () => ({
         tableInfoList : [],
    }),

    // --- Create
    created () {

    },

    // --- Methods
    methods: {

        schemeMenuAction (actionName, event = null, activeClass = 'activeClass') {

            let title = ''
            this.commonActionName = actionName
            // let tableList = this.getDbTables

            switch (this.commonActionName) {
                case 'users'     : title = 'Пользователи'; break
                case 'tables'    :
                    title = 'Таблицы';
                    this.tableInfoList = []
                    let tableList = this.getDbTables
                    let ch = 1;
                    let left = 10
                    let right = 150
                    let zIndex = 1
                    for(let i in tableList) {
                        ch++
                        zIndex++
                        let item = tableList[i];
                        let tableName = item.table_name
                        this.getTableFieldsForm(tableName, { left, right, zIndex})
                        left = left + 150
                        right = right + 30
                    }
                    break

                case 'databases' : title = 'Базы'; break
                case 'get_roles' : title = 'Роли'
                    // this.sqlCommandRun(actionName)
                    break
            }

            this.commonTitle = title
            if (event)
                this.setActiveElement(event, activeClass)
        },

        // Получить поля таблицы
        async getTableFieldsForm(tableName, pos) {
            let url = 'GET_TABLE_FIELDS/' + tableName
            let fields = await this.http(url);
            let json = {
                name : tableName,
                fields : fields,
                left : pos.left,
                right: pos.right,
                zIndex : pos.zIndex
            }
            this.tableInfoList.push(json)
        },

        deleteTableField(tableName, fieldName, i) {
            const url = 'DELETE_FIELD/' + tableName + '/' + fieldName
            this.deleteField(fieldName, true, tableName).then(resp => {
                //this.fetchTableList ()
                //this.fetchTableFields (tableName)
                this.getTableFields(tableName, fields => {
                    this.tableInfoList[i]['fields'] = fields
                    this.alertShow('Поле таблицы удалено')
                })
            })
        },

    },
}
