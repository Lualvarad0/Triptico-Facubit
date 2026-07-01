<template>
  <div class="ezequiel">

    <div class="ez-intro">
      <span class="ez-ref">Ezequiel 1:10</span>
      Aimee McPherson encontró en los cuatro rostros el cuadro perfecto del ministerio de Cristo:
      <em>Salvador · Sanador · Bautizador · Rey Venidero.</em>
    </div>

    <div class="rostros-grid">
      <div v-for="r in rostros" :key="r.id" class="rostro-card" :style="{'--rc': r.color, '--rc-light': r.colorLight}">

        <!-- Foto limpia, sin overlays -->
        <div class="rostro-foto">
          <img :src="r.img" :alt="r.nombre" class="rostro-img" />
        </div>

        <!-- Todo el texto debajo de la foto -->
        <div class="rostro-cuerpo">
          <div class="rostro-head">
            <span class="rostro-num">{{ r.num }}</span>
            <div class="rostro-meta">
              <h4 class="rostro-titulo">{{ r.nombre }}</h4>
              <span class="rostro-tag">{{ r.doctrina }}</span>
            </div>
          </div>
          <div class="rostro-ref-box">
            <span class="rostro-ref">{{ r.ref }}</span>
            <span class="rostro-verso">{{ r.verso }}</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
const rostros = [
  {
    id:'hombre', num:'01', nombre:'Rostro de Hombre', doctrina:'SALVADOR',
    color:'#B30000', colorLight:'#fff0f0',
    img:'/assets/img/rostro-hombre-grabado.png',
    ref:'Lucas 19:10 · Fil. 2:7–8',
    verso:'"El Hijo del Hombre vino a buscar y a salvar lo que se había perdido."',
  },
  {
    id:'leon', num:'02', nombre:'Rostro de León', doctrina:'BAUTIZADOR CON EL E.S.',
    color:'#CC8800', colorLight:'#fff8e6',
    img:'/assets/img/rostro-leon-grabado.png',
    ref:'Hechos 1:8 · Hch. 2:1–4',
    verso:'"Recibiréis poder cuando haya venido el Espíritu Santo sobre vosotros."',
  },
  {
    id:'buey', num:'03', nombre:'Rostro de Buey', doctrina:'SANADOR',
    color:'#003399', colorLight:'#eef2ff',
    img:'/assets/img/rostro-buey-grabado.png',
    ref:'Isaías 53:4–5 · Mt. 8:17',
    verso:'"Por su llaga fuimos nosotros curados."',
  },
  {
    id:'aguila', num:'04', nombre:'Rostro de Águila', doctrina:'REY QUE VIENE',
    color:'#880099', colorLight:'#fdf0ff',
    img:'/assets/img/rostro-aguila-grabado.png',
    ref:'Ap. 19:16 · Ap. 5:5',
    verso:'"Rey de reyes y Señor de señores."',
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
  font-size: .84rem;
  color: #2a1a0a;
  line-height: 1.5;
  background: linear-gradient(135deg, #f0f7f0, #f5f0ea);
  border-left: 4px solid #1a7a1a;
  border-radius: 4px;
  padding: 8px 13px;
  flex-shrink: 0;
}
.ez-ref {
  font-family: 'Cinzel', serif;
  font-style: normal;
  font-weight: 700;
  font-size: .84rem;
  color: #1a7a1a;
  display: block;
  margin-bottom: 3px;
  letter-spacing: .1em;
}
.ez-intro em { font-weight: 700; color: #B30000; font-style: normal; }

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
  border: 2px solid var(--rc);
  box-shadow: 0 3px 14px rgba(0,0,0,.13);
  transition: transform .25s, box-shadow .25s;
}
.rostro-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,.2);
}

/* ── Foto — ocupa todo el espacio libre, limpia ── */
.rostro-foto {
  flex: 1;
  min-height: 0;
  overflow: hidden;
}
.rostro-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: #f8f6f2;
  transition: transform .4s ease;
}
.rostro-card:hover .rostro-img { transform: scale(1.05); }

/* ── Cuerpo debajo de la foto ── */
.rostro-cuerpo {
  background: var(--rc-light);
  border-top: 3px solid var(--rc);
  padding: 7px 10px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.rostro-head {
  display: flex;
  align-items: center;
  gap: 8px;
}
.rostro-num {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--rc);
  line-height: 1;
  flex-shrink: 0;
}
.rostro-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.rostro-titulo {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  font-weight: 800;
  color: var(--rc);
  margin: 0;
  line-height: 1.1;
}
.rostro-tag {
  font-size: .80rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  background: var(--rc);
  padding: 1px 7px;
  border-radius: 10px;
  width: fit-content;
}

/* ── Versículo ── */
.rostro-ref-box {
  background: rgba(0,0,0,.05);
  border-left: 3px solid var(--rc);
  border-radius: 4px;
  padding: 5px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.rostro-ref {
  font-family: 'Cinzel', serif;
  font-size: .82rem;
  font-weight: 800;
  color: var(--rc);
  letter-spacing: .04em;
}
.rostro-verso {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: .84rem;
  color: #333;
  line-height: 1.45;
}
</style>
