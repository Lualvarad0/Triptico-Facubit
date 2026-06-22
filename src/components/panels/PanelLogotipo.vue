<template>
  <div class="logo-panel">

    <!-- Logo oficial -->
    <div class="logo-display">
      <LogoCuadrangular :size="110" />
    </div>

    <!-- Los 4 cuadrantes -->
    <div class="block-title">Los cuatro cuadrantes</div>
    <div class="cuadrantes-grid">
      <div v-for="c in cuadrantes" :key="c.id" class="cua-card" :style="{'background': c.color}">
        <img :src="c.img" :alt="c.doctrina">
        <span class="cua-doctrina">{{ c.doctrina }}</span>
        <span class="cua-referencia">{{ c.ref }}</span>
      </div>
    </div>

    <!-- Significado del emblema -->
    <div class="block-title">Significado del Emblema</div>
    <div class="signif-list">
      <div v-for="s in signifItems" :key="s.label" class="signif-item">
        <span class="signif-dot" :style="{'background': s.color}"></span>
        <span><strong>{{ s.label }}:</strong> {{ s.texto }}</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import LogoCuadrangular from '../LogoCuadrangular.vue'
const cuadrantes = [
  { id:'salv', doctrina:'Salvador', img:'/assets/img/doctrina-salvador-grabado.png', color:'#B30000', ref:'Jn. 3:16' },
  { id:'san', doctrina:'Sanador', img:'/assets/img/doctrina-sanador-grabado.png', color:'#003399', ref:'Is. 53:5' },
  { id:'baut', doctrina:'Bautizador', img:'/assets/img/doctrina-bautizador-grabado.png', color:'#CC8800', ref:'Hch. 2:4' },
  { id:'rey', doctrina:'Rey Venidero', img:'/assets/img/doctrina-rey-grabado.png', color:'#880099', ref:'1 Ts. 4:16' },
]

const signifItems = [
  { label:'El cuadrado',  color:'#B30000', texto:'Representa la solidez, estabilidad y completud del Evangelio que no falla.' },
  { label:'Los cuatro colores', color:'#003399', texto:'Rojo: salvación · Azul: sanidad · Dorado: Espíritu Santo · Púrpura: realeza.' },
  { label:'El círculo central', color:'#CC8800', texto:'Simboliza la eternidad de Dios y la unidad perfecta de las cuatro verdades.' },
  { label:'La cruz',      color:'#880099', texto:'Centro de todo: la cruz de Cristo donde confluyen las cuatro doctrinas.' },
]
</script>

<style scoped>
.logo-panel { display: flex; flex-direction: column; gap: 12px; }

.logo-display {
  display: flex; justify-content: center;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  border-radius: 12px; padding: 20px;
}

.block-title {
  font-family: 'Cinzel', serif; font-size: .72rem;
  font-weight: 700; color: #B30000;
  text-transform: uppercase; letter-spacing: 1.5px;
  display: flex; align-items: center; gap: 6px;
  padding-bottom: 4px; border-bottom: 1px solid #e8dfc8;
}

.cuadrantes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
.cua-card {
  border-radius: 8px; padding: 12px 10px;
  display: flex; flex-direction: column; align-items: center; gap: 5px;
  color: #fff; text-align: center;
}
.cua-card i { font-size: 1.4rem; }
.cua-doctrina { font-family: 'Cinzel', serif; font-size: .68rem; font-weight: 700; }
.cua-referencia { font-size: .58rem; opacity: .8; }

.signif-list { display: flex; flex-direction: column; gap: 7px; }
.signif-item {
  display: flex; align-items: flex-start; gap: 8px;
  background: #fff; border: 1px solid #e8dfc8;
  border-radius: 6px; padding: 8px 10px;
  font-size: .68rem; color: #444; line-height: 1.5;
}
.signif-dot {
  width: 10px; height: 10px; border-radius: 50%;
  flex-shrink: 0; margin-top: 3px;
}
</style>

