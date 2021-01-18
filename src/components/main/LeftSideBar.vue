<template>
<div>
<!--    <pre>{{getCommonItemName}}</pre>-->
<!--    <pre>{{items}}</pre>-->
    <ul id="sidebarnav">

  <!--    <li class="sidebar-item" style="text-align: left; font-weight: bold; font-style: italic">@{{ title }}</li>-->

      <li v-for="(item) in items" :key="item[title]"
          class="sidebar-item" style="display: flex">

          <!--- Выбор элемента --->
          <template v-if="item[title] == getCommonItemName">
              <a @click="selectEmit(item, $event)"
                 class="sidebar-link waves-effect waves-dark sidebar-link leftPanelContentBox leftPanelContentBoxActive"
                 style="width:85%; padding:0px; margin:0px; border-radius: 0px">
                  <div class="leftPanelIcon"><i :class="'mdi mr-2 ' + icon"></i></div>
                  <div class="hide-menu leftPanelTitle" style="">{{ item[title] }}</div>
              </a>
          </template>
          <template v-else >
              <a @click="selectEmit(item, $event)"
                 class="sidebar-link waves-effect waves-dark sidebar-link leftPanelContentBox"
                 style="width:85%; padding:0px; margin:0px; border-radius: 0px">
                  <div class="leftPanelIcon"><i :class="'mdi mr-2 ' + icon"></i></div>
                  <div class="hide-menu leftPanelTitle" style="">{{ item[title] }}</div>
              </a>
          </template>

          <!--- Удаление --->
          <div class="hide-menu leftPanelDeleteBox" title="Удалить"
               style="width:15%; color:red; padding:0px; margin:0px; text-align: center; cursor: pointer; border-bottom:1px gainsboro solid">
              <template v-if="rulesDeleteItem(item, action)">
                <i @click="deleteEmit(item[title], $event)"
                   class="mdi mr-2 mdi-delete deleteBoxIcon"
                   style="color:red; font-size: 20px; margin-left:17%"></i>
              </template>
          </div>

      </li>

  </ul>
</div>
</template>

<script>
export default {
  name: 'LefSidetBar',
  props: ['items', 'icon', 'title', 'action'],

  data: () => ({
    activeClass: 'leftPanelContentBoxActive'
  }),

  computed: {
      getCommonItemName() {
         return this.$store.getters.getCommonItemName;
      },
  },

  methods: {

    selectEmit(item, event) {
      this.setActiveElement(event, this.activeClass)
      this.$emit('select_item', item)
    },

    deleteEmit(name, event) {
      this.$emit('delete_item', name)
    }

  }
}
</script>

<style scoped>

.controlLeftPanelUl {
  border: 0px gainsboro solid;
  width: 100%;
  list-style: none;
  padding: 0px;
}

.leftPanelLi {
  display: flex;
  width: 100%;
}

.leftPanelContentBox {
  width: 90%;
  display: flex;
  cursor: pointer;
}

.leftPanelContentBoxActive {
  color: white !important;
  border-radius: 0px;
  border-bottom: 1px #326690 solid;
  background: cornflowerblue;
}

.leftPanelDeleteBox,
.leftPanelDeleteBoxEmpty {
  width: 50px;
  border: 1px beige solid;
  margin: 2px;
  cursor: pointer;
  text-align: center
}

.leftPanelDeleteBoxEmpty {
  cursor: default;
}

.leftPanelContentBox:hover {
  color: mediumseagreen;
  border-bottom: 1px #326690 solid;
  /*background: ghostwhite;*/
}

.leftPanelDeleteBox:hover {
  /*!*background: red;*!*/
  /*opacity: 0.5;*/
  /*color:gainsboro !important;*/
  /*border: 1px red solid;*/
}

.deleteBoxIcon:hover {
  /*opacity: 0.5;*/
  /*color:gainsboro !important;*/
  border-top: 2px red solid;
}

.leftPanelIcon,
.leftPanelTitle {
  border: 0px green solid;
  margin: 2px;
}

.leftPanelIcon {
  width: 50px;

  text-align: center;
}

.leftPanelTitle {
  width: 80%;
}

.myCustomIcon {
  color: mediumseagreen;
}

</style>
