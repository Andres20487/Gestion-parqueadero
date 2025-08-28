<template>
  <q-page class="flex flex-center bg-grey-9">
    <q-card class="q-pa-xl bg-dark text-white" style="max-width: 700px; border-radius: 20px">
      <div class="row items-center justify-between">
        <!-- Formulario -->
        <div class="col-12 col-md-7">
          <div class="text-h5 text-bold text-yellow q-mb-lg">Recuperar contraseña</div>

          <div class="q-mb-md">
            <div class="text-subtitle1">Ingrese el correo asociado a su cuenta:</div>
          </div>

          <q-form @submit.prevent="recuperar">
            <div class="row items-center q-gutter-sm">
              <q-input
                v-model="email"
                type="email"
                outlined
                dense
                placeholder="Correo"
                class="col"
                bg-color="white"
                color="black"
              />
              <q-btn
                label="Enviar"
                color="grey-8"
                text-color="white"
                class="col-auto"
                type="submit"
              />
            </div>
          </q-form>
        </div>

        <!-- Logo -->
        <div class="col-12 col-md-4 flex flex-center q-mt-md q-mt-none-md">
          <img src="src/assets/Logo.png" alt="SMARTLOT" style="max-width: 180px" />
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

function recuperar() {
  if (!email.value) {
    this.$q.notify({
      type: 'negative',
      message: 'Por favor ingrese un correo válido',
    })
    return
  }
  console.log('Recuperar contraseña para:', email.value)
  // Aquí conectas con tu API
}
</script>
