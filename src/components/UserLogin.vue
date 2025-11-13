<template>
  <q-page class="flex flex-center bg-grey-9">
    <q-card
      class="q-pa-lg"
      style="max-width: 400px; border-radius: 16px; background-color: #1e1e1e"
    >
      <!-- Encabezado -->
      <q-card-section class="text-center">
        <div class="text-h5 text-yellow text-bold">Login</div>
        <div class="text-grey-4 text-caption q-mt-sm">
          ¿Aún no tienes cuenta?
          <a href="#" class="text-yellow">Registrarse</a>
        </div>
      </q-card-section>

      <!-- Mensaje de error visual -->
      <q-slide-transition>
        <q-banner v-if="errorMessage" class="bg-red text-white q-mb-md" rounded dense>
          <q-icon name="error" class="q-mr-sm" />
          {{ errorMessage }}
        </q-banner>
      </q-slide-transition>

      <!-- Campos -->
      <q-card-section>
        <!-- Usuario -->
        <div class="q-mb-md">
          <div class="row items-center q-gutter-sm text-yellow">
            <q-icon name="person" />
            <span class="text-subtitle1">Usuario</span>
          </div>
          <q-input
            v-model="username"
            outlined
            dense
            placeholder=" "
            color="white"
            text-color="white"
            input-class="text-white"
            class="q-mt-xs custom-input"
          />
        </div>

        <!-- Contraseña -->
        <div class="q-mb-md">
          <div class="row items-center q-gutter-sm text-yellow">
            <q-icon name="lock" />
            <span class="text-subtitle1">Contraseña</span>
          </div>
          <q-input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            outlined
            dense
            placeholder="Contraseña"
            color="white"
            text-color="white"
            input-class="text-white"
            class="q-mt-xs custom-input"
            :error="errorHighlight"
            :error-message="errorHighlight ? 'Campo requerido' : ''"
          >
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
                color="yellow"
              />
            </template>
          </q-input>

          <div class="text-right q-mt-xs">
            <router-link to="/recuperar" class="text-yellow text-caption">
              ¿Olvidó su contraseña?
            </router-link>
          </div>
        </div>
      </q-card-section>

      <!-- Botón -->
      <q-card-actions align="center">
        <q-btn
          :loading="loading"
          label="Iniciar sesión"
          color="grey-8"
          text-color="white"
          class="full-width"
          @click="iniciarSesion"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const errorHighlight = ref(false)

function iniciarSesion() {
  loading.value = true
  errorMessage.value = ''
  errorHighlight.value = false

  setTimeout(() => {
    loading.value = false

    // 🔥 Simulación de error visual
    if (!username.value || !password.value) {
      errorHighlight.value = true
      errorMessage.value = 'Por favor complete todos los campos.'
      return
    }

    // Simular error de autenticación
    errorMessage.value = 'Usuario o contraseña incorrectos.'
  }, 1500)
}
</script>

<style scoped>
/* ======== Forzar colores blancos en inputs ======== */

.custom-input input {
  color: white !important;
}
.custom-input input::placeholder {
  color: rgba(255, 255, 255, 0.6) !important;
}
.custom-input .q-field__control {
  border: 1px solid white !important;
}
.custom-input .q-field__control:before,
.custom-input .q-field__control:after {
  border-color: white !important;
}
.custom-input .q-field__control:hover {
  border-color: #fdd835 !important;
}
.custom-input.q-field--focused .q-field__control {
  border-color: #fdd835 !important;
}
.custom-input .q-field__label {
  color: white !important;
}
.custom-input .q-icon {
  color: white !important;
}
</style>
