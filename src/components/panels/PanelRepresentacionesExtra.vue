<template>
  <div class="panel">
    <div class="rp-header">
      <h2 class="rp-titulo">El Cuatro en la Biblia</h2>
      <p class="rp-sub">Representaciones bíblicas del número cuatro</p>
    </div>

    <div class="rp-grid">
      <div class="card" v-for="r in reps" :key="r.num" :style="{'--cc':r.color,'--cl':r.light}">
        <div class="card-img">
          <img :src="r.img" :alt="r.titulo" />
          <div class="img-badge">{{ String(r.num).padStart(2,'0') }}</div>
        </div>
        <div class="card-body">
          <p class="ref">{{ r.cita }}</p>
          <p class="tit">{{ r.titulo }}</p>
          <p class="txt">{{ r.texto }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const reps = [
  {
    num: 3, color: '#CC8800', light: '#fff8e6',
    img: '/assets/img/cuatro-vientos-grabado.png',
    cita: 'Jeremías 49:36 · Apocalipsis 7:1',
    titulo: 'Los cuatro vientos de la tierra',
    texto: 'Dios gobierna toda dirección, fuerza e historia. Nada queda fuera de su soberanía.',
  },
  {
    num: 4, color: '#880099', light: '#fdf0ff',
    img: '/assets/img/cuatro-evangelios-grabado.png',
    cita: 'Mateo · Marcos · Lucas · Juan',
    titulo: 'Los cuatro Evangelios',
    texto: 'Cuatro testimonios anuncian a Jesús como Rey, Siervo, Hombre perfecto e Hijo eterno de Dios.',
  },
]
</script>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  gap: 9px;
  height: 100%;
}

.rp-header {
  background: linear-gradient(135deg,#0a2060,#00174a);
  border-radius: 10px; padding: 11px 16px; text-align: center; flex-shrink: 0;
}
.rp-titulo { font-family:"Cinzel",serif; font-size:1.2rem; font-weight:900; color:#fff; margin:0 0 2px; letter-spacing:.05em; }
.rp-sub    { font-size:.88rem; color:rgba(255,255,255,.55); margin:0; font-style:italic; }

.rp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  flex: 1;
  min-height: 0;
  align-content: start;
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid var(--cc);
  background: var(--cl);
}

.card-img {
  position: relative;
  height: 165px;
  overflow: hidden;
  background: #cfc3ad;
  flex-shrink: 0;
}
.card-img img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: sepia(.1) contrast(1.08) brightness(1.02);
}
.img-badge {
  position: absolute; top: 7px; left: 7px;
  background: var(--cc);
  color: #fff;
  font-family: "Cinzel",serif; font-size: 1.2rem; font-weight: 900;
  line-height: 1; padding: 3px 9px;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0,0,0,.45);
}

.card-body {
  padding: 9px 11px;
  display: flex; flex-direction: column; gap: 4px;
  border-top: 3px solid var(--cc);
}
.ref { font-family:"Cinzel",serif; font-size:.84rem; font-weight:700; color:var(--cc); margin:0; opacity:.8; }
.tit { font-size:.96rem; font-weight:800; color:var(--cc); margin:0; line-height:1.2; }
.txt { font-size:.90rem; color:#222; margin:0; line-height:1.45; }
</style>
