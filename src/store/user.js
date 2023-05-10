import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebaseconfig"
import {router} from "../routes/routes.js"

export const useUserStore = defineStore("data", {
    state: () => ({
        user: {},
        loading: false,

    }),
    actions:{
        async registerUser(email, pass){
            this.loading=true
             try {
                const {user} = await createUserWithEmailAndPassword(auth, email, pass)
                console.log(user.email);
            } catch (error) {
                console.log(error);
             }
             finally{
                this.loading=false
             }
        },

        async login(email, password) {
            this.loading = true;
            try {
                const { user } = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                this.user = { email: user.email, uid: user.uid };
                router.push("/home");
            } catch (error) {
                console.log(error.code);
                this.userData = {};
                return error.code
            } finally {
                this.loading = false;
            }
        },

        async logout(){
            try {
                await signOut(auth)
                this.user={}
                router.push("/")

            } catch (error) {
                
            }
        },

        currentUser() {
            return new Promise((resolve, reject) => {
                const unsubcribe = onAuthStateChanged(
                    auth,
                    (user) => {
                        if (user) {
                            this.user = {
                                email: user.email,
                                uid: user.uid,
                            };
                        }
                        resolve(user);
                    },
                    (e) => reject(e)
                );
                // Según la documentación, la función onAuthStateChanged() devuelve
                // La función de cancelación de suscripción para el observador
                unsubcribe();
            });
        },


    }
});
