<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Barra superior -->
    <q-header elevated class="bg-dark text-yellow">
      <q-toolbar>
        <q-toolbar-title class="text-right"> Bienvenid@, User </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Barra lateral -->
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-dark text-white"
    >
      <div class="q-pa-md flex flex-center column">
        <q-avatar size="80px">
          <img src="/src/assets/Logo.png" alt="Logo" />
        </q-avatar>
        <div class="text-yellow text-h6 q-mt-sm">SMARTLOT</div>
      </div>

      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section>Inicio</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>Parqueaderos</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>Lotes</q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item clickable v-ripple>
          <q-item-section>Ayuda</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>Contáctanos</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>Cerrar sesión</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Contenido principal -->
    <q-page-container>
      <q-page class="q-pa-md bg-grey-9 text-white"> </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(true)
</script>
