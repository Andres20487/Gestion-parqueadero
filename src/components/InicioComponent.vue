<template>
  <q-page class="q-pa-md bg-grey-9 text-white">
    <div class="row q-col-gutter-md q-mt-xl q-mb-xl">
      <!-- Tarjeta Parqueadero 1 -->
      <q-card class="col-3 bg-dark text-yellow">
        <q-card-section>
          <div class="text-h6">Parqueadero 1</div>
          <div class="text-subtitle2 text-grey-4">100 lotes libres</div>
        </q-card-section>
      </q-card>

      <!-- Tarjeta para agregar -->
      <q-card class="col-3 bg-dark flex flex-center cursor-pointer" @click="agregarParqueadero">
        <q-card-section class="text-yellow text-h4">+</q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
function agregarParqueadero() {
  console.log('Agregar parqueadero')
}
</script>
