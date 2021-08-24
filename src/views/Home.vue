<template>
<div>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide img-src="../images/cake1.jpg"></b-carousel-slide>
    <b-carousel-slide img-src="../images/tart.jpg"></b-carousel-slide>
    <b-carousel-slide img-src="../images/cake2.jpg"></b-carousel-slide>
  </b-carousel>
  <div id="abouts" class="mt-5 mb-5 ">
    <div class="container mt-5">
      <h3 class="pb-3 text-left mb-5 ml-3" style="color:rgba(111,77,34);"><font-awesome-icon icon="home"></font-awesome-icon>關於微甜</h3>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
          <img src="../images/aboutpic1.jpg" class="rounded i-shadow">
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6  d-flex flex-column justify-content-center">
          <div class="container aboutTxt mt-lg-2 mt-5 p-width lineHeight">
            <p>對於甜點，你是否也一樣喜歡吃，但卻害怕攝取過多的醣分?<br>微甜採用少油、少甜的方式製作甜點，在想吃甜點時，也能無負擔的享用!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="d-flex flex-column-reverse flex-lg-row">
        <div class="col-sm-12 col-md-12 col-lg-6  d-flex flex-column justify-content-center">
          <div class="container aboutTxt mt-lg-2 mt-5 p-width ">
            <p class="lineHeight">每一項甜點，我們都堅持，用最健康的食材下去製作，我們除了蛋糕，也開發了許多各式各樣美味的甜點，希望每一位吃到的客人，都能感受到微甜的用心!
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
          <img src="../images/aboutpic3.jpg"  class="rounded i-shadow">
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
.hometxt{
  border-bottom: 3px solid sienna;
  width: 25%;
  position: relative;
}
/* .hometxt::after{
  content: '';
  border-bottom: 3px solid sienna;
  width: 100%;
  position: absolute;
  top:110%;
  left: 0%;
} */
.img-fluid {
  max-width: 100%;
  height: 75vh;
}
.aboutTxt{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  line-height: 1.6;
  color: rgb(83, 81, 81);
}
.i-shadow{
  box-shadow: 0px 0px 15px rgba(0,0,0,0.4);
}
@media (max-width: 577px) {
  .img-fluid{
    max-width: 100%;
    height: 40vh;
  }
}
@media (min-width: 578px) {
  .img-fluid{
    max-width: 100%;
    height: 50vh;
  }
  .p-width{
    max-width: 75%;
  }
}
@media(min-width: 900px){
  .img-fluid{
    max-width: 100%;
    height: 75vh;
  }
}
.txt-width{
  width: 600px;
}
.lineHeight{
  line-height: 2.5rem;
}
</style>
