<template>
  <div class="about">
    <transition name="fade">
      <div class="story-content">
        <h1>Our Story</h1>
        <p>
          "Chic Avenue" was a fashion and clothing store that created a website offering a
          user-friendly experience, free shipping, and a simple return policy. The website quickly
          became popular, attracting customers from all over the world. The store continued to add
          new fashion items and features to the website, keeping up with the latest fashion trends.
        </p>
        <div class="story-images">
          <div class="image">
            <img
              src="/152248944-a-woman-works-on-a-sewing-machine-seamstress-sews-white-curtains-close-up-view.png"
              alt=""
            />
          </div>
          <div class="image">
            <img
              src="/-2fstorage-2f3964-3438-2fdcim-2fcamera-2fimg-20220925-100337-jpg-500x500.png"
              alt=""
            />
          </div>
          <div class="image">
            <img src="/istockphoto-1333742146-170667a.png" alt="" />
          </div>
        </div>
      </div>
    </transition>
    <div class="sustainability-content">
      <div class="-ustainability-images">
        <img src="/GettyImages-1060254952.png" alt="" />
      </div>
      <div class="content">
        <h1>Sustainability</h1>
        <p>
          Chic Avenue shopping store is committed to promoting sustainable fashion by sourcing
          sustainable materials, using eco-friendly packaging, and reducing waste. The store
          encourages customers to purchase quality pieces that are made to last and partners with
          eco-conscious designers and brands. Chic Avenue aims to make sustainable fashion
          accessible to everyone and reduce its impact on the environment.
        </p>
      </div>
    </div>
    <div class="sustainability-content">
      <div class="content">
        <h1>Our Factories</h1>
        <p>
          Chic Avenue operates modern factories to produce high-quality clothing items and
          accessories for their fashion store. They prioritize ethical and sustainable practices,
          ensuring the safety and well-being of workers and minimizing environmental impact. Their
          factories play a crucial role in reflecting the company's commitment to quality, ethics,
          and sustainability.
        </p>
      </div>
      <div class="-ustainability-images">
        <img src="/GettyImages-1147463141.png" alt="" />
      </div>
    </div>

    <div class="sustainability-content">
      <div class="-ustainability-images">
        <img src="/GettyImages-110883483.png" alt="" />
      </div>
      <div class="content">
        <h1>Our Fabrics</h1>
        <p>
          Fabrics for Chic Avenue shopping store offers a wide range of stylish and high-quality
          fabrics to suit every fashion need. From luxurious silk to breathable cotton, their
          collection includes various textures, patterns, and colors. Whether you're looking for
          formal wear or casual attire, Fabrics for Chic Avenue has got you covered.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {
    window.scrollTo({
      top: 0
    })
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 1rem;
  font-size: 32px;
}
p {
  text-align: center;
  margin: auto;
  width: 70%;
}
.story-content {
  margin-top: 4rem;
}
.story-images {
  display: flex;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.image {
  overflow: hidden;
  width: 33%;
  height: 400px;
  margin-left: 3px;
}
.image img {
  width: 100%;
  height: 400px;
  transition: transform 0.8s ease-in-out;
}
.image img:hover {
  transform: scale(1.1);
}
.sustainability-content {
  margin: 3rem;
  display: flex;
}
.content {
  height: max-content;
  margin-top: 5rem;
}
.fade-enter-from {
  opacity: 0;
  transform: rotateY(-40px);
}
.fade-enter-to {
  opacity: 1;
  transform: rotateY(0);
}
.fade-enter-active {
  transition: all 0.6s ease;
}
.about-enter-active {
  transition: all 0.3s ease-out;
}

.about-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.about-enter-from,
.about-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>
