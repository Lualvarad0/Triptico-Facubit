<template>
  <div class="fe-panel">

    <div class="fe-header">
      <h2 class="fe-titulo">Declaración de Fe</h2>
      <p class="fe-sub">Artículos 1 – 8 de 16 · Iglesia del Evangelio Cuadrangular</p>
    </div>

    <!-- DIOS Y ESCRITURAS -->
    <div class="categoria">
      <div class="cat-label" style="--cc:#B30000">Dios y las Escrituras</div>
      <div class="cards">
        <div v-for="a in grupo1" :key="a.num" class="card" :style="{'--cc': '#B30000'}">
          <div class="card-badge">{{ String(a.num).padStart(2,'0') }}</div>
          <div class="card-body">
            <p class="card-titulo">{{ a.titulo }}</p>
            <p class="card-texto">{{ a.texto }}</p>
            <p class="card-ref">{{ a.ref }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SALVACIÓN -->
    <div class="categoria">
      <div class="cat-label" style="--cc:#003399">Salvación</div>
      <div class="cards">
        <div v-for="a in grupo2" :key="a.num" class="card" :style="{'--cc': '#003399'}">
          <div class="card-badge">{{ String(a.num).padStart(2,'0') }}</div>
          <div class="card-body">
            <p class="card-titulo">{{ a.titulo }}</p>
            <p class="card-texto">{{ a.texto }}</p>
            <p class="card-ref">{{ a.ref }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const grupo1 = [
  { num:1, titulo:'Las Sagradas Escrituras', texto:'La Biblia es la Palabra inspirada e infalible de Dios, única regla de fe y práctica.', ref:'2 Tim. 3:16–17' },
  { num:2, titulo:'La Trinidad',             texto:'Un solo Dios eterno en tres personas coiguales: Padre, Hijo y Espíritu Santo.',         ref:'Mt. 28:19 · 2 Co. 13:14' },
]
const grupo2 = [
  { num:3, titulo:'La Caída del Hombre',  texto:'Adán y Eva desobedecieron. Toda la humanidad nace con naturaleza pecaminosa.',                ref:'Gn. 3 · Ro. 5:12' },
  { num:4, titulo:'La Redención',         texto:'Cristo murió como sustituto del pecador. Su resurrección garantiza nuestra justificación.',   ref:'1 P. 1:18–19' },
  { num:5, titulo:'Salvación por Gracia', texto:'La salvación es don gratuito de Dios, recibida por fe, no por obras humanas.',               ref:'Ef. 2:8–9' },
  { num:6, titulo:'Arrepentimiento',      texto:'El verdadero arrepentimiento produce un cambio radical de mente y corazón hacia Dios.',       ref:'Hch. 2:38' },
  { num:7, titulo:'El Nuevo Nacimiento',  texto:'Nacer de nuevo por el Espíritu Santo es necesario para entrar en el reino de Dios.',         ref:'Jn. 3:3–7' },
  { num:8, titulo:'Vida Cristiana',       texto:'El creyente está llamado a vivir una vida santa, separada del pecado, consagrada a Dios.',   ref:'1 Ts. 5:23' },
]
</script>

<style scoped>
.fe-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

/* ── Header ── */
.fe-header {
  background: linear-gradient(135deg, #0a0020, #1a003a);
  border-radius: 10px;
  padding: 12px 16px;
  text-align: center;
  flex-shrink: 0;
}
.fe-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.15rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 3px;
  letter-spacing: .05em;
}
.fe-sub {
  font-size: .92rem;
  color: rgba(255,255,255,.6);
  margin: 0;
  font-style: italic;
}

/* ── Categoría ── */
.categoria { display: flex; flex-direction: column; gap: 6px; }

.cat-label {
  font-family: 'Cinzel', serif;
  font-size: .96rem;
  font-weight: 900;
  color: var(--cc);
  text-transform: uppercase;
  letter-spacing: .1em;
  padding: 4px 10px;
  background: color-mix(in srgb, var(--cc) 10%, transparent);
  border-left: 4px solid var(--cc);
  border-radius: 0 6px 6px 0;
}

/* ── Cards ── */
.cards { display: flex; flex-direction: column; gap: 5px; }

.card {
  display: flex;
  gap: 0;
  background: #fff;
  border-radius: 8px;
  border: 1.5px solid color-mix(in srgb, var(--cc) 25%, #ddd);
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,.05);
}

.card-badge {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: #fff;
  background: var(--cc);
  min-width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: .04em;
}

.card-body {
  flex: 1;
  padding: 9px 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  border-left: 1px solid color-mix(in srgb, var(--cc) 20%, #eee);
}

.card-titulo {
  font-size: 1.02rem;
  font-weight: 800;
  color: #1a0a2a;
  margin: 0;
  line-height: 1.2;
}
.card-texto {
  font-size: .94rem;
  color: #444;
  margin: 0;
  line-height: 1.55;
}
.card-ref {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  font-weight: 700;
  color: var(--cc);
  margin: 0;
  opacity: .8;
}
</style>
