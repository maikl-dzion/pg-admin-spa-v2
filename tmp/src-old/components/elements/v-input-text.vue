<template>
    <div class="vFieldContainer" >
        <input v-model="targetValue"
               @input="emitValue"
               class="vInputText" type="text" required >
        <label>{{label}}</label>
    </div>
</template>

<script>
export default {
    name: "v-input-text",
    props: ['label', 'value', 'fname'],

    data: () => ({
        targetValue : '',
    }),

    created() {
        this.targetValue = this.value;
    },

    methods : {
        emitValue() {
            const value = this.targetValue;
            let fname = (this.fname) ? this.fname : '';
            this.$emit('edit', { value, fname });
        }
    },
}
</script>

<style scoped>

    /*!* -----  Выравнивание по середине  -----*!*/
    /*.dws-wrapper {*/
        /*display: flex;*/
        /*height: 100vh;*/
        /*justify-content: center;*/
        /*align-items: center;*/
    /*}*/


    /*!* Формы *!*/
    /*.vInputText {*/
        /*font-size: 15px;*/
        /*margin:0px;*/
        /*width: 100%;*/
        /*!*background: white;*!*/
        /*!*border: 1px solid #e9eaea;*!*/
        /*!*padding: 12px 14px;*!*/
        /*!*box-sizing: border-box;*!*/
        /*!*margin-bottom: 0px;*!*/
        /*!*color: #1e8da6;*!*/
        /*!*outline: none;*!*/
        /*!*border: 1px solid red;*!*/
    /*}*/

    /*!* Плавающий текст *!*/
    /*.vFieldContainer {*/
        /*position: relative;*/
    /*}*/

    /*!*Текстовое поле*!*/
    /*.vFieldContainer input {*/
        /*border: none;*/
        /*border-bottom: 1px solid #e9eaea;*/
        /*padding: 10px 0 2px 4px;*/
        /*!*border:1px red solid;*!*/
    /*}*/

    /*!* Label *!*/
    /*.vFieldContainer label {*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 4px;*/
        /*padding-top: 10px;*/
        /*color: #c4c9c9;*/
        /*transition: .5s;*/
        /*pointer-events: none;*/
        /*border:0px green solid;*/
        /*font-size: 14px;*/
        /*font-style: italic;*/
    /*}*/

    /*.vFieldContainer input:focus ~ label,*/
    /*.vFieldContainer input:valid ~ label {*/
        /*top: -18px;*/
        /*font-size: 11px;*/
        /*color: #4fa6d5;*/
    /*}*/

    /*.vFieldContainer input:focus,*/
    /*.vFieldContainer input:valid {*/
        /*border-bottom:1px #4fa6d5 solid;*/
        /*transition: .5s;*/
    /*}*/

</style>
