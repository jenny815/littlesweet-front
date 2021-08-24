<template lang="pug">
#app
  b-navbar.d-flex.justify-content-center(variant='light' type='light')
    b-navbar-brand.text-center(to='/')
      img(src='./images/logo2.png' style="width:15%;")
  b-navbar.text-secondary(toggleable='lg' variant='light')
   b-container.d-flex.justify-content-center
      b-navbar-toggle.ml-auto(target='nav-collapse')
      b-collapse.flewxgrow#nav-collapse(is-nav)
        b-navbar-nav
          b-nav-item.mr-5(to='/') 關於我們
          b-nav-item.mr-5(to='/products') 蛋糕品項
          b-nav-item.mr-5(to='/notice') 購物須知
          li.nav-item
            a.nav-link.mr-5(href='#contact') 聯絡我們
          b-nav-item.mr-5(v-if="user.islogin" to='/cart') 購物車
          b-nav-item.mr-5(v-if="user.islogin" to='/orders') 訂單
          b-nav-item-dropdown(text="會員")
            template(#button-content)
                font-awesome-icon(:icon='["fas", "user"]')
            b-dropdown-item(v-if="!user.islogin" to='/register') 註冊
            b-dropdown-item(v-if="!user.islogin"  to='/login') 登入
            b-dropdown-item(v-if="user.islogin" to='/member') 會員資料
            b-dropdown-item(v-if="user.islogin && user.isAdmin" to='/admin') 管理員管理
            b-dropdown-item(v-if="user.islogin" @click="logout") 登出
  router-view
  footer#contact.bg-light
    b-container(style="color:#A0522D")
      b-row.d-flex.flex-column.flex-lg-row.ml-5
        b-col.mt-4.col-3
          img.imgsize(src='./images/logo2.png' style="width:100%")
        b-col.mt-2.col-9
          b-row
           b-col.mt-3.col-12.col-lg-6
            h5.border-bottom.pb-1.ml-5 聯絡我們 Contact us
            ul.ulsize.lineHeight
              li
                font-awesome-icon.mr-1.ml-2(:icon='["fas", "phone-alt"]')
                span 06-258258
              li
                font-awesome-icon.mr-1.ml-2(:icon='["fas", "envelope"]')
                span dessert96589@gmail.com
              li
                font-awesome-icon.mr-1.ml-2(:icon='["fas", "map-marker-alt"]')
                span 台南市中西區文文路一段12號
              li
                font-awesome-icon.mr-1.ml-2(:icon='["fas", "clock"]')
                span 9:00am-16:00pm
           b-col.mt-3.ml-5.lineHeight
            h5.border-bottom.pb-1 社群 Community
            a(href="#")
             font-awesome-icon.ml-2(:icon='["fab","facebook-square"]' style="font-size:24px;color:rgb(24,119,242)" href="#")
            a(href="#")
             font-awesome-icon.ml-2(:icon='["fab","line"]' style="font-size:24px;color:rgb(0,185,0)")
            a(href="#")
             font-awesome-icon.ml-2(:icon='["fab","instagram-square"]' style="font-size:24px;color:rgb(193,53,132)")
        b-col.text-center.mt-5
          span(style="font-size:16px") 微甜蛋糕圖片皆來自網路，僅供學習使用
          h6 Copyright &copy; 微甜蛋糕
</template>

<script>
export default {
  name: 'App',
  methods: {
    async logout () {
      try {
        await this.axios.delete('/users/logout', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('logout')
        // $route 路由資訊 他是一個data $router 可以對$route 修改東西
        if (this.$route.path !== '/') this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '發生錯誤'
        })
      }
    }
  },
  async mounted () {
    if (this.$store.state.jwt.token.length === 0) return
    const diff = Date.now() - this.$store.state.jwt.received
    try {
      // 如果進入網頁時，距離收到 jwt 過了六天，重新取得一次新的 jwt
      // 1000 * 60 * 60 * 24 * 6 = 6 天的毫秒數
      if (diff > 1000 * 60 * 60 * 24 * 6) {
        const { data } = await this.axios.post('/users/extend', {}, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('extend', data.result)
      }
      // 進入網頁時重新取一次使用者資料
      const { data } = await this.axios.get('/users/', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.$store.commit('getinfo', data.result)
    } catch (error) {
      this.$store.commit('logout')
    }
  }
}
</script>

<style>
footer{
  margin-top: 200px;
}
.navbar-collapse{
  flex-grow: 0;
}

.navbar-light .navbar-nav .nav-link {
  color: rgb(111 77 34);
}
.navbar-light .navbar-nav .nav-link:hover {
  transform: scale(1.1);
  background: burlywood;
  color: white;
  box-shadow: 2px 2px 5px #C7AA85;
}
.navbar{
  padding-bottom: 15px;
}
.ulsize{
  font-size: 16px;
}
body{
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 1.125rem;
  min-height: 100%
}
@media (max-width: 577px) {
  #contact{
    height: 60vh;
    width: 100%;
  }
  .imgsize{
    display: none;
  }
}
@media (max-width:990px) {
  .imgsize{
    display: none;
  }
}

@media (min-width: 578px) {
 #contact{
    height: 65vh;
  }
}
@media(min-width: 990px){
  #contact{
    height: 45vh;
  }
}
li{
  list-style: none;
}
</style>
