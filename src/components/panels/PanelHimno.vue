<template>
  <div class="himno-panel">

    <!-- ── Encabezado ── -->
    <div class="himno-header">
      <div class="himno-deco">
        <span class="deco-linea"></span>
        <span class="deco-nota">♪</span>
        <span class="deco-linea"></span>
      </div>
      <h2 class="himno-titulo">Himno del Evangelio Cuadrangular</h2>
      <p class="himno-autor">Letra: Aimee Semple McPherson</p>

      <div class="audio-player">
        <span class="audio-icon">♫</span>
        <audio ref="audioEl" :src="audioSrc" @timeupdate="onTime" @loadedmetadata="onMeta" @ended="playing=false"></audio>
        <button class="play-btn" @click="togglePlay" :class="{active: playing}">
          {{ playing ? '⏸' : '▶' }}
        </button>
        <div class="progreso-wrap" @click="seek">
          <div class="progreso-barra" :style="{width: progreso+'%'}"></div>
        </div>
        <span class="audio-tiempo">{{ tiempoActual }} / {{ duracion }}</span>
      </div>
    </div>

    <!-- ── Estrofas I y II ── -->
    <div class="himno-letra">

      <div v-for="(est, i) in estrofas" :key="i" class="estrofa">
        <div class="est-roman">{{ romanos[i] }}</div>
        <p class="est-txt">{{ est }}</p>
        <div class="coro">
          <span class="coro-tag">CORO</span>
          <p class="coro-txt">
            Es el cuadrangular, el cuadrangular, el evangelio de poder<br>
            Jesús salva, bautiza y sana, Jesucristo reinará
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const audioSrc = '/assets/audio/himno-cuadrangular.mp3'
const audioEl  = ref(null)
const playing  = ref(false)
const seg      = ref(0)
const total    = ref(0)

const progreso     = computed(() => total.value ? (seg.value / total.value) * 100 : 0)
const tiempoActual = computed(() => fmt(seg.value))
const duracion     = computed(() => fmt(total.value))

function fmt(s) {
  const m  = Math.floor(s / 60)
  const ss = Math.floor(s % 60).toString().padStart(2, '0')
  return `${m}:${ss}`
}
function togglePlay() {
  if (!audioEl.value) return
  playing.value ? audioEl.value.pause() : audioEl.value.play()
  playing.value = !playing.value
}
function onTime() { seg.value   = audioEl.value?.currentTime ?? 0 }
function onMeta() { total.value = audioEl.value?.duration   ?? 0 }
function seek(e) {
  if (!audioEl.value || !total.value) return
  const rect  = e.currentTarget.getBoundingClientRect()
  const ratio = (e.clientX - rect.left) / rect.width
  audioEl.value.currentTime = ratio * total.value
}

const romanos  = ['I', 'II']
const estrofas = [
  'Con el mensaje cuadrangular del libro de Dios\nhablando a todos de Jesucristo el hijo de David\nquebrantado fue por mí, muriendo en la cruz gran Redentor\nglorioso Cristo, Jesús el Salvador.',
  'El estandarte hoy desplegad huestes del Señor\ncon la potencia ya revestidos del Santo Espíritu\nRey de Reyes, el Señor, el León de Judá\nsu gran poder su iglesia recibe y a la victoria va.',
]
</script>

<style scoped>
.himno-panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
}

/* ── Header ── */
.himno-header {
  background: linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #1a0010 100%);
  border-radius: 12px;
  padding: 14px 18px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(179,0,0,.35);
  flex-shrink: 0;
}
.himno-deco {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.deco-linea {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(204,136,0,.6));
}
.deco-linea:last-child {
  background: linear-gradient(90deg, rgba(204,136,0,.6), transparent);
}
.deco-nota {
  font-size: 1.2rem;
  color: #CC8800;
}
.himno-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 4px;
  letter-spacing: .04em;
  text-shadow: 0 2px 10px rgba(0,0,0,.5);
}
.himno-autor {
  font-size: .92rem;
  color: rgba(255,255,255,.65);
  font-style: italic;
  margin: 0 0 12px;
}

/* ── Audio ── */
.audio-player {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(204,136,0,.35);
  border-radius: 30px;
  padding: 7px 14px;
}
.audio-icon { font-size: 1rem; color: #CC8800; flex-shrink: 0; }
.play-btn {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: #CC8800;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: .95rem;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: background .2s;
}
.play-btn.active { background: #B30000; }
.play-btn:hover  { filter: brightness(1.15); }
.progreso-wrap {
  flex: 1; height: 6px;
  background: rgba(255,255,255,.2);
  border-radius: 3px;
  cursor: pointer;
}
.progreso-barra {
  height: 100%;
  background: #CC8800;
  border-radius: 3px;
  transition: width .3s linear;
}
.audio-tiempo {
  font-size: .84rem;
  color: rgba(255,255,255,.65);
  white-space: nowrap;
  font-family: monospace;
}

/* ── Letra ── */
.himno-letra {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}
.estrofa {
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e8dfc8;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.est-roman {
  font-family: 'Cinzel', serif;
  font-size: 1.0rem;
  font-weight: 900;
  color: #B30000;
  text-align: center;
  padding: 6px 0;
  background: #fff8f0;
  border-bottom: 1px solid #e8dfc8;
  letter-spacing: .3em;
  flex-shrink: 0;
}
.est-txt {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: #2a1a0a;
  line-height: 1.75;
  white-space: pre-line;
  margin: 0;
  padding: 14px 18px 10px;
  font-style: italic;
  flex: 1;
}
.coro {
  background: linear-gradient(90deg, rgba(204,136,0,.1), rgba(179,0,0,.05));
  border-top: 1px solid rgba(204,136,0,.3);
  padding: 8px 18px 12px;
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-shrink: 0;
}
.coro-tag {
  font-family: 'Cinzel', serif;
  font-size: .92rem;
  font-weight: 900;
  color: #CC8800;
  letter-spacing: .18em;
  flex-shrink: 0;
}
.coro-txt {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  color: #3a1a00;
  line-height: 1.65;
  font-style: italic;
  font-weight: 600;
  margin: 0;
}
</style>
