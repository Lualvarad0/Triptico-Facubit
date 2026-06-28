<template>
  <div class="contra">

    <!-- Bloque institucional -->
    <div class="inst-block">
      <div class="inst-fila">
        <span class="inst-etiq">Institución</span>
        <span class="inst-val azul">FACULTAD CUADRANGULAR<br>BÍBLICA TEOLÓGICA <em>"FACUBIT"</em></span>
      </div>
      <div class="inst-div"></div>
      <div class="inst-fila">
        <span class="inst-etiq">Asignatura</span>
        <span class="inst-val purpura">FUNDAMENTO CUADRANGULAR</span>
      </div>
    </div>

    <!-- Tarjetas de autoridades -->
    <div class="autoridades">
      <div class="auto-card" style="--accent:#003399">
        <span class="auto-rol">Coordinador</span>
        <span class="auto-nombre">Víctor Cañar</span>
      </div>
      <div class="auto-card" style="--accent:#880099">
        <span class="auto-rol">Subcoordinadora</span>
        <span class="auto-nombre">Luci Banchon</span>
      </div>
      <div class="auto-card" style="--accent:#CC8800">
        <span class="auto-rol">Profesora</span>
        <span class="auto-nombre">Lcda. Susana Alvarado</span>
      </div>
    </div>

    <!-- Pastor e Iglesia -->
    <div class="iglesia-block">
      <div class="iglesia-fila">
        <span class="igl-etiq">Pastor(es)</span>
        <span class="igl-val">Ps. Angel Alvarado y Ps. Ana Correa</span>
      </div>
      <div class="iglesia-fila">
        <span class="igl-etiq">Iglesia</span>
        <span class="igl-val destaca">Cuadrangular "Emmanuel"<br>Recinto El Guabito</span>
      </div>
    </div>

    <!-- Estudiantes -->
    <div class="estudiantes-block">
      <div class="est-header">
        <span class="est-titulo">Estudiantes</span>
        <div class="est-linea"></div>
      </div>
      <div class="nombres-grid">
        <div v-for="(n, i) in estudiantes" :key="n" class="nombre-item">
          <span class="n-num">{{ String(i+1).padStart(2,'0') }}</span>
          <span class="n-val">{{ n }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const estudiantes = [
  'Bernardo Plúas',    'Omar Alvarado',
  'Víctor Ronquillo',  'David Alvarado',
  'Mayra Huacón',      'Elizabeth Alvarado',
  'Geanella Plúas',    'Bolívar Plúas',
]
</script>

<style scoped>
.contra {
  display: flex;
  flex-direction: column;
  gap: 6px;
  animation: contraIn .45s ease both;
}
@keyframes contraIn {
  from { opacity:0; transform:translateY(6px); }
  to   { opacity:1; transform:none; }
}

/* ── Institución ── */
.inst-block {
  background: linear-gradient(135deg,rgba(0,51,153,.06),rgba(136,0,153,.04));
  border: 1px solid rgba(0,51,153,.15);
  border-radius: 7px;
  padding: 7px 9px;
  display: flex; flex-direction: column; gap: 5px;
}
.inst-fila { display: flex; flex-direction: column; gap: 1px; }
.inst-div  { height: 1px; background: rgba(0,0,0,.08); }
.inst-etiq {
  font-size: .78rem; font-weight: 700; letter-spacing: .14em;
  text-transform: uppercase; color: #999;
}
.inst-val {
  font-family: 'Cinzel', serif;
  font-size: .82rem; font-weight: 800; line-height: 1.2;
}
.inst-val.azul    { color: #003399; }
.inst-val.purpura { color: #880099; }
.inst-val em { font-style: italic; color: #B30000; }

/* ── Autoridades ── */
.autoridades {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
}
.auto-card {
  background: color-mix(in srgb, var(--accent) 8%, white);
  border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
  border-top: 3px solid var(--accent);
  border-radius: 6px;
  padding: 5px 7px;
  display: flex; flex-direction: column; gap: 2px;
}
.auto-rol {
  font-size: .76rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .1em; color: #888;
}
.auto-nombre {
  font-family: 'Cinzel', serif;
  font-size: .82rem; font-weight: 700; color: #1a0a00; line-height: 1.2;
}

/* ── Iglesia ── */
.iglesia-block {
  background: rgba(26,10,0,.03);
  border: 1px solid rgba(26,10,0,.1);
  border-radius: 7px;
  padding: 6px 9px;
  display: flex; flex-direction: column; gap: 4px;
}
.iglesia-fila { display: flex; flex-direction: column; gap: 1px; }
.igl-etiq {
  font-size: .76rem; font-weight: 700;
  letter-spacing: .14em; text-transform: uppercase; color: #999;
}
.igl-val {
  font-family: 'Cinzel', serif;
  font-size: .82rem; font-weight: 600; color: #1a3a6a; line-height: 1.3;
}
.igl-val.destaca { font-weight: 800; color: #003399; }

/* ── Estudiantes ── */
.estudiantes-block {
  display: flex; flex-direction: column; gap: 4px;
}
.est-header {
  display: flex; align-items: center; gap: 6px;
}
.est-titulo {
  font-family: 'Cinzel', serif;
  font-size: .78rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .12em; color: #7a5a30;
  white-space: nowrap;
}
.est-linea {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, rgba(122,90,48,.3), transparent);
}
.nombres-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px 8px;
}
.nombre-item {
  display: flex; align-items: center; gap: 4px;
  padding: 2px 0;
  border-bottom: 1px dotted rgba(0,0,0,.08);
}
.n-num {
  font-size: .76rem; color: #bbb; font-weight: 700; flex-shrink: 0;
}
.n-val {
  font-family: 'Cinzel', serif;
  font-size: .82rem; color: #1a0a00;
}
</style>
