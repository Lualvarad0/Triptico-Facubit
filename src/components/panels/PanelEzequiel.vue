<template>
  <div class="ezequiel">

    <!-- Introducción — fila superior full-width -->
    <div class="ez-intro">
      <span class="ez-ref">Ezequiel 1:10</span>
      Aimee McPherson encontró en los cuatro rostros el cuadro perfecto del ministerio de Cristo:
      <em>Salvador · Sanador · Bautizador · Rey Venidero.</em>
    </div>

    <!-- Grid 2×2: izquierda=cards 1&2 / derecha=cards 3&4 -->
    <div class="rostros-grid">
      <div
        v-for="r in rostros" :key="r.id"
        class="rostro-card"
        :style="{'--rc': r.color, '--rc-light': r.colorLight}"
      >
        <div class="rostro-foto">
          <img :src="r.img" :alt="r.nombre" class="rostro-img" />
          <div class="rostro-grad" :style="{background:`linear-gradient(to top,${r.color}F0 0%,${r.color}44 55%,transparent 100%)`}"></div>
          <div class="rostro-topbar" :style="{background: r.color}">
            <span class="rostro-num">{{ r.num }}</span>
            <span class="rostro-tag">{{ r.doctrina }}</span>
          </div>
        </div>
        <div class="rostro-cuerpo">
          <h4 class="rostro-titulo">{{ r.nombre }}</h4>
          <p class="rostro-texto">{{ r.texto }}</p>
          <p class="rostro-ref">{{ r.ref }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const rostros = [
  {
    id:'hombre', num:'01', nombre:'Rostro de Hombre', doctrina:'SALVADOR',
    color:'#003399', colorLight:'#e8eeff',
    img:'/assets/img/rostro-hombre-grabado.png',
    texto:'Cristo se hizo hombre para identificarse con la humanidad caída y ofrecer su vida en rescate por el pecado.',
    ref:'Lucas 19:10 · Filipenses 2:7–8'
  },
  {
    id:'buey', num:'02', nombre:'Rostro de Buey', doctrina:'SANADOR',
    color:'#1a7a1a', colorLight:'#e8f5e8',
    img:'/assets/img/rostro-buey-grabado.png',
    texto:'El buey bajo el yugo habla de Cristo cargando nuestras enfermedades y dolencias en la cruz del Calvario.',
    ref:'Isaías 53:4–5 · Mateo 8:17'
  },
  {
    id:'leon', num:'03', nombre:'Rostro de León', doctrina:'REY VENIDERO',
    color:'#B30000', colorLight:'#fff0f0',
    img:'/assets/img/rostro-leon-grabado.png',
    texto:'El León, rey de la selva, habla de la majestad y realeza de Cristo que regresará victorioso y glorioso.',
    ref:'Apocalipsis 19:16 · Apocalipsis 5:5'
  },
  {
    id:'aguila', num:'04', nombre:'Rostro de Águila', doctrina:'BAUTIZADOR',
    color:'#880099', colorLight:'#f9e8ff',
    img:'/assets/img/rostro-aguila-grabado.png',
    texto:'El águila que surca las alturas representa lo divino: Cristo bautiza con Espíritu Santo y fuego sobrenatural.',
    ref:'Hechos 1:8 · Hechos 2:1–4'
  },
]
</script>

<style scoped>
.ezequiel {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
}

/* ── Intro ── */
.ez-intro {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: .72rem;
  color: #2a1a0a;
  line-height: 1.55;
  background: linear-gradient(135deg, #f0f7f0, #f5f0ea);
  border-left: 4px solid #1a7a1a;
  border-radius: 4px;
  padding: 7px 12px;
  flex-shrink: 0;
}
.ez-ref {
  font-family: 'Cinzel', serif;
  font-style: normal;
  font-weight: 700;
  font-size: .58rem;
  color: #1a7a1a;
  display: block;
  margin-bottom: 2px;
  letter-spacing: .1em;
}
.ez-intro em { font-weight: 600; color: #B30000; font-style: normal; }

/* ── Grid 2×2 ── */
.rostros-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  flex: 1;
  min-height: 0;
}

/* ── Card ── */
.rostro-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  border: 1.5px solid rgba(0,0,0,.08);
  box-shadow: 0 3px 12px rgba(0,0,0,.12);
  transition: transform .25s, box-shadow .25s;
}
.rostro-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(0,0,0,.16);
}

/* Foto */
.rostro-foto {
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}
.rostro-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .4s ease;
}
.rostro-card:hover .rostro-img { transform: scale(1.05); }

.rostro-grad {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.rostro-topbar {
  position: absolute;
  top: 0; left: 0; right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
}
.rostro-num {
  font-family: 'Cinzel', serif;
  font-size: .7rem;
  font-weight: 900;
  color: rgba(255,255,255,.95);
  text-shadow: 0 1px 4px rgba(0,0,0,.4);
}
.rostro-tag {
  font-size: .46rem;
  font-weight: 800;
  letter-spacing: 1.4px;
  color: #fff;
  background: rgba(0,0,0,.3);
  padding: 2px 6px;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}

/* Cuerpo de texto */
.rostro-cuerpo {
  padding: 7px 10px;
  background: var(--rc-light);
  border-top: 2px solid var(--rc);
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex-shrink: 0;
}
.rostro-titulo {
  font-family: 'Cinzel', serif;
  font-size: .66rem;
  font-weight: 800;
  color: var(--rc);
  margin: 0;
}
.rostro-texto {
  font-size: .58rem;
  color: #444;
  line-height: 1.5;
  margin: 0;
}
.rostro-ref {
  font-family: 'Cinzel', serif;
  font-size: .52rem;
  color: #888;
  margin: 0;
  font-style: italic;
}
</style>
