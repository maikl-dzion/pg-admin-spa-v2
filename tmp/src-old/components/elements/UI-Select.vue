<template>

<div class="custom-select-container">

    <span class="custom-choose">{{title}}</span>

    <div class="custom-dropdown">
        <div @click="state = !state" class="ui-select" >
            <span>{{selectedLabel}}</span>
            <i class="fa fa-chevron-left"></i>
        </div>

        <!--<input type="hidden" name="gender">-->
        <ul v-if="state" class="custom-dropdown-menu">
            <li v-for="(item) in items"
                @click="selectItem(item, item[name])"
                class="dropdown-menu-option" >
                {{item[label]}}
            </li>
        </ul>

    </div>
    <!--<span class="msg"></span>-->

</div>

</template>

<script>
export default {
    name: "UI-Select",
    props: ['items', 'name', 'label', 'param'],
    data: () => ({
        state : false,
        fieldName : '',
        title : '',

        selectedLabel : '',
        selectedValue : '',
        currentValue  : '',
    }),

    created() {

        if(this.param.title)
            this.title = this.param.title
        this.selectedLabel = this.title

        if(this.param.field_name)
            this.fieldName = this.param.field_name

        if(this.param.current_value)
            this.currentValue = this.param.current_value

        this.setInitSelectedValue()

    },

    methods : {
        selectItem(item, value) {
            let field_name = '';
            if(this.fieldName)
                field_name = this.fieldName
            this.state   = false;
            this.selectedLabel = item[this.label]
            this.selectedValue = value;
            this.$emit('select_item', {item, value, field_name});
        },

        setInitSelectedValue(){
            if(!this.param.current_value)
                return false
            let curValue = this.param.current_value
            for(let i in this.items) {
                let item = this.items[i]
                if(item[this.name] == curValue) {
                    this.selectedLabel = item[this.label]
                    this.selectedValue = item[this.name]
                    return true
                }
            }
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
        //         .find('input')
        //         .attr('value', $(this).attr('id'));
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

<style scoped>

    .custom-select-container {
        border: 0px red solid;
        width: 240px;
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
        padding: 6px 10px 6px 6px;
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
        background: #fff;
        width: 100%;
        left: 0;
        margin-top: 1px;
        box-shadow: 0 1px 2px rgb(204, 204, 204);
        border-radius: 0 1px 2px 2px;
        overflow: hidden;
        display: block;
        /*max-height: 144px;*/
        overflow-y: auto;
        z-index: 9
    }
    .custom-dropdown .custom-dropdown-menu li {
        padding: 8px 6px 8px 6px;
        transition: all .2s ease-in-out;
        cursor: pointer
    }
    .custom-dropdown .custom-dropdown-menu {
        padding: 0;
        list-style: none
    }
    .custom-dropdown .custom-dropdown-menu li:hover {
        /*background-color: #f2f2f2*/
        background-color: #2e5e86;
        color:white;
    }
    .custom-dropdown .custom-dropdown-menu li:active {
        /*background-color: #e2e2e2*/
        background-color: #2e5e86
    }

    /*.custom-dropdown:hover .custom-dropdown-menu{*/
        /*display: block !important;*/
    /*}*/

</style>
