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
                :disable="loading"
              />
              <q-btn
                label="Enviar"
                color="grey-8"
                text-color="white"
                class="col-auto"
                type="submit"
                :loading="loading"
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
import { useQuasar } from 'quasar'

const $q = useQuasar()
const email = ref('')
const loading = ref(false)

function recuperar() {
  if (!email.value) {
    $q.notify({
      type: 'negative',
      message: 'Por favor ingrese un correo válido',
      position: 'top',
      timeout: 2000,
    })
    return
  }

  loading.value = true

  // 🔥 Simular "envío" del correo
  setTimeout(() => {
    loading.value = false
    $q.notify({
      type: 'positive',
      message: 'El correo fue enviado satisfactoriamente 📧',
      position: 'top',
      timeout: 2500,
    })
    email.value = ''
  }, 1500)
}
</script>
