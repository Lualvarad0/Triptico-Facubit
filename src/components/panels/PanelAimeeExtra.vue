<template>
  <div class="aimee-extra">

    <div class="ae-header">
      <div class="ae-ornamento">
        <div class="ae-linea"></div>
        <div class="ae-diamante"></div>
        <div class="ae-linea"></div>
      </div>
      <h3 class="ae-titulo">Aimee Semple McPherson</h3>
      <p class="ae-subtitulo">Vida, Ministerio y Legado</p>
    </div>

    <!-- ══ TIMELINE ══ -->
    <div class="ae-bloque">
      <div class="ae-bloque-titulo">Hitos de su Vida</div>
      <div class="timeline">
        <div v-for="h in hitos" :key="h.year" class="tl-item">
          <span class="tl-year">{{ h.year }}</span>
          <div class="tl-dot"></div>
          <div class="tl-body">
            <strong>{{ h.titulo }}</strong>
            <span>{{ h.texto }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ══ PERFIL ══ -->
    <div class="ae-bloque">
      <div class="ae-bloque-titulo">Perfil Personal</div>
      <p class="ae-bio">
        Nació el <strong>9 de octubre de 1890</strong> en Salford, Ontario, Canadá, como
        Aimee Elizabeth Kennedy. Contrajo matrimonio con Robert Semple, misionero con quien
        viajó a China, y más tarde con Harold McPherson. Fue madre de
        <strong>Roberta Star</strong> y <strong>Rolf McPherson</strong>.
        Falleció el <strong>27 de septiembre de 1944</strong> en Oakland, California,
        dejando un legado pentecostal de alcance mundial dentro del movimiento
        <strong>Cuadrangular</strong>.
      </p>
    </div>

  </div>
</template>

<script setup>
const hitos = [
  { year:'1907', titulo:'Conversión',             texto:'Llamado misionero bajo el ministerio de Robert Semple.' },
  { year:'1910', titulo:'Evangelismo itinerante', texto:'Recorrió EE.UU. predicando sanidad y el Bautismo del Espíritu.' },
  { year:'1922', titulo:'Visión Cuadrangular',    texto:'Revelación de Ez. 1:10 en Oakland: las cuatro facetas de Cristo.' },
  { year:'1923', titulo:'Templo Angelus',         texto:'Inauguró el Angelus Temple en Echo Park, Los Ángeles.' },
  { year:'1924', titulo:'Radio KFSG',             texto:'Primera estación de radio religiosa en EE.UU.' },
  { year:'1927', titulo:'Iglesia Cuadrangular',   texto:'Fundó formalmente la Iglesia del Evangelio Cuadrangular.' },
]
</script>

<style scoped>
.aimee-extra {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

/* ══ HEADER ══ */
.ae-header { text-align: center; padding-bottom: 2px; }
.ae-ornamento {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 5px;
}
.ae-linea {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #E0C0F0);
}
.ae-linea:last-child { background: linear-gradient(90deg, #E0C0F0, transparent); }
.ae-diamante {
  width: 8px; height: 8px;
  background: #880099;
  transform: rotate(45deg);
  flex-shrink: 0;
}
.ae-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.08rem;
  font-weight: 900;
  color: #880099;
  margin: 0;
  letter-spacing: .04em;
}
.ae-subtitulo {
  font-size: .82rem;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: .14em;
  margin: 3px 0 0;
}

/* ══ BLOQUE BASE ══ */
.ae-bloque {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(136,0,153,.12);
  box-shadow: 0 2px 8px rgba(0,0,0,.05);
}
.ae-bloque-titulo {
  font-family: 'Cinzel', serif;
  font-size: .84rem;
  font-weight: 700;
  color: #880099;
  background: linear-gradient(90deg, rgba(136,0,153,.08), transparent);
  border-bottom: 1px solid rgba(136,0,153,.12);
  padding: 7px 10px;
  letter-spacing: .06em;
  text-transform: uppercase;
}

/* ══ TIMELINE ══ */
.timeline { padding: 4px 0 4px 12px; }
.tl-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 5px 10px 5px 10px;
  border-left: 2px solid #E0C0F0;
  position: relative;
}
.tl-item:last-child { border-left-color: transparent; }
.tl-dot {
  position: absolute;
  left: -5px; top: 9px;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #880099;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px rgba(136,0,153,.25);
}
.tl-year {
  font-family: 'Cinzel', serif;
  font-size: .86rem;
  font-weight: 900;
  color: #880099;
  min-width: 40px;
  flex-shrink: 0;
  padding-top: 1px;
}
.tl-body { display: flex; flex-direction: column; gap: 2px; }
.tl-body strong { font-size: .88rem; color: #2a1a0a; font-weight: 700; }
.tl-body span   { font-size: .84rem; color: #666; line-height: 1.45; }

/* ══ PERFIL ══ */
.ae-bio {
  font-size: .88rem;
  color: #444;
  line-height: 1.7;
  padding: 10px 12px;
  margin: 0;
}
.ae-bio strong { color: #880099; }
</style>
