<template>
    <div class="no-margin">
    <q-toolbar class="bg-primary text-white" style="z-index: 20;">
      <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer=!drawer" />
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>
      
      <q-toolbar-title>Quasar Framework</q-toolbar-title>
      <p style="margin: 0 10px;">{{ user.user.email }} </p>
      <q-btn flat round dense icon="logout" @click="logout" />
    
    </q-toolbar>
      <q-layout view="hHh Lpr lF" style="z-index: 10;">
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-primary text-white "
      >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable  v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>
      <router-view/>
    </q-layout>
 
  </div>
</template>

<script setup>
    import { ref } from "vue";
import { useUserStore } from "../store/user"

const user = useUserStore()
let drawer = ref(false)
let miniState = ref(false)
const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]
function logout() {
  user.logout()

}
</script>

<style lang="scss" scoped>

</style>