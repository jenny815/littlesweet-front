<template lang="pug">
#admin
  b-container.d-flex.justify-content-center.mt-5
    b-row.rowwidth
      b-col.d-flex.justify-content-center(cols="12")
        b-nav.w-50(pills justified)
          b-nav-item(to="/admin/products" exact exact-active-class="active") 商品管理
          b-nav-item(to="/admin/orders" exact exact-active-class="active") 訂單管理
      hr
      b-col(cols="12")
        router-view
</template>

<style>
.rowwidth{
  width: 100%;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
  color: rgb(255, 255, 255);
  background-color: #ca890f;
  border-radius: 10px;
}
#admin{
  height: 200vh;
}
</style>
