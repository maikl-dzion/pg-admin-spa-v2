<template><div class="v-select-container"
               :style="`width: ${width}px; border:0px red solid`">

    <div class="vFieldContainer" style="width:100%;">
        <!--@mousemove="inputFocus"-->
        <input @focus="inputFocus" style="outline: none"
               v-model="selectLabel"
               :id="inputId"
               :class="inputClass" type="text" required >
        <label>{{title}}</label>
    </div>

    <template >
        <ul :class="ulMenuClass"
            :id="menuUlId"
            :style="`width: ${width-1}px`" >
            <li v-for="(item) in items"
                :class="itemMenuClass" >
                <a  @click="selectItem(item, item[vName])"
                    :class="aLinkMenuClass" >
                    {{item[vLabel]}}
                </a>
            </li>
        </ul>
    </template>

</div></template>

<script>
    export default {
        name: "v-Select",
        props: ['items', 'label', 'name','title', 'param', 'named'],
        data: () => ({
           showState : false,
           hover     : false,
           width     : 220,
           currentValue : '', // Переданное значение
           selectLabel  : '', // Описание значения
           selectValue  : '', // Выбранное значение

           inputClass  : 'vInputText',
           ulMenuClass : 'v-select-ul-menu',
           itemMenuClass  : 'v-select-li-item',
           aLinkMenuClass : 'v-select-a-link-item',

           inputId  : 'v-select__input-',
           menuUlId : 'v-select__menu-ul-',
           vLabel   : '',
           vName    : '',
        }),

        created() {

            this.getParam('width', 'width')
            this.getParam('value', 'currentValue')
            this.getParam('hover', 'hover')

            this.inputId += this.createElemId()
            this.menuUlId += this.createElemId()

            this.vLabel = (this.label) ? this.label : '' ;
            this.vName  = (this.name)  ? this.name  : '' ;

            // named = { name : label}
            this.setNamed();

            this.setInitSelectedValue();
        },

        methods : {

            inputFocus() {
                this.menuUlDisplay(true);
                this.showState = true;
            },

            setNamed() {
                if(!this.named) return false

                let name, label;
                for(let n in this.named) {
                    name = n;
                    label= this.named[n];
                }

                if(name && label) {
                    this.vName = name;
                    this.vLabel = label;
                }
            },

            menuUlDisplay(show = false) {
                const className = '.' + this.ulMenuClass;
                this.htmlElementsRender(className, el => {
                    if(el.style)
                        el.style.display = 'none';
                });

                if(show) {
                    let el = document.querySelector('#' + this.menuUlId)
                    el.style.display = 'block';
                }
            },

            hideSelect($event) {
                const target = $event.target;
                // const elemId = target.id;
                const className = target.className;
                if(className == this.inputClass)
                    return false;
                this.menuUlDisplay()
            },

            getParam(fname, localName = null) {
                let result = '';
                if(this.param[fname])
                   result = this.param[fname];

                if(localName)
                    this[localName] = result;
                return result;
            },

            selectItem(item, value) {
                const fname = this.getParam('fname')
                this.showState = false;
                this.selectLabel = item[this.vLabel]
                this.selectValue = value;
                this.$emit('select_item', {item, value, fname});
            },

            setInitSelectedValue(){
                const selectedValue = this.getParam('value')
                if(!selectedValue) return false

                for(let i in this.items) {
                    let item = this.items[i]
                    if(item[this.name] == selectedValue) {
                        this.selectLabel = item[this.vLabel]
                        this.selectValue = item[this.vName]
                        return true
                    }
                }
            },
        },

        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },

        beforeDestroy() {
            document.removeEventListener('click', this.hideSelect)
        }
    }
</script>

<style scoped >

    /*.v-select-ul-menu  {*/

        /*width: 100%; !* Ширина меню *!*/
        /*!*height:100%;*!*/
        /*list-style: none; !* Для списка убираем маркеры *!*/
        /*margin: 0; !* Нет отступов вокруг *!*/
        /*padding: 0; !* Убираем поля вокруг текста *!*/
        /*font-family: Arial, sans-serif; !* Рубленый шрифт для текста меню *!*/
        /*font-size: 10pt; !* Размер названий в пункте меню *!*/
        /*z-index:45;*/
        /*border-bottom: 1px solid #ccc; !* Линия снизу *!*/

        /*position: absolute; !* Подменю позиционируются абсолютно *!*/
        /*display : none;      !* Скрываем подменю *!*/
        /*margin-left: 0px;   !* Сдвигаем подменю вправо *!*/
        /*margin-top: -1px;   !* Сдвигаем подменю вверх *!*/
        /*width: 300px;*/
        /*border: 1px gainsboro solid;*/
        /*box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);*/
    /*}*/

    /*.v-select-li-item {*/
        /*background: aliceblue;*/
        /*border: 0px #ccc solid;*/
        /*padding:0px 5px 0px 5px;*/
    /*}*/

    /*.v-select-li-item a {*/
        /*display: block; !* Ссылка как блочный элемент *!*/
        /*padding: 5px; !* Поля вокруг надписи *!*/
        /*text-decoration: none; !* Подчеркивание у ссылок убираем *!*/
        /*color: #666; !* Цвет текста *!*/
        /*border: 0px solid #ccc;!* Рамка вокруг пунктов меню *!*/
        /*background-color: aliceblue; !* Цвет фона *!*/
        /*border-bottom: none; !* Границу снизу не проводим *!*/

        /*height: 30px;*/
        /*padding: 2px 2px 2px 4px;*/
        /*font-size: 14px;*/
        /*text-align: left;*/
    /*}*/

    /*.brd {*/
        /*border-bottom: 1px solid #ccc; !* Линия снизу *!*/
    /*}*/

    /*.v-select-li-item a:hover {*/
        /*color: #ffe; !* Цвет текста активного пункта *!*/
        /*background-color: #5488af; !* Цвет фона активного пункта *!*/
        /*!*background: #777;*!*/
        /*!*box-shadow:10px 10px 10px rgba(0,0,0,0.8);*!*/
    /*}*/


</style>
