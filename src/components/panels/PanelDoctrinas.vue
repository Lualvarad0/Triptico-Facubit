<template>
  <div class="doctrinas">

    <div class="doc-grid">
      <div v-for="d in doctrinas" :key="d.id" class="doc-card" :style="{'--dc': d.color}">
        <div class="doc-image-wrap">
          <img :src="d.img" :alt="d.titulo" loading="lazy">
          <span class="doc-image-label">{{ d.kicker }}</span>
        </div>
        <div class="doc-body">
          <h4>{{ d.titulo }}</h4>
          <p>{{ d.texto }}</p>
          <span class="doc-ref">{{ d.refs }}</span>
        </div>
      </div>
    </div>

    <!-- Conclusión -->
    <div class="conclusion">
      <h3>Difundamos el Fundamento en la Comunidad</h3>
      <p>
        El Evangelio Cuadrangular no es solo un conjunto de doctrinas; es una experiencia
        transformadora que cambia vidas y restaura familias.
      </p>
      <p>
        Somos portadores de cuatro verdades:
        <strong style="color:#B30000">Cristo que salva</strong>,
        <strong style="color:#003399">Cristo que sana</strong>,
        <strong style="color:#CC8800">Cristo que bautiza</strong> y
        <strong style="color:#880099">Cristo que viene pronto</strong>.
      </p>
      <blockquote>
        
        "¡Cuán hermosos son los pies de los que anuncian buenas nuevas!"
        <cite>— Romanos 10:15</cite>
      </blockquote>
    </div>

  </div>
</template>

<script setup>
const doctrinas = [
  {
    id: 'salvador', titulo: 'Jesucristo Salvador', kicker: 'I · Salvador', color: '#B30000',
    img: '/assets/img/doctrina-salvador-grabado.png',
    texto: 'La cruz de Cristo provee perdón total. No hay otro nombre bajo el cielo por el cual debamos ser salvos. Quien crea en Él recibe vida eterna.',
    refs: 'Ro. 10:9 · Hch. 4:12 · Jn. 14:6'
  },
  {
    id: 'sanador', titulo: 'Jesucristo Sanador', kicker: 'II · Sanador', color: '#003399',
    img: '/assets/img/doctrina-sanador-grabado.png',
    texto: 'Cristo cargó nuestras enfermedades en la cruz. La sanidad divina es parte de la expiación. La oración de fe es el medio bíblico de sanidad.',
    refs: 'Is. 53:4–5 · Stg. 5:14–16'
  },
  {
    id: 'bautizador', titulo: 'Jesucristo Bautizador', kicker: 'III · Bautizador', color: '#CC8800',
    img: '/assets/img/doctrina-bautizador-grabado.png',
    texto: 'Cristo bautiza con Espíritu Santo y fuego, distribuyendo dones sobrenaturales y capacitando a su Iglesia para ser testigos poderosos.',
    refs: 'Hch. 1:8 · 1 Co. 12:4–11'
  },
  {
    id: 'rey', titulo: 'Jesucristo Rey Venidero', kicker: 'IV · Rey Venidero', color: '#880099',
    img: '/assets/img/doctrina-rey-grabado.png',
    texto: 'La segunda venida de Cristo es la esperanza viva de la Iglesia. Jesús regresará en gloria para establecer su reino eterno de paz.',
    refs: '1 Ts. 4:16–17 · Ap. 22:20'
  },
]
</script>

<style scoped>
.doctrinas { display: flex; flex-direction: column; gap: 14px; }

.doc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }

.doc-card {
  border-radius: 10px; overflow: hidden;
  border: 1.5px solid #eee;
  box-shadow: 0 2px 8px rgba(0,0,0,.09);
  transition: transform .3s, box-shadow .3s;
  background: #fff;
}
.doc-card:hover { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(0,0,0,.13); }

.doc-image-wrap {
  height: 168px; position: relative; overflow: hidden;
  background: #eee4d5;
  border-bottom: 3px solid var(--dc);
}
.doc-image-wrap::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(31,20,12,.76), transparent 56%);
  pointer-events: none;
}
.doc-image-wrap img {
  width:100%; height:100%; object-fit:cover; object-position:center;
  display:block; filter:sepia(.12) contrast(1.03);
  transition: transform .65s ease, filter .4s ease;
}
.doc-card:hover .doc-image-wrap img { transform:scale(1.045); filter:sepia(0) contrast(1.06); }
.doc-image-label {
  position:absolute; z-index:2; left:12px; bottom:10px;
  color:#fff; font-size:.55rem; font-weight:900;
  letter-spacing:.17em; text-transform:uppercase;
  text-shadow:0 2px 8px rgba(0,0,0,.8);
}

.doc-body { padding: 10px 12px; }
.doc-body h4 {
  font-family: 'Cinzel', serif; font-size: .72rem;
  color: var(--dc); margin: 0 0 5px;
  border-bottom: 1px solid #f0e8d0; padding-bottom: 4px;
}
.doc-body p { font-size: .66rem; color: #555; line-height: 1.5; margin: 0 0 5px; }
.doc-ref { font-size: .6rem; color: #999; }

/* Conclusión */
.conclusion {
  background: linear-gradient(135deg, #fff8f0, #f5f0ff);
  border: 1px solid #ddd; border-radius: 8px;
  padding: 16px; text-align: center;
  border-top: 4px solid;
  border-image: linear-gradient(90deg,#B30000,#003399,#CC8800,#880099) 1;
}
.conclusion h3 {
  font-family: 'Cinzel', serif; font-size: .82rem;
  color: #B30000; margin: 0 0 10px; text-transform: uppercase;
  display: flex; align-items: center; justify-content: center; gap: 6px;
}
.conclusion p { font-size: .72rem; color: #444; line-height: 1.7; margin: 0 0 6px; }

blockquote {
  font-family: 'Playfair Display', serif; font-style: italic;
  font-size: .76rem; color: #003399;
  border-top: 1px solid #ddd; padding-top: 10px; margin: 10px 0 0;
}
cite { display: block; font-size: .65rem; margin-top: 4px; color: #888; font-style: normal; }

@media (max-width: 560px) {
  .doc-grid { grid-template-columns: 1fr; gap: 12px; }
  .doc-image-wrap { height: 190px; }
}
</style>

