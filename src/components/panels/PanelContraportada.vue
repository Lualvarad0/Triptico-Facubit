<template>
  <div class="contra">
    <div class="contra-logo-wrap">
      <LogoCuadrangular :size="80" />
    </div>

    <h2 class="contra-titulo">Datos Institucionales</h2>
    <div class="contra-strip"></div>

    <div class="datos-grid">
      <div v-for="d in datos" :key="d.rol" class="dato-card">
        <span class="dato-rol">{{ d.rol }}</span>
        <span class="dato-nombre">{{ d.nombre }}</span>
      </div>
    </div>

    <div class="contra-verse">
      <span>"Escríbelo en una tabla, y grábalo en un libro…"</span>
      <cite>— Isaías 30:8</cite>
    </div>
  </div>
</template>

<script setup>
import LogoCuadrangular from '../LogoCuadrangular.vue'
const datos = [
  { rol: 'Director',       nombre: 'Por definir', icon: 'fas fa-user-tie' },
  { rol: 'Coordinadora',   nombre: 'Por definir', icon: 'fas fa-chalkboard-teacher' },
  { rol: 'Profesora',      nombre: 'Por definir', icon: 'fas fa-graduation-cap' },
  { rol: 'Estudiante',     nombre: 'Por definir', icon: 'fas fa-user-graduate' },
  { rol: 'Pastor',         nombre: 'Por definir', icon: 'fas fa-bible' },
  { rol: 'Iglesia',        nombre: 'Por definir', icon: 'fas fa-church' },
]
</script>

<style scoped>
.contra { display: flex; flex-direction: column; align-items: center; gap: 14px; }

.contra-logo-wrap {
  display: flex; justify-content: center;
}

.contra-titulo {
  font-family: 'Cinzel', serif; font-size: .88rem;
  color: #B30000; text-transform: uppercase;
  letter-spacing: 2px; margin: 0; text-align: center;
}
.contra-strip {
  width: 60px; height: 3px;
  background: linear-gradient(90deg,#B30000,#003399,#CC8800,#880099);
  border-radius: 2px;
}

.datos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; }

.dato-card {
  display: flex; flex-direction: column; gap: 3px;
  background: #fff; border: 1px solid #e8dfc8;
  border-left: 3px solid #B30000;
  border-radius: 6px; padding: 10px 12px;
}
.dato-rol {
  font-size: .58rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 1.5px;
  color: #B30000; display: flex; align-items: center; gap: 5px;
}
.dato-nombre { font-size: .7rem; color: #555; font-family: 'Cinzel', serif; }

.contra-verse {
  background: #f8f4ee; border: 1px solid #e8dfc8;
  border-radius: 6px; padding: 12px; text-align: center;
  font-size: .7rem; color: #666; font-style: italic;
  display: flex; flex-direction: column; gap: 4px; width: 100%;
}
.contra-verse i { color: #CC8800; margin-bottom: 3px; }
cite { font-style: normal; font-size: .62rem; color: #999; }
</style>
