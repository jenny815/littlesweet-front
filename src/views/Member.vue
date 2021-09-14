<template lang="pug">
b-container.mt-5#member
  b-col.border-l
    h5 個人資料修改
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
            b-btn.mb-3(variant="success" type="submit") 修改
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
    editItem () {
      this.form = {
        account: this.account,
        password: this.password,
        email: this.email,
        phonenumber: this.phonenumber
      }
    },
    async submit () {
      try {
        await this.axios.patch('/users', this.form, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '修改成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '修改失敗'
        })
      }
    }
  }
}
</script>

<style>

@media (max-width: 577px) {
  #member{
    width: 100%;
  }
}
</script>

<style>

@media (max-width: 577px) {
  #member{
    width: 100%;
  }
}

@media (min-width: 992px) {
  #member{
    width: 100%;
  }
}

@media (min-width: 993px) {
  #member{
    width: 50%;
  }
}
</style>
