<template><div class="selectElemContainer" >

    <div v-if="title"
         class="form__inp-label selectElemTitle">
        {{title}}
    </div>

    <ul class="selectElemUlBox" :id="'select-elem-box-' + randNum">
        <li class="selectElemLiBox" >

            <a @click="viewState = true" class="brd" >
               {{selectLabel}}
            </a>

            <template v-if="hover">
                <ul class="selectElemUlList"
                    :style="'width:' + ulMenuWidth+ 'px'">
                    <li v-for="(item) in items"
                        class="selectElemLiItem">
                        <a @click="selectItem(item, item[name])" >
                            {{item[label]}}
                        </a>
                    </li>
                </ul>
            </template>
            <template v-else >
                <ul v-if="viewState"
                    class="selectElemUlList + 'px'"
                    :style="'width:' + ulMenuWidth" >
                    <li v-for="(item) in items"
                        class="selectElemLiItem">
                        <a @click="selectItem(item, item[name])" >
                            {{item[label]}}
                        </a>
                    </li>
                </ul>
            </template>

        </li>
    </ul>

</div></template>

<script>
    export default {
        name: "Select",
        props: ['items', 'title', 'name',
                'label', 'selected_value',
                'hover', 'field_name', 'width'],
        data: () => ({
           selectLabel : '',
           selectValue : '',
           viewState   : false,
           ulMenuWidth : 300,
           randNum     : 0,
        }),

        created() {

            this.randNum = this.createElemId()

            if(this.width)
                this.ulMenuWidth = this.width;

            this.setInitSelectedValue()
        },

        methods : {
            selectItem(item, value) {
                let field_name = '';
                if(this.field_name)
                    field_name = this.field_name
                this.viewState   = false;
                this.selectLabel = item[this.label]
                this.selectValue = value;
                this.$emit('select_item', {item, value, field_name});
            },

            setInitSelectedValue(){
                if(!this.selected_value)
                    return false
                for(let i in this.items) {
                    let item = this.items[i]
                    if(item[this.name] == this.selected_value) {
                        this.selectLabel = item[this.label]
                        this.selectValue = item[this.name]
                        return true
                    }
                }
            },
        },

        mounted() {
            // debugger
            // const elemId = document.querySelector('#select-elem-box-' + this.randNum)
            // const width  = elemId.style.width;
            // alert(width);

        }
    }
</script>

<style scoped >

    .selectElemContainer {
        width: 100%; /* Ширина меню */
        height:100%;
    }

    .selectElemTitle {
        border:1px gainsboro solid;
        text-align: left;
        font-style: italic;
        font-size: 11.5px;
        color: #607d8b;
        padding:1px 0px 1px 5px
    }

    .selectElemUlBox,
    .selectElemUlList{
        width: 100%; /* Ширина меню */
        /*height:100%;*/
        list-style: none; /* Для списка убираем маркеры */
        margin: 0; /* Нет отступов вокруг */
        padding: 0; /* Убираем поля вокруг текста */
        font-family: Arial, sans-serif; /* Рубленый шрифт для текста меню */
        font-size: 10pt; /* Размер названий в пункте меню */
        z-index:45;
        border-bottom: 1px solid #ccc; /* Линия снизу */
    }

    .selectElemUlBox {
        margin-top:1px;
    }

    .selectElemUlList  {
        position: absolute; /* Подменю позиционируются абсолютно */
        display : none;      /* Скрываем подменю */
        margin-left: 0px;   /* Сдвигаем подменю вправо */
        margin-top: -1px;   /* Сдвигаем подменю вверх */
        width: 300px;
        border: 1px gainsboro solid;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .selectElemLiBox a {
        display: block; /* Ссылка как блочный элемент */
        padding: 5px; /* Поля вокруг надписи */
        text-decoration: none; /* Подчеркивание у ссылок убираем */
        color: #666; /* Цвет текста */
        border: 1px solid #ccc;/* Рамка вокруг пунктов меню */
        background: ghostwhite; /* Цвет фона */
        border-bottom: none; /* Границу снизу не проводим */
        text-align: center;
    }

    .selectElemLiItem {
        background: aliceblue;
        border: 0px #ccc solid;
        padding:0px 5px 0px 5px;
    }

    .selectElemLiItem a {
        display: block; /* Ссылка как блочный элемент */
        padding: 5px; /* Поля вокруг надписи */
        text-decoration: none; /* Подчеркивание у ссылок убираем */
        color: #666; /* Цвет текста */
        border: 0px solid #ccc;/* Рамка вокруг пунктов меню */
        background-color: aliceblue; /* Цвет фона */
        border-bottom: none; /* Границу снизу не проводим */
    }

    .selectElemLiItem a:hover {
        color: #ffe; /* Цвет текста активного пункта */
        background-color: #5488af; /* Цвет фона активного пункта */
        /*background: #777;*/
        /*box-shadow:10px 10px 10px rgba(0,0,0,0.8);*/
    }

    .selectElemLiBox:hover .selectElemUlList {
        display: block; /* При выделении пункта курсором мыши отображается подменю */
    }

    .selectElemLiBox {

    }

    .selectElemLiBox a {
       height: 25px;
       padding: 1px 0px 0px 0px;
       font-size: 15px;
    }

    .selectElemLiItem a {
        height: 30px;
        padding: 2px 2px 2px 4px;
        font-size: 14px;
        text-align: left;
    }

    .brd {
        border-bottom: 1px solid #ccc; /* Линия снизу */
    }

</style>
