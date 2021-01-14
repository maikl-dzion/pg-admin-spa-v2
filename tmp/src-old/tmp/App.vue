<template>
  <div @mouseup="dragStop($event)" class="wrapper">

    <!--    <div class="preloader">-->
    <!--      <div class="lds-ripple">-->
    <!--        <div class="lds-pos"></div>-->
    <!--        <div class="lds-pos"></div>-->
    <!--      </div>-->
    <!--    </div>-->

    <AlertMessage></AlertMessage>
    <WarnMessage></WarnMessage>

    <!--  Header --
    <header id="header" class="fixed-top ">
      <div class="container-fluid">
        <div class="logo float-left">
          <h4 class="text-light">
            <router-link to="/" tag="a">
              <span>Pg-Admin-Interface</span>
            </router-link>
          </h4>

        </div>
        <nav class="nav-menu float-right d-none d-lg-block">
          <ul>
            <router-link v-for="(item) in routes"
                         tag="li" :to="item.path">
              <a>{{ item.title }}</a>
            </router-link>
          </ul>
        </nav>
      </div>
    </header>
    -- End Header -->

    <!--
    <main id="main" style="min-height: 790px; border: 0px red solid">
      <router-view/>
    </main>

    <Footer/>

    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
    -->

    <div id="main-wrapper"
         data-layout="vertical"
         data-navbarbg="skin6"
         data-sidebartype="full"
         data-sidebar-position="absolute"
         data-header-position="absolute"
         data-boxed-layout="full"  >

      <!-- Topbar header - style you can find in pages.scss -->
      <header class="topbar" data-navbarbg="skin6">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
          <div class="navbar-header" data-logobg="skin6" >
            <!-- Logo -->
            <a class="navbar-brand ml-4" href="index.html">
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


          <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
            <ul class="navbar-nav d-lg-none d-md-block ">
              <li class="nav-item">
                <a class="nav-toggler nav-link waves-effect waves-light text-white "
                   href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
              </li>
            </ul>
            <!-- ============================================================== -->
            <!-- toggle and nav items -->
            <!-- ============================================================== -->
            <ul class="navbar-nav mr-auto mt-md-0 ">
              <!-- ============================================================== -->
              <!-- Search -->
              <!-- ============================================================== -->

              <li class="nav-item search-box">
                <a class="nav-link text-muted" href="javascript:void(0)"><i class="ti-search"></i></a>
                <form class="app-search" style="display: none;">
                  <input type="text" class="form-control" placeholder="Search &amp; enter"> <a
                  class="srh-btn"><i class="ti-close"></i></a></form>
              </li>

            </ul>

            <!-- ============================================================== -->
            <!-- Right side toggle and nav items -->
            <!-- ============================================================== -->
            <ul class="navbar-nav">
              <!-- ============================================================== -->
              <!-- User profile and search -->
              <!-- ============================================================== -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href=""
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                  src="assets/images/users/1.jpg" alt="user" class="profile-pic m-r-10">Markarn
                  Doe</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <!-- End Topbar header -->

      <!-- Left Sidebar - style you can find in sidebar.scss  -->
      <aside class="left-sidebar" data-sidebarbg="skin6">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
          <!-- Sidebar navigation-->
          <nav class="sidebar-nav">
            <ul id="sidebarnav">
              <!-- User Profile-->
              <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                          href="index.html" aria-expanded="false"><i
                class="mdi mr-2 mdi-gauge"></i><span
                class="hide-menu">Dashboard</span></a></li>
              <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                          href="pages-profile.html" aria-expanded="false">
                <i class="mdi mr-2 mdi-account-check"></i><span class="hide-menu">Profile</span></a>
              </li>
              <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                          href="table-basic.html" aria-expanded="false"><i
                class="mdi mr-2 mdi-table"></i><span
                class="hide-menu">Table</span></a></li>
              <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                          href="icon-material.html" aria-expanded="false"><i
                class="mdi mr-2 mdi-emoticon"></i><span class="hide-menu">Icon</span></a></li>
              <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                          href="map-google.html" aria-expanded="false"><i
                class="mdi mr-2 mdi-earth"></i><span
                class="hide-menu">Google Map</span></a></li>
              <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                          href="pages-blank.html" aria-expanded="false"><i
                class="mdi mr-2 mdi-book-open-variant"></i><span class="hide-menu">Blank</span></a>
              </li>
              <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link"
                                          href="pages-error-404.html" aria-expanded="false"><i
                class="mdi mr-2 mdi-help-circle"></i><span
                class="hide-menu">Error 404</span></a>
              </li>
              <li class="text-center p-20 upgrade-btn">
                <a href="https://www.wrappixel.com/templates/materialpro/"
                   class="btn btn-warning text-white mt-4" target="_blank">Upgrade to
                  Pro</a>
              </li>
            </ul>

          </nav>
          <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
        <div class="sidebar-footer">
          <div class="row">
            <div class="col-4 link-wrap">
              <!-- item-->
              <a href="" class="link" data-toggle="tooltip" title="" data-original-title="Settings"><i
                class="ti-settings"></i></a>
            </div>
            <div class="col-4 link-wrap">
              <!-- item-->
              <a href="" class="link" data-toggle="tooltip" title="" data-original-title="Email"><i
                class="mdi mdi-gmail"></i></a>
            </div>
            <div class="col-4 link-wrap">
              <!-- item-->
              <a href="" class="link" data-toggle="tooltip" title="" data-original-title="Logout"><i
                class="mdi mdi-power"></i></a>
            </div>
          </div>
        </div>
      </aside>
      <!-- End Left Sidebar - style you can find in sidebar.scss  -->

      <!-- Page wrapper  -->
      <div class="page-wrapper">
        <!-- ============================================================== -->
        <!-- Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <div class="page-breadcrumb">
          <div class="row align-items-center">
            <div class="col-md-6 col-8 align-self-center">
              <h3 class="page-title mb-0 p-0">Dashboard</h3>
              <div class="d-flex align-items-center">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                  </ol>
                </nav>
              </div>
            </div>
            <div class="col-md-6 col-4 align-self-center">
              <div class="text-right upgrade-btn">
                <a href="https://www.wrappixel.com/templates/materialpro/"
                   class="btn btn-danger d-none d-md-inline-block text-white" target="_blank">Upgrade to
                  Pro</a>
              </div>
            </div>
          </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Bread crumb and right sidebar toggle -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="container-fluid">
          <!-- ============================================================== -->
          <!-- Sales chart -->
          <!-- ============================================================== -->

          <router-view/>


          <div class="row">
            <!-- Column -->
            <div class="col-lg-8 col-md-7">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex flex-wrap align-items-center">
                        <div>
                          <h3 class="card-title">Sales Overview</h3>
                          <h6 class="card-subtitle">Ample Admin Vs Pixel Admin</h6>
                        </div>
                        <div class="ml-lg-auto mx-sm-auto mx-lg-0">
                          <ul class="list-inline d-flex">
                            <li class="mr-4">
                              <h6 class="text-success"><i
                                class="fa fa-circle font-10 m-r-10 "></i>Ample</h6>
                            </li>
                            <li>
                              <h6 class="text-info"><i
                                class="fa fa-circle font-10 m-r-10"></i>Pixel</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="amp-pxl" style="height: 360px;">
                        <div class="chartist-tooltip"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-5">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Our Visitors </h3>
                  <h6 class="card-subtitle">Different Devices Used to Visit</h6>
                  <div id="visitor"
                       style="height: 290px; width: 100%; max-height: 290px; position: relative;"
                       class="c3">
                    <div class="c3-tooltip-container"
                         style="position: absolute; pointer-events: none; display: none;">
                    </div>
                  </div>
                </div>
                <div>
                  <hr class="m-t-0 m-b-0">
                </div>
                <div class="card-body text-center ">
                  <ul class="list-inline d-flex justify-content-center align-items-center mb-0">
                    <li class="mr-4">
                      <h6 class="text-info"><i class="fa fa-circle font-10 mr-2 "></i>Mobile</h6>
                    </li>
                    <li class="mr-4">
                      <h6 class=" text-primary"><i class="fa fa-circle font-10 mr-2"></i>Desktop</h6>
                    </li>
                    <li class="mr-4">
                      <h6 class=" text-success"><i class="fa fa-circle font-10 mr-2"></i>Tablet</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- ============================================================== -->
          <!-- Sales chart -->
          <!-- ============================================================== -->
          <div class="row">
            <!-- Column -->
            <div class="col-lg-4 col-xlg-3 col-md-5">
              <!-- Column -->
              <div class="card">
                <img class="card-img-top" src="assets/images/background/profile-bg.jpg"
                     alt="Card image cap">
                <div class="card-body little-profile text-center">
                  <div class="pro-img"><img src="assets/images/users/4.jpg" alt="user"></div>
                  <h3 class="mb-0">Angela Dominic</h3>
                  <p>Web Designer &amp; Developer</p>
                  <a href="javascript:void(0)"
                     class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded">Follow</a>
                  <div class="row text-center m-t-20">
                    <div class="col-lg-4 col-md-4 m-t-20">
                      <h3 class="m-b-0 font-light">1099</h3><small>Articles</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                      <h3 class="m-b-0 font-light">23,469</h3><small>Followers</small>
                    </div>
                    <div class="col-lg-4 col-md-4 m-t-20">
                      <h3 class="m-b-0 font-light">6035</h3><small>Following</small>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Column -->
              <div class="card">
                <div class="card-body bg-info">
                  <h4 class="text-white card-title">My Contacts</h4>
                  <h6 class="card-subtitle text-white m-b-0 op-5">Checkout my contacts here</h6>
                </div>
                <div class="card-body">
                  <div class="message-box contact-box">
                    <h2 class="add-ct-btn">
                      <button type="button"
                              class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+
                      </button>
                    </h2>
                    <div class="message-widget contact-widget">
                      <!-- Message -->
                      <a href="#" class="d-flex align-items-center">
                        <div class="user-img mb-0"><img src="assets/images/users/1.jpg"
                                                        alt="user" class="img-circle"> <span
                          class="profile-status online pull-right"></span></div>
                        <div class="mail-contnet">
                          <h5 class="mb-0">Pavan kumar</h5> <span
                          class="mail-desc">info@wrappixel.com</span>
                        </div>
                      </a>
                      <!-- Message -->
                      <a href="#" class="d-flex align-items-center">
                        <div class="user-img mb-0"><img src="assets/images/users/2.jpg"
                                                        alt="user" class="img-circle"> <span
                          class="profile-status busy pull-right"></span></div>
                        <div class="mail-contnet">
                          <h5 class="mb-0">Sonu Nigam</h5> <span
                          class="mail-desc">pamela1987@gmail.com</span>
                        </div>
                      </a>
                      <!-- Message -->
                      <a href="#" class="d-flex align-items-center">
                        <div class="user-img mb-0"><span class="round">A</span> <span
                          class="profile-status away pull-right"></span></div>
                        <div class="mail-contnet">
                          <h5 class="mb-0">Arijit Sinh</h5> <span
                          class="mail-desc">cruise1298.fiplip@gmail.com</span>
                        </div>
                      </a>
                      <!-- Message -->
                      <a href="#" class="d-flex align-items-center">
                        <div class="user-img mb-0"><img src="assets/images/users/4.jpg"
                                                        alt="user" class="img-circle"> <span
                          class="profile-status offline pull-right"></span></div>
                        <div class="mail-contnet">
                          <h5 class="mb-0">Pavan kumar</h5> <span
                          class="mail-desc">kat@gmail.com</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-xlg-9 col-md-7">
              <div class="card">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs profile-tab" role="tablist">
                  <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#home"
                                          role="tab">Activity</a>
                  </li>
                  <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#profile"
                                          role="tab">Profile</a></li>
                  <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#settings"
                                          role="tab">Settings</a>
                  </li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                  <div class="tab-pane active" id="home" role="tabpanel">
                    <div class="card-body">
                      <div class="profiletimeline border-left-0">
                        <div class="sl-item">
                          <div class="sl-left"><img src="assets/images/users/1.jpg" alt="user"
                                                    class="img-circle"></div>
                          <div class="sl-right">
                            <div><a href="#" class="link">John Doe</a> <span class="sl-date">5
                                                            minutes ago</span>
                              <p>assign a new task <a href="#"> Design weblayout</a></p>
                              <div class="row">
                                <div class="col-lg-3 col-md-6 m-b-20"><img
                                  src="assets/images/big/img1.jpg" alt="user"
                                  class="img-responsive radius w-100"></div>
                                <div class="col-lg-3 col-md-6 m-b-20"><img
                                  src="assets/images/big/img2.jpg" alt="user"
                                  class="img-responsive radius w-100"></div>
                                <div class="col-lg-3 col-md-6 m-b-20"><img
                                  src="assets/images/big/img3.jpg" alt="user"
                                  class="img-responsive radius w-100"></div>
                                <div class="col-lg-3 col-md-6 m-b-20"><img
                                  src="assets/images/big/img4.jpg" alt="user"
                                  class="img-responsive radius w-100"></div>
                              </div>
                              <div class="like-comm"><a href="javascript:void(0)"
                                                        class="link m-r-10">2
                                comment</a> <a href="javascript:void(0)"
                                               class="link m-r-10"><i
                                class="fa fa-heart text-danger"></i> 5 Love</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr>
                        <div class="sl-item">
                          <div class="sl-left"><img src="assets/images/users/2.jpg" alt="user"
                                                    class="img-circle"></div>
                          <div class="sl-right">
                            <div><a href="#" class="link">John Doe</a> <span class="sl-date">5
                                                            minutes ago</span>
                              <div class="m-t-20 row">
                                <div class="col-md-3 col-xs-12"><img
                                  src="assets/images/big/img1.jpg" alt="user"
                                  class="img-responsive w-100 radius"></div>
                                <div class="col-md-9 col-xs-12">
                                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Integer nec odio. Praesent libero. Sed cursus
                                    ante dapibus diam. </p> <a href="#"
                                                               class="btn btn-success text-white"> Design
                                  weblayout</a>
                                </div>
                              </div>
                              <div class="like-comm m-t-20"><a href="javascript:void(0)"
                                                               class="link m-r-10">2 comment</a> <a
                                href="javascript:void(0)" class="link m-r-10"><i
                                class="fa fa-heart text-danger"></i> 5 Love</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr>
                        <div class="sl-item">
                          <div class="sl-left"><img src="assets/images/users/3.jpg" alt="user"
                                                    class="img-circle"></div>
                          <div class="sl-right">
                            <div><a href="#" class="link">John Doe</a> <span class="sl-date">5
                                                            minutes ago</span>
                              <p class="m-t-10"> Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Integer nec odio. Praesent libero. Sed
                                cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                                elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                                Fusce nec tellus sed augue semper </p>
                            </div>
                            <div class="like-comm m-t-20"><a href="javascript:void(0)"
                                                             class="link m-r-10">2
                              comment</a> <a href="javascript:void(0)"
                                             class="link m-r-10"><i class="fa fa-heart text-danger"></i>
                              5 Love</a></div>
                          </div>
                        </div>
                        <hr>
                        <div class="sl-item">
                          <div class="sl-left"><img src="assets/images/users/4.jpg" alt="user"
                                                    class="img-circle"></div>
                          <div class="sl-right">
                            <div><a href="#" class="link">John Doe</a> <span class="sl-date">5
                                                            minutes ago</span>
                              <blockquote class="m-t-10">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--second tab-->
                  <div class="tab-pane" id="profile" role="tabpanel">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-3 col-xs-6 b-r"><strong>Full Name</strong>
                          <br>
                          <p class="text-muted">Johnathan Deo</p>
                        </div>
                        <div class="col-md-3 col-xs-6 b-r"><strong>Mobile</strong>
                          <br>
                          <p class="text-muted">(123) 456 7890</p>
                        </div>
                        <div class="col-md-3 col-xs-6 b-r"><strong>Email</strong>
                          <br>
                          <p class="text-muted">johnathan@admin.com</p>
                        </div>
                        <div class="col-md-3 col-xs-6"><strong>Location</strong>
                          <br>
                          <p class="text-muted">London</p>
                        </div>
                      </div>
                      <hr>
                      <p class="m-t-30">Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus
                        elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim.</p>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries </p>
                      <p>It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <h4 class="font-medium m-t-30">Skill Set</h4>
                      <hr>
                      <h5 class="d-flex m-t-30">Wordpress <span class="ml-auto">80%</span></h5>
                      <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="80"
                             aria-valuemin="0" aria-valuemax="100" style="width:80%; height:6px;">
                          <span class="sr-only">50% Complete</span></div>
                      </div>
                      <h5 class="d-flex m-t-30">HTML 5 <span class="ml-auto">90%</span></h5>
                      <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" aria-valuenow="90"
                             aria-valuemin="0" aria-valuemax="100" style="width:90%; height:6px;">
                          <span class="sr-only">50% Complete</span></div>
                      </div>
                      <h5 class="d-flex m-t-30">jQuery <span class="ml-auto">50%</span></h5>
                      <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="50"
                             aria-valuemin="0" aria-valuemax="100" style="width:50%; height:6px;">
                          <span class="sr-only">50% Complete</span></div>
                      </div>
                      <h5 class="d-flex m-t-30">Photoshop <span class="ml-auto">70%</span></h5>
                      <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="70"
                             aria-valuemin="0" aria-valuemax="100" style="width:70%; height:6px;">
                          <span class="sr-only">50% Complete</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="settings" role="tabpanel">
                    <div class="card-body">
                      <form class="form-horizontal form-material">
                        <div class="form-group">
                          <label class="col-md-12">Full Name</label>
                          <div class="col-md-12">
                            <input type="text" placeholder="Johnathan Doe"
                                   class="form-control form-control-line pl-0">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="example-email" class="col-md-12">Email</label>
                          <div class="col-md-12">
                            <input type="email" placeholder="johnathan@admin.com"
                                   class="form-control form-control-line pl-0" name="example-email"
                                   id="example-email">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-12">Password</label>
                          <div class="col-md-12">
                            <input type="password" value="password"
                                   class="form-control form-control-line pl-0">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-12">Phone No</label>
                          <div class="col-md-12">
                            <input type="text" placeholder="123 456 7890"
                                   class="form-control form-control-line pl-0">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-12">Message</label>
                          <div class="col-md-12">
                                                    <textarea rows="5"
                                                              class="form-control form-control-line pl-0"></textarea>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-sm-12">Select Country</label>
                          <div class="col-sm-12">
                            <select class="form-control form-control-line pl-0">
                              <option>London</option>
                              <option>India</option>
                              <option>Usa</option>
                              <option>Canada</option>
                              <option>Thailand</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-sm-12">
                            <button class="btn btn-success text-white">Update Profile</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ============================================================== -->
          <!-- Table -->
          <!-- ============================================================== -->

          <!-- ============================================================== -->
          <!-- Table -->
          <!-- ============================================================== -->
          <!-- ============================================================== -->
          <!-- Recent blogss -->
          <!-- ============================================================== -->

          <!-- ============================================================== -->
          <!-- Recent blogss -->
          <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- footer -->
        <!-- ============================================================== -->
        <footer class="footer"> © 2021</footer>
        <!-- ============================================================== -->
        <!-- End footer -->
        <!-- ============================================================== -->
      </div>
      <!-- End Page wrapper  -->

    </div>

  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  data: () => ({
    routes: [],
  }),
  components: {
    Footer
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

.nav-menu .router-link-exact-active {
  background: red;
}

.wrapper {
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


<!--<aside class="left-sidebar" data-sidebarbg="skin6">-->
<!--&lt;!&ndash; Sidebar scroll&ndash;&gt;-->
<!--<div class="scroll-sidebar">-->
<!--  &lt;!&ndash; Sidebar navigation&ndash;&gt;-->
<!--  <nav class="sidebar-nav">-->
<!--    <ul id="sidebarnav" class="in">-->
<!--      &lt;!&ndash; User Profile&ndash;&gt;-->
<!--      <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Personal</span></li>-->
<!--      <li class="sidebar-item selected"> <a class="sidebar-link has-arrow waves-effect waves-dark active" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-gauge"></i><span class="hide-menu">Dashboard </span></a>-->
<!--        <ul aria-expanded="false" class="collapse first-level in">-->
<!--          <li class="sidebar-item">-->
<!--            <a href="index.html" class="sidebar-link">-->
<!--              <i class="mdi mdi-adjust"></i>-->
<!--              <span class="hide-menu"> Dashboard 1 </span>-->
<!--            </a>-->
<!--          </li>-->
<!--          <li class="sidebar-item">-->
<!--            <a href="index2.html" class="sidebar-link">-->
<!--              <i class="mdi mdi-adjust"></i>-->
<!--              <span class="hide-menu"> Dashboard 2 </span>-->
<!--            </a>-->
<!--          </li>-->
<!--          <li class="sidebar-item active">-->
<!--            <a href="index3.html" class="sidebar-link active">-->
<!--              <i class="mdi mdi-adjust"></i>-->
<!--              <span class="hide-menu"> Dashboard 3 </span>-->
<!--            </a>-->
<!--          </li>-->
<!--          <li class="sidebar-item">-->
<!--            <a href="index4.html" class="sidebar-link">-->
<!--              <i class="mdi mdi-adjust"></i>-->
<!--              <span class="hide-menu"> Dashboard 4 </span>-->
<!--            </a>-->
<!--          </li>-->
<!--          <li class="sidebar-item">-->
<!--            <a href="index5.html" class="sidebar-link">-->
<!--              <i class="mdi mdi-adjust"></i>-->
<!--              <span class="hide-menu"> Dashboard 5 </span>-->
<!--            </a>-->
<!--          </li>-->
<!--          <li class="sidebar-item">-->
<!--            <a href="index6.html" class="sidebar-link">-->
<!--              <i class="mdi mdi-adjust"></i>-->
<!--              <span class="hide-menu"> Dashboard 6 </span>-->
<!--            </a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Apps</span></li>-->
<!--      <li class="sidebar-item"> <a class="sidebar-link two-column has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-bullseye"></i><span class="hide-menu">Apps </span></a>-->
<!--        <ul aria-expanded="false" class="collapse first-level">-->
<!--          <li class="sidebar-item"><a href="inbox-email.html" class="sidebar-link"><i class="mdi mdi-email"></i><span class="hide-menu"> Email </span></a></li>-->
<!--          <li class="sidebar-item"><a href="inbox-email-detail.html" class="sidebar-link"><i class="mdi mdi-email-alert"></i><span class="hide-menu"> Email Detail </span></a></li>-->
<!--          <li class="sidebar-item"><a href="inbox-email-compose.html" class="sidebar-link"><i class="mdi mdi-email-secure"></i><span class="hide-menu"> Email Compose </span></a></li>-->
<!--          <li class="sidebar-item"><a href="ticket-list.html" class="sidebar-link"><i class="mdi mdi-book-multiple"></i><span class="hide-menu"> Ticket List </span></a></li>-->
<!--          <li class="sidebar-item"><a href="ticket-detail.html" class="sidebar-link"><i class="mdi mdi-book-plus"></i><span class="hide-menu"> Ticket Detail </span></a></li>-->
<!--          <li class="sidebar-item"><a href="app-chats.html" class="sidebar-link"><i class="mdi mdi-comment-processing-outline"></i><span class="hide-menu"> Chats Apps </span></a></li>-->
<!--          <li class="sidebar-item"><a href="app-calendar.html" class="sidebar-link"><i class="mdi mdi-calendar"></i><span class="hide-menu"> Calender </span></a></li>-->
<!--          <li class="sidebar-item"><a href="app-taskboard.html" class="sidebar-link"><i class="mdi mdi-bulletin-board"></i><span class="hide-menu"> Taskboard </span></a></li>-->
<!--          <li class="sidebar-item"><a href="app-notes.html" class="sidebar-link"><i class="mdi mdi-arrange-bring-forward"></i><span class="hide-menu"> Notes </span></a></li>-->
<!--          <li class="sidebar-item"><a href="app-todo.html" class="sidebar-link"><i class="mdi mdi-clipboard-text"></i><span class="hide-menu"> Todo </span></a></li>-->
<!--          <li class="sidebar-item"><a href="app-invoice.html" class="sidebar-link"><i class="mdi mdi-book"></i><span class="hide-menu"> Invoice </span></a></li>-->
<!--          <li class="sidebar-item"><a href="app-contacts.html" class="sidebar-link"><i class="mdi  mdi-account-box"></i><span class="hide-menu"> Contact </span></a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">UI</span></li>-->
<!--      <li class="sidebar-item mega-dropdown"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Ui </span></a>-->
<!--        <ul aria-expanded="false" class="collapse first-level">-->
<!--          <li class="sidebar-item"><a href="ui-buttons.html" class="sidebar-link"><i class="mdi mdi-toggle-switch"></i><span class="hide-menu"> Buttons</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-modals.html" class="sidebar-link"><i class="mdi mdi-tablet"></i><span class="hide-menu"> Modals</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-tab.html" class="sidebar-link"><i class="mdi mdi-sort-variant"></i><span class="hide-menu"> Tab</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-tooltip-popover.html" class="sidebar-link"><i class="mdi mdi-image-filter-vintage"></i><span class="hide-menu"> Tooltip &amp; Popover</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-notification.html" class="sidebar-link"><i class="mdi mdi-message-bulleted"></i><span class="hide-menu"> Notification</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-progressbar.html" class="sidebar-link"><i class="mdi mdi-poll"></i><span class="hide-menu"> Progressbar</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-typography.html" class="sidebar-link"><i class="mdi mdi-format-line-spacing"></i><span class="hide-menu"> Typography</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-bootstrap.html" class="sidebar-link"><i class="mdi mdi-bootstrap"></i><span class="hide-menu"> Bootstrap Ui</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-breadcrumb.html" class="sidebar-link"><i class="mdi mdi-equal"></i><span class="hide-menu"> Breadcrumb</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-list-media.html" class="sidebar-link"><i class="mdi mdi-file-video"></i><span class="hide-menu"> List Media</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-grid.html" class="sidebar-link"><i class="mdi mdi-view-module"></i><span class="hide-menu"> Grid</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-carousel.html" class="sidebar-link"><i class="mdi mdi-view-carousel"></i><span class="hide-menu"> Carousel</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-scrollspy.html" class="sidebar-link"><i class="mdi mdi-application"></i><span class="hide-menu"> Scrollspy</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-toasts.html" class="sidebar-link"><i class="mdi-credit-card-scan"></i><span class="hide-menu"> Toasts</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-spinner.html" class="sidebar-link"><i class="mdi mdi-apple-safari"></i><span class="hide-menu"> Spinner</span></a></li>-->

<!--          <li class="sidebar-item"><a href="ui-cards.html" class="sidebar-link"><i class="mdi mdi-layers"></i><span class="hide-menu"> Basic Cards</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-card-customs.html" class="sidebar-link"><i class="mdi mdi-credit-card-scan"></i><span class="hide-menu">Custom Cards</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-card-weather.html" class="sidebar-link"><i class="mdi mdi-weather-fog"></i><span class="hide-menu">Weather Cards</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-card-draggable.html" class="sidebar-link"><i class="mdi mdi-bandcamp"></i><span class="hide-menu">Draggable Cards</span></a></li>-->
<!--          <li class="sidebar-item"><a href="component-sweetalert.html" class="sidebar-link"><i class="mdi mdi-layers"></i><span class="hide-menu"> Sweet Alert</span></a></li>-->
<!--          <li class="sidebar-item"><a href="component-nestable.html" class="sidebar-link"><i class="mdi mdi-credit-card-scan"></i><span class="hide-menu">Nestable</span></a></li>-->
<!--          <li class="sidebar-item"><a href="component-noui-slider.html" class="sidebar-link"><i class="mdi mdi-weather-fog"></i><span class="hide-menu">Noui slider</span></a></li>-->
<!--          <li class="sidebar-item"><a href="component-rating.html" class="sidebar-link"><i class="mdi mdi-bandcamp"></i><span class="hide-menu">Rating</span></a></li>-->
<!--          <li class="sidebar-item"><a href="component-toastr.html" class="sidebar-link"><i class="mdi mdi-poll"></i><span class="hide-menu">Toastr</span></a></li>-->
<!--          <li class="sidebar-item"><a href="widgets-apps.html" class="sidebar-link"><i class="mdi mdi-comment-processing-outline"></i><span class="hide-menu"> Apps Widgets  </span></a></li>-->
<!--          <li class="sidebar-item"><a href="widgets-data.html" class="sidebar-link"><i class="mdi mdi-calendar"></i><span class="hide-menu"> Data Widgets  </span></a></li>-->
<!--          <li class="sidebar-item"><a href="widgets-charts.html" class="sidebar-link"><i class="mdi mdi-bulletin-board"></i><span class="hide-menu"> Charts Widgets</span></a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Forms</span></li>-->
<!--      <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-file"></i><span class="hide-menu">Forms</span></a>-->
<!--        <ul aria-expanded="false" class="collapse first-level">-->
<!--          <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-collage"></i><span class="hide-menu">Form Elements</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="form-inputs.html" class="sidebar-link"><i class="mdi mdi-priority-low"></i><span class="hide-menu"> Forms Input</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-input-groups.html" class="sidebar-link"><i class="mdi mdi-rounded-corner"></i><span class="hide-menu"> Input Groups</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-input-grid.html" class="sidebar-link"><i class="mdi mdi-select-all"></i><span class="hide-menu"> Input Grid</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-checkbox-radio.html" class="sidebar-link"><i class="mdi mdi-shape-plus"></i><span class="hide-menu"> Checkboxes &amp; Radios</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-bootstrap-touchspin.html" class="sidebar-link"><i class="mdi mdi-switch"></i><span class="hide-menu"> Bootstrap Touchspin</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-bootstrap-switch.html" class="sidebar-link"><i class="mdi mdi-toggle-switch-off"></i><span class="hide-menu"> Bootstrap Switch</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-select2.html" class="sidebar-link"><i class="mdi mdi-relative-scale"></i><span class="hide-menu"> Select2</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-dual-listbox.html" class="sidebar-link"><i class="mdi mdi-tab-unselected"></i><span class="hide-menu"> Dual Listbox</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Form Layouts</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="form-basic.html" class="sidebar-link"><i class="mdi mdi-vector-difference-ba"></i><span class="hide-menu"> Basic Forms</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-material.html" class="sidebar-link"><i class="mdi mdi-vector-difference-ba"></i><span class="hide-menu"> Material Forms</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-horizontal.html" class="sidebar-link"><i class="mdi mdi-file-document-box"></i><span class="hide-menu"> Form Horizontal</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-actions.html" class="sidebar-link"><i class="mdi mdi-code-greater-than"></i><span class="hide-menu"> Form Actions</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-row-separator.html" class="sidebar-link"><i class="mdi mdi-code-equal"></i><span class="hide-menu"> Row Separator</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-bordered.html" class="sidebar-link"><i class="mdi mdi-flip-to-front"></i><span class="hide-menu"> Form Bordered</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-striped-row.html" class="sidebar-link"><i class="mdi mdi-content-duplicate"></i><span class="hide-menu"> Striped Rows</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-detail.html" class="sidebar-link"><i class="mdi mdi-cards-outline"></i><span class="hide-menu"> Form Detail</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-floating-input.html" class="sidebar-link"><i class="mdi mdi-cards-outline"></i><span class="hide-menu"> Form Float Input</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-code-equal"></i><span class="hide-menu">Form Addons</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="form-paginator.html" class="sidebar-link"><i class="mdi mdi-export"></i><span class="hide-menu"> Paginator</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-img-cropper.html" class="sidebar-link"><i class="mdi mdi-crop"></i><span class="hide-menu"> Image Cropper</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-dropzone.html" class="sidebar-link"><i class="mdi mdi-crosshairs-gps"></i><span class="hide-menu"> Dropzone</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-mask.html" class="sidebar-link"><i class="mdi mdi-box-shadow"></i><span class="hide-menu"> Form Mask</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-typeahead.html" class="sidebar-link"><i class="mdi mdi-cards-variant"></i><span class="hide-menu"> Form Typehead</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-alert-box"></i><span class="hide-menu">Form Validation</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="form-bootstrap-validation.html" class="sidebar-link"><i class="mdi mdi-credit-card-scan"></i><span class="hide-menu"> Bootstrap Validation</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-custom-validation.html" class="sidebar-link"><i class="mdi mdi-credit-card-plus"></i><span class="hide-menu"> Custom Validation</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-pencil-box-outline"></i><span class="hide-menu">Form Pickers</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="form-picker-colorpicker.html" class="sidebar-link"><i class="mdi mdi-calendar-plus"></i><span class="hide-menu"> Colorpicker</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-picker-datetimepicker.html" class="sidebar-link"><i class="mdi mdi-calendar-clock"></i><span class="hide-menu">  Datetimepicker</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-picker-bootstrap-rangepicker.html" class="sidebar-link"><i class="mdi mdi-calendar-range"></i><span class="hide-menu"> BT Rangepicker</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-picker-bootstrap-datepicker.html" class="sidebar-link"><i class="mdi mdi-calendar-check"></i><span class="hide-menu"> BT Datepicker</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-picker-material-datepicker.html" class="sidebar-link"><i class="mdi mdi-calendar-text"></i><span class="hide-menu">  Material Datepicker</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-dns"></i><span class="hide-menu">Form Editor</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="form-editor-ckeditor.html" class="sidebar-link"><i class="mdi mdi-drawing"></i><span class="hide-menu">Ck Editor</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-editor-quill.html" class="sidebar-link"><i class="mdi mdi-drupal"></i><span class="hide-menu">Quill Editor</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-editor-summernote.html" class="sidebar-link"><i class="mdi mdi-brightness-6"></i><span class="hide-menu">Summernote Editor</span></a></li>-->
<!--              <li class="sidebar-item"><a href="form-editor-tinymce.html" class="sidebar-link"><i class="mdi mdi-bowling"></i><span class="hide-menu">Tinymce Edtor</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="form-wizard.html" aria-expanded="false"><i class="mdi mdi-cube-send"></i><span class="hide-menu">Form Wizard</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="form-repeater.html" aria-expanded="false"><i class="mdi mdi-creation"></i><span class="hide-menu">Form Repeater</span></a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Tables</span></li>-->
<!--      <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-table"></i><span class="hide-menu">Tables</span></a>-->
<!--        <ul aria-expanded="false" class="collapse first-level">-->
<!--          <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-border-none"></i><span class="hide-menu">Bootstrap Tables</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="table-basic.html" class="sidebar-link"><i class="mdi mdi-border-all"></i><span class="hide-menu">Basic Table </span></a></li>-->
<!--              <li class="sidebar-item"><a href="table-dark-basic.html" class="sidebar-link"><i class="mdi mdi-border-left"></i><span class="hide-menu">Dark Basic Table </span></a></li>-->
<!--              <li class="sidebar-item"><a href="table-sizing.html" class="sidebar-link"><i class="mdi mdi-border-outside"></i><span class="hide-menu">Sizing Table </span></a></li>-->
<!--              <li class="sidebar-item"><a href="table-layout-coloured.html" class="sidebar-link"><i class="mdi mdi-border-bottom"></i><span class="hide-menu">Coloured Table Layout</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Datatables</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="table-datatable-basic.html" class="sidebar-link"><i class="mdi mdi-border-vertical"></i><span class="hide-menu"> Basic Initialisation</span></a></li>-->
<!--              <li class="sidebar-item"><a href="table-datatable-api.html" class="sidebar-link"><i class="mdi mdi-blur-linear"></i><span class="hide-menu"> API</span></a></li>-->
<!--              <li class="sidebar-item"><a href="table-datatable-advanced.html" class="sidebar-link"><i class="mdi mdi-border-style"></i><span class="hide-menu"> Advanced Initialisation</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="table-jsgrid.html" aria-expanded="false"><i class="mdi mdi-border-top"></i><span class="hide-menu">Table Jsgrid</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="table-responsive.html" aria-expanded="false"><i class="mdi mdi-border-style"></i><span class="hide-menu">Table Responsive</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="table-footable.html" aria-expanded="false"><i class="mdi mdi-tab-unselected"></i><span class="hide-menu">Table Footable</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="table-bootstrap.html" aria-expanded="false"><i class="mdi mdi-border-outside"></i><span class="hide-menu">Table Bootstrap</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="table-editable.html" aria-expanded="false"><i class="mdi mdi-table-edit"></i><span class="hide-menu">Table Editable</span></a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Charts</span></li>-->
<!--      <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark sidebar-link" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-image-filter-tilt-shift"></i><span class="hide-menu"> Charts</span></a>-->
<!--        <ul aria-expanded="false" class="collapse first-level">-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="chart-morris.html" aria-expanded="false"><i class="mdi mdi-image-filter-tilt-shift"></i><span class="hide-menu"> Morris Chart</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="chart-flot.html" aria-expanded="false"><i class="mdi mdi-image-filter-tilt-shift"></i><span class="hide-menu"> Flot Chart</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="chart-chart-js.html" aria-expanded="false"><i class="mdi mdi-svg"></i><span class="hide-menu">Chartjs</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="chart-sparkline.html" aria-expanded="false"><i class="mdi mdi-chart-histogram"></i><span class="hide-menu">Sparkline Chart</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="chart-chartist.html" aria-expanded="false"><i class="mdi mdi-blur"></i><span class="hide-menu">Chartis Chart</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-chemical-weapon"></i><span class="hide-menu">C3 Charts</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="chart-c3-axis.html" class="sidebar-link"><i class="mdi mdi-arrange-bring-to-front"></i> <span class="hide-menu">Axis Chart</span></a></li>-->
<!--              <li class="sidebar-item"><a href="chart-c3-bar.html" class="sidebar-link"><i class="mdi mdi-arrange-send-to-back"></i> <span class="hide-menu">Bar Chart</span></a></li>-->
<!--              <li class="sidebar-item"><a href="chart-c3-data.html" class="sidebar-link"><i class="mdi mdi-backup-restore"></i> <span class="hide-menu">Data Chart</span></a></li>-->
<!--              <li class="sidebar-item"><a href="chart-c3-line.html" class="sidebar-link"><i class="mdi mdi-backburger"></i> <span class="hide-menu">Line Chart</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-chart-areaspline"></i><span class="hide-menu">Echarts</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="chart-echart-basic.html" class="sidebar-link"><i class="mdi mdi-chart-line"></i> <span class="hide-menu">Basic Charts</span></a></li>-->
<!--              <li class="sidebar-item"><a href="chart-echart-bar.html" class="sidebar-link"><i class="mdi mdi-chart-scatterplot-hexbin"></i> <span class="hide-menu">Bar Chart</span></a></li>-->
<!--              <li class="sidebar-item"><a href="chart-echart-pie-doughnut.html" class="sidebar-link"><i class="mdi mdi-chart-pie"></i> <span class="hide-menu">Pie &amp; Doughnut Chart</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Sample Pages</span></li>-->
<!--      <li class="sidebar-item mega-dropdown"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-book-open-variant"></i><span class="hide-menu">Pages </span></a>-->
<!--        <ul aria-expanded="false" class="collapse first-level">-->
<!--          <li class="sidebar-item"><a href="authentication-login1.html" class="sidebar-link"><i class="mdi mdi-account-key"></i><span class="hide-menu"> Login </span></a></li>-->
<!--          <li class="sidebar-item"><a href="starter-kit.html" class="sidebar-link"><i class="mdi mdi-crop-free"></i> <span class="hide-menu">Starter Kit</span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-animation.html" class="sidebar-link"><i class="mdi mdi-debug-step-over"></i> <span class="hide-menu">Animation</span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-search-result.html" class="sidebar-link"><i class="mdi mdi-search-web"></i> <span class="hide-menu">Search Result</span></a></li>-->
<!--          <li class="sidebar-item"><a href="authentication-login2.html" class="sidebar-link"><i class="mdi mdi-account-key"></i><span class="hide-menu"> Login 2 </span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-gallery.html" class="sidebar-link"><i class="mdi mdi-camera-iris"></i> <span class="hide-menu">Gallery</span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-treeview.html" class="sidebar-link"><i class="mdi mdi-file-tree"></i> <span class="hide-menu">Treeview</span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-block-ui.html" class="sidebar-link"><i class="mdi mdi-codepen"></i> <span class="hide-menu">Block UI</span></a></li>-->
<!--          <li class="sidebar-item"><a href="authentication-register1.html" class="sidebar-link"><i class="mdi mdi-account-plus"></i><span class="hide-menu"> Register</span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-session-timeout.html" class="sidebar-link"><i class="mdi mdi-timer-off"></i> <span class="hide-menu">Session Timeout</span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-session-idle-timeout.html" class="sidebar-link"><i class="mdi mdi-timer-sand-empty"></i> <span class="hide-menu">Session Idle Timeout</span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-utility-classes.html" class="sidebar-link"><i class="mdi mdi-tune"></i> <span class="hide-menu">Helper Classes</span></a></li>-->
<!--          <li class="sidebar-item"><a href="authentication-register2.html" class="sidebar-link"><i class="mdi mdi-account-plus"></i><span class="hide-menu"> Register 2</span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-maintenance.html" class="sidebar-link"><i class="mdi mdi-camera-iris"></i> <span class="hide-menu">Maintenance Page</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-user-card.html" class="sidebar-link"><i class="mdi mdi-account-box"></i> <span class="hide-menu"> User Card </span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-profile.html" class="sidebar-link"><i class="mdi mdi-account-network"></i><span class="hide-menu"> User Profile</span></a></li>-->
<!--          <li class="sidebar-item"><a href="authentication-lockscreen.html" class="sidebar-link"><i class="mdi mdi-account-off"></i><span class="hide-menu"> Lockscreen</span></a></li>-->
<!--          <li class="sidebar-item"><a href="ui-user-contacts.html" class="sidebar-link"><i class="mdi mdi-account-star-variant"></i><span class="hide-menu"> User Contact</span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-invoice.html" class="sidebar-link"><i class="mdi mdi-vector-triangle"></i><span class="hide-menu"> Invoice Layout </span></a></li>-->
<!--          <li class="sidebar-item"><a href="pages-invoice-list.html" class="sidebar-link"><i class="mdi mdi-vector-rectangle"></i><span class="hide-menu"> Invoice List</span></a></li>-->
<!--          <li class="sidebar-item"><a href="authentication-recover-password.html" class="sidebar-link"><i class="mdi mdi-account-convert"></i><span class="hide-menu"> Recover password</span></a></li>-->
<!--          <li class="sidebar-item"><a href="map-google.html" class="sidebar-link"><i class="mdi mdi-google-maps"></i><span class="hide-menu"> Google Map </span></a></li>-->
<!--          <li class="sidebar-item"><a href="map-vector.html" class="sidebar-link"><i class="mdi mdi-map-marker-radius"></i><span class="hide-menu"> Vector Map</span></a></li>-->
<!--          <li class="sidebar-item"><a href="icon-material.html" class="sidebar-link"><i class="mdi mdi-emoticon"></i> <span class="hide-menu"> Material Icons </span></a></li>-->
<!--          <li class="sidebar-item"><a href="eco-products.html" class="sidebar-link"><i class="mdi mdi-cards-variant"></i> <span class="hide-menu">Eco - Products</span></a></li>-->
<!--          <li class="sidebar-item"><a href="icon-fontawesome.html" class="sidebar-link"><i class="mdi mdi-emoticon-cool"></i><span class="hide-menu"> Fontawesome Icons</span></a></li>-->
<!--          <li class="sidebar-item"><a href="icon-themify.html" class="sidebar-link"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu"> Themify Icons</span></a></li>-->
<!--          <li class="sidebar-item"><a href="icon-weather.html" class="sidebar-link"><i class="mdi mdi-weather-cloudy"></i><span class="hide-menu"> Weather Icons</span></a></li>-->
<!--          <li class="sidebar-item"><a href="eco-products-cart.html" class="sidebar-link"><i class="mdi mdi-cart"></i> <span class="hide-menu">Eco- Products Cart</span></a></li>-->
<!--          <li class="sidebar-item"><a href="icon-simple-lineicon.html" class="sidebar-link"><i class="mdi mdi mdi-image-broken-variant"></i> <span class="hide-menu"> Simple Line icons</span></a></li>-->
<!--          <li class="sidebar-item"><a href="icon-flag.html" class="sidebar-link"><i class="mdi mdi-flag-triangle"></i><span class="hide-menu"> Flag Icons</span></a></li>-->
<!--          <li class="sidebar-item"><a href="timeline-center.html" class="sidebar-link"><i class="mdi mdi-clock-fast"></i> <span class="hide-menu"> Center Timeline </span></a></li>-->
<!--          <li class="sidebar-item"><a href="eco-products-edit.html" class="sidebar-link"><i class="mdi mdi-cart-plus"></i> <span class="hide-menu">Eco- Products Edit</span></a></li>-->
<!--          <li class="sidebar-item"><a href="timeline-horizontal.html" class="sidebar-link"><i class="mdi mdi-clock-end"></i><span class="hide-menu"> Horizontal Timeline</span></a></li>-->
<!--          <li class="sidebar-item"><a href="timeline-left.html" class="sidebar-link"><i class="mdi mdi-clock-in"></i><span class="hide-menu"> Left Timeline</span></a></li>-->
<!--          <li class="sidebar-item"><a href="timeline-right.html" class="sidebar-link"><i class="mdi mdi-clock-start"></i><span class="hide-menu"> Right Timeline</span></a></li>-->
<!--          <li class="sidebar-item"><a href="eco-products-detail.html" class="sidebar-link"><i class="mdi mdi-camera-burst"></i> <span class="hide-menu">Eco- Product Details</span></a></li>-->
<!--          <li class="sidebar-item"><a href="error-400.html" class="sidebar-link"><i class="mdi mdi-alert-outline"></i> <span class="hide-menu"> Error 400 </span></a></li>-->
<!--          <li class="sidebar-item"><a href="error-403.html" class="sidebar-link"><i class="mdi mdi-alert-outline"></i><span class="hide-menu"> Error 403</span></a></li>-->
<!--          <li class="sidebar-item"><a href="error-404.html" class="sidebar-link"><i class="mdi mdi-alert-outline"></i><span class="hide-menu"> Error 404</span></a></li>-->
<!--          <li class="sidebar-item"><a href="eco-products-orders.html" class="sidebar-link"><i class="mdi mdi-chart-pie"></i> <span class="hide-menu">Eco- Product Orders</span></a></li>-->
<!--          <li class="sidebar-item"><a href="error-500.html" class="sidebar-link"><i class="mdi mdi-alert-outline"></i><span class="hide-menu"> Error 500</span></a></li>-->
<!--          <li class="sidebar-item"><a href="error-503.html" class="sidebar-link"><i class="mdi mdi-alert-outline"></i><span class="hide-menu"> Error 503</span></a></li>-->
<!--          <li class="sidebar-item"><a href="eco-products-checkout.html" class="sidebar-link"><i class="mdi mdi-clipboard-check"></i> <span class="hide-menu">Eco- Products Checkout</span></a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--      <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-arrange-send-backward"></i><span class="hide-menu">DD</span></a>-->
<!--        <ul aria-expanded="false" class="collapse first-level">-->
<!--          <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.1</span></a></li>-->
<!--          <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.2</span></a></li>-->
<!--          <li class="sidebar-item"> <a class="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-playlist-plus"></i> <span class="hide-menu">Menu 1.3</span></a>-->
<!--            <ul aria-expanded="false" class="collapse second-level">-->
<!--              <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.3.1</span></a></li>-->
<!--              <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.3.2</span></a></li>-->
<!--              <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.3.3</span></a></li>-->
<!--              <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.3.4</span></a></li>-->
<!--            </ul>-->
<!--          </li>-->
<!--          <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-playlist-check"></i><span class="hide-menu"> item 1.4</span></a></li>-->
<!--        </ul>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </nav>-->
<!--  &lt;!&ndash; End Sidebar navigation &ndash;&gt;-->
<!--</div>-->
<!--&lt;!&ndash; End Sidebar scroll&ndash;&gt;-->
<!--</aside>-->
