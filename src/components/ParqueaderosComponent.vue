<template>
  <q-page class="q-pa-md bg-grey-9 text-white">
    <div class="q-pa-md">
      <!-- Encabezado -->
      <div class="text-h4 text-yellow text-center q-mb-lg">Parqueaderos</div>

      <!-- Contenedor principal -->
      <q-card class="bg-white text-dark q-pa-md" style="border-radius: 20px">
        <div class="row items-center justify-between q-mb-md">
          <!-- Botón agregar -->
          <q-btn
            color="yellow-8"
            text-color="black"
            icon="add"
            label="Agregar Parqueadero"
            class="q-px-lg q-py-sm"
            unelevated
            rounded
          />

          <!-- Selector de orden -->
          <q-select
            v-model="orden"
            :options="ordenOptions"
            label="Ordenar por:"
            dense
            outlined
            style="min-width: 200px"
          />
        </div>

        <!-- Tabla -->
        <q-table
          :rows="parqueaderos"
          :columns="columns"
          row-key="nombre"
          flat
          bordered
          separator="horizontal"
        >
          <template v-slot:body-cell-estado="props">
            <q-td :props="props">
              <q-badge :color="props.row.estado === 'Libre' ? 'green' : 'red'" class="text-white">
                {{ props.row.estado }}
              </q-badge>
            </q-td>
          </template>
        </q-table>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const orden = ref('Lotes Ocupados')
const ordenOptions = ['Lotes Ocupados', 'Lotes Libres', 'Lotes Totales']

const columns = [
  { name: 'nombre', label: 'Nombre', field: 'nombre', align: 'left' },
  { name: 'estado', label: 'Estado', field: 'estado', align: 'left' },
  { name: 'lugar', label: 'Lugar', field: 'lugar', align: 'left' },
  { name: 'lotesTotales', label: 'Lotes en Total', field: 'lotesTotales', align: 'center' },
  { name: 'lotesLibres', label: 'Lotes Libres', field: 'lotesLibres', align: 'center' },
  { name: 'lotesOcupados', label: 'Lotes Ocupados', field: 'lotesOcupados', align: 'center' },
]

const parqueaderos = ref([
  {
    nombre: 'Parqueadero 1',
    estado: 'Libre',
    lugar: 'Parque',
    lotesTotales: 150,
    lotesLibres: 100,
    lotesOcupados: 50,
  },
])
</script>

<style scoped>
.q-page {
  min-height: 100vh;
}
</style>
