<template>
  <div class="reps">

    <p class="reps-intro">
      En las Escrituras el número <strong>cuatro</strong> aparece en contextos de universalidad,
      totalidad y completud. Estos son los pasajes más emblemáticos:
    </p>

    <div class="reps-list">
      <div v-for="r in reps" :key="r.id" class="rep-card" :style="{'--rc': r.color}">
        <div class="rep-image"><img :src="r.img" :alt="r.titulo" loading="lazy"></div>
        <div class="rep-body">
          <span class="rep-cita">{{ r.cita }}</span>
          <strong class="rep-titulo">{{ r.titulo }}</strong>
          <p class="rep-texto">{{ r.texto }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const reps = [
  {
    id:'rivers', cita:'Génesis 2:10-14', color:'#003399',
    img:'/assets/img/doctrina-sanador-grabado.png',
    titulo:'Los cuatro ríos del Edén',
    texto:'El río del Edén se dividía en cuatro brazos: Pisón, Gihón, Tigris y Éufrates, simbolizando la provisión divina que fluye a toda la tierra.'
  },
  {
    id:'living', cita:'Ezequiel 1:5-10 · Ap. 4:6-7', color:'#B30000',
    img:'/assets/img/rostro-leon-grabado.png',
    titulo:'Los cuatro seres vivientes',
    texto:'Cuatro seres con cuatro rostros (hombre, león, toro, águila) rodean el trono de Dios, representando las cuatro facetas del evangelio de Cristo.'
  },
  {
    id:'winds', cita:'Jeremías 49:36 · Ap. 7:1', color:'#CC8800',
    img:'/assets/img/rostro-aguila-grabado.png',
    titulo:'Los cuatro vientos de la tierra',
    texto:'Cuatro ángeles detienen los cuatro vientos, simbolizando la soberanía divina sobre la totalidad de la creación y la historia humana.'
  },
  {
    id:'gospel', cita:'Mateo · Marcos · Lucas · Juan', color:'#880099',
    img:'/assets/img/rostro-hombre-grabado.png',
    titulo:'Los cuatro Evangelios',
    texto:'Los cuatro evangelios presentan a Jesús como Rey (Mateo), Siervo (Marcos), Hombre (Lucas) y Dios eterno (Juan), paralelos a los cuatro rostros de Ezequiel.'
  },
  {
    id:'corners', cita:'Isaías 11:12 · Ap. 20:8', color:'#1a7a1a',
    img:'/assets/img/doctrina-rey-grabado.png',
    titulo:'Los cuatro confines de la tierra',
    texto:'La expresión "cuatro extremos/confines de la tierra" indica universalidad: el evangelio es para todos los pueblos, razas y naciones sin excepción.'
  },
]
</script>

<style scoped>
.reps { display: flex; flex-direction: column; gap: 12px; }

.reps-intro {
  font-size: .73rem; color: #555; line-height: 1.6; margin: 0;
  background: #fff; border-left: 3px solid #CC8800;
  border-radius: 0 6px 6px 0; padding: 10px 12px;
}

.reps-list { display: flex; flex-direction: column; gap: 10px; }

.rep-card {
  display: flex; gap: 10px; align-items: flex-start;
}
.rep-number {
  width:38px; height:38px; display:grid; place-items:center; flex-shrink:0;
  border:1px solid var(--rc); color:var(--rc); border-radius:50%;
  font:900 .6rem/1 'Cinzel',serif; letter-spacing:.08em;
}
.rep-image {
  width:92px; min-height:92px; border-radius:5px; overflow:hidden;
  flex-shrink:0; border:1px solid rgba(80,53,30,.18);
  box-shadow:0 5px 14px rgba(55,35,20,.13);
}
.rep-image img { width:100%; height:100%; min-height:92px; object-fit:cover; display:block; }

.rep-icon-col {
  display: flex; flex-direction: column; align-items: center; flex-shrink: 0;
  gap: 0;
}
.rep-icon-circle {
  width: 34px; height: 34px; border-radius: 50%;
  background: var(--rc); color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: .8rem; flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,.18);
}
.rep-line {
  width: 2px; flex: 1; min-height: 10px;
  background: var(--rc); opacity: .2;
}

.rep-body {
  background: #fff; border: 1px solid #e8dfc8;
  border-left: 2px solid var(--rc);
  border-radius: 0 8px 8px 0;
  padding: 8px 12px; flex: 1;
  display: flex; flex-direction: column; gap: 3px;
}
.rep-cita { font-size: .58rem; color: var(--rc); font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
.rep-titulo { font-family: 'Cinzel', serif; font-size: .72rem; color: #3a2a14; }
.rep-texto { font-size: .66rem; color: #666; line-height: 1.5; margin: 0; }
</style>

