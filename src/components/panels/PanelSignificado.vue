<template>
  <div class="signif">

    <!-- ¿Qué significa Cuadrangular? -->
    <div class="block-title">¿Qué significa "Cuadrangular"?</div>
    <div class="def-card">
      <p>
        "Cuadrangular" hace referencia a las <strong>cuatro verdades centrales</strong> del ministerio de
        Jesucristo, derivadas de la visión del profeta Ezequiel (Ez. 1:10) y del Apocalipsis (Ap. 4:7).
        Aimee Semple McPherson recibió esta revelación durante una campaña en Oakland, California, en 1922.
      </p>
    </div>

    <!-- Fundamento bíblico -->
    <div class="block-title">Fundamento Bíblico</div>
    <div class="refs-grid">
      <div v-for="r in refs" :key="r.cita" class="ref-pill" :style="{'--rc': r.color}">
        <span class="ref-number">{{ String(refs.indexOf(r)+1).padStart(2,'0') }}</span>
        <span>
          <strong>{{ r.cita }}</strong><br>
          <small>{{ r.texto }}</small>
        </span>
      </div>
    </div>

    <!-- Lema -->
    <div class="block-title">Lema Cuadrangular</div>

    <div class="lema-frase">
      <span class="lema-cita-txt">"Jesucristo es el mismo de ayer y hoy por los siglos."</span>
      <span class="lema-ref">Hebreos 13:8</span>
    </div>


  </div>
</template>

<script setup>
const refs = [
  { cita:'Ezequiel 1:10', texto:'Cuatro rostros del ser viviente', icon:'fas fa-eye', color:'#003399' },
  { cita:'Apocalipsis 4:7', texto:'León, toro, hombre, águila', icon:'fas fa-feather-alt', color:'#880099' },
  { cita:'Isaías 35:5-6', texto:'Sanidad prometida', icon:'fas fa-hand-holding-medical', color:'#B30000' },
  { cita:'Hechos 2:4', texto:'Bautismo del Espíritu Santo', icon:'fas fa-fire', color:'#CC8800' },
]

</script>

<style scoped>
.signif { display: flex; flex-direction: column; gap: 12px; }

.block-title {
  font-family: 'Cinzel', serif; font-size: .86rem;
  font-weight: 700; color: #B30000;
  text-transform: uppercase; letter-spacing: 1.5px;
  display: flex; align-items: center; gap: 6px;
  padding-bottom: 4px; border-bottom: 1px solid #e8dfc8;
}

.def-card {
  background: #fff; border: 1px solid #e8dfc8;
  border-left: 3px solid #003399;
  border-radius: 6px; padding: 12px;
  font-size: .86rem; color: #444; line-height: 1.65;
}

.refs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
.ref-pill {
  background: #fff; border: 1.5px solid var(--rc);
  border-radius: 8px; padding: 8px 10px;
  display: flex; align-items: flex-start; gap: 8px;
  font-size: .86rem; color: #444; line-height: 1.4;
}
.ref-number {
  width: 26px; height: 26px; border-radius: 50%;
  background: var(--rc); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: .80rem; font-weight:900; letter-spacing:.08em; flex-shrink: 0;
}

.lema-frase {
  background: linear-gradient(135deg, #fff8f0, #fff);
  border-left: 4px solid #B30000;
  border-radius: 6px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.lema-cita-txt {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: .90rem;
  color: #2a1a0a;
  line-height: 1.5;
}
.lema-ref {
  font-family: 'Cinzel', serif;
  font-size: .84rem;
  font-weight: 800;
  color: #B30000;
  letter-spacing: .06em;
}

</style>
