<template lang="pug">
#orders
  b-container.mb-5
    b-table.mt-5(:items="orders" :fields="fields")
      template(#cell(products)="data")
        ul
          li(v-for="product in data.item.products") {{ product.product.name}} * {{ product.amount}}
      template(#cell(price)="data")
        ul
          li(v-for="product in data.item.products") {{ product.product.price * product.amount }}
      template(#cell(state)="data")
        h6 等待出貨
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {
      orders: [],
      fields: [
        {
          key: '_id',
          label: '訂單編號'
        },
        {
          key: 'date',
          label: '日期'
        },
        {
          key: 'products',
          label: '商品'
        },
        {
          key: 'price',
          label: '金額'
        },
        {
          key: 'state',
          label: '訂單狀態'
        }
      ]
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/users/orders', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.orders = data.result.map(order => {
        order.date = new Date(order.date).toLocaleString()
        return order
      })
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>

<style>
</style>
