<template lang="pug">
#adminproducts
  b-btn.my-2.mr-3.col-2.ml-auto(block variant="primary" @click="$bvModal.show('modal-product')") 新增商品
  b-table(:items="products" :fields="fields" ref="productTable")
    template(#cell(image)="data")
      img(v-if="data.item" :src="data.item.image" style="height: 50px")
    template(#cell(sell)="data")
      | {{ data.item.sell ? 'v' : '' }}
    template(#cell(action)="data")
      b-btn(variant="success" @click="editProduct(data.index)") 編輯
  b-modal#modal-product(:title="form._id.length > 0 ? '編輯商品' : '新增商品'"
    ok-variant="success"
    ok-title="送出"
    cancel-variant="danger"
    cancel-title="取消"
    @ok="submitModal"
    @hidden="resetForm")
    b-form-group(
      label="商品名稱"
      label-for="input-name"
      :state="state.name"
      description="商品名稱長度限制為 1 個字以上"
      invalid-feedback="商品名稱格式不正確"
    )
      b-form-input#input-name(
        v-model="form.name"
        type="text"
        required
        placeholder="請輸入商品名稱"
        :state="state.name"
      )
    b-form-group(
      label="價格"
      label-for="input-price"
      :state="state.price"
      description="價格限制為 0 以上"
      invalid-feedback="價格格式不正確"
    )
      b-form-input#input-price(
        v-model.number="form.price"
        type="number"
        required
        placeholder="請輸入價格"
        :state="state.price"
      )
    b-form-group(
      label="說明"
      label-for="input-description"
    )
      b-form-textarea#input-description(
        v-model="form.description"
        type="text"
        placeholder="請輸入說明文字"
      )
    b-form-group(
      label="上架"
      label-for="input-sell"
    )
      b-form-radio(v-model="form.sell" :value="true") 上架
      b-form-radio(v-model="form.sell" :value="false") 下架
    img-inputer(v-model="form.image" theme="dark" size="normal" placeholder="點擊或拖曳選擇圖片")
    b-form-input(list='my-list-id' placeholder="請選擇分類" v-model="form.category")
    datalist#my-list-id
      option(v-for='category in categories') {{ category }}
</template>

<script>
export default {
  data () {
    return {
      products: [],
      fields: [
        {
          key: 'image',
          label: '圖片'
        },
        {
          key: 'name',
          label: '商品'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'description',
          label: '說明'
        },
        {
          key: 'sell',
          label: '上架'
        },
        {
          key: 'category',
          label: '分類'
        },
        {
          key: 'action',
          label: '操作'
        }
      ],
      submitDisable: false,
      form: {
        name: '',
        price: 0,
        description: '',
        sell: false,
        image: null,
        _id: '',
        category: ''
      },
      categories: ['蛋糕', '餅乾', '肉桂捲']
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        price: this.form.price === 0 ? null : this.form.price > 0
      }
    }
  },
  methods: {
    editProduct (index) {
      this.form = {
        name: this.products[index].name,
        price: this.products[index].price,
        description: this.products[index].description,
        sell: this.products[index].sell,
        image: this.products[index].image,
        _id: this.products[index]._id,
        category: this.products[index].category,
        index
      }
      this.$bvModal.show('modal-product')
    },
    resetForm (event) {
      if (this.submitDisable) event.preventDefault()
      this.form = {
        name: '',
        price: 0,
        description: '',
        sell: false,
        image: null,
        _id: ''
      }
    },
    async submitModal () {
      this.submitDisable = true
      try {
        const fd = new FormData()
        for (const key in this.form) {
          fd.append(key, this.form[key])
        }
        if (this.form._id.length === 0) {
          await this.axios.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
        } else {
          const { data } = await this.axios.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.products[this.form.index] = {
            name: this.form.name,
            price: this.form.price,
            description: this.form.description,
            sell: this.form.sell,
            image: `${process.env.VUE_APP_API}/files/${data.result.image}`,
            _id: this.form._id,
            category: this.form.category
          }
          this.$refs.productTable.refresh()
        }
        this.$bvModal.hide('modal-product')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
      this.submitDisable = false
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
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
  }
}
</script>
<style>
#adminproducts{
  /* border: 2px solid gray; */
  border-radius: 10px;
}

thead{
  background: rgb(228, 220, 193);
}

tr:nth-child(even){
  background: rgb(248, 243, 226);
}
</style>
