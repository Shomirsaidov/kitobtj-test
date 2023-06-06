<template>
    <div class="px-8 py-8 lg:px-32">

        <div class="flex items-center justify-between">
            <div class="">
                <h1 class="text-start text-2xl font-bold">Корзина</h1>
                <h3 class="text-start text-md">{{ $store.state.newInCart }} книг</h3>

            </div>
            <div>
                <button class="flex items-center p-2 rounded-md space-x-2" style="background: #ecf6fe;">
                    <img src="../assets/trash.svg" alt="" width="30">
                    <span style="color: #26a9e0;">Очистить корзину</span>
                </button>
            </div>    
        </div>

        <div class="flex items-start my-8 flex-wrap justify-between">
            <div>
                <div v-for="book in info" class="my-8 flex items-stretch border-b-2 space-x-4 pb-8">
                    <img :src="book.cover" alt="" width="100">
                    <div>
                        <h1 class="text-start text-md font-bold">{{ book.name }}</h1>
                        <h1 class="text-start text-sm">{{ book.author }}</h1>
                        <h1 class="text-start text-lg text-red-600 font-bold mt-8">{{ book.cur_price }}</h1>

                    </div>

                </div>
            </div>
            <div class="border-2 rounded-md p-8">
                <div class="space-y-4">
                    <h2 class="text-xl text-blue-600 text-start">Итого к оплате :</h2>
                    <h2 class="text-xl text-blue-600 text-start font-bold">{{ '180 с.' }}</h2>
                </div>

                
                <div class="flex items-center space-x-4">
                    <div class="checkbox-wrapper-7 my-8">
                        <input class="tgl tgl-ios" id="cb2-7" type="checkbox" v-model="deliver">
                        <label class="tgl-btn" for="cb2-7"></label>
                    </div>
                    <span>Заказать доставку</span>
                </div>

                <div class="flex items-center space-x-4">
                    <div class="checkbox-wrapper-7 my-8">
                        <input class="tgl tgl-ios" id="cb2-8" type="checkbox" v-model="onlinePay">
                        <label class="tgl-btn" for="cb2-8"></label>
                    </div>
                    <span>Оплатить онлайн по DC</span>
                </div>

                <div v-if="deliver" class="flex flex-col items-start">    
                    <select class="border-2 rounded-lg p-2 outline-none" v-model="city">
                        <option value="" selected disabled>Выберите город</option>
                        <option value="Душанбе">Душанбе</option>
                        <option value="Худжанд">Худжанд</option>
                        <option value="Исфара">Исфара</option>
                        <option value="Бохтар">Бохтар</option>
                        <option value="Кулоб">Кулоб</option>
                        <option value="Истаравшан">Истаравшан</option>
                        <option value="Турсунзода">Турсунзода</option>
                        <option value="Хоруг">Хоруг</option>
                        <option value="Рашт">Рашт</option>
                    </select>
                    <br>
                    <input type="text" placeholder="Введите адрес доставки" class="p-2 outline-none rounded-lg border-2" v-model="address">
                </div>
                
                
                <button :class="['my-8 bg-blue-600 text-white font-bold p-4 rounded-md text-xl', {'bg-gray-400': falseForm}]" 
                :disabled="falseForm" @click="shop">Оформить покупку</button>
                
            </div>
        </div>


    </div>
</template>

<script>
  import '../assets/utils.css'


    export default {
        data: () => ({
            deliver: false,
            onlinePay: false,
            city: '',
            address: '',
            info: [
                {id: 23123, cover: 'https://m.media-amazon.com/images/I/51McwfXX7VL._SY346_.jpg',name: '7 навыков высокоэффективных людей',
                author: 'Cтивен Кови', cur_price: '100 c.'},
                {id: 34789, cover: 'https://img3.labirint.ru/rc/be99c8fce560c48bd07ec1b5adc85005/363x561q80/books80/795959/cover.jpg?1677669917'
            , name: 'Думай и богатей',author: 'Наполеон Хилл', cur_price: '80 с.'}
              
        ]
        }),
        methods: {
            shop() {
                if(localStorage.kitobtj == undefined) {
                this.$router.push('/login')
                } else {
                // оплата
                //  а также отправка запроса на сервер о заказе для дальнейшего подтверждения администратора
                }
            }



        },
        computed: {
            falseForm() {
                if(this.deliver == true && this.address == '' || this.city.length == 0) {
                    return true
                } else {
                    return false
                }
            }
        },
        mounted() {
            console.log(this.city)
        }
    }
</script>





