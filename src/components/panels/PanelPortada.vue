<template>
  <div class="portada">

    <blockquote class="verse">
      "En cuanto a la semejanza de sus rostros, los cuatro tenían rostro de hombre,
      y rostro de león al lado derecho, y rostro de buey a la izquierda, y rostro de águila."
      <cite>— Ezequiel 1:10 (RVR 1960)</cite>
    </blockquote>

    <div class="faces-grid">
      <div v-for="f in faces" :key="f.id" class="face-card" :style="{'--fc': f.color}">
        <div class="face-img-wrap">
          <img :src="f.img" :alt="f.nombre" class="face-img" />
          <div class="face-img-overlay" :style="{background: `linear-gradient(to top, ${f.color}EE 0%, ${f.color}44 50%, transparent 100%)`}"></div>
          <span class="face-badge">{{ f.doctrina }}</span>
        </div>
        <div class="face-body">
          <h4>{{ f.nombre }}</h4>
          <p>{{ f.desc }}</p>
          <span class="face-ref">{{ f.ref }}</span>
        </div>
      </div>
    </div>

    <div class="meta-box">
      <div class="meta-row"><span class="meta-dot" style="background:#B30000"></span><span><strong>FACUBIT</strong> — Facultad Cuadrangular Bíblica Teológica</span></div>
      <div class="meta-row"><span class="meta-dot" style="background:#003399"></span><span>Fundamento Cuadrangular · 2026</span></div>
      <div class="meta-row"><span class="meta-dot" style="background:#CC8800"></span><span>Base: Declaración de Fe — Iglesia Cuadrangular</span></div>
    </div>

    <div class="pills">
      <span v-for="p in pills" :key="p.label" class="pill" :style="{background: p.color}">
        {{ p.label }}
      </span>
    </div>

  </div>
</template>

<script setup>
const faces = [
  {
    id:'hombre', nombre:'Rostro de Hombre', doctrina:'SALVADOR',
    color:'#003399',
    img:'/assets/img/rostro-hombre-grabado.png',
    ref:'Fil. 2:7–8 · Lc. 19:10',
    desc:'Cristo se encarnó como hombre para identificarse con la humanidad y salvarla.'
  },
  {
    id:'leon', nombre:'Rostro de León', doctrina:'REY VENIDERO',
    color:'#B30000',
    img:'/assets/img/rostro-leon-grabado.png',
    ref:'Ap. 19:16 · Ap. 5:5',
    desc:'El Rey de reyes regresará en gloria y majestad para establecer su reino eterno.'
  },
  {
    id:'buey', nombre:'Rostro de Buey', doctrina:'SANADOR',
    color:'#1a7a1a',
    img:'/assets/img/rostro-buey-grabado.png',
    ref:'Is. 53:4–5 · Mt. 8:17',
    desc:'Como el buey cargó el yugo, Cristo llevó nuestras enfermedades en la cruz.'
  },
  {
    id:'aguila', nombre:'Rostro de Águila', doctrina:'BAUTIZADOR',
    color:'#880099',
    img:'/assets/img/rostro-aguila-grabado.png',
    ref:'Hch. 1:8 · Hch. 2:1–4',
    desc:'El águila en las alturas: Cristo bautiza con Espíritu Santo y fuego sobrenatural.'
  },
]
const pills = [
  { label:'Salvador',    color:'#B30000' },
  { label:'Sanador',     color:'#1a7a1a' },
  { label:'Bautizador',  color:'#CC8800' },
  { label:'Rey Venidero',color:'#880099' },
]
</script>

<style scoped>
.portada { display:flex; flex-direction:column; gap:14px; }

.verse {
  font-family:'Playfair Display',serif; font-style:italic;
  font-size:.76rem; color:#3a2a1a; line-height:1.7;
  background:#FFF8F0; border:1px solid #e8d8c0;
  border-left:4px solid #B30000; border-radius:4px;
  padding:12px 14px; margin:0;
}
cite { display:block; font-size:.62rem; color:#999; margin-top:5px; font-style:normal; }

.faces-grid { display:grid; grid-template-columns:1fr 1fr; gap:9px; }

.face-card {
  border-radius:10px; overflow:hidden;
  border:1.5px solid rgba(0,0,0,.08);
  box-shadow:0 3px 12px rgba(0,0,0,.1);
  background:#fff;
  transition:transform .3s,box-shadow .3s;
}
.face-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,.16); }

.face-img-wrap {
  height:90px; position:relative; overflow:hidden;
}
.face-img {
  width:100%; height:100%; object-fit:cover;
  display:block;
}
.face-img-overlay {
  position:absolute; inset:0;
}
.face-badge {
  position:absolute; bottom:7px; left:8px;
  background:rgba(0,0,0,.5); color:#fff;
  font-size:.48rem; font-weight:800; letter-spacing:1.5px;
  padding:2px 7px; border-radius:10px; text-transform:uppercase;
  backdrop-filter:blur(4px);
}

.face-body { padding:10px 12px; }
.face-body h4 {
  font-family:'Cinzel',serif; font-size:.71rem; font-weight:700;
  color:var(--fc); margin:0 0 4px;
}
.face-body p { font-size:.64rem; color:#555; line-height:1.5; margin:0 0 4px; }
.face-ref { font-size:.57rem; color:#aaa; }

.meta-box {
  background:#F8F5F0; border:1px solid #E5DDD0; border-radius:8px;
  padding:10px 14px; display:flex; flex-direction:column; gap:6px;
}
.meta-row { display:flex; align-items:center; gap:8px; font-size:.68rem; color:#555; }
.meta-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }

.pills { display:flex; flex-wrap:wrap; gap:5px; }
.pill {
  padding:5px 12px; border-radius:20px;
  font-size:.62rem; font-weight:700; color:#fff;
  box-shadow:0 2px 6px rgba(0,0,0,.2);
}
</style>
