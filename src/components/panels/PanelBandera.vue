<template>
  <div class="bandera-panel">

    <!-- Imagen oficial suministrada para el proyecto -->
    <figure class="flag-visual">
      <img
        src="/assets/img/bandera-cuadrangular.png"
        alt="Bandera oficial de la Iglesia del Evangelio Cuadrangular"
        class="flag-image"
      >
      <figcaption>Bandera de la Iglesia del Evangelio Cuadrangular</figcaption>
    </figure>

    <!-- Descripción -->
    <div class="block-title">Descripción</div>
    <p class="desc-text">
      La Bandera Cuadrangular es el estandarte oficial de la Iglesia del Evangelio Cuadrangular.
      Presenta cuatro franjas onduladas —púrpura, azul, dorado y rojo— y, en el cantón
      superior izquierdo, el emblema cuadrangular. Cada color proclama una de las cuatro
      verdades fundamentales acerca del ministerio de Jesucristo.
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

/* Presentación de la bandera oficial */
.flag-visual {
  margin:0; padding:18px 16px 12px;
  background:linear-gradient(180deg,#fffefb,#f6efe4);
  border:1px solid #ddcfbd; border-radius:10px;
  text-align:center; overflow:hidden;
  box-shadow:0 10px 28px rgba(61,39,21,.11);
}
.flag-image {
  display:block; width:min(100%,420px); height:auto; margin:0 auto;
  object-fit:contain; image-rendering:auto;
  filter:drop-shadow(0 8px 8px rgba(40,25,15,.2));
}
.flag-visual figcaption {
  margin-top:10px; color:#76614f; font-size:.58rem;
  font-weight:800; letter-spacing:.12em; text-transform:uppercase;
}
.ref-mark { width:7px; height:7px; border-radius:50%; flex-shrink:0; margin-top:4px; }

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
