<template>
  <div class="bandera-panel">

    <!-- Ilustración simbólica de la bandera -->
    <div class="flag-visual">
      <div class="flag-pole"></div>
      <div class="flag-cloth">
        <div class="flag-q q1"><img src="/assets/img/doctrina-salvador-grabado.png" alt="Cristo Salvador"><span>Salvador</span></div>
        <div class="flag-q q2"><img src="/assets/img/doctrina-sanador-grabado.png" alt="Cristo Sanador"><span>Sanador</span></div>
        <div class="flag-q q3"><img src="/assets/img/doctrina-bautizador-grabado.png" alt="Cristo Bautizador"><span>Bautizador</span></div>
        <div class="flag-q q4"><img src="/assets/img/doctrina-rey-grabado.png" alt="Cristo Rey"><span>Rey</span></div>
      </div>
    </div>

    <!-- Descripción -->
    <div class="block-title">Descripción</div>
    <p class="desc-text">
      La Bandera Cuadrangular es el estandarte oficial de la Iglesia del Evangelio Cuadrangular.
      Está dividida en cuatro cuadrantes de colores que representan las cuatro verdades
      fundamentales proclamadas en el emblema y la Declaración de Fe de la Iglesia.
    </p>

    <!-- Significado de cada sección -->
    <div class="block-title">Significado de los colores</div>
    <div class="color-cards">
      <div v-for="c in colores" :key="c.color" class="color-card" :style="{'--cc': c.hex}">
        <div class="cc-swatch"></div>
        <div class="cc-body">
          <strong>{{ c.color }}</strong>
          <span>{{ c.significado }}</span>
        </div>
      </div>
    </div>

    <!-- Sustento bíblico -->
    <div class="block-title">Sustento Bíblico</div>
    <div class="bibl-refs">
      <div v-for="b in biblia" :key="b.cita" class="bibl-ref">
        <span class="ref-mark" :style="{background:b.color}"></span>
        <span><strong>{{ b.cita }}</strong> — {{ b.texto }}</span>
      </div>
    </div>

  </div>
</template>

<script setup>
const colores = [
  { color:'Rojo',    hex:'#B30000', significado:'La sangre preciosa de Cristo que nos redime y salva del pecado.' },
  { color:'Azul',    hex:'#003399', significado:'El río de sanidad que fluye de la expiación. Cristo sana el cuerpo.' },
  { color:'Dorado',  hex:'#CC8800', significado:'El fuego del Espíritu Santo que bautiza y otorga dones divinos.' },
  { color:'Púrpura', hex:'#880099', significado:'La realeza de Jesús, Rey de reyes que pronto regresará en gloria.' },
]

const biblia = [
  { cita:'Salmo 20:5', texto:'Alzaremos pendón en el nombre de nuestro Dios.', color:'#B30000' },
  { cita:'Cantares 2:4', texto:'Su bandera sobre mí fue amor.', color:'#003399' },
  { cita:'Isaías 11:10', texto:'Estará como pendón para los pueblos.', color:'#CC8800' },
  { cita:'Apocalipsis 19:16', texto:'REY DE REYES Y SEÑOR DE SEÑORES.', color:'#880099' },
]
</script>

<style scoped>
.bandera-panel { display: flex; flex-direction: column; gap: 12px; }

/* Ilustración de la bandera */
.flag-visual {
  display: flex; align-items: flex-start; gap: 0;
  justify-content: center; padding: 10px 0;
}
.flag-pole {
  width: 8px; height: 120px;
  background: linear-gradient(180deg, #CCC, #888, #CCC);
  border-radius: 4px;
  box-shadow: 2px 0 6px rgba(0,0,0,.3);
}
.flag-cloth {
  width: 160px; height: 100px;
  display: grid; grid-template-columns: 1fr 1fr;
  border: 2px solid rgba(0,0,0,.15);
  border-radius: 0 6px 6px 0;
  overflow: hidden;
  box-shadow: 3px 3px 12px rgba(0,0,0,.25);
}
.flag-q {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 4px;
  color: rgba(255,255,255,.95); font-size: .55rem;
  font-family: 'Cinzel', serif; font-weight: 700;
}
.flag-q img { width:100%; height:100%; object-fit:cover; opacity:.48; position:absolute; inset:0; }
.flag-q { position:relative; overflow:hidden; }
.flag-q span { position:relative; z-index:1; text-shadow:0 1px 4px rgba(0,0,0,.7); }
.ref-mark { width:7px; height:7px; border-radius:50%; flex-shrink:0; margin-top:4px; }
.q1 { background: #B30000; }
.q2 { background: #003399; }
.q3 { background: #CC8800; }
.q4 { background: #880099; }

.block-title {
  font-family: 'Cinzel', serif; font-size: .72rem;
  font-weight: 700; color: #B30000;
  text-transform: uppercase; letter-spacing: 1.5px;
  display: flex; align-items: center; gap: 6px;
  padding-bottom: 4px; border-bottom: 1px solid #e8dfc8;
}

.desc-text { font-size: .72rem; color: #555; line-height: 1.65; margin: 0; }

.color-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
.color-card {
  display: flex; align-items: flex-start; gap: 8px;
  background: #fff; border: 1px solid #e8dfc8;
  border-radius: 7px; padding: 8px;
}
.cc-swatch {
  width: 18px; height: 18px; border-radius: 4px;
  background: var(--cc); flex-shrink: 0; margin-top: 2px;
}
.cc-body { display: flex; flex-direction: column; gap: 2px; }
.cc-body strong { font-size: .65rem; color: var(--cc); }
.cc-body span { font-size: .62rem; color: #666; line-height: 1.4; }

.bibl-refs { display: flex; flex-direction: column; gap: 6px; }
.bibl-ref {
  display: flex; align-items: flex-start; gap: 8px;
  background: #fff; border: 1px solid #e8dfc8;
  border-radius: 6px; padding: 8px 10px;
  font-size: .68rem; color: #444; line-height: 1.45;
}
.bibl-ref i { margin-top: 2px; flex-shrink: 0; }
</style>
