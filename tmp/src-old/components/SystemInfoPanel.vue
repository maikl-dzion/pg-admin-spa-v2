<template>
<div style="width: 100%; display: flex;" >
    <div style="margin-right: 10px" >
      <span class="badge badge-warning" style="font-size: 12px; font-style: italic; border-radius: 0px" >Пользователь:</span>
      <span class="badge badge-primary" style="font-size: 12px; border-radius: 0px" >{{$store.state.currentUser}}</span>
    </div>

    <div style="margin-right: 10px" >
      <span class="badge badge-warning" style="font-size: 12px; font-style: italic; border-radius: 0px" >База:</span>
      <span class="badge badge-primary" style="font-size: 12px; border-radius: 0px" >{{$store.state.currentDb}}</span>
    </div>

<!--    <div v-if="$store.state.currentTable" style="margin-right: 10px">-->
<!--      <span class="badge badge-warning" style="font-size: 11px; font-style: italic" >Таблица:</span>-->
<!--      <span class="badge badge-primary" style="font-size: 11px" >{{$store.state.currentTable}}</span>-->
<!--    </div>-->

<!--    <div v-if="commonActionName" style="margin-right: 10px" >-->
<!--      <span class="badge badge-warning" style="font-size: 11px; font-style: italic" >Entity:</span>-->
<!--      <span class="badge badge-primary" style="font-size: 11px" >{{commonActionName}}</span>-->
<!--    </div>-->

</div>

</template>

<script>
export default {
   name: "SystemInfoPanel"
}
</script>

<style scoped>

</style>
