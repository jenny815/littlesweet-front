<template lang="pug">
#products.mt-5
  b-container
    b-row
      b-col.mt-2.d-none.d-lg-block(cols="3")
        b-list-group.w-75.ml-5
          b-list-group-item(@click="category = ''" :active="category === ''" href="#") 全部商品
          b-list-group-item(@click="category = '蛋糕'" :active="category === '蛋糕'" href="#") 蛋糕
          b-list-group-item(@click="category = '餅乾'" :active="category === '餅乾'" href="#") 餅乾
          b-list-group-item(@click="category = '肉桂捲'" :active="category === '肉桂捲'" href="#") 肉桂捲
      b-col.mx-auto.mb-5(cols="9")
        b-row
          b-col.mt-2(cols="12" md="6" lg="4" v-for="product in filtered" :key="product._id")
            b-btn.card-bg.btn-light(:to="'/productpage/'+product._id")
              ProductCard(:product="product")
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Products',
  data () {
    return {
      products: [],
      category: ''
    }
  },
  components: {
    ProductCard
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products')
      this.products = data.result.map(product => {
        if (product.image) {
          product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        }
        return product
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  },
  computed: {
    filtered () {
      return this.products.filter(p => {
        return p.category.includes(this.category)
      })
    }
  }
}
</script>

<style>
.card-bg{
  background: none;
  border: none;
}
.card-bg:hover{
  background: none;
  border: none;
}
.card-bg:active{
  background: none;
  border: none;
}
.card{
  border: none;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: burlywood;
  border-color: burlywood;
}
</style>
