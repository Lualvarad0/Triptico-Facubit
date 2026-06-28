<template>
  <div class="fe-panel">

    <!-- Header -->
    <div class="fe-header">
      <h2 class="fe-titulo">Declaración de Fe</h2>
      <p class="fe-sub">Artículos 01 – 08 de 16</p>
    </div>

    <!-- Grid de cards -->
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
  { num:1, color:'#B30000', light:'#fff0f0', titulo:'Las Sagradas Escrituras',  texto:'La Biblia es la Palabra inspirada e infalible de Dios, única regla de fe y práctica.',            ref:'2 Tim. 3:16–17' },
  { num:2, color:'#B30000', light:'#fff0f0', titulo:'La Trinidad',              texto:'Un solo Dios eterno en tres personas coiguales: Padre, Hijo y Espíritu Santo.',                    ref:'Mt. 28:19 · 2 Co. 13:14' },
  { num:3, color:'#003399', light:'#eef2ff', titulo:'La Caída del Hombre',      texto:'Adán y Eva desobedecieron. Toda la humanidad nace con naturaleza pecaminosa.',                     ref:'Gn. 3 · Ro. 5:12' },
  { num:4, color:'#003399', light:'#eef2ff', titulo:'La Redención',             texto:'Cristo murió como sustituto del pecador. Su resurrección garantiza nuestra justificación.',       ref:'1 P. 1:18–19' },
  { num:5, color:'#003399', light:'#eef2ff', titulo:'Salvación por Gracia',     texto:'La salvación es don gratuito de Dios, recibida por fe, no por obras humanas.',                   ref:'Ef. 2:8–9' },
  { num:6, color:'#003399', light:'#eef2ff', titulo:'Arrepentimiento',          texto:'El verdadero arrepentimiento produce un cambio radical de mente y corazón hacia Dios.',           ref:'Hch. 2:38' },
  { num:7, color:'#003399', light:'#eef2ff', titulo:'El Nuevo Nacimiento',      texto:'Nacer de nuevo por el Espíritu Santo es necesario para entrar en el reino de Dios.',             ref:'Jn. 3:3–7' },
  { num:8, color:'#003399', light:'#eef2ff', titulo:'Vida Cristiana',           texto:'El creyente está llamado a vivir una vida santa, separada del pecado, consagrada a Dios.',       ref:'1 Ts. 5:23' },
]
</script>

<style scoped>
.fe-panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

/* Header */
.fe-header {
  background: linear-gradient(135deg, #0a0020, #200050);
  border-radius: 10px;
  padding: 11px 16px;
  text-align: center;
  flex-shrink: 0;
}
.fe-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 2px;
  letter-spacing: .05em;
}
.fe-sub {
  font-size: .92rem;
  color: rgba(255,255,255,.55);
  margin: 0;
  font-style: italic;
  letter-spacing: .06em;
}

/* Grid */
.fe-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 6px;
  flex: 1;
  min-height: 0;
}

/* Card */
.fe-card {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  border: 2.5px solid var(--cc);
  background: var(--cl);
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
}

/* Columna izquierda — número sobre color sólido */
.fc-izq {
  background: var(--cc);
  min-width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fc-num {
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}

/* Columna derecha — texto */
.fc-der {
  flex: 1;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}
.fc-titulo {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--cc);
  margin: 0;
  line-height: 1.2;
}
.fc-texto {
  font-size: .96rem;
  color: #222;
  margin: 0;
  line-height: 1.5;
}
.fc-ref {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  font-weight: 700;
  color: var(--cc);
  margin: 0;
  opacity: .75;
}
</style>
