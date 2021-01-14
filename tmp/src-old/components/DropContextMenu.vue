<template>

  <div class="dropdown-menu mailbox dropdown-menu-right scale-up show">
    <ul class="dropdown-user list-style-none">
      <li>
        <div class="dw-user-box p-3 d-flex">
          <div class="u-img"><img src="assets/images/users/1.jpg" alt="user" class="rounded" width="80"></div>
          <div class="u-text ml-2">
            <h4 class="mb-0">Steave Jobs</h4>
            <p class="text-muted mb-1 font-14">varun@gmail.com</p>
            <a href="pages-profile.html" class="btn btn-rounded btn-danger btn-sm text-white d-inline-block">View
              Profile</a>
          </div>
        </div>
      </li>
      <li role="separator" class="dropdown-divider"></li>
      <li class="user-list"><a class="px-3 py-2" href="#"><i class="ti-user"></i> My Profile</a></li>
      <li class="user-list"><a class="px-3 py-2" href="#"><i class="ti-wallet"></i> My Balance</a></li>
      <li class="user-list"><a class="px-3 py-2" href="#"><i class="ti-email"></i> Inbox</a></li>
      <li role="separator" class="dropdown-divider"></li>
      <li class="user-list"><a class="px-3 py-2" href="#"><i class="ti-settings"></i> Account Setting</a></li>
      <li role="separator" class="dropdown-divider"></li>
      <li class="user-list"><a class="px-3 py-2" href="#"><i class="fa fa-power-off"></i> Logout</a></li>
    </ul>
  </div>

</template>

<script>
export default {
name: "DropContextMenu"
}
</script>

<style scoped>
    .dropdown-menu {
       position: relative;
    }
</style>
