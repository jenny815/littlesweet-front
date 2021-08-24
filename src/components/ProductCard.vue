<template lang="pug">
b-card.product-card.mb-2.text-center.pcard(
  :title="product.name"
  :sub-title="'NT$'+product.price"
  img-top
  :img-src="product.image"
)
  b-card-text(style="white-space: pre-line;")
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.pcard{
  width: 100%;
}
.pcard:hover{
  transform: translateY(2px);
}
.pcard-text{
  color: gray;
}
.pcard-body{
  color: black;
}
</style>
