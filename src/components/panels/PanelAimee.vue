<template>
  <div class="aimee">

    <!-- Hero biográfico con foto real -->
    <div class="bio-hero">
      <div class="bio-photo-wrap">
        <img
          src="/assets/img/aimee-semple-mcpherson.jpg"
          alt="Aimee Semple McPherson"
          class="bio-photo"
        />
        <span class="bio-years">1890–1944</span>
      </div>
      <div class="bio-meta">
        <h3>Aimee Semple McPherson</h3>
        <p class="bio-sub">Salford, Ontario, Canadá</p>
        <div class="bio-tags">
          <span class="tag tag-red">Fundadora</span>
          <span class="tag tag-blue">Evangelista</span>
          <span class="tag tag-purple">Pionera Pentecostal</span>
        </div>
        <blockquote class="bio-quote">
          "Jesús es el mismo ayer, hoy y por los siglos."
        </blockquote>
      </div>
    </div>

    <!-- Datos rápidos -->
    <div class="quick-stats">
      <div v-for="s in stats" :key="s.label" class="stat-chip" :style="{'--sc': s.color}">
        <strong>{{ s.value }}</strong>
        <span>{{ s.label }}</span>
      </div>
    </div>

    <!-- Línea de tiempo -->
    <div class="tl-label">Hitos biográficos</div>
    <div class="timeline">
      <div v-for="h in hitos" :key="h.year" class="tl-item">
        <div class="tl-year">{{ h.year }}</div>
        <div class="tl-line"><div class="tl-dot"></div></div>
        <div class="tl-body">
          <strong>{{ h.titulo }}</strong>
          <p>{{ h.texto }}</p>
        </div>
      </div>
    </div>

    <!-- Templo Angelus -->
    <div class="temple-card">
      <img
        src="/assets/img/templo-angelus.jpg"
        alt="Templo Angelus"
        class="temple-img"
      />
      <div class="temple-caption">
        <strong>Templo Angelus</strong> — Echo Park, Los Ángeles (1923) · Capacidad: 5,300 personas
      </div>
    </div>

    <!-- Legado -->
    <div class="legado-box">
      <div class="legado-title">Legado Global</div>
      <div class="legado-grid">
        <div v-for="leg in legado" :key="leg.texto" class="legado-item">
          <span class="legado-dot" :style="{background: leg.color}"></span>
          <span>{{ leg.texto }}</span>
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
  { year:'1907', titulo:'Conversión', texto:'Se convirtió bajo el ministerio de Robert Semple e inició su llamado misionero.' },
  { year:'1910', titulo:'Evangelismo itinerante', texto:'Recorrió EE.UU. predicando sanidad divina y el Bautismo del Espíritu Santo.' },
  { year:'1922', titulo:'Visión Cuadrangular', texto:'Recibió la revelación de Ez. 1:10 en Oakland, CA: las cuatro facetas de Cristo.' },
  { year:'1923', titulo:'Templo Angelus', texto:'Inauguró el Angelus Temple en Echo Park, Los Ángeles — capacidad: 5,300 personas.' },
  { year:'1924', titulo:'Radio KFSG', texto:'Primera estación de radio religiosa de EE.UU. Pionera del evangelismo mediático.' },
  { year:'1927', titulo:'Iglesia Cuadrangular', texto:'Fundó formalmente la Iglesia del Evangelio Cuadrangular inspirada en Ez. 1:10.' },
]
const legado = [
  { texto:'Más de 30,000 iglesias activas en el mundo',    color:'#B30000' },
  { texto:'Más de 8 millones de fieles en +100 países',    color:'#003399' },
  { texto:'Primera mujer con licencia de radiodifusión',   color:'#CC8800' },
  { texto:'Durante la Depresión alimentó a miles en L.A.', color:'#880099' },
  { texto:'Su modelo de evangelismo sigue siendo referencia', color:'#1a7a1a' },
]
</script>

<style scoped>
.aimee { display:flex; flex-direction:column; gap:13px; }

/* Hero */
.bio-hero { display:flex; gap:13px; align-items:flex-start; }

.bio-photo-wrap {
  flex-shrink:0; position:relative; width:80px;
}
.bio-photo {
  width:80px; height:96px; object-fit:cover; object-position:top center;
  border-radius:10px; display:block;
  box-shadow:0 4px 16px rgba(136,0,153,.3);
  border:2.5px solid #880099;
}
.bio-years {
  position:absolute; bottom:-10px; left:50%; transform:translateX(-50%);
  background:#880099; color:#fff; font-size:.5rem; font-weight:700;
  padding:2px 7px; border-radius:10px; white-space:nowrap;
}

.bio-meta { flex:1; display:flex; flex-direction:column; gap:5px; }
.bio-meta h3 { font-family:'Cinzel',serif; font-size:.86rem; color:#880099; margin:0; }
.bio-sub { font-size:.67rem; color:#888; margin:0; }

.bio-tags { display:flex; flex-wrap:wrap; gap:4px; }
.tag { font-size:.56rem; font-weight:700; letter-spacing:.8px; padding:2px 7px; border-radius:10px; }
.tag-red    { background:#FFEBEB; color:#B30000; }
.tag-blue   { background:#EBF0FF; color:#003399; }
.tag-purple { background:#F5E6FF; color:#880099; }

.bio-quote {
  font-family:'Playfair Display',serif; font-style:italic;
  font-size:.7rem; color:#880099;
  border-left:3px solid #880099; padding-left:8px; margin:3px 0 0;
  line-height:1.5;
}

/* Stats */
.quick-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:6px; }
.stat-chip {
  background:#fff; border:1.5px solid rgba(0,0,0,.08);
  border-top:3px solid var(--sc);
  border-radius:8px; padding:8px 6px;
  display:flex; flex-direction:column; align-items:center; gap:2px;
  box-shadow:0 2px 8px rgba(0,0,0,.07); text-align:center;
}
.stat-chip strong { font-size:.8rem; font-weight:900; color:#2a1a0a; }
.stat-chip span   { font-size:.54rem; color:#888; letter-spacing:.5px; text-transform:uppercase; }

/* Timeline */
.tl-label {
  font-family:'Cinzel',serif; font-size:.72rem; font-weight:700;
  color:#880099; text-transform:uppercase; letter-spacing:1px;
}
.timeline { display:flex; flex-direction:column; }
.tl-item  { display:flex; gap:0; align-items:flex-start; }
.tl-year  {
  font-family:'Cinzel',serif; font-size:.63rem; font-weight:900;
  color:#880099; min-width:36px; padding-top:3px; flex-shrink:0;
}
.tl-line {
  display:flex; flex-direction:column; align-items:center;
  width:16px; flex-shrink:0; padding-top:5px;
  border-right:1.5px solid #E0C0F0; margin-right:10px; padding-bottom:8px;
}
.tl-dot {
  width:9px; height:9px; border-radius:50%;
  background:#880099; flex-shrink:0;
  box-shadow:0 0 0 3px rgba(136,0,153,.18);
  margin-right:-5px;
}
.tl-item:last-child .tl-line { border-right-color:transparent; }
.tl-body { flex:1; padding-bottom:8px; }
.tl-body strong { font-size:.7rem; color:#3a2a1a; display:block; }
.tl-body p { font-size:.63rem; color:#666; line-height:1.45; margin:2px 0 0; }

/* Temple */
.temple-card {
  border-radius:10px; overflow:hidden;
  box-shadow:0 3px 12px rgba(0,0,0,.12);
  border:1.5px solid #e0d0c0;
}
.temple-img {
  width:100%; height:100px; object-fit:cover; display:block;
}
.temple-caption {
  background:#F8F5F0; padding:6px 10px;
  font-size:.63rem; color:#555; line-height:1.4;
}
.temple-caption strong { color:#3a2a1a; }

/* Legado */
.legado-box {
  background:linear-gradient(135deg,#F8F0FF,#FFF8FF);
  border:1.5px solid #E0C0F0; border-radius:10px; overflow:hidden;
}
.legado-title {
  font-family:'Cinzel',serif; font-size:.72rem; font-weight:700;
  color:#880099; background:rgba(136,0,153,.06);
  border-bottom:1px solid #E0C0F0; padding:8px 12px;
}
.legado-grid { display:flex; flex-direction:column; }
.legado-item {
  display:flex; align-items:flex-start; gap:9px;
  padding:7px 12px; font-size:.66rem; color:#444; line-height:1.45;
  border-bottom:1px solid rgba(136,0,153,.08);
}
.legado-item:last-child { border-bottom:none; }
.legado-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; margin-top:4px; }
</style>
