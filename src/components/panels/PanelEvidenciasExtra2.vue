<template>
  <div class="ev2">

    <div class="ev-header">
      <h2 class="ev-titulo">Evidencias del Trabajo</h2>
      <p class="ev-sub">Iglesia Cuadrangular Emmanuel · Página 2 de 3</p>
    </div>

    <div class="sec-label">
      Encuesta a la Iglesia
    </div>

    <div class="foto-grid">
      <div
        v-for="(foto, i) in encuesta"
        :key="i"
        class="foto-thumb"
        @click="lb.idx=i; lb.visible=true"
      >
        <img :src="foto" :alt="'Encuesta '+(i+1)" loading="lazy" />
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="lb.visible" class="lightbox" @click.self="lb.visible=false">
        <button class="lb-prev" @click.stop="mover(-1)">&#8249;</button>
        <div class="lb-contenido">
          <img :src="encuesta[lb.idx]" class="lb-img" />
          <div class="lb-seccion">Encuesta a la Iglesia</div>
        </div>
        <button class="lb-next" @click.stop="mover(1)">&#8250;</button>
        <span class="lb-cerrar" @click="lb.visible=false">✕</span>
        <span class="lb-contador">{{ lb.idx+1 }} / {{ encuesta.length }}</span>
      </div>
    </Teleport>

  </div>
</template>

<script setup>
import { reactive } from 'vue'

function ev(name) { return '/assets/evidencia/' + name.replace(/ /g, '%20') }

const encuesta = [
  ev('WhatsApp Image 2026-06-30 at 8.47.17 PM (1).jpeg'),
  ev('WhatsApp Image 2026-06-30 at 8.47.17 PM (2).jpeg'),
  ev('WhatsApp Image 2026-06-30 at 8.47.18 PM (1).jpeg'),
  ev('WhatsApp Image 2026-06-30 at 8.47.18 PM (2).jpeg'),
  ev('WhatsApp Image 2026-06-30 at 8.47.18 PM (3).jpeg'),
]

const lb = reactive({ visible: false, idx: 0 })
function mover(dir) { lb.idx = (lb.idx + dir + encuesta.length) % encuesta.length }
</script>

<style scoped>
.ev2 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.ev-header {
  background: linear-gradient(135deg, #1a0a00, #3a1800);
  border-radius: 10px;
  padding: 10px 16px;
  text-align: center;
  flex-shrink: 0;
}
.ev-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.18rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 2px;
  letter-spacing: .05em;
}
.ev-sub {
  font-size: .86rem;
  color: rgba(255,255,255,.55);
  margin: 0;
  font-style: italic;
}

.sec-label {
  font-family: 'Cinzel', serif;
  font-size: .9rem;
  font-weight: 800;
  color: #fff;
  padding: 6px 14px;
  border-radius: 7px;
  background: linear-gradient(90deg, #8a0000, #B30000);
  letter-spacing: .04em;
  flex-shrink: 0;
}

/* Grid 3 columnas, 2 filas (5 fotos) */
.foto-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.foto-thumb {
  height: 105px;
  border-radius: 9px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color .18s, transform .18s;
  background: #f0e8d8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.foto-thumb:hover { border-color: #B30000; transform: scale(1.03); }
.foto-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Lightbox */
.lightbox {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,.92);
  display: flex; align-items: center; justify-content: center; gap: 12px;
  animation: lbIn .18s ease;
}
@keyframes lbIn { from { opacity:0 } to { opacity:1 } }
.lb-contenido { display: flex; flex-direction: column; align-items: center; gap: 10px; max-width: 80vw; }
.lb-img { max-width: 100%; max-height: 80vh; border-radius: 10px; object-fit: contain; box-shadow: 0 20px 60px rgba(0,0,0,.7); }
.lb-seccion {
  font-family: 'Cinzel', serif; font-size: .88rem; font-weight: 700;
  color: #CC8800; background: rgba(0,0,0,.5);
  padding: 4px 16px; border-radius: 20px; border: 1px solid rgba(204,136,0,.4);
}
.lb-cerrar { position: absolute; top: 18px; right: 22px; color: #fff; font-size: 1.6rem; cursor: pointer; opacity:.75; }
.lb-prev, .lb-next {
  background: rgba(255,255,255,.12); border: none; color: #fff;
  font-size: 2.2rem; cursor: pointer; padding: 6px 14px; border-radius: 8px;
  line-height: 1; transition: background .2s; flex-shrink: 0;
}
.lb-prev:hover, .lb-next:hover { background: rgba(255,255,255,.25); }
.lb-contador {
  position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%);
  color: rgba(255,255,255,.7); font-family: 'Cinzel', serif; font-size: .88rem;
  background: rgba(0,0,0,.4); padding: 3px 12px; border-radius: 12px;
}
</style>
