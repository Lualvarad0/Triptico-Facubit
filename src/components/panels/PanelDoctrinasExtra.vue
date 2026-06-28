<template>
  <div class="panel">

    <div class="doc-header">
      <h2 class="doc-titulo">Nuestras Doctrinas</h2>
      <p class="doc-sub">Las cuatro verdades centrales del Evangelio Cuadrangular</p>
    </div>

    <div class="doc-grid">
      <div v-for="d in doctrinas" :key="d.id" class="doc-card" :style="{'--dc':d.color,'--dl':d.light}">
        <div class="card-img">
          <img :src="d.img" :alt="d.titulo" loading="lazy" />
          <div class="img-badge">{{ d.num }}</div>
        </div>
        <div class="card-body">
          <p class="c-ref">{{ d.refs }}</p>
          <p class="c-tit">{{ d.titulo }}</p>
          <p class="c-txt">{{ d.texto }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const doctrinas = [
  {
    id: 'bautizador', num: 'III', color: '#CC8800', light: '#fff8e6',
    titulo: 'Jesucristo Bautizador',
    img: '/assets/img/doctrina-bautizador-grabado.png',
    texto: 'Cristo bautiza con Espíritu Santo y fuego, distribuyendo dones sobrenaturales y capacitando a su Iglesia para ser testigos poderosos.',
    refs: 'Hechos 1:8 · 1 Corintios 12:4–11',
  },
  {
    id: 'rey', num: 'IV', color: '#880099', light: '#fdf0ff',
    titulo: 'Jesucristo Rey Venidero',
    img: '/assets/img/doctrina-rey-grabado.png',
    texto: 'La segunda venida de Cristo es la esperanza viva de la Iglesia. Jesús regresará en gloria para establecer su reino eterno de paz.',
    refs: '1 Tesalonicenses 4:16–17 · Apocalipsis 22:20',
  },
]
</script>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.doc-header {
  background: linear-gradient(135deg, #1a0a00, #3a1800);
  border-radius: 10px;
  padding: 11px 16px;
  text-align: center;
  flex-shrink: 0;
}
.doc-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.25rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 3px;
  letter-spacing: .05em;
}
.doc-sub {
  font-size: .96rem;
  color: rgba(255,255,255,.6);
  margin: 0;
  font-style: italic;
}

.doc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  flex: 1;
  min-height: 0;
  align-content: start;
}

.doc-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid var(--dc);
  background: var(--dl);
}

.card-img {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: #ddd4bb;
  flex-shrink: 0;
}
.card-img img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: sepia(.1) contrast(1.06);
  transition: transform .4s ease;
}
.doc-card:hover .card-img img { transform: scale(1.04); }

.img-badge {
  position: absolute; top: 8px; left: 8px;
  background: var(--dc);
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 1;
  padding: 4px 12px;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0,0,0,.4);
  letter-spacing: .04em;
}

.card-body {
  padding: 11px 13px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-top: 3px solid var(--dc);
}
.c-ref {
  font-family: 'Cinzel', serif;
  font-size: .98rem;
  font-weight: 700;
  color: var(--dc);
  margin: 0;
  opacity: .8;
}
.c-tit {
  font-size: 1.18rem;
  font-weight: 800;
  color: var(--dc);
  margin: 0;
  line-height: 1.2;
}
.c-txt {
  font-size: 1.05rem;
  color: #222;
  margin: 0;
  line-height: 1.55;
}
</style>
