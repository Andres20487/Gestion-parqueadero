<template>
  <q-page class="flex flex-center bg-grey-9">
    <q-card
      class="q-pa-lg"
      style="max-width: 400px; border-radius: 16px; background-color: #1e1e1e"
    >
      <q-card-section class="text-center">
        <div class="text-h5 text-yellow text-bold">Login</div>
        <div class="text-grey-4 text-caption q-mt-sm">
          ¿Aún no tienes cuenta?
          <a href="#" class="text-yellow">Registrarse</a>
        </div>
      </q-card-section>

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
            class="q-mt-xs text-color:white"
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
            class="q-mt-xs"
          >
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
          <div class="text-right q-mt-xs">
            <a href="#" class="text-yellow text-caption">¿Olvidó su contraseña?</a>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          label="Iniciar sesión"
          color="grey-8"
          text-color="white"
          class="full-width"
          @click="$router.push('/')"
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
</script>
