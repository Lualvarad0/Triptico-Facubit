<template>
  <div class="fe-panel">

    <div class="fe-header">
      <span class="fe-eyebrow">16 Artículos Fundamentales</span>
      <h2 class="fe-titulo">Declaración de Fe</h2>
      <span class="fe-pag">Página 1 · Art. 01 – 08</span>
    </div>

    <div class="fe-grid">
      <div
        v-for="a in articulos"
        :key="a.num"
        class="fe-card"
        :style="{'--cc': a.color, '--cl': a.light}"
      >
        <div class="fc-num">{{ String(a.num).padStart(2,'0') }}</div>
        <div class="fc-content">
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
  { num:1, color:'#B30000', light:'#fff5f5', titulo:'Las Sagradas Escrituras',  texto:'La Biblia es la Palabra inspirada e infalible de Dios, única regla de fe y práctica.',              ref:'2 Tim. 3:16–17' },
  { num:2, color:'#B30000', light:'#fff5f5', titulo:'La Trinidad',              texto:'Un solo Dios eterno en tres personas coiguales: Padre, Hijo y Espíritu Santo.',                      ref:'Mt. 28:19' },
  { num:3, color:'#003399', light:'#f0f4ff', titulo:'La Caída del Hombre',      texto:'Adán y Eva desobedecieron. Toda la humanidad nace con naturaleza pecaminosa.',                       ref:'Gn. 3 · Ro. 5:12' },
  { num:4, color:'#003399', light:'#f0f4ff', titulo:'La Redención',             texto:'Cristo murió como sustituto del pecador. Su resurrección garantiza nuestra justificación.',         ref:'1 P. 1:18–19' },
  { num:5, color:'#003399', light:'#f0f4ff', titulo:'Salvación por Gracia',     texto:'La salvación es don gratuito de Dios, recibida por fe, no por obras humanas.',                     ref:'Ef. 2:8–9' },
  { num:6, color:'#003399', light:'#f0f4ff', titulo:'Arrepentimiento',          texto:'El verdadero arrepentimiento produce un cambio radical de mente y corazón hacia Dios.',             ref:'Hch. 2:38' },
  { num:7, color:'#003399', light:'#f0f4ff', titulo:'El Nuevo Nacimiento',      texto:'Nacer de nuevo por el Espíritu Santo es necesario para entrar en el reino de Dios.',               ref:'Jn. 3:3–7' },
  { num:8, color:'#003399', light:'#f0f4ff', titulo:'Vida Cristiana',           texto:'El creyente está llamado a vivir una vida santa, separada del pecado, consagrada a Dios.',         ref:'1 Ts. 5:23' },
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
  background: linear-gradient(135deg, #0a0020, #200050);
  border-radius: 10px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-shrink: 0;
}
.fe-eyebrow {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  color: rgba(255,255,255,.5);
  letter-spacing: .08em;
  white-space: nowrap;
}
.fe-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.15rem;
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: .04em;
  text-align: center;
  flex: 1;
}
.fe-pag {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  color: rgba(255,255,255,.5);
  letter-spacing: .06em;
  white-space: nowrap;
}

/* ── Grid 2×4 ── */
.fe-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 7px;
  flex: 1;
  min-height: 0;
}

/* ── Card ── */
.fe-card {
  background: var(--cl);
  border: 2px solid var(--cc);
  border-radius: 10px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
}

.fc-num {
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  font-weight: 900;
  color: #fff;
  background: var(--cc);
  min-width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: .02em;
}

.fc-content {
  flex: 1;
  padding: 8px 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
}

.fc-titulo {
  font-size: 1.0rem;
  font-weight: 800;
  color: var(--cc);
  margin: 0;
  line-height: 1.2;
}
.fc-texto {
  font-size: .92rem;
  color: #333;
  margin: 0;
  line-height: 1.45;
}
.fc-ref {
  font-family: 'Cinzel', serif;
  font-size: .86rem;
  font-weight: 700;
  color: var(--cc);
  margin: 0;
  opacity: .7;
}
</style>
