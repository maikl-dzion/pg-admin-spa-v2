<template><div class="create-form-container" style="margin-left:10px">

    <div class="my-form">
        <div class="custom-btn-container">
            <button @click="pushFieldToArray(true)" class="custom-btn">
                <i class="fa fa-plus-circle"></i>
            </button>
        </div>
        <div class="my-form__label">Добавить новые поля</div>
        <hr class="my-form__delimiter">
        <div class="my-form__container">

            <div class="my-form__select-box" style="margin-bottom:10px !important;">
                <label class="select-label"> Выбрать таблицу </label>
                <select v-model="selectTableName" class="custom-select-elem">
                    <option v-for="(item) in getDbTables"
                            :value="item.table_name">
                        {{item.table_name}}
                    </option>
                </select>
            </div>

            <div v-for="(field) in newFieldsListSecond"
                 class="my-form__flex-box">
                <div class="my-form__elem-box">
                    <input v-model="field.name" class="form__inp-text" type="text" required="">
                    <label class="form__inp-label">Имя поля</label>
                </div>
                <div class="margin-box"></div>
                <div class="my-form__select-box-flex" style="width: 45%">
                    <label class="select-label">Тип поля</label>
                    <select v-model="field.type" class="custom-select-elem">
                        <option v-for="(item) in tableFieldTypes"
                                :value="item.name">
                            {{item.name}}
                        </option>
                    </select>
                </div>
            </div>

        </div>

        <br/><br/>
        <hr class="my-form__delimiter">
        <div class="my-form__btn-box">
            <a @click="addFieldsSave" class="my-form__btn">
                <span></span><span></span><span></span><span></span>
                Сохранить
            </a>
        </div>

    </div>

</div></template>

<script>
    export default {
        name: "AddNewTableFields",
        data: () => ({
            selectTableName: '',
        }),

        created() {
            this.pushFieldToArray(true)
        },

        computed : {
            getDbTables() {
                return this.storeGet().getTableList
            },
        },

        methods : {
            addFieldsSave() {
                const fields = this.newFieldsListSecond;
                const tableName = this.selectTableName
                this.addNewFieldsForeach(fields, tableName)
            }
        },

    }
</script>

<style scoped>

</style>
