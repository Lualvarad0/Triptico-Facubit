<template>
  <div class="simbolos">

    <p class="sim-intro">Los cuatro símbolos del Evangelio Cuadrangular representan las cuatro verdades
    centrales del ministerio de Jesucristo, reveladas en la visión de Ezequiel.</p>

    <div class="sim-grid">
      <div v-for="s in simbolos" :key="s.id" class="sim-card" :style="{'--sc': s.color}">
        <div class="sim-img-wrap">
          <img :src="s.img" :alt="s.nombre" class="sim-img" />
          <div class="sim-overlay" :style="{background: `linear-gradient(to top, ${s.color}EE 0%, ${s.color}55 50%, transparent 100%)`}"></div>
          <span class="sim-name-overlay">{{ s.nombre }}</span>
        </div>
        <div class="sim-body">
          <span class="sim-doc">{{ s.doctrina }}</span>
          <p>{{ s.descripcion }}</p>
          <em class="sim-verse">{{ s.versiculo }}</em>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const simbolos = [
  {
    id: 'cruz', nombre: 'La Cruz', doctrina: 'JESUCRISTO SALVADOR',
    color: '#B30000',
    img: '/assets/img/doctrina-salvador-grabado.png',
    descripcion: 'La cruz roja representa la sangre preciosa de Cristo derramada en el Calvario. Su sacrificio es el único camino de salvación para toda la humanidad.',
    versiculo: '"De tal manera amó Dios al mundo…" — Jn. 3:16'
  },
  {
    id: 'copa', nombre: 'La Copa', doctrina: 'JESUCRISTO SANADOR',
    color: '#003399',
    img: '/assets/img/doctrina-sanador-grabado.png',
    descripcion: 'La copa azul simboliza la sanidad que fluye del sacrificio de Cristo. Por sus llagas somos sanados en cuerpo, alma y espíritu.',
    versiculo: '"Él mismo tomó nuestras enfermedades…" — Mt. 8:17'
  },
  {
    id: 'paloma', nombre: 'La Paloma', doctrina: 'JESUCRISTO BAUTIZADOR',
    color: '#CC8800',
    img: '/assets/img/doctrina-bautizador-grabado.png',
    descripcion: 'La paloma dorada representa al Espíritu Santo. Cristo bautiza con fuego y poder sobrenatural, otorgando dones sobrenaturales a su Iglesia.',
    versiculo: '"Recibiréis poder cuando haya venido el Espíritu…" — Hch. 1:8'
  },
  {
    id: 'corona', nombre: 'La Corona', doctrina: 'JESUCRISTO REY VENIDERO',
    color: '#880099',
    img: '/assets/img/doctrina-rey-grabado.png',
    descripcion: 'La corona púrpura proclama que Jesús regresará en poder y gloria como Rey de reyes. Su segunda venida es la esperanza de la Iglesia.',
    versiculo: '"He aquí que viene con las nubes…" — Ap. 1:7'
  },
]
</script>

<style scoped>
.simbolos { display: flex; flex-direction: column; gap: 12px; }

.sim-intro {
  font-size: .73rem; color: #666; line-height: 1.6; margin: 0;
}

.sim-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

.sim-card {
  border-radius: 10px; overflow: hidden;
  border: 1.5px solid #eee;
  box-shadow: 0 3px 10px rgba(0,0,0,.09);
  transition: transform .3s, box-shadow .3s;
  background: #fff;
}
.sim-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,.14); }

.sim-img-wrap {
  height: 88px; position: relative; overflow: hidden;
}
.sim-img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.sim-overlay { position: absolute; inset: 0; }
.sim-name-overlay {
  position: absolute; bottom: 7px; left: 8px;
  font-family: 'Cinzel', serif; font-size: .62rem; font-weight: 700;
  color: #fff; text-shadow: 0 1px 4px rgba(0,0,0,.6);
}

.sim-body { padding: 9px 12px; }
.sim-doc {
  display: inline-block; background: var(--sc); color: #fff;
  font-size: .5rem; font-weight: 700; letter-spacing: 1px;
  padding: 2px 6px; border-radius: 2px; margin-bottom: 6px;
}
.sim-body p { font-size: .65rem; color: #555; line-height: 1.5; margin: 0 0 5px; }
.sim-verse { font-size: .61rem; color: #888; font-style: italic; }
</style>
