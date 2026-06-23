<template>
  <div class="logo-panel">

    <!-- Logo oficial -->
    <div class="logo-display">
      <LogoCuadrangular :size="170" />
      <p>Emblema de la Iglesia del Evangelio Cuadrangular</p>
    </div>

    <!-- Los 4 cuadrantes -->
    <div class="block-title">Los cuatro cuadrantes</div>
    <div class="cuadrantes-grid">
      <div v-for="c in cuadrantes" :key="c.id" class="cua-card" :style="{'background': c.color}">
        <span class="cua-symbol">{{ c.simbolo }}</span>
        <span class="cua-doctrina">Jesucristo {{ c.doctrina }}</span>
        <span class="cua-referencia">{{ c.significado }} · {{ c.ref }}</span>
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
  { id:'salv', simbolo:'Cruz', doctrina:'Salvador', significado:'Salvación', color:'#B30000', ref:'Jn. 3:16' },
  { id:'san', simbolo:'Copa', doctrina:'Sanador', significado:'Sanidad divina', color:'#003399', ref:'Mt. 8:17' },
  { id:'baut', simbolo:'Paloma', doctrina:'Bautizador', significado:'Espíritu Santo', color:'#CC8800', ref:'Hch. 1:8' },
  { id:'rey', simbolo:'Corona', doctrina:'Rey Venidero', significado:'Segunda venida', color:'#880099', ref:'1 Ts. 4:16' },
]

const signifItems = [
  { label:'Los cuatro cuadrantes', color:'#B30000', texto:'Presentan las cuatro facetas del ministerio completo de Jesucristo.' },
  { label:'Los cuatro colores', color:'#003399', texto:'Rojo: salvación · Azul: sanidad · Dorado: Espíritu Santo · Púrpura: realeza.' },
  { label:'Los cuatro símbolos', color:'#CC8800', texto:'Cruz, copa, paloma y corona permiten reconocer visualmente cada doctrina.' },
  { label:'La unidad del emblema', color:'#880099', texto:'Las cuatro declaraciones permanecen unidas en un solo Evangelio centrado en Jesucristo.' },
]
</script>

<style scoped>
.logo-panel { display: flex; flex-direction: column; gap: 12px; }

.logo-display {
  display: flex; flex-direction:column; align-items:center; justify-content: center;
  background: linear-gradient(180deg, #fffefb, #f3eadf);
  border:1px solid #ddcfbd;
  border-radius: 10px; padding: 24px 20px 16px;
  box-shadow:0 10px 28px rgba(61,39,21,.1);
}
.logo-display p { margin:12px 0 0; color:#725a45; font-size:.58rem; font-weight:800; letter-spacing:.12em; text-align:center; text-transform:uppercase; }

.block-title {
  font-family: 'Cinzel', serif; font-size: .72rem;
  font-weight: 700; color: #B30000;
  text-transform: uppercase; letter-spacing: 1.5px;
  display: flex; align-items: center; gap: 6px;
  padding-bottom: 4px; border-bottom: 1px solid #e8dfc8;
}

.cuadrantes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
.cua-card {
  border-radius: 6px; padding: 14px 10px 12px;
  display: flex; flex-direction: column; align-items: center; gap: 5px;
  color: #fff; text-align: center;
}
.cua-symbol { font-family:'Playfair Display',serif; font-size:1rem; font-weight:700; }
.cua-doctrina { font-family: 'Cinzel', serif; font-size: .68rem; font-weight: 700; }
.cua-referencia { font-size: .56rem; opacity: .85; line-height:1.4; }

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

