<template>
  <div class="home pt-16 lg:pt-0">
    <Carousel />
    <section class="mt-10">
      <h2 class="text-2xl text-left">Featured categories</h2>
      <div class="flex mt-2 overflow-x-hidden overflow-y-none pb-4">
        <Category
          query="macbook"
          image-src="/images/macbook.jpg"
          title="MacBook"
        />
        <Category
          query="iphone"
          image-src="/images/iphone.jpg"
          title="iPhone"
        />
        <Category query="ipad" image-src="/images/ipad.jpg" title="iPad" />
        <Category query="imac" image-src="/images/imac.jpg" title="iMac" />
        <Category
          query="computers%20and%20laptops"
          image-src="/images/computer.jpg"
          title="Computers & Laptops"
        />
        <Category
          query="phones"
          image-src="/images/phones.jpg"
          title="Phones"
        />
        <Category query="tv" image-src="/images/tv.jpg" title="TV" />
      </div>
    </section>
    <section class="
      bg-white mt-10 p-8 flex justify-between
      text-left items-center
    ">
      <div>
        <h1 class="text-3xl font-bold leading-snug">
          Welcome to <span class="font-extrabold">Eclatax</span>,<br>
          the market of broken devices.
        </h1>
        <p class="mt-2">
          Deserunt voluptate irure anim enim eu cillum. Cillum tempor sunt ad
          occaecat aliquip officia officia consectetur consequat nisi elit veniam.
          Aliquip do enim excepteur do. Occaecat proident dolor cillum in proident
          esse tempor. Excepteur magna amet ut commodo ipsum do mollit quis dolor
          in nulla consectetur. Dolor anim qui ex sunt commodo in aliqua fugiat
          cillum mollit ut pariatur elit aliqua. Culpa aliqua ad duis exercitation
          ut eu nostrud est. Officia deserunt ea incididunt ea occaecat excepteur
          eiusmod. Esse minim elit in dolor consectetur minim cillum excepteur
          Lorem excepteur qui irure proident voluptate. Ea id excepteur dolor amet
          irure occaecat dolor aliquip excepteur.
        </p>
      </div>
      <img id="broken-device" class="hidden lg:block" src="/images/broken_device.jpg">
    </section>

    <section class="
      bg-gray-900 text-white px-8 py-8 mt-20 flex justify-between items-center
      flex-col lg:flex-row lg:px-20 lg:py-10
    ">
      <p class="text-left mr-0 lg:mr-20 mb-8 lg:mb-0 text-3xl leading-tight">
        Explore our brand new market place, and buy the broken laptop of your dreams!
        Viruses, randsomwares, smashed screens, missing keycaps, corruped hard drives,
        it's our daily life.
      </p>
      <RouterLink to="/search?q=laptops" class="
        discover text-lg text-gray-900 bg-white rounded-sm px-6 py-2
        transition duration-300 ml-0 lg:ml-20
      ">
        Explore
      </RouterLink>
    </section>

    <section class="
      flex flex-col items-center justify-between mt-20
      lg:flex-row lg:items-start
    ">
      <Review class="lg:mr-4 mb-4 lg:mb-0 mr-0 w-full lg:w-1/3"
      author="Justin Bieber" job="Web Developer" avatar="/images/justin.png">
        “Excepteur nulla anim ullamco magna. Ad veniam mollit ea nostrud.
        Amet nisi occaecat sunt commodo enim exercitation officia elit deserunt proident.
        Quis excepteur est laboris mollit tempor ex ea fugiat tempor occaecat.
        Cupidatat quis consectetur dolore eiusmod enim nulla in consequat sint commodo.
        Ipsum amet adipisicing qui eu labore aute proident.“
      </Review>
      <Review class="lg:mr-4 mb-4 lg:mb-0 mr-0 w-full lg:w-1/3"
      author="Armin Kennedy" job="Artist" avatar="/images/armin_kennedy.jpg">
        “Excepteur nulla anim ullamco magna. Ad veniam mollit ea nostrud.
        Quis excepteur est laboris mollit tempor ex ea fugiat tempor occaecat.
        Amet nisi occaecat sunt commodo enim exercitation officia elit deserunt proident.
        Quis excepteur est laboris mollit tempor ex ea fugiat tempor occaecat.
        Cupidatat quis consectetur dolore eiusmod enim nulla in consequat sint commodo.
        Ipsum amet adipisicing qui eu labore aute proident.
        Quis excepteur est laboris mollit tempor ex ea fugiat tempor occaecat.“
      </Review>
      <Review class="w-full lg:w-1/3"
      author="Tick Esse" job="Music Producer" avatar="/images/tices.jpg">
        “Excepteur nulla anim ullamco magna. Ad veniam mollit ea nostrud.
        Amet nisi occaecat sunt commodo enim exercitation officia elit deserunt proident.
        Quis excepteur est laboris mollit tempor ex ea fugiat tempor occaecat.
        Cupidatat quis consectetur dolore eiusmod enim nulla in consequat sint commodo.
        Ipsum amet adipisicing qui eu labore aute proident.“
      </Review>
    </section>

    <section class="my-20">
      <h3 class="text-2xl font-bold italic text-green-500">
        “The best market place for broken devices.“
      </h3>
      <span class="text-sm font-normal">
        Whoever the fuck said this, November 25<sup>th</sup> 2020
      </span>
    </section>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Carousel from '../components/Carousel.vue';
import Category from '../components/Category.vue';
import Review from '../components/Review.vue';

@Options({
  components: {
    Carousel,
    Category,
    Review,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
  .discover:hover {
    box-shadow: 0 0.6rem 0.6rem rgba(0,0,0,.1);
    transform: scale(1.1);
  }

  #broken-device {
    max-height: 342px;
  }
</style>
