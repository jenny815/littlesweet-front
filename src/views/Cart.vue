<template lang="pug">
#cart
  b-container
    b-row(v-if="cart.length === 0" style="height:100vh")
      b-col.text-center.mt-5(cols="12")
        h1 你的購物車目前沒有商品
    b-row.mt-5(v-if="cart.length > 0")
      b-col
        h5 以下是您選購的商品
      b-col(cols="12")
        b-table(:items="cart" :fields="fields" ref="table")
          template(#cell(image)="data")
            img(v-if="data.item" :src="data.item.image" style="height: 50px")
          template(#cell(amount)="data")
            span(v-if="!data.item.edit") {{ data.item.amount }}
          template(#cell(totalPrice)="data")
            span(v-if="!data.item.edit") {{ data.item.amount * data.item.price }}
            b-form-input(v-else type="number" v-model.number="data.item.amountModel" :state="data.item.amountModel > 0")
          template(#cell(action)="data")
            b-btn(variant="success" @click="editProduct(data.index)" v-if="!data.item.edit") 修改數量
            b-btn(variant="success" @click="submitProduct(data.index)" v-if="data.item.edit") 確定
            b-btn(variant="danger" @click="cancelProduct(data.index)" v-if="data.item.edit") 取消
          template(#cell(del)="data")
            b-btn(variant="secondary" @click="delProduct(data.index)" v-if="!data.item.edit") 刪除
        hr
        b-col.text-right
          h5 總額 : ${{ totalprice }}
          h5 運費 : $150
          h5 應付金額 : ${{ totalprice + 150 }}
          b-btn.mt-3(variant="primary" @click="checkout") 結帳
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      cart: [],
      fields: [
        {
          key: 'image',
          label: '圖片'
        },
        {
          key: 'name',
          label: '品名'
        },
        {
          key: 'amount',
          label: '數量'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'totalPrice',
          label: '總額'
        },
        {
          key: 'action',
          label: '修改'
        },
        {
          key: 'del',
          label: '刪除'
        }
      ]
    }
  },
  computed: {
    totalprice () {
      return this.cart.length === 0 ? 0 : this.cart.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.price), 0)
    }
  },
  methods: {
    editProduct (index) {
      this.cart[index].edit = true
    },
    async delProduct (index) {
      try {
        await this.axios.patch('/users/cart', { product: this.cart[index]._id, amount: 0 }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.cart.splice(index, 1)
        this.$refs.table.refresh()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '刪除商品失敗'
        })
      }
    },
    async submitProduct (index) {
      try {
        await this.axios.patch('/users/cart', { product: this.cart[index]._id, amount: this.cart[index].amountModel }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.cart[index].amount = this.cart[index].amountModel
        this.cart[index].edit = false
        this.$refs.table.refresh()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '修改商品失敗'
        })
      }
    },
    cancelProduct (index) {
      this.cart[index].edit = false
      this.cart[index].amountModel = this.cart[index].amount
    },
    async checkout () {
      try {
        await this.axios.post('/users/checkout', {}, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$swal({
          icon: 'success',
          title: 'success',
          text: '結帳成功'
        })
        this.$router.push('/orders')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '結帳失敗'
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/users/cart', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.cart = data.result.map(item => {
        item = { ...item.product, amount: item.amount }
        item.image = `${process.env.VUE_APP_API}/files/${item.image}`
        item.edit = false
        item.amountModel = item.amount
        return item
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得購物車失敗'
      })
    }
  }
}
</script>

<style>
.table td, .table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    vertical-align: middle;
}
</style>
