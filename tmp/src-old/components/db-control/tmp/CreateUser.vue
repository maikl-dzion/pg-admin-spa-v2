<template><div class="create-form-container">

    <div class="my-form">
        <div class="my-form__label">Добавить пользователя</div>
        <hr class="my-form__delimiter">
        <div class="my-form__container">

            <div class="my-form__elem-box">
                <input v-model="newUser.name" class="form__inp-text" type="text" required="">
                <label class="form__inp-label">Имя пользователя</label>
            </div>

            <div class="my-form__elem-box">
                <input v-model="newUser.password" class="form__inp-text" type="text" required="">
                <label class="form__inp-label">Пароль</label>
            </div>

            <div class="div-checkbox">
                <input v-model="newUser.superUser" type="checkbox" id="super-user-role">
                <label for="super-user-role">
                    Права суперпользователя</label>
            </div>

            <div class="my-form__select-box" style="margin-top:10px !important;">
                <label class="select-label"> Выбрать базу</label>
                <select v-model="newUser.dbName" class="custom-select-elem">
                    <option v-for="(db) in getDbList" :value="db.datname">
                        {{db.datname}}
                    </option>
                </select>
            </div>

        </div>

        <hr class="my-form__delimiter">
        <div class="my-form__btn-box">
            <a @click="createDbUser()" class="my-form__btn">
                <span></span><span></span><span></span><span></span>
                Сохранить
            </a>
        </div>

    </div>

</div></template>

<script>
export default {
    name: "CreateUser",
    computed: {
        getDbList() {
            return this.storeGet().getDbList
        },
    },
}
</script>

<style scoped>

</style>
