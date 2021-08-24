<template lang="pug">
#productpage.mt-5
  b-container
    b-overlay(:show="!sell")
      b-row
        b-col.text-center.col-md-6(cols="12")
          img.w-75.rounded(:src="image")
        b-col.col-md-6.text-center.text-md-left(cols="12")
          h3.mt-2 {{ name }}
          hr
          h5.lineHeight2(style="white-space: pre-line;") {{ description}}
          h5.mt-5 售價:NT${{ price }}
          b-form-input.w-25.mt-3.mx-auto.ml-lg-0(type="number" v-model.number="amount" :state="amountstate" size="sm")
          b-btn.mt-5.cartbg(@click="addcart") 加入購物車
            font-awesome-icon.ml-1(:icon='["fas", "shopping-cart"]')
      template(#overlay)
        h1 已下架
</template>

<script>
export default {
  name: 'ProductPage',
  data () {
    return {
      name: '',
      price: '',
      description: '',
      image: '',
      sell: true,
      amount: 0
    }
  },
  computed: {
    amountstate () {
      return this.amount === 0 ? null : this.amount > 0
    }
  },
  methods: {
    async addcart () {
      if (!this.amountstate) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請輸入正確數量'
        })
        return
      }

      if (this.$store.state.jwt.token.length === 0) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請先登入'
        })
        return
      }

      try {
        await this.axios.post('/users/cart', { product: this.$route.params.id, amount: this.amount }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '成功購物車'
        })
        this.$router.push('/products')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '加入購物車失敗'
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = `${process.env.VUE_APP_API}/files/${data.result.image}`
      this.sell = data.result.sell
      document.title = `${this.name}`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.cartbg{
  background: burlywood;
  border-color: burlywood;
}
.lineHeight2{
  line-height: 2rem;
  color: rgb(92, 72, 54);
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
