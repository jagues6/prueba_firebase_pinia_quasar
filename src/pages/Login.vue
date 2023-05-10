<template>
    <div>

        <div id="container">
            <h3>Inicio de Sesion</h3>
            <label for="">Usuario</label>
            <q-input outlined style="border-color: #1976D2;" v-model.trim="user" class="q-mb-md inp" />
            <label for="">Clave</label>
            <q-input outlined style="color: #1976D2;" v-model.trim="pass" class="q-mb-md" />
            <!-- <q-btn outline style="color: #1976D2;" label="Iniciar" @click="addUser()"/> -->
            <q-btn :loading="userStore.loading" color="red" @click="login()">
                Iniciar
                <template v-slot:loading>
                    <q-spinner-hourglass color="purple" />
                </template>
            </q-btn>
            <p><router-link to="/register">Registrarse</router-link> </p>
        </div>

        <q-dialog v-model="alert">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Alert</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Por favor llene todos los campos
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <q-dialog v-model="alert2">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Alert</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Las credenciales son invalidas
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useUserStore } from "../store/user.js"
import { useQuasar } from 'quasar'
import {useRoute, useRouter} from "vue-router"

const router = useRouter()
const userStore = useUserStore()


const q = useQuasar()
let user = ref("")
let pass = ref("")
let alert=ref(false)
let alert2=ref(false)


async function login() {
    if (validations() == true) {
        const msg = await userStore.login(user.value, pass.value)
        if (msg=="auth/invalid-email" || msg=="auth/wrong-password"){
            alert2.value=true
        }
    }
}

function validations() {
    if (!user.value || !pass.value) {
        alert.value=true
    } else {
        return true
    }
}


</script>

<style  scoped>
.inp {
    border-color: green;
}

p {
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