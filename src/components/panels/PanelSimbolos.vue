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
    id: 'cruz', num: '01',
    nombre: 'La Cruz', doctrina: 'Jesucristo Salvador',
    color: '#B30000', light: '#fff3f3',
    img: '/assets/img/simbolo-cruz-roja.png',
    alt: 'Cruz roja cuadrangular',
    ref: 'Filipenses 2:8',
    verso: '"...haciéndose obediente hasta la muerte, y muerte de cruz."',
  },
  {
    id: 'copa', num: '02',
    nombre: 'La Copa', doctrina: 'Jesucristo Sanador',
    color: '#003399', light: '#eef3ff',
    img: '/assets/img/simbolo-copa-azul.png',
    alt: 'Copa azul cuadrangular',
    ref: 'Mateo 26:39',
    verso: '"Padre mío, si es posible, pase de mí esta copa; pero no sea como yo quiero, sino como tú."',
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

.card-img {
  position: relative;
  flex-shrink: 0;
}
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
  font-size: 1.18rem;
  font-weight: 900;
  color: var(--sc);
  margin: 0;
  line-height: 1.2;
  font-family: 'Cinzel', serif;
}
.c-doc {
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.c-txt {
  font-size: 1.02rem;
  color: #444;
  margin: 0;
  line-height: 1.55;
  font-style: italic;
  font-family: 'Playfair Display', serif;
}
</style>
