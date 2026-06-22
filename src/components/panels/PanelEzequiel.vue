<template>
  <div class="ezequiel">

    <blockquote class="ez-intro">
      Aimee Semple McPherson encontró en Ezequiel 1:10 el cuadro perfecto del ministerio
      de Cristo. Cada rostro revela una dimensión de su poder eterno.
    </blockquote>

    <div class="rostros-grid">
      <div v-for="r in rostros" :key="r.id" class="rostro-card" :style="{'--rc': r.color}">
        <div class="rostro-img-wrap">
          <img :src="r.img" :alt="r.nombre" class="rostro-img" />
          <div class="rostro-overlay" :style="{background: `linear-gradient(to top, ${r.color}F0 0%, ${r.color}66 55%, transparent 100%)`}"></div>
          <span class="rostro-num">{{ r.num }}</span>
          <div class="rostro-doc-tag">{{ r.doctrina }}</div>
        </div>
        <div class="rostro-body">
          <h4>{{ r.nombre }}</h4>
          <p>{{ r.texto }}</p>
          <div class="rostro-refs">{{ r.ref }}</div>
        </div>
      </div>
    </div>

    <div class="cuadro-sintetico">
      <div class="cs-title">El Evangelio Cuadrangular</div>
      <div class="cs-grid">
        <div v-for="r in rostros" :key="r.id" class="cs-item" :style="{background: r.color}">
          <img :src="r.img" :alt="r.doctrina" class="cs-thumb" />
          <span>{{ r.doctrina }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const rostros = [
  {
    id:'hombre', num:'01', nombre:'Rostro de Hombre', doctrina:'SALVADOR',
    color:'#003399',
    img:'/assets/img/rostro-hombre-grabado.png',
    texto:'Cristo se hizo hombre para identificarse con la humanidad caída y ofrecer su vida en rescate por el pecado.',
    ref:'Lc. 19:10 · Fil. 2:7–8'
  },
  {
    id:'leon', num:'02', nombre:'Rostro de León', doctrina:'REY VENIDERO',
    color:'#B30000',
    img:'/assets/img/rostro-leon-grabado.png',
    texto:'El León, rey de la selva, habla de la majestad y realeza de Cristo que regresará victorioso y glorioso.',
    ref:'Ap. 19:16 · Ap. 5:5'
  },
  {
    id:'buey', num:'03', nombre:'Rostro de Buey', doctrina:'SANADOR',
    color:'#1a7a1a',
    img:'/assets/img/rostro-buey-grabado.png',
    texto:'El buey que lleva el yugo habla de Cristo cargando nuestras enfermedades en la cruz del Calvario.',
    ref:'Is. 53:4–5 · Mt. 8:17'
  },
  {
    id:'aguila', num:'04', nombre:'Rostro de Águila', doctrina:'BAUTIZADOR',
    color:'#880099',
    img:'/assets/img/rostro-aguila-grabado.png',
    texto:'El águila que surca las alturas representa lo divino: Cristo bautiza con Espíritu Santo y fuego sobrenatural.',
    ref:'Hch. 1:8 · Hch. 2:1–4'
  },
]
</script>

<style scoped>
.ezequiel { display:flex; flex-direction:column; gap:13px; }

.ez-intro {
  font-family:'Playfair Display',serif; font-style:italic;
  font-size:.75rem; color:#3a2a1a; line-height:1.65;
  background:#F0F7F0; border:1px solid #B0D8B0;
  border-left:4px solid #1a7a1a; border-radius:4px;
  padding:10px 14px; margin:0;
}

.rostros-grid { display:grid; grid-template-columns:1fr 1fr; gap:9px; }

.rostro-card {
  border-radius:10px; overflow:hidden; background:#fff;
  border:1.5px solid rgba(0,0,0,.07);
  box-shadow:0 3px 12px rgba(0,0,0,.1);
  transition:transform .3s, box-shadow .3s;
}
.rostro-card:hover { transform:translateY(-4px); box-shadow:0 8px 22px rgba(0,0,0,.15); }

.rostro-img-wrap {
  height:88px; position:relative; overflow:hidden;
}
.rostro-img {
  width:100%; height:100%; object-fit:cover; display:block;
}
.rostro-overlay { position:absolute; inset:0; }

.rostro-num {
  position:absolute; top:7px; right:9px;
  font-family:'Cinzel',serif; font-size:.72rem; font-weight:900;
  color:rgba(255,255,255,.8);
  text-shadow: 0 1px 4px rgba(0,0,0,.5);
}
.rostro-doc-tag {
  position:absolute; bottom:7px; left:8px;
  background:rgba(0,0,0,.45); color:#fff;
  font-size:.48rem; font-weight:800; letter-spacing:1.5px;
  padding:2px 7px; border-radius:10px;
  backdrop-filter:blur(4px);
}

.rostro-body { padding:9px 11px; }
.rostro-body h4 {
  font-family:'Cinzel',serif; font-size:.69rem; font-weight:700;
  color:var(--rc); margin:0 0 5px;
}
.rostro-body p { font-size:.63rem; color:#555; line-height:1.5; margin:0 0 5px; }
.rostro-refs { font-size:.57rem; color:#aaa; }

.cuadro-sintetico {
  background:#fff; border:1.5px solid #e8dfc8;
  border-radius:10px; overflow:hidden;
}
.cs-title {
  font-family:'Cinzel',serif; font-size:.72rem; font-weight:700;
  color:#3a2a14; background:#F8F5F0; border-bottom:1px solid #e8dfc8;
  padding:8px 12px; text-align:center;
}
.cs-grid { display:grid; grid-template-columns:1fr 1fr; }
.cs-item {
  display:flex; align-items:center; gap:8px;
  padding:8px 10px; color:#fff;
  font-size:.6rem; font-weight:700; letter-spacing:.5px;
  border:1px solid rgba(255,255,255,.12);
  overflow:hidden;
}
.cs-thumb {
  width:32px; height:32px; border-radius:6px;
  object-fit:cover; flex-shrink:0;
  border:1.5px solid rgba(255,255,255,.4);
}
</style>
