<template>
  <section class="panel">

    <div class="sim-header">
      <h2 class="sim-titulo">Símbolos Cuadrangulares</h2>
      <p class="sim-sub">Las cuatro verdades del Evangelio representadas en símbolo</p>
    </div>

    <div class="sim-grid">
      <div v-for="s in simbolos" :key="s.id" class="sim-card" :style="{'--sc':s.color,'--sl':s.light}">
        <div class="card-img">
          <div class="img-stage">
            <img :src="s.img" :alt="s.alt" loading="lazy" />
          </div>
          <div class="img-badge">{{ s.num }}</div>
        </div>
        <div class="card-body">
          <p class="c-ref">{{ s.ref }}</p>
          <p class="c-tit">{{ s.nombre }}</p>
          <p class="c-doc">{{ s.doctrina }}</p>
          <p class="c-txt">{{ s.verso }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const simbolos = [
  {
    id: 'paloma', num: '03',
    nombre: 'La Paloma', doctrina: 'Cristo Bautizador en el E.S.',
    color: '#CC8800', light: '#fff8e8',
    img: '/assets/img/simbolo-paloma-dorada.png',
    alt: 'Paloma dorada cuadrangular',
    ref: 'Hechos 1:8 · Hechos 2:4',
    verso: 'Cristo bautiza con fuego y poder sobrenatural para testificar y servir.',
  },
  {
    id: 'corona', num: '04',
    nombre: 'La Corona', doctrina: 'Jesucristo Rey que Viene',
    color: '#880099', light: '#fdf0ff',
    img: '/assets/img/simbolo-corona-purpura.png',
    alt: 'Corona púrpura cuadrangular',
    ref: 'Apocalipsis 19:16 · 1 Ts. 4:16',
    verso: 'Cristo volverá en gloria como Rey de reyes y Señor de señores.',
  },
]
</script>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.sim-header {
  background: linear-gradient(135deg, #1a0a00, #3a1800);
  border-radius: 10px;
  padding: 11px 16px;
  text-align: center;
  flex-shrink: 0;
}
.sim-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.25rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 3px;
  letter-spacing: .05em;
}
.sim-sub {
  font-size: .96rem;
  color: rgba(255,255,255,.6);
  margin: 0;
  font-style: italic;
}

.sim-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  flex: 1;
  min-height: 0;
  align-content: start;
}

.sim-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid var(--sc);
  background: var(--sl);
}

.card-img { position: relative; flex-shrink: 0; }
.img-stage {
  height: 190px;
  background: linear-gradient(180deg, #fffdf7, #ede0c4);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.img-stage img {
  height: 145px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 6px 12px rgba(0,0,0,.2));
  transition: transform .35s ease;
}
.sim-card:hover .img-stage img { transform: scale(1.07); }

.img-badge {
  position: absolute; top: 8px; left: 8px;
  background: var(--sc);
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 1;
  padding: 4px 11px;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0,0,0,.35);
}

.card-body {
  padding: 11px 13px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-top: 3px solid var(--sc);
}
.c-ref {
  font-family: 'Cinzel', serif;
  font-size: .98rem;
  font-weight: 700;
  color: var(--sc);
  margin: 0;
  opacity: .8;
}
.c-tit {
  font-family: 'Cinzel', serif;
  font-size: 1.18rem;
  font-weight: 900;
  color: var(--sc);
  margin: 0;
  line-height: 1.2;
}
.c-doc {
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.c-txt {
  font-family: 'Playfair Display', serif;
  font-size: 1.02rem;
  font-style: italic;
  color: #444;
  margin: 0;
  line-height: 1.55;
}
</style>
