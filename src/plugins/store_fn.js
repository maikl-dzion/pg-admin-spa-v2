
const StoreFn = {
    install: function (Vue) {
        Vue.mixin({

            methods: {

                localStore(key, value = null) {
                    if(!value)
                        return localStorage.getItem(key);
                    localStorage.setItem(key, value);
                },

                storeGet() {
                    return this.$store.getters
                },

                getStoreParam(name) {
                    this.$store.state[name]
                },

                storeFetch(fnName, data = null) {
                    this.$store.dispatch(fnName, data)
                },

                fetchDbList() {
                    this.$store.dispatch('fetchDbList')
                },

                fetchUserList() {
                    this.$store.dispatch('fetchUserList')
                },

                fetchTableList() {
                    this.$store.dispatch('fetchTableList')
                },

                fetchDbRoles() {
                    this.$store.dispatch('fetchDbRoles')
                },

                fetchTableData(tableName) {
                    this.$store.dispatch('fetchTableData', tableName)
                },

                fetchTableFields(tableName) {
                    this.$store.dispatch('fetchTableFields', tableName)
                },

                setStoreParam(data) {
                    this.$store.dispatch('setParam', data)
                },

            } // ------- methods

        }) // --------- Vue.mixin
    }
}

export default StoreFn
