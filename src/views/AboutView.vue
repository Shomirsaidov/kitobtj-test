<!-- bismillah -->
<template>

  <div class="w-full flex justify-center items-stretch space-x-4 lg:space-x-16 my-16 flex-wrap">

    <img :src="info.cover" alt="" width="250">

    <div class="info space-y-2">
      <div class="flex items-center mt-4 mb-2 space-x-2 mb-4 flex-wrap">
        <h3 class="text-sm font-semibold px-4 text-white rounded-sm" style="background: #785eea;" v-for="tag in info.tags">{{ tag }}</h3>
      </div>
      <h1 class="text-start text-xl font-semibold" style="color: #f34a57;">{{ info.name }}</h1>
      <h1 class="text-start text-lg" style="color: #26a9e0;">{{ info.author }}</h1>

      


      <div class="px-8 sm:px-0">
        <div class="flex items-start justify-between sm:justify-between">
            <h2 class="text-md text-gray-500 text-start">ID товара</h2>
            <h2 class="text-md text-gray-800 text-start">{{ info.good_id }}</h2>
        </div>
        <div class="flex items-start justify-between sm:justify-between">
            <h2 class="text-md text-gray-500 text-start">Издание</h2>
            <h2 class="text-md text-gray-800 text-start">{{ info.publisher }}</h2>
        </div>
        <div class="flex items-start justify-between sm:justify-between">
            <h2 class="text-md text-gray-500 text-start">Категория</h2>
            <h2 class="text-md text-gray-800 text-start">{{ info.category }}</h2>
        </div>
        <div class="flex items-start justify-between sm:justify-between">
            <h2 class="text-md text-gray-500 text-start">Год издания</h2>
            <h2 class="text-md text-gray-800 text-start">{{ info.release_year }}</h2>
        </div>
        <div class="flex items-start justify-between sm:justify-between">
            <h2 class="text-md text-gray-500 text-start">ISBN</h2>
            <h2 class="text-md text-gray-800 text-start">{{ info.isbn }}</h2>
        </div>
        <div class="flex items-start justify-between sm:justify-between">
            <h2 class="text-md text-gray-500 text-start">Количество страниц</h2>
            <h2 class="text-md text-gray-800 text-start">{{ info.pages }}</h2>
        </div>
        <div class="flex items-start justify-between sm:justify-between">
            <h2 class="text-md text-gray-500 text-start">Размер</h2>
            <h2 class="text-md text-gray-800 text-start">{{ info.size }}</h2>
        </div>
        <div class="flex items-start justify-between sm:justify-between">
            <h2 class="text-md text-gray-500 text-start">Тип обложки</h2>
            <h2 class="text-md text-gray-800 text-start">{{ info.cover_type }}</h2>
        </div>
        <div class="flex items-start justify-between sm:justify-between">
            <h2 class="text-md text-gray-500 text-start">Вес</h2>
            <h2 class="text-md text-gray-800 text-start">{{ info.weight }}</h2>
        </div>
        <div class="flex items-start justify-between sm:justify-between">
            <h2 class="text-md text-gray-500 text-start">Возрастные ограничения</h2>
            <h2 class="text-md text-gray-800 text-start">{{ info.age_restrictions }}</h2>
        </div>
      </div>






    </div>

    <div> 
      <div class="order border-2 p-8 rounded-md mt-4 lg:mt-0">
        <h3 class="text-start text-lg  mb-2 text-grey-500 line-through">{{ info.prev_price }}</h3>
        <h2 class="text-start text-3xl mb-2 font-semibold text-red-500 mb-4">{{ info.cur_price }}</h2>
        <div class="flex items-stretch justify-between space-x-2 flex-wrap">
            <button @click="addToCart(info.good_id)" style="background: #26a9e0;flex: 1;" class="px-16 rounded-lg font-bold text-lg text-white">
              Купить
            </button>
            <img src="../assets/bookmark-2.svg" alt="" width="45" class="p-2 rounded-xl" 
              style="background: #ecf6fe;">
        </div>  
      </div>

      <p class="text-start text-sm my-4 break-words text-gray-400" style="max-width: 300px;">
        Цена на сайте может отличаться от цены в магазинах сети. Внешний вид книги может отличаться от изображения на сайте.
      </p>

    </div>

  </div>

  <div style="background: #ecf6fe; color: #26a9e0;" class="lg:px-80 py-8 px-8 text-start">
    <h2 style="color:#26a9e0;" class="text-lg font-bold mb-2">Описание</h2>
    {{ info.description }}
  </div>

</template>

<script>

  import '../assets/utils.css'
  //here we get data from the rest api situated on vercel.app


  export default {
    props: ['id'],
    data: () => ({
      info: {
        cover: 'https://m.media-amazon.com/images/I/51McwfXX7VL._SY346_.jpg',
        prev_price: '180 c.',
        cur_price: '100 c.',
        sales_per: '40 %',
        author: 'Стивен Кови',
        name: '7 Навыков высокоэффективных людей',
        good_id: '62828',
        publisher: 'Папирус',
        category: 'Саморазвитие',
        release_year: '2021',
        isbn: '2948-123812-1231',
        pages: '370',
        size: '17 см \ 19 см',
        cover_type: 'Твердый переплёт',
        weight: '0.75 кг',
        age_restrictions: '14 +',
        description: 'Кови: 7 навыков высокоэффективных людей На самом деле книга рассказывает нам не только о том, какие навыки максимально раскрывают наш личностный потенциал, но также почему так важно заниматься саморазвитием и как наши софт скилы влияют на достижение успехов как в личной, так и в профессиональной жизни.',
        tags: ['ТОП ПРОДАЖ','ЧИСТАЯ МАКУЛАТУРА']
      }
    }),
    methods: {
      addToCart(id) {
        this.$store.state.cartBooks.unshift(id)
        // this.$store.state.newInCart += 1

        console.log(this.$store.state.cartBooks)
      }
    }
  }

</script>















