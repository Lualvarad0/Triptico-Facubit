<template>
  <div class="fe-extra2">

    <div class="fe-header">
      <h2 class="fe-titulo">Declaración de Fe</h2>
      <p class="fe-sub">Artículos 17 – 22 de 22</p>
    </div>

    <div class="fe-grid">
      <div v-for="a in articulos" :key="a.num" class="fe-card" :style="{'--cc':a.color,'--cl':a.light}">
        <div class="fc-izq">
          <span class="fc-num">{{ String(a.num).padStart(2,'0') }}</span>
        </div>
        <div class="fc-der">
          <p class="fc-titulo">{{ a.titulo }}</p>
          <p class="fc-texto">{{ a.texto }}</p>
          <p class="fc-ref">{{ a.ref }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const articulos = [
  { num:17, color:'#880099', light:'#fdf0ff', titulo:'La Resurrección de los Muertos', texto:'Todos resucitarán: los justos a vida eterna y los impíos a juicio eterno.',                    ref:'Jn. 5:28–29 · 1 Co. 15:52' },
  { num:18, color:'#880099', light:'#fdf0ff', titulo:'El Milenio',                     texto:'Cristo reinará en paz y justicia por mil años sobre la tierra antes del juicio final.',       ref:'Ap. 20:1–6' },
  { num:19, color:'#880099', light:'#fdf0ff', titulo:'El Juicio Final',                texto:'Dios juzgará a toda la humanidad. Cada persona dará cuenta de sus actos ante Cristo.',        ref:'Ap. 20:11–15 · 2 Co. 5:10' },
  { num:20, color:'#B30000', light:'#fff0f0', titulo:'El Cielo',                       texto:'Los redimidos vivirán eternamente con Dios en gozo, gloria y comunión perfecta.',            ref:'Jn. 14:2–3 · Ap. 21:3–4' },
  { num:21, color:'#B30000', light:'#fff0f0', titulo:'El Infierno',                    texto:'El rechazo de Cristo lleva a separación eterna de Dios en el lago de fuego.',                ref:'Ap. 20:15 · Mt. 25:46' },
  { num:22, color:'#003399', light:'#eef2ff', titulo:'La Iglesia',                     texto:'El cuerpo de Cristo, formado por todos los creyentes, llamado a proclamar el Evangelio.',    ref:'Ef. 1:22–23 · Mt. 16:18' },
]
</script>

<style scoped>
.fe-extra2 {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

.fe-header {
  background: linear-gradient(135deg, #0a0020, #200050);
  border-radius: 10px;
  padding: 11px 16px;
  text-align: center;
  flex-shrink: 0;
}
.fe-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.35rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 2px;
  letter-spacing: .05em;
}
.fe-sub {
  font-size: 1.02rem;
  color: rgba(255,255,255,.55);
  margin: 0;
  font-style: italic;
  letter-spacing: .06em;
}

/* Grid — 6 artículos: 2 col × 3 filas */
.fe-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 6px;
  flex: 1;
  min-height: 0;
}

.fe-card {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  border: 2.5px solid var(--cc);
  background: var(--cl);
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
}

.fc-izq {
  background: var(--cc);
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fc-num {
  font-family: 'Cinzel', serif;
  font-size: 1.8rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}

.fc-der {
  flex: 1;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}
.fc-titulo {
  font-size: 1.18rem;
  font-weight: 800;
  color: var(--cc);
  margin: 0;
  line-height: 1.2;
}
.fc-texto {
  font-size: 1.08rem;
  color: #222;
  margin: 0;
  line-height: 1.5;
}
.fc-ref {
  font-family: 'Cinzel', serif;
  font-size: 1.0rem;
  font-weight: 700;
  color: var(--cc);
  margin: 0;
  opacity: .75;
}
</style>
