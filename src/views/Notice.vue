<template lang="pug">
#pug
  div
    img.imga.mb-5(src="../images/notice.jpg")
    b-container.mt-2.bgnotice
      b-row
        b-col.lineHeight(cols="12")
          h4 【訂購須知】
          ul
            li ◆ 宅配運費一律 $150，滿 3750 免運。
            li ◆ 蛋糕製作時間必較長，請提前預訂
            li ◆ 保存方式：當天食用；建議盡早食用完畢，以保最佳風味。
            li ◆ 付款後如需更動訂單，請於取貨日前三日告知。
            li ◆ 商品可能會因為配送而產生位移或變形皆為正常現象，不介意者歡迎預訂。
</template>

<style>
.imga{
  width: 100%;
  height: 25%;
  position: relative;
}
.bgnotice{
  background: rgba( 255, 255, 255, 0.40 );
  box-shadow: 0 8px 15px 0 rgba(190, 190, 196, 0.37);
  backdrop-filter: blur( 8.5px );
  -webkit-backdrop-filter: blur( 8.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>
