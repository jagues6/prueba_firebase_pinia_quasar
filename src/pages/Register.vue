<template>
    <div>
        <div id="container">
            <h3>Registro de usuario </h3>
            <label for="">Usuario</label>
            <q-input outlined style="border-color: #1976D2;" v-model="user" class="q-mb-md inp" />
            <label for="">Clave</label>
            <q-input outlined style="color: #1976D2;" v-model="pass" class="q-mb-md" />
            <!-- <q-btn outline style="color: #1976D2;" label="Iniciar" @click="addUser()"/> -->
            <q-btn :loading="userStore.loading" color="red" @click="addUser()">
                Iniciar
                <template v-slot:loading>
                    <q-spinner-hourglass color="purple"  />
                </template>
            </q-btn>
            <p><router-link to="/">Iniciar sesion</router-link> </p>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue"
import { useUserStore } from "../store/user.js"
let user = ref("")
let pass = ref("")
const userStore = useUserStore()

const addUser = async () => {
    await userStore.registerUser(user.value, pass.value)
}


</script>

<style  scoped>
.inp {
    border-color: green;
}

p{
    margin-top: 30px;
}

#container {
    display: flex;
    height: 95vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
</style>