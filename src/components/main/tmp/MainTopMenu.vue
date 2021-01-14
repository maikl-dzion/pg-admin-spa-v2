<template>

  <div class="page-breadcrumb" style="padding: 7px 7px 0px 7px; margin: 4px 4px 0px 0px;">
    <div class="row align-items-center">

      <div class="col-md-6 col-8 align-self-center">
        <div class="d-flex align-items-center">
          <!--- Меню сущностей --->
          <nav>
            <ul class="main-nav-ul" style="display: flex !important;">
              <li  v-for="(title, fname) in panelSettingsMenu" :key="fname"
                   @click="commonAction(fname, $event, 'menu-active')"
                   style="cursor: pointer; font-size: 14px; font-weight: bold;color: grey;"
                   class="breadcrumb-item main-nav-li-item" >{{ title }}</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "MainTopMenu"
}
</script>

<style scoped>

  .main-nav-li-item {
    padding:2px 5px 2px 5px;
    border-bottom: 2px white solid;
  }

  .main-nav-li-item:hover {
    background: gainsboro;
    color:orange !important;
  }

  .menu-active {
    border-bottom: 2px #1e88e5 solid ;
    color: #1e88e5 !important;
  }
  
</style>
