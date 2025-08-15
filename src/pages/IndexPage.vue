<template>
  <q-page class="flex flex-center bg-gray-100">
    <div class="q-pa-xl" style="max-width: 1200px; width: 100%">
      <!-- Header -->
      <div class="q-mb-xl text-center">
        <q-icon name="local_parking" size="64px" color="accent" />
        <h1 class="text-primary text-h3 q-mb-sm">Smart Lot</h1>
        <p class="text-subtitle2 text-secondary">
          Organiza, controla y optimiza tu parqueadero con una interfaz moderna.
        </p>
        <q-separator spaced color="accent" />
      </div>

      <!-- Main Call to Action -->
      <div class="row q-col-gutter-lg q-mb-xl">
        <div class="col-12 col-md-6 flex flex-center">
          <q-img
            src="data:image/jpeg;base64,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"
            alt="Parking Illustration"
            style="max-width: 100%"
            spinner-color="accent"
          />
        </div>
        <div class="col-12 col-md-6 flex flex-center">
          <div>
            <h2 class="text-h5 text-primary q-mb-md">Control total en la palma de tu mano</h2>
            <p class="text-body1 text-dark">
              Supervisa espacios disponibles, ocupados o reservados en tiempo real. Recibe alertas
              inmediatas y gestiona pagos de forma segura.
            </p>
            <q-btn
              color="accent"
              class="q-mt-lg"
              label="Comenzar ahora"
              size="lg"
              icon="play_arrow"
              unelevated
              rounded
            />
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="row q-col-gutter-lg q-mt-xl">
        <div class="col-12 col-md-4">
          <q-card class="bg-accent text-white shadow-4 q-pa-md" bordered>
            <q-card-section class="flex items-center">
              <q-icon name="event_available" size="40px" class="q-mr-md" />
              <div>
                <h3 class="text-h6 q-mb-xs">Disponible</h3>
                <p>Verifica rápidamente los espacios libres en el parqueadero.</p>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card class="bg-warning text-white shadow-4 q-pa-md" bordered>
            <q-card-section class="flex items-center">
              <q-icon name="directions_car" size="40px" class="q-mr-md" />
              <div>
                <h3 class="text-h6 q-mb-xs">Ocupado</h3>
                <p>Monitorea en tiempo real los espacios que están en uso.</p>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card class="bg-orange text-white shadow-4 q-pa-md" bordered>
            <q-card-section class="flex items-center">
              <q-icon name="book_online" size="40px" class="q-mr-md" />
              <div>
                <h3 class="text-h6 q-mb-xs">Reservado</h3>
                <p>Gestiona las reservas fácilmente y sin complicaciones.</p>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Extra Section for Colors -->
      <div class="q-mt-xl">
        <h2 class="text-h5 text-primary q-mb-md">Paleta de Colores</h2>
        <div class="row q-col-gutter-md">
          <div class="col-2" style="background-color: #454546; height: 60px"></div>
          <div class="col-2" style="background-color: #666666; height: 60px"></div>
          <div class="col-2" style="background-color: #8c8c8c; height: 60px"></div>
          <div class="col-2" style="background-color: #ff9800; height: 60px"></div>
          <div class="col-2" style="background-color: #ffc340; height: 60px"></div>
        </div>
      </div>

      <!-- Floating Action Button -->
      <q-fab
        icon="add"
        active-icon="close"
        label="Acciones rápidas"
        color="accent"
        class="fixed-bottom-right q-mr-lg q-mb-lg"
      >
        <q-fab-action icon="book_online" label="Reservar" color="orange" />
        <q-fab-action icon="local_parking" label="Ver espacios" color="primary" />
        <q-fab-action icon="payments" label="Pagos" color="secondary" />
      </q-fab>
    </div>
  </q-page>
</template>

<script setup>
// No special logic yet
</script>

<style scoped>
.text-primary {
  color: #454546;
}
.text-secondary {
  color: #666666;
}
.text-dark {
  color: #8c8c8c;
}
.bg-accent {
  background-color: #ffc340;
}
.bg-orange {
  background-color: #ff9800;
}
.bg-warning {
  background-color: #8c8c8c;
}
.bg-gray-100 {
  background-color: #f3f4f6;
}
</style>
