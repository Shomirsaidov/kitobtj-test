<template class="flex space-x-4 items-center">
    
    <div class="flex justify-center">
        <div class="card p-4 px-32 mt-16 border-2 rounded-md shadow-xl space-y-4" v-if="!loginScreen">
            <h1 class="text-xl font-bold">Регистрация</h1>
            <input type="text" placeholder="ФИО" class="p-2 border-2 rounded-lg text-lg outline-none"><br/>
            <input type="text" placeholder="Номер телефона" class="p-2 border-2 rounded-lg text-lg outline-none"><br/>
            <input type="text" placeholder="Электронная почта" class="p-2 border-2 rounded-lg text-lg outline-none"><br/>
            <input type="text" placeholder="Придумайте пароль" class="p-2 border-2 rounded-lg text-lg outline-none">
            <div class="flex justify-end">
                <button class="bg-blue-600 text-white p-2 rounded-lg mt-2 text-lg w-full">Далее</button>
            </div>
            <h1 class="text-gray-600">Уже есть аккаунт ?<br><span class="text-blue-900 cursor-pointer" @click="switchScreen"> Войдите !</span></h1>
            <div class="flex justify-center">
                <img src="../assets/logotype.png" alt="" width="170">
            </div>
        </div>

        <div class="card p-4 px-32 mt-16 border-2 rounded-md shadow-xl space-y-4" v-if="loginScreen">
            <h1 class="text-xl font-bold">Вход</h1>
            <input type="text" placeholder="ФИО" class="p-2 border-2 rounded-lg text-lg outline-none"><br/>
            <input type="text" placeholder="Пароль" class="p-2 border-2 rounded-lg text-lg outline-none">
            <div class="flex justify-end">
                <button class="bg-blue-600 text-white p-2 rounded-lg mt-2 text-lg w-full">Войти</button>
            </div>
            <h1 class="text-gray-600">Нет аккаунта ?<br><span class="text-blue-900 cursor-pointer" @click="switchScreen"> Зарегистрируйтесь !</span></h1>
            <div class="flex justify-center">
                <img src="../assets/logotype.png" alt="" width="170">
            </div>
        </div>
    </div>
</template>

<script>
import { getTransitionRawChildren } from 'vue';

    export default {
        data: () => ({
            loginScreen: false
        }),
        methods: {
            switchScreen() {
                this.loginScreen = !this.loginScreen
            }
        }
    }
</script>