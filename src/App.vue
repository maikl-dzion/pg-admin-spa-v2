<template>
  <div @mouseup="dragStop($event)" class="wrapper">

    <AlertMessage></AlertMessage>
    <WarnMessage></WarnMessage>
    <Preloader></Preloader>

    <div
       id="main-wrapper"
       data-layout="vertical"
       data-navbarbg="skin1"
       data-sidebartype="full"
       data-sidebar-position="absolute"
       data-header-position="absolute"
       data-boxed-layout="full" >

      <!--<DropContextMenu style="left:86%; top:45px;" />-->

       <header class="topbar" data-navbarbg="skin1">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
          <div class="navbar-header" data-logobg="skin1" >
            <!-- Logo -->
            <a class="navbar-brand ml-4" href="/">
              <!-- Logo icon -->
              <!--              <b class="logo-icon"><img src="assets/images/logo-light-icon.png" alt="homepage" class="dark-logo"/></b>-->
              <!-- Logo text -->
              <span class="logo-text" style="font-weight: bold; color:white">
                   PG-ADMIN
                <!--                  <img src="assets/images/logo-light-text.png" alt="homepage" class="dark-logo"/>-->
              </span>
            </a>

            <!-- toggle and nav items -->
            <!-- ============================================================== -->
            <a class="nav-toggler waves-effect waves-light text-white d-block d-md-none"
               href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
          </div>
          <!-- End Logo -->

          <div class="navbar-collapse collapse" id="navbarSupportedContent">

            <div style="background: none; position: absolute; width: 100%; left: 0px; top: 55px;
                        height: 28px; padding:3px; display: flex" >
                  <div style="width:100%;" ></div> <SystemInfoPanel style="width: 21%; "/>
            </div>

            <ul class="navbar-nav d-lg-none d-md-block ">
              <li class="nav-item">
                <a class="nav-toggler nav-link waves-effect waves-light text-white" ><i
                  class="ti-menu ti-close"></i></a>
              </li>
            </ul>

            <ul class="navbar-nav mr-auto mt-md-0" style="border:0px red solid">
              <li class="nav-item-1">

                <div class="container-fluid">
                  <nav class="nav-menu float-right d-none d-lg-block">
                    <ul style="display: flex">
                      <router-link
                        v-for="(item) in routes"
                        tag="li" :to="item.path" class="top-menu-item">
                          <a style="font-size: 17px">{{ item.title }}</a>
                      </router-link>
                    </ul>
                  </nav>
                </div>

              </li>
            </ul>

            <!-- RIGHT -->
            <ul class="navbar-nav" style="border:0px red solid">
              <li class="nav-item dropdown"><!-- User profile and search -->
                <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="">
                  <img src="assets/images/users/1.jpg" alt="user" class="profile-pic m-r-10"> DB Admin </a>
              </li>
            </ul>

          </div>
        </nav>
      </header>
      <!-- End Topbar header -->

      <router-view/>

    </div>

  </div>
</template>

<script>

import SystemInfoPanel from '@/components/SystemInfoPanel'

export default {

  name: 'App',
  data: () => ({
    routes: [],
  }),

  components : {
    SystemInfoPanel
  },

  created() {

    this.routes = this.getRoutesNav();

    this.getCurrentDbUser()   // currentDbUser
    this.getCurrentDatabase() // currentDatabase
    this.getCurConfig()       // получаем текущий конфиг
    this.getFileUsersConfig()

    this.storeFetch('fetchDbList')
    this.storeFetch('fetchUserList')
    this.storeFetch('fetchTableList')
    this.storeFetch('fetchDbRoles')

  },
}
</script>

<style>

.nav-menu .router-link-exact-active a {
  /*background: green;*/
  border-bottom: 2px white solid;
  color:white !important;
}

.wrapper {
}

.fixed-top {
  background: red;
  list-style: none;
}

.top-menu-item {

  list-style: none;
  margin: 0px 10px 0px 0px;
  padding: 0px;
  font-size: 15px;
  /*width: 180px;*/
  text-align: center;
  cursor: pointer;
  border-bottom: 2px #1e88e5 solid;

}

.top-menu-item a:hover {
  color:orange;
  border-bottom: 2px orange solid;
  /*background: #1a5099;*/
}

.top-menu-item a {
    color: gainsboro;
    font-weight: bold;
    width: 100%;
    display: block;
    padding: 4px 6px 4px 6px;
}


/*.current-config-container {*/
/*  background: #b8daff;*/
/*  display: flex;*/
/*  padding: 0px;*/
/*  position: absolute;*/
/*  !*right:10px;*!*/
/*}*/

/*.current-config-container div {*/
/*  margin: 1px;*/
/*  padding: 1px;*/
/*  border-bottom: 1px #326690 solid;*/
/*  font-size: 11px;*/
/*}*/

</style>

