<template>
  <div class="icons">
    <a class="arrow-down">
      <svg
        @click="$emit('show-detail', id)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
        />
      </svg>
    </a>
    <a class="arrow-down">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style scoped>
.icons {
  top: 10px;
  right: 0px;
  background: #fff;
  padding: 10px 10px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 15%);
}
.product:hover .icons {
  right: 10px;
  opacity: 1;
  visibility: visible;
}
.arrow-down a {
  display: inline-block;
  background: #555555;
  padding: 0;
  color: #ffffff;
  border: none;
  line-height: 20px;
  height: 20px;
  width: 20px;
  font-size: 0;
  text-align: center;
  text-transform: capitalize;
  border-radius: 100%;
  margin-right: 5px;
}

.icons-fav:hover .icons {
  background-color: rgb(83, 81, 81);
}
.icons-fav:hover svg path {
  fill: rgb(253, 253, 253);
}
.arrow-down svg {
  width: 1.28571429em;
  text-align: center;
  cursor: pointer;
}
</style>
