<template>
  <div class="aimee">

    <!-- ══ HERO ══ -->
    <div class="hero">
      <div class="hero-foto">
        <img src="/assets/img/aimee-semple-mcpherson.jpg" alt="Aimee Semple McPherson" class="hero-img" />
        <span class="hero-años">1890 – 1944</span>
      </div>
      <div class="hero-info">
        <p class="hero-origen">Salford, Ontario · Canadá</p>
        <h3 class="hero-nombre">Aimee Semple<br>McPherson</h3>
        <div class="hero-tags">
          <span class="htag htag-p">Fundadora</span>
          <span class="htag htag-b">Evangelista</span>
          <span class="htag htag-r">Pionera Pentecostal</span>
        </div>
        <blockquote class="hero-cita">
          "Jesucristo es el mismo ayer, hoy y por los siglos."
        </blockquote>
      </div>
    </div>

    <!-- ══ STATS ══ -->
    <div class="stats-row">
      <div v-for="s in stats" :key="s.label" class="stat" :style="{'--c': s.color}">
        <strong class="stat-val">{{ s.value }}</strong>
        <span class="stat-lbl">{{ s.label }}</span>
      </div>
    </div>

    <!-- ══ TIMELINE ══ -->
    <div class="tl-wrap">
      <div class="tl-header">
        <div class="tl-linea"></div>
        <span class="tl-titulo">Hitos Biográficos</span>
        <div class="tl-linea"></div>
      </div>
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

    <!-- ══ TEMPLO + LEGADO ══ -->
    <div class="bottom-row">
      <div class="templo">
        <img src="/assets/img/templo-angelus.jpg" alt="Templo Angelus" class="templo-img" />
        <div class="templo-pie">
          <strong>Templo Angelus</strong> · Los Ángeles, 1923 · 5,300 personas
        </div>
      </div>
      <div class="legado">
        <div class="legado-titulo">Legado Global</div>
        <div v-for="l in legado" :key="l.texto" class="legado-item">
          <span class="ldot" :style="{background:l.color}"></span>
          <span>{{ l.texto }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const stats = [
  { label:'Países',  value:'+100', color:'#003399' },
  { label:'Iglesias',value:'+30k', color:'#B30000' },
  { label:'Fieles',  value:'8M+',  color:'#880099' },
  { label:'Fundada', value:'1927', color:'#CC8800' },
]
const hitos = [
  { year:'1907', titulo:'Conversión',            texto:'Llamado misionero bajo el ministerio de Robert Semple.' },
  { year:'1910', titulo:'Evangelismo itinerante',texto:'Recorrió EE.UU. predicando sanidad y el Bautismo del Espíritu.' },
  { year:'1922', titulo:'Visión Cuadrangular',   texto:'Revelación de Ez. 1:10 en Oakland: las cuatro facetas de Cristo.' },
  { year:'1923', titulo:'Templo Angelus',        texto:'Inauguró el Angelus Temple, Echo Park, Los Ángeles.' },
  { year:'1924', titulo:'Radio KFSG',            texto:'Primera estación de radio religiosa de EE.UU.' },
  { year:'1927', titulo:'Iglesia Cuadrangular',  texto:'Fundó formalmente la Iglesia del Evangelio Cuadrangular.' },
]
const legado = [
  { texto:'+30,000 iglesias en el mundo',         color:'#B30000' },
  { texto:'+8 millones de fieles en 100 países',  color:'#003399' },
  { texto:'Primera mujer con licencia de radio',  color:'#CC8800' },
  { texto:'Alimentó miles en la Gran Depresión',  color:'#880099' },
]
</script>

<style scoped>
.aimee {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* ══ HERO ══ */
.hero {
  display: flex;
  gap: 10px;
  align-items: stretch;
  background: linear-gradient(135deg, #1a0033 0%, #440066 100%);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 16px rgba(136,0,153,.3);
}

.hero-foto {
  position: relative;
  flex-shrink: 0;
}
.hero-img {
  width: 72px;
  height: 90px;
  object-fit: cover;
  object-position: top center;
  border-radius: 8px;
  display: block;
  border: 2px solid rgba(255,255,255,.3);
  box-shadow: 0 4px 12px rgba(0,0,0,.4);
}
.hero-años {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  background: #CC8800;
  color: #fff;
  font-size: .44rem;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 8px;
  white-space: nowrap;
  letter-spacing: .5px;
}

.hero-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.hero-origen {
  font-size: .52rem;
  color: rgba(255,255,255,.55);
  margin: 0;
  letter-spacing: .06em;
}
.hero-nombre {
  font-family: 'Cinzel', serif;
  font-size: .9rem;
  font-weight: 900;
  color: #fff;
  margin: 0;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0,0,0,.4);
}
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}
.htag {
  font-size: .48rem;
  font-weight: 700;
  letter-spacing: .8px;
  padding: 2px 7px;
  border-radius: 10px;
}
.htag-p { background: rgba(136,0,153,.4); color: #f0c0ff; }
.htag-b { background: rgba(0,51,153,.4);  color: #c0d4ff; }
.htag-r { background: rgba(179,0,0,.4);   color: #ffc0c0; }

.hero-cita {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: .6rem;
  color: rgba(255,255,255,.8);
  border-left: 3px solid #CC8800;
  padding-left: 8px;
  margin: 2px 0 0;
  line-height: 1.45;
}

/* ══ STATS ══ */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}
.stat {
  background: #fff;
  border-radius: 7px;
  border-top: 3px solid var(--c);
  padding: 6px 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1px;
  box-shadow: 0 2px 8px rgba(0,0,0,.07);
}
.stat-val {
  font-family: 'Cinzel', serif;
  font-size: .78rem;
  font-weight: 900;
  color: var(--c);
}
.stat-lbl {
  font-size: .48rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: .6px;
}

/* ══ TIMELINE ══ */
.tl-wrap { display: flex; flex-direction: column; gap: 4px; }

.tl-header {
  display: flex;
  align-items: center;
  gap: 6px;
}
.tl-linea {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #E0C0F0);
}
.tl-linea:first-child {
  background: linear-gradient(90deg, #E0C0F0, transparent);
}
.tl-titulo {
  font-family: 'Cinzel', serif;
  font-size: .58rem;
  font-weight: 700;
  color: #880099;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
}

.timeline {
  display: flex;
  flex-direction: column;
  padding-left: 4px;
}
.tl-item {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  padding: 4px 0;
  border-left: 2px solid #E0C0F0;
  padding-left: 10px;
  position: relative;
}
.tl-item:last-child { border-left-color: transparent; }

.tl-dot {
  position: absolute;
  left: -5px;
  top: 7px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #880099;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px rgba(136,0,153,.25);
  flex-shrink: 0;
}

.tl-year {
  font-family: 'Cinzel', serif;
  font-size: .58rem;
  font-weight: 900;
  color: #880099;
  min-width: 32px;
  flex-shrink: 0;
  padding-top: 1px;
}
.tl-body {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.tl-body strong {
  font-size: .6rem;
  color: #2a1a0a;
  font-weight: 700;
}
.tl-body span {
  font-size: .56rem;
  color: #666;
  line-height: 1.4;
}

/* ══ BOTTOM ROW ══ */
.bottom-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}

.templo {
  border-radius: 8px;
  overflow: hidden;
  border: 1.5px solid #e0d0c0;
  box-shadow: 0 3px 10px rgba(0,0,0,.1);
}
.templo-img {
  width: 100%;
  height: 70px;
  object-fit: cover;
  display: block;
}
.templo-pie {
  background: #F8F5F0;
  padding: 5px 8px;
  font-size: .54rem;
  color: #555;
  line-height: 1.4;
}
.templo-pie strong { color: #2a1a0a; }

.legado {
  background: linear-gradient(135deg, #F8F0FF, #FFF8FF);
  border: 1.5px solid #E0C0F0;
  border-radius: 8px;
  overflow: hidden;
}
.legado-titulo {
  font-family: 'Cinzel', serif;
  font-size: .58rem;
  font-weight: 700;
  color: #880099;
  background: rgba(136,0,153,.07);
  padding: 5px 8px;
  border-bottom: 1px solid #E0C0F0;
  letter-spacing: .06em;
}
.legado-item {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 4px 8px;
  font-size: .56rem;
  color: #444;
  line-height: 1.4;
  border-bottom: 1px solid rgba(136,0,153,.06);
}
.legado-item:last-child { border-bottom: none; }
.ldot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 4px;
}
</style>
