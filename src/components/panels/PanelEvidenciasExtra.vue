<template>
  <div class="evidencias-extra">

    <div class="ev-header">
      <h2 class="ev-titulo">Evidencias del Trabajo</h2>
      <p class="ev-sub">Iglesia Cuadrangular Emmanuel · Página 3 de 3</p>
    </div>

    <div class="video-bloque">
      <div class="video-badge">
        <span class="badge-dot"></span>
        Registro en video · Iglesia Cuadrangular
      </div>
      <div class="video-wrap">
        <video
          class="video-player"
          :src="videoSrc"
          controls
          controlslist="nodownload"
          preload="metadata"
          playsinline
        ></video>
      </div>
    </div>

    <div class="video-pie">
      Usa los controles del video para reproducir, pausar, avanzar o retroceder. Activa el volumen para escuchar el audio.
    </div>

  </div>
</template>

<script setup>
function ev(name) { return '/assets/evidencia/' + name.replace(/ /g, '%20') }
const videoSrc = ev('WhatsApp Video 2026-06-30 at 8.47.38 PM.mp4')
</script>

<style scoped>
.evidencias-extra {
  display: flex;
  flex-direction: column;
  gap: 12px;
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

.video-bloque {
  border-radius: 12px;
  overflow: hidden;
  border: 2.5px solid #880099;
  background: #000;
  box-shadow: 0 6px 28px rgba(136,0,153,.35);
  flex-shrink: 0;
}

.video-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #550077, #880099);
  letter-spacing: .04em;
}
.badge-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
  background: #ff4444;
  box-shadow: 0 0 6px rgba(255,68,68,.8);
  animation: pulso 1.4s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes pulso {
  0%, 100% { opacity:1; transform:scale(1); }
  50%       { opacity:.6; transform:scale(1.3); }
}

.video-wrap {
  width: 100%;
  background: #000;
  /* Dar altura fija para que el video y sus controles sean visibles */
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-player {
  width: 100%;
  height: 100%;
  display: block;
  background: #000;
  /* object-fit contain para que se vea completo sin recorte */
  object-fit: contain;
}

.video-pie {
  font-size: .86rem;
  color: #666;
  font-style: italic;
  text-align: center;
  padding: 0 8px;
  flex-shrink: 0;
}
</style>
