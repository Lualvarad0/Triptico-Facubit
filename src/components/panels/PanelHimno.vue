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

      <!-- Reproductor de audio -->
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

    <!-- ── Letra ── -->
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

const progreso    = computed(() => total.value ? (seg.value / total.value) * 100 : 0)
const tiempoActual = computed(() => fmt(seg.value))
const duracion     = computed(() => fmt(total.value))

function fmt(s) {
  const m = Math.floor(s / 60)
  const ss = Math.floor(s % 60).toString().padStart(2, '0')
  return `${m}:${ss}`
}
function togglePlay() {
  if (!audioEl.value) return
  playing.value ? audioEl.value.pause() : audioEl.value.play()
  playing.value = !playing.value
}
function onTime()  { seg.value   = audioEl.value?.currentTime ?? 0 }
function onMeta()  { total.value = audioEl.value?.duration   ?? 0 }
function seek(e) {
  if (!audioEl.value || !total.value) return
  const rect = e.currentTarget.getBoundingClientRect()
  const ratio = (e.clientX - rect.left) / rect.width
  audioEl.value.currentTime = ratio * total.value
}

const romanos = ['I', 'II', 'III', 'IV']
const estrofas = [
  'Con el mensaje cuadrangular del libro de Dios\nhablando a todos de Jesucristo el hijo de David\nquebrantado fue por mí, muriendo en la cruz gran Redentor\nglorioso Cristo, Jesús el Salvador.',
  'El estandarte hoy desplegad huestes del Señor\ncon la potencia ya revestidos del Santo Espíritu\nRey de Reyes, el Señor, el León de Judá\nsu gran poder su iglesia recibe y a la victoria va.',
  'Con el escudo la iglesia va, Cristo el Señor\npor sus heridas fuimos sanados, liberación nos dio\na los caídos levantó, al dolor venció\ntrae al Señor tus enfermedades que aquí sanando va.',
  'Hacia los montes con fe mirad, con gozo cantad\ny recibid al gran Rey que viene, en gloria proclamad\ncomo el águila a reinar, pronto volverá\ndescenderá vestido de gloria, honor y majestad.',
]
</script>

<style scoped>
.himno-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

/* ── Header ── */
.himno-header {
  background: linear-gradient(135deg, #1a0000 0%, #4a0000 50%, #1a0010 100%);
  border-radius: 12px;
  padding: 12px 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(179,0,0,.35);
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
  font-size: 1.1rem;
  color: #CC8800;
}
.himno-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.05rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 3px;
  letter-spacing: .04em;
  text-shadow: 0 2px 10px rgba(0,0,0,.5);
}
.himno-autor {
  font-size: .90rem;
  color: rgba(255,255,255,.6);
  font-style: italic;
  margin: 0 0 10px;
}

/* ── Audio player ── */
.audio-player {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(204,136,0,.35);
  border-radius: 30px;
  padding: 6px 12px;
}
.audio-icon {
  font-size: .9rem;
  color: #CC8800;
  flex-shrink: 0;
}
.play-btn {
  width: 30px; height: 30px;
  border-radius: 50%;
  background: #CC8800;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: .9rem;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: background .2s;
}
.play-btn.active { background: #B30000; }
.play-btn:hover  { filter: brightness(1.15); }
.progreso-wrap {
  flex: 1;
  height: 5px;
  background: rgba(255,255,255,.2);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
}
.progreso-barra {
  height: 100%;
  background: #CC8800;
  border-radius: 3px;
  transition: width .3s linear;
}
.audio-tiempo {
  font-size: .78rem;
  color: rgba(255,255,255,.65);
  white-space: nowrap;
  font-family: monospace;
}

/* ── Letra ── */
.himno-letra {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.estrofa {
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e8dfc8;
  overflow: hidden;
}

.est-roman {
  font-family: 'Cinzel', serif;
  font-size: .90rem;
  font-weight: 900;
  color: #B30000;
  text-align: center;
  padding: 4px 0;
  background: #fff8f0;
  border-bottom: 1px solid #e8dfc8;
  letter-spacing: .25em;
}

.est-txt {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  color: #2a1a0a;
  line-height: 1.7;
  white-space: pre-line;
  margin: 0;
  padding: 8px 14px 6px;
  font-style: italic;
}

/* ── Coro ── */
.coro {
  background: linear-gradient(90deg, rgba(204,136,0,.1), rgba(179,0,0,.06));
  border-top: 1px solid rgba(204,136,0,.3);
  padding: 5px 14px 8px;
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.coro-tag {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  font-weight: 900;
  color: #CC8800;
  letter-spacing: .18em;
  flex-shrink: 0;
}
.coro-txt {
  font-family: 'Playfair Display', serif;
  font-size: 1.02rem;
  color: #3a1a00;
  line-height: 1.6;
  font-style: italic;
  font-weight: 600;
  margin: 0;
}
</style>
