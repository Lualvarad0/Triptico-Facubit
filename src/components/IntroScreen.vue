<template>
  <div class="intro-overlay" :class="{ closing: isClosing }">
    <div class="intro-band"></div>

    <LogoCuadrangular :size="130" class="intro-logo" />

    <h1 class="intro-h1">Iglesia del Evangelio Cuadrangular</h1>
    <p class="intro-sub">FACUBIT · Fundamento Cuadrangular · 2026</p>

    <button class="intro-btn" @click="handleOpen">
      <span class="intro-btn-mark">+</span> Abrir Acordeón
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LogoCuadrangular from './LogoCuadrangular.vue'

const emit = defineEmits(['open'])
const isClosing = ref(false)

function handleOpen() {
  isClosing.value = true
  setTimeout(() => emit('open'), 480)
}
</script>

<style scoped>
.intro-overlay {
  position: fixed; inset: 0; z-index: 2000;
  background: #fff;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 20px;
  animation: introIn .6s ease both;
  transition: opacity .45s ease, transform .45s ease;
}
.intro-overlay.closing {
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
}

@keyframes introIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: none; }
}

.intro-band {
  position: absolute; top: 0; left: 0; right: 0; height: 8px;
  background: linear-gradient(90deg,
    #B30000 0% 25%, #003399 25% 50%,
    #CC8800 50% 75%, #880099 75% 100%);
}

.intro-logo {
  animation: logoPulse 2s ease-in-out infinite;
}
@keyframes logoPulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
}

.intro-h1 {
  font-family: 'Cinzel', serif;
  font-size: clamp(1rem, 3.5vw, 1.7rem);
  color: #B30000; text-align: center;
  letter-spacing: 2px; text-transform: uppercase;
  max-width: 500px; padding: 0 20px; margin: 0;
  animation: fadeUp .7s .3s ease both;
}
.intro-sub {
  font-size: .8rem; color: #888;
  letter-spacing: 4px; text-transform: uppercase; margin: 0;
  animation: fadeUp .6s .5s ease both;
}
.intro-btn {
  margin-top: 10px; padding: 14px 50px;
  background: #B30000; color: #fff;
  font-family: 'Cinzel', serif; font-size: .88rem;
  letter-spacing: 3px; border: none; border-radius: 4px;
  cursor: pointer; text-transform: uppercase;
  box-shadow: 0 4px 20px rgba(179,0,0,.35);
  transition: background .25s, transform .2s, box-shadow .25s;
  display: flex; align-items: center; gap: 8px;
  animation: fadeUp .6s .7s ease both;
}
.intro-btn:hover {
  background: #CC0000; transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(179,0,0,.4);
}
.intro-btn:active { transform: none; }
.intro-btn-mark { font:400 1.25rem/1 Georgia,serif; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: none; }
}
</style>
