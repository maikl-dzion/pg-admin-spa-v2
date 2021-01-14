<template>
    <div class="control__form_wrapper">

        <!--<table class="table_col">-->
            <!--<colgroup>-->
                <!--<col style="background:#C7DAF0;">-->
            <!--</colgroup>-->
            <!--<tr>-->
                <!--<th>Имя поля</th>-->
                <!--<th>Значение</th>-->
            <!--</tr>-->
            <!--<tr>-->
                <!--<td>Scary Movie</td>-->
                <!--<td>-->
                    <!--<input value="Indiana Jones" class="input-class" type="text" />-->
                <!--</td>-->
            <!--</tr>-->
        <!--</table>-->

        <table class="table_col">
            <colgroup>
                <col style="background:#C7DAF0;">
            </colgroup>
            <tr>
                <th>Имя поля</th>
                <th>Значение</th>
            </tr>
            <tr v-for="(value, fname) in item" :key="fname" >
                <td class="td-field-name" >
                    <div>{{fname}}</div>
                </td>
                <td class="td-field-value"><div>
                    <template v-if="isField(fname)">
                        <input @input="inputEmit(item, fname)" v-model="item[fname]"
                               class="input-text-class" type="text"/>
                    </template>
                    <template v-else >
                        <input :value="item[fname]"
                               class="input-text-class" type="text" disabled="true" />
                    </template>
                </div></td>
            </tr>
        </table>

        <!--<div v-for="(value, fname) in item"-->
             <!--class="control__form_simple">-->
            <!--<div class="form__label">-->
                <!--{{fname}}-->
            <!--</div>-->
            <!--<div class="form__value">-->
                <!--<template v-if="isField(fname)">-->
                    <!--<input @input="inputEmit(item, fname)" v-model="item[fname]"-->
                           <!--class="form__input_text" type="text"/>-->
                <!--</template>-->
                <!--<template v-else >-->
                    <!--<input :value="item[fname]"-->
                           <!--class="form__input_text" type="text" disabled="true" />-->
                <!--</template>-->
            <!--</div>-->
        <!--</div>-->

    </div>
</template>

<script>
export default {
  name: 'BaseControlSimpleForm',
  props: ['item', 'name', 'fields'],
  methods: {
    inputEmit (item, fname) {
      this.$emit('input_item', { item, fname })
    },

    isField (fname) {
      if (this.fields.indexOf(fname) == -1) { return false }
      return true
    }
  }
}
</script>

<style scoped>
    .control__form_wrapper {
        width: 100%;
    }

    .control__form_simple {
        border: 0px red solid;
        width: 100%;
        display: flex;
    }

    .form__label,
    .form__value {
        border: 1px gainsboro solid;
        padding:4px;
    }

    .form__label {
        width:30%;
    }

    .form__value {
        width:70%;
    }

    .form__input_text {

    }

    .input-text-class {
       width: 100%;
       outline:0px #b0bed9 solid;
       border:0px red solid;
       border-bottom:1px gainsboro solid;
       height: 40px;
    }

    .table_col {
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 14px;
        width: 100%;
        background: white;
        text-align: left;
        border-collapse: collapse;
        color: #3E4347;
    }
    .table_col th:first-child, .table_col td:first-child {
        color: #F5F6F6;
        border-left: none;
    }
    .table_col th {
        font-weight: normal;
        border-bottom: 2px solid #b0bed9 ;
        border-right: 20px solid white;
        border-left: 20px solid white;
        padding: 8px 10px;
    }
    .table_col td {
        border-right: 20px solid white;
        border-left: 20px solid white;
        padding: 8px 6px;
        /*color: #8b8e91;*/
        color: grey !important;
        border-bottom: 1px grey solid;
    }

    .td-field-name {
        width: 250px;
        border-bottom:1px #b0bed9 solid !important;
    }

    .td-field-value{
        padding:0px!important;
        border:0px red solid !important;
    }

    .td-field-name div{
        width: 100%;
        border:0px red solid
    }

    .td-field-value div{
        border:0px red solid
    }
</style>
