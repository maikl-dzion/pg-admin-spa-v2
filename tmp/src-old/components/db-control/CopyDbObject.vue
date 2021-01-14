<template><div class="">


        <!-- Копируем таблицу -->
        <div style="width:500px; background: aliceblue; border:2px gainsboro solid;
                            padding:6px; display: flex; margin:0px;">

            <div class="vFieldContainer" style="width:45%; margin:0px;">
                <input v-model="copyTableItem.newName" style="outline: none"
                       class="vInputText" type="text" required>
                <label>Имя новой таблицы</label>
            </div>

            <v-select
                    style="width:32%; margin:0px 4px 0px 5px;"
                    label="table_name"
                    name="table_name"
                    title="Таблицы"
                    :items="getDbTables"
                    :param="{width: 135}"
                    @select_item="data => copyTableItem.name = data.value"
            ></v-select>

            <button @click="copyMake('copy_table')"
                    style="width:37%; height: 34px; margin:0px; border-radius: 0; "
                    class="btn btn-success btn-sm px-2 waves-effect export-to-snippet">
                    <i class="fa fa-cube"></i> &nbsp; Копировать таблицу
            </button>

        </div>


        <!-- Копируем базу -->
        <div style="width:500px; background: aliceblue; border:2px gainsboro solid;
                                padding:6px; display: flex; margin-top:4px;">

            <div class="vFieldContainer" style="width:45%; margin:0px;">
                <input v-model="copyDbItem.newDbName"  style="outline: none"
                       class="vInputText" type="text" required>
                <label>Имя новой базы</label>
            </div>

            <v-select
                    style="width:32%; margin:0px 4px 0px 5px;"
                    label="datname"
                    name="datname"
                    title="Базы данных"
                    :items="getDbList"
                    :param="{width: 135}"
                    @select_item="data => copyDbItem.dbName = data.value"
            ></v-select>

            <button @click="copyMake('copy_db')"
                    style="width:37%; height: 34px; margin:0px; border-radius: 0; "
                    class="btn btn-success btn-sm px-2 waves-effect export-to-snippet">
                   <i class="fa fa-database"></i> &nbsp; Копировать базу
            </button>

        </div>

</div></template>

<script>
export default {
    name: "CopyDbObject",

    data: () => ({
        _db : {
            name : '',
            newName : '',
        },

        _table : {
            name : '',
            newName : '',
        }
    }),

    computed: {
        getDbList () {
            return this.storeGet().getDbList
        },
        getDbTables () {
            return this.storeGet().getTableList
        },
    },

    created () {
        this.storeFetch('fetchDbList')
        this.storeFetch('fetchTableList')
    },

    methods : {
        copyMake (action) {
            switch (action) {
                case 'copy_db'    : this.copyDb();    break
                case 'copy_table' : this.copyTable(); break
            }
            const param = { action }
            this.$emit('copy_run', param)
        },
    },
}
</script>

<style scoped>


</style>
