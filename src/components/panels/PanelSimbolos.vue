<template>
  <div class="simbolos">

    <div class="sim-intro">
      <span class="sim-ref">Símbolos Cuadrangulares</span>
      Los cuatro símbolos representan las verdades centrales del ministerio de Cristo:
      <em>Salvador · Sanador · Bautizador · Rey Venidero.</em>
    </div>

    <div class="simbolos-grid">
      <div v-for="s in simbolos" :key="s.id" class="sim-card" :style="{'--sc': s.color, '--sc-light': s.colorLight}">

        <!-- Foto completa, sin overlays -->
        <div class="sim-foto">
          <img :src="s.img" :alt="s.nombre" class="sim-img" />
        </div>

        <!-- Todo el texto debajo -->
        <div class="sim-cuerpo">
          <div class="sim-head">
            <span class="sim-num">{{ s.num }}</span>
            <div class="sim-meta">
              <h4 class="sim-titulo">{{ s.nombre }}</h4>
              <span class="sim-tag">{{ s.doctrina }}</span>
            </div>
          </div>
          <div class="sim-ref-box">
            <span class="sim-ref-txt">{{ s.ref }}</span>
            <span class="sim-verso">{{ s.verso }}</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
const simbolos = [
  {
    id: 'cruz', num: '01', nombre: 'La Cruz', doctrina: 'SALVADOR',
    color: '#B30000', colorLight: '#fff5f5',
    img: '/assets/img/doctrina-salvador-grabado.png',
    ref: 'Juan 3:16 · Romanos 5:8',
    verso: '"De tal manera amó Dios al mundo que dio a su Hijo unigénito."',
  },
  {
    id: 'copa', num: '02', nombre: 'La Copa', doctrina: 'SANADOR',
    color: '#003399', colorLight: '#f0f4ff',
    img: '/assets/img/doctrina-sanador-grabado.png',
    ref: 'Isaías 53:5 · Mateo 8:17',
    verso: '"Por su llaga fuimos nosotros curados."',
  },
  {
    id: 'paloma', num: '03', nombre: 'La Paloma', doctrina: 'BAUTIZADOR',
    color: '#CC8800', colorLight: '#fffaf0',
    img: '/assets/img/doctrina-bautizador-grabado.png',
    ref: 'Hechos 1:8 · Hechos 2:4',
    verso: '"Recibiréis poder cuando haya venido el Espíritu Santo sobre vosotros."',
  },
  {
    id: 'corona', num: '04', nombre: 'La Corona', doctrina: 'REY VENIDERO',
    color: '#880099', colorLight: '#fdf0ff',
    img: '/assets/img/doctrina-rey-grabado.png',
    ref: 'Ap. 19:16 · 1 Ts. 4:16',
    verso: '"Rey de reyes y Señor de señores."',
  },
]
</script>

<style scoped>
.simbolos {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
}

/* ── Intro ── */
.sim-intro {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: .84rem;
  color: #2a1a0a;
  line-height: 1.5;
  background: linear-gradient(135deg, #fff5f5, #f5f0ea);
  border-left: 4px solid #B30000;
  border-radius: 4px;
  padding: 8px 13px;
  flex-shrink: 0;
}
.sim-ref {
  font-family: 'Cinzel', serif;
  font-style: normal;
  font-weight: 700;
  font-size: .84rem;
  color: #B30000;
  display: block;
  margin-bottom: 3px;
  letter-spacing: .1em;
}
.sim-intro em { font-weight: 700; color: #880099; font-style: normal; }

/* ── Grid 2×2 ── */
.simbolos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  flex: 1;
  min-height: 0;
}

/* ── Card ── */
.sim-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid var(--sc);
  box-shadow: 0 3px 14px rgba(0,0,0,.13);
  transition: transform .25s, box-shadow .25s;
}
.sim-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,.2);
}

/* ── Foto limpia ── */
.sim-foto {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: #f8f6f2;
}
.sim-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: transform .4s ease;
}
.sim-card:hover .sim-img { transform: scale(1.05); }

/* ── Cuerpo debajo ── */
.sim-cuerpo {
  background: var(--sc-light);
  border-top: 3px solid var(--sc);
  padding: 7px 10px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.sim-head {
  display: flex;
  align-items: center;
  gap: 8px;
}
.sim-num {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--sc);
  line-height: 1;
  flex-shrink: 0;
}
.sim-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.sim-titulo {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  font-weight: 800;
  color: var(--sc);
  margin: 0;
  line-height: 1.1;
}
.sim-tag {
  font-size: .80rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  background: var(--sc);
  padding: 1px 7px;
  border-radius: 10px;
  width: fit-content;
}
.sim-ref-box {
  background: rgba(0,0,0,.05);
  border-left: 3px solid var(--sc);
  border-radius: 4px;
  padding: 5px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.sim-ref-txt {
  font-family: 'Cinzel', serif;
  font-size: .82rem;
  font-weight: 800;
  color: var(--sc);
  letter-spacing: .04em;
}
.sim-verso {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: .84rem;
  color: #333;
  line-height: 1.45;
}
</style>
