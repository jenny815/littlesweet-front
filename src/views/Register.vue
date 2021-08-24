<template lang="pug">
b-container.mt-5#register
  b-col.border-l
    h5 帳號註冊
  b-container.rounded.border.mb-5
    b-row.justify-content-center
      b-col.mt-5(cols="10 col-lg-10")
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
          b-form-group(
            label="信箱"
            label-for="input-email"
            :state="state.email"
            invalid-feedback="請輸入有效的信箱"
          )
            b-form-input#input-email(
              v-model="form.email"
              type="text"
              required
              placeholder="請輸入信箱"
              :state="state.email"
            )
          b-form-group(
            label="電話"
            label-for="input-phonenumber"
            :state="state.phonenumber"
            invalid-feedback="請輸入有效的電話"
          )
            b-form-input#input-phonenumber(
              v-model="form.phonenumber"
              type="text"
              required
              placeholder="請輸入電話"
              :state="state.phonenumber"
            )
          .text-sm-right.text-center.mt-5
            b-btn.mb-3.mr-2.regbg(variant="success" type="submit") 註冊
            b-btn.mb-3(variant="secondary" type="reset") 重設
</template>

<script>
import isEmail from 'validator/es/lib/isEmail'

export default {
  data () {
    return {
      form: {
        account: '',
        password: '',
        email: '',
        phonenumber: ''
      }
    }
  },
  computed: {
    state () {
      const account = this.form.account
      const password = this.form.password
      const email = this.form.email
      const phonenumber = this.form.phonenumber
      return {
        account: account.length === 0 ? null : account.length >= 4 && account.length <= 20,
        password: password.length === 0 ? null : password.length >= 4 && password.length <= 20,
        email: email.length === 0 ? null : isEmail(email),
        phonenumber: phonenumber.length === 0 ? null : phonenumber.length >= 9 && phonenumber.length <= 20
      }
    }
  },
  methods: {
    reset () {
      this.form.account = ''
      this.form.password = ''
      this.form.email = ''
      this.form.phonenumber = ''
    },
    async submit () {
      try {
        await this.axios.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗成功',
          text: '註冊失敗'
        })
      }
    }
  }
}
</script>

<style>

@media (max-width: 577px) {
  #register{
    width: 100%;
  }
}

@media (min-width: 992px) {
  #register{
    width: 100%;
  }
}

@media (min-width: 993px) {
  #register{
    width: 50%;
  }
}
.regbg{
  background: burlywood;
  border-color: burlywood;
}
</style>
