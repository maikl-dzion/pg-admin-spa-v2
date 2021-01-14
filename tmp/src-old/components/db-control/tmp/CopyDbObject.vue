<template><div class="dlg-container">

        <div class="dlg-title">
            Копирование объектов
        </div>

        <hr style="margin: 7px 0px 2px 0px"/>

        <div class="dlg-item-name">
            <div class="my-form dlg-name" style="z-index:42">

                <div class="my-form__elem-box" style="width:100%; ">
                    <input v-model="copyTableItem.newName" class="form__inp-text" type="text"  required="">
                    <label class="form__inp-label" style="padding-left: 4px">Имя таблицы</label>
                </div>

                <CustomSelect
                        style="width:100%; padding:2px;"
                        title="Выбрать таблицу"
                        name="table_name"
                        label="table_name"
                        hover="1"
                        width="155"
                        :items="getDbTables"
                        @select_item="d => copyTableItem.name = d.value"
                ></CustomSelect>

            </div>
            <div class="my-form dlg-name" style="z-index:38" >

                <div class="my-form__elem-box" style="width:100%; ">
                    <input v-model="copyDbItem.newDbName"  class="form__inp-text" type="text"  required="">
                    <label class="form__inp-label" style="padding-left: 4px">Имя базы</label>
                </div>

                <CustomSelect
                        style="width:100%; padding:2px;"
                        title="Выбрать базу"
                        name="datname"
                        label="datname"
                        hover="1"
                        :items="getDbList"
                        @select_item="d => copyDbItem.dbName = d.value"
                ></CustomSelect>
            </div>
        </div>

    <hr style="margin: 5px 0px 2px 0px"/>

    <div class="my-form dlg-button-box">
        <a @click="copyMake('copy_table')" class="my-form__btn">
            <span></span><span></span><span></span><span></span>
            Copy Table
        </a>

        <a @click="copyMake('copy_db')" class="my-form__btn">
            <span></span><span></span><span></span><span></span>
            Copy Db
        </a>
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

    .dlg-container {
        border: 1px gainsboro solid;
        padding:0px;
        width: 340px;
        background: ghostwhite;
        padding: 2px;
    }

    .dlg-title {
        /*font-weight: bold;*/
        text-align: center;
        padding-top: 3px;
        font-size: 17px;
        color: grey;
    }

    .dlg-button-box {
        height: 40px; display: flex; padding: 0px
    }

    .dlg-item-name {
        display: flex;
    }

    .dlg-item-name .dlg-name {
        width: 50%;
        border-bottom:2px cornflowerblue solid;
        padding:2px;
        margin:2px 2px 8px 2px;
    }

    .my-form__btn {
        width: 50%;
        margin:8px 2px 2px 2px;
        font-size: 12px;
        height: 30px;
    }


    ul {
        width: 100%; /* Ширина меню */
        list-style: none; /* Для списка убираем маркеры */
        margin: 0; /* Нет отступов вокруг */
        padding: 0; /* Убираем поля вокруг текста */
        font-family: Arial, sans-serif; /* Рубленый шрифт для текста меню */
        font-size: 10pt; /* Размер названий в пункте меню */
    }
    li ul {
        width: 220px;
        position: absolute; /* Подменю позиционируются абсолютно */
        display: none; /* Скрываем подменю */
        margin-left: 100px; /* Сдвигаем подменю вправо */
        margin-top: -2em; /* Сдвигаем подменю вверх */
        z-index: 55;
    }
    li a {
        display: block; /* Ссылка как блочный элемент */
        padding: 5px; /* Поля вокруг надписи */
        text-decoration: none; /* Подчеркивание у ссылок убираем */
        color: #666; /* Цвет текста */
        border: 1px solid #ccc;/* Рамка вокруг пунктов меню */
        background-color: #f0f0f0; /* Цвет фона */
        border-bottom: none; /* Границу снизу не проводим */
    }
    li a:hover {
        /*color: #ffe; !* Цвет текста активного пункта *!*/
        color:white !important;
        background-color: #5488af; /* Цвет фона активного пункта */
    }
    li:hover ul {
        display: block; /* При выделении пункта курсором мыши отображается подменю */
    }
    .brd {
        border-bottom: 1px solid #ccc; /* Линия снизу */
    }

</style>
