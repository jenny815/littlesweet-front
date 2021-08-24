<template lang="pug">
b-container.rounded.mt-5#login
  b-col.border-l
    h5 會員登入
  b-card.logincard.border.h
    b-row(no-gutters)
      b-col(md='6')
        img(src='../images/undraw_cookie_love_ulvn.png' style="width:100%" alt='Image')
      b-col.mt-5(md='6')
        b-card-body(title='')
          b-form(@submit.prevent="submit")
            b-form-group(
              label="帳號"
              label-for="input-account"
              :state="state.account"
              invalid-feedback="帳號長度限制為 4 到 20 個字"
            )
              b-form-input#input-account(
                v-model="form.account"
                type="text"
                required
                placeholder="請輸入帳號"
                :state="state.account"
              )
            b-form-group(
              label="密碼"
              label-for="input-password"
              :state="state.password"
              invalid-feedback="密碼長度限制為 4 到 20 個字"
            )
              b-form-input#input-password(
                v-model="form.password"
                type="password"
                required
                placeholder="請輸入密碼"
                :state="state.password"
              )
            .text-sm-right.text-center.mt-5.po.w-100
              b-btn.mb-3.mr-2.loginbg(variant="success" type="submit") 登入
              b-btn.mb-3(variant="secondary" type="reset") 重設
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  computed: {
    state () {
      const account = this.form.account
      const password = this.form.password
      return {
        account: account.length === 0 ? null : account.length >= 4 && account.length <= 20,
        password: password.length === 0 ? null : password.length >= 4 && password.length <= 20
      }
    }
  },
  methods: {
    reset () {
      this.form.account = ''
      this.form.password = ''
    },
    async submit () {
      try {
        const { data } = await this.axios.post('/users/login', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        this.$store.commit('login', data)
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message
        })
      }
    }
  }
}
</script>

<style>
@media (max-width:576px) {
  .h{
    height: 750px;
  }
}
@media (min-width:576px) {
  .h{
    height: 750px;
  }
}

@media (min-width:767px) {
  .h{
    height: 400px;
  }
}

@media (min-width: 992px) {
  #login{
    width: 70%;
  }
}
@media (min-width: 1200px) {
  #login{
    width: 60%;
  }
 .po{
  position: absolute;
  top: 65%;
  left: -5%;
}
}
#login{
  height: 100vh;
}
.border-l{
  border-left: 3px solid brown;
}
.loginbg{
  background: burlywood;
  border-color: burlywood;
}

</style>
