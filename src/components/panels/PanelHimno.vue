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
    </div>

    <!-- ── Reproductor nativo ── -->
    <div class="audio-bloque">
      <span class="audio-etiqueta">♫ Reproducir himno</span>
      <audio
        ref="audioEl"
        class="audio-nativo"
        :src="audioSrc"
        controls
        preload="auto"
      ></audio>
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
import { ref, onMounted } from 'vue'

const audioSrc = '/assets/audio/Himno%20Cuadrangular%20con%20Letra.mp3'
const audioEl  = ref(null)

onMounted(() => {
  if (audioEl.value) {
    audioEl.value.play().catch(() => {})
  }
})

const romanos  = ['I', 'II']
const estrofas = [
  'Con el mensaje cuadrangular del libro de Dios\nHablando a todos de Jesucristo el Hijo de David\nQuebrantado fue por mí. Muriendo en la cruz gran Redentor\nGlorioso Cristo, Jesús el Salvador.',
  'El estandarte hoy desplegad huestes del Señor\nCon la potencia ya revestidos del Santo Espíritu\nRey de Reyes, el Señor, el León de Judá\nSu gran poder su Iglesia recibe y a la victoria va.',
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
  padding: 12px 18px;
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
.deco-nota { font-size: 1.2rem; color: #CC8800; }
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
  margin: 0;
}

/* ── Reproductor nativo ── */
.audio-bloque {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: linear-gradient(135deg, #2a0800, #4a1200);
  border: 2px solid #CC8800;
  border-radius: 10px;
  padding: 10px 14px;
  flex-shrink: 0;
}
.audio-etiqueta {
  font-family: 'Cinzel', serif;
  font-size: .9rem;
  font-weight: 700;
  color: #CC8800;
  letter-spacing: .06em;
}
.audio-nativo {
  width: 100%;
  height: 40px;
  display: block;
  accent-color: #CC8800;
}

/* ── Letra ── */
.himno-letra {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-height: 0;
}
.estrofa {
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e8dfc8;
  overflow: hidden;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.est-roman {
  font-family: 'Cinzel', serif;
  font-size: 1.0rem;
  font-weight: 900;
  color: #B30000;
  text-align: center;
  padding: 5px 0;
  background: #fff8f0;
  border-bottom: 1px solid #e8dfc8;
  letter-spacing: .3em;
  flex-shrink: 0;
}
.est-txt {
  font-family: 'Playfair Display', serif;
  font-size: 1.0rem;
  color: #2a1a0a;
  line-height: 1.65;
  white-space: pre-line;
  margin: 0;
  padding: 10px 16px 8px;
  font-style: italic;
  flex: 1;
}
.coro {
  background: linear-gradient(90deg, rgba(204,136,0,.1), rgba(179,0,0,.05));
  border-top: 1px solid rgba(204,136,0,.3);
  padding: 7px 16px 10px;
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-shrink: 0;
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
  font-size: .98rem;
  color: #3a1a00;
  line-height: 1.6;
  font-style: italic;
  font-weight: 600;
  margin: 0;
}
</style>
