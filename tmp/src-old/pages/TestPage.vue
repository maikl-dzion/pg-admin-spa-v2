<template>
    <div class="about">

        <hr/><br/>

        <v-select

            title="Выбрать тип поля"
            :items="tableFieldTypes"
            label="title"
            name="name"
            :param="{width: 200, fname : '', value : ''}"
            @select_item="selectedItem"

        ></v-select>

        <p/><p/>

        <v-input-text
           style="margin:5px 5px 5px 50px;"
           label="Выбрать таблицу"
           value="value2344"
           fname="fgh"
           @edit="inputTest">
        </v-input-text>

        <ui-select
          name="id"
          label="name"
          :items="testArr"
          :param="{ title : 'Выбрать базу',
                    current_value : '',
                    field_name    : '' }"
          @select_item="data => { lg(data) }"
        ></ui-select>

        <hr/>

        <!--<CustomForm/>-->

        <hr/>

        <Spinner
                size="3"
        ></Spinner>

        <div class="container">
            <button id="button"></button>
        </div>


        <div>

            <div class="custom-select-container"
                 style="border: 1px red solid; width: 300px">

                <span class="custom-choose">Choose Gender</span>

                <div class="custom-dropdown">
                    <div class="ui-select">
                        <span>Select Gender</span>
                        <i class="fa fa-chevron-left"></i>
                    </div>

                    <input type="hidden" name="gender">

                    <ul class="custom-dropdown-menu">
                        <li class="dropdown-menu-option" >Male</li>
                        <li class="dropdown-menu-option" >Female</li>
                        <li class="dropdown-menu-option" >Male 2</li>
                        <li class="dropdown-menu-option" >Female 2</li>
                        <li class="dropdown-menu-option" >Male</li>
                        <li class="dropdown-menu-option" >Female</li>
                        <li class="dropdown-menu-option" >Male 2</li>
                        <li class="dropdown-menu-option" >Female 2</li>
                    </ul>

                </div>

                <span class="msg"></span>
            </div>

        </div>

        <!--<TabPanel style="border: 0px red solid; margin:10px"-->
        <!--:tabs="['Редактирование','Создание объектов']" >-->
        <!--<div slot="content-1">-->
        <!--1-->
        <!--</div>-->
        <!--<div slot="content-2">-->
        <!--2-->
        <!--</div>-->
        <!--</TabPanel>-->
        <pre>{{checkboxValue}}</pre>

        <Checkbox style="margin-left:2px"
                  label="rtyy"
                  :value="checkboxValue"
                  fname="email"
                  :param="{}"
                  label_class="rrrr"
                  @change_value="d => { checkboxValue = d.value }"
        ></Checkbox>

        <AnimeButton></AnimeButton>

    </div>
</template>

<script>
    import CustomForm from '@/components/elements/CustomForm'
    import vSelect from '@/components/elements/v-select'

    export default {
        name: 'home',

        data: () => ({
            checkboxValue: false,

            testArr : [
                {id: 'maikldb'  , name: 'maikldb'},
                {id: 'reestrsrv', name: 'reestrsrv'},
                {id: 'reestrdb' , name: 'reestrdb'}
            ],

        }),

        components: {
            CustomForm,
            vSelect
        },

        computed: {
            getDbTables() {
                return this.storeGet().getTableList
            },
            getDataList() {
                return this.storeGet().getDataList
            },
        },

        methods: {

            inputTest(data) {
               // lg(data);
            },

            selectedItem(data) {
                // lg(data);
            },

            btnClickCss() {

                $(function () {
                    $("#button").click(function () {
                        $("#button").addClass("onclic", 250, validate);
                    });

                    function validate() {
                        setTimeout(function () {
                            $("#button").removeClass("onclic");
                            $("#button").addClass("validate", 450, callback);
                        }, 2250);
                    }

                    function callback() {
                        setTimeout(function () {
                            $("#button").removeClass("validate");
                        }, 1250);
                    }
                });
            },
        },


        mounted() {

            // /*custom-dropdown Menu*/
            // $('.custom-dropdown').click(function () {
            //     $(this).attr('tabindex', 1).focus();
            //     $(this).toggleClass('active');
            //     $(this).find('.custom-dropdown-menu').slideToggle(300);
            // });
            // $('.custom-dropdown').focusout(function () {
            //     $(this).removeClass('active');
            //     $(this).find('.custom-dropdown-menu').slideUp(300);
            // });
            // $('.custom-dropdown .custom-dropdown-menu li').click(function () {
            //     $(this).parents('.custom-dropdown').find('span').text($(this).text());
            //     $(this).parents('.custom-dropdown')
            //            .find('input')
            //            .attr('value', $(this).attr('id'));
            // });
            // /*End custom-dropdown Menu*/
            //
            // $('.custom-dropdown-menu li').click(function () {
            //     var input = '<strong>' + $(this)
            //             .parents('.custom-dropdown')
            //             .find('input').val() + '</strong>',
            //         msg = '<span class="msg">Hidden input value: ';
            //     $('.msg').html(msg + input + '</span>');
            // });

        },

    }
</script>


<style>

    * {
        outline: 0;
        font-family: sans-serif
    }
    body {
        background-color: #fafafa
    }
    span.msg,
    span.custom-choose {
        color: #555;
        padding: 2px;
        font-size: 12px;
        display: inherit;
        text-align: left;
        font-style: italic;
        color: #b0bed9;
    }

    /*.container {*/
        /*width: 500px;*/
        /*margin: 50px auto 0;*/
        /*text-align: center*/
    /*}*/

    /*Styling Selectbox*/
    .custom-dropdown {
        width: 100%;
        display: inline-block;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 0 2px rgb(204, 204, 204);
        transition: all .5s ease;
        position: relative;
        font-size: 14px;
        color: #474747;
        height: 100%;
        text-align: left
    }
    .custom-dropdown .ui-select {
        cursor: pointer;
        display: block;
        padding: 4px 10px 4px 4px;
    }
    .custom-dropdown .ui-select > i {
        font-size: 13px;
        color: #888;
        cursor: pointer;
        transition: all .3s ease-in-out;
        float: right;
        line-height: 20px
    }
    .custom-dropdown:hover {
        box-shadow: 0 0 4px rgb(204, 204, 204)
    }
    .custom-dropdown:active {
        background-color: #f8f8f8
    }
    .custom-dropdown.active:hover,
    .custom-dropdown.active {
        box-shadow: 0 0 4px rgb(204, 204, 204);
        border-radius: 2px 2px 0 0;
        background-color: #f8f8f8
    }
    .custom-dropdown.active .ui-select > i {
        transform: rotate(-90deg)
    }
    .custom-dropdown .custom-dropdown-menu {
        position: absolute;
        background-color: #fff;
        width: 100%;
        left: 0;
        margin-top: 1px;
        box-shadow: 0 1px 2px rgb(204, 204, 204);
        border-radius: 0 1px 2px 2px;
        overflow: hidden;
        display: none;
        /*max-height: 144px;*/
        overflow-y: auto;
        z-index: 9
    }
    .custom-dropdown .custom-dropdown-menu li {
        padding: 4px;
        transition: all .2s ease-in-out;
        cursor: pointer
    }
    .custom-dropdown .custom-dropdown-menu {
        padding: 0;
        list-style: none
    }
    .custom-dropdown .custom-dropdown-menu li:hover {
        background-color: #f2f2f2
    }
    .custom-dropdown .custom-dropdown-menu li:active {
        background-color: #e2e2e2
    }

    /*.custom-dropdown:hover .custom-dropdown-menu{*/
        /*display: block !important;*/
    /*}*/

</style>


