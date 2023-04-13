<template>
  <div class="shiping-retunrpolicy">
    <h1 class="title">Shipping & Returns</h1>
    <div class="shiping-section">
      <h1>Shipping Policy</h1>
      <p>
        At Chic Avenue, we strive to provide fast and efficient shipping services for all fashion
        and clothes orders. Orders are typically processed and shipped within 1-2 business days, and
        shipping times may vary depending on the destination. We offer various shipping options at
        checkout to best accommodate our customers' needs.
      </p>
    </div>
    <div class="return-section">
      <h1>Return & Refund Policy</h1>
      <p>
        At Chic Avenue, we want you to be completely satisfied with your purchase. If for any reason
        you are not, we offer a 30-day return policy for items in their original condition with tags
        attached. Refunds will be issued to the original payment method used. Final sale and
        clearance items are not eligible for return or exchange.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo({
      top: 0
    })
  }
}
</script>

<style scoped>
.shiping-retunrpolicy {
  margin: 7rem;
}
.title {
  font: normal normal bold 50px/1.4em poppins-extralight, poppins, sans-serif;
  line-height: 1.2em;
  text-align: center;
  font-size: 50px;
  letter-spacing: 0.1em;
  font-weight: 100;
}
.shiping-section {
  margin: auto;
  margin-top: 5rem;
  width: 70%;
}
.return-section {
  width: 70%;
  margin: auto;
  margin-top: 6rem;
}
h1 {
  text-align: center;
  font-size: 40px;
}
p {
  margin-top: 2rem;
  font-size: 18px;
}
</style>
