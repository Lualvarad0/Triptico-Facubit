<template>
  <div class="fe-panel">

    <p class="fe-intro">
      La Declaración de Fe de la Iglesia del Evangelio Cuadrangular establece
      <strong>16 artículos fundamentales</strong> que definen las creencias esenciales de la Iglesia.
    </p>

    <!-- Selector por categoría -->
    <div class="cat-tabs">
      <button
        v-for="cat in categorias"
        :key="cat.id"
        class="cat-tab"
        :class="{ active: catActiva === cat.id }"
        :style="catActiva === cat.id ? { background: cat.color, borderColor: cat.color, color: '#fff' } : {}"
        @click="catActiva = cat.id"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- Artículos de la categoría activa -->
    <div class="articulos-list">
      <div
        v-for="art in articulosFiltrados"
        :key="art.num"
        class="art-item"
        :style="{'--ac': artColor(art.num)}"
      >
        <div class="art-num">{{ String(art.num).padStart(2,'0') }}</div>
        <div class="art-body">
          <div class="art-title">{{ art.titulo }}</div>
          <div class="art-texto">{{ art.texto }}</div>
          <div class="art-ref">{{ art.ref }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const catActiva = ref('dios')

const categorias = [
  { id: 'dios',      label: 'Dios y Escrituras', icon: 'fas fa-bible',     color: '#B30000' },
  { id: 'salvacion', label: 'Salvación',           icon: 'fas fa-heart',    color: '#003399' },
  { id: 'espiritu',  label: 'Espíritu Santo',      icon: 'fas fa-fire',     color: '#CC8800' },
  { id: 'escaton',   label: 'Últimas Cosas',       icon: 'fas fa-star',     color: '#880099' },
]

const articulos = [
  // DIOS Y ESCRITURAS
  { num:1,  cat:'dios',      icon:'fas fa-book',       titulo:'Las Sagradas Escrituras',     texto:'La Biblia es la Palabra inspirada e infalible de Dios, única regla de fe y práctica.', ref:'2 Tim. 3:16–17' },
  { num:2,  cat:'dios',      icon:'fas fa-infinity',   titulo:'La Trinidad',                 texto:'Un solo Dios eterno en tres personas coiguales: Padre, Hijo y Espíritu Santo.', ref:'Mt. 28:19 · 2 Co. 13:14' },
  { num:3,  cat:'salvacion', icon:'fas fa-apple-alt',  titulo:'La Caída del Hombre',         texto:'Adán y Eva desobedecieron. Toda la humanidad nace con naturaleza pecaminosa.', ref:'Gn. 3 · Ro. 5:12' },
  { num:4,  cat:'salvacion', icon:'fas fa-heart',      titulo:'La Redención',                texto:'Cristo murió como sustituto del pecador. Su resurrección garantiza nuestra justificación.', ref:'1 P. 1:18–19' },
  { num:5,  cat:'salvacion', icon:'fas fa-gift',       titulo:'Salvación por Gracia',        texto:'La salvación es don gratuito de Dios, recibida por fe, no por obras humanas.', ref:'Ef. 2:8–9' },
  { num:6,  cat:'salvacion', icon:'fas fa-undo-alt',   titulo:'Arrepentimiento',             texto:'El verdadero arrepentimiento produce un cambio radical de mente y corazón hacia Dios.', ref:'Hch. 2:38' },
  { num:7,  cat:'salvacion', icon:'fas fa-seedling',   titulo:'El Nuevo Nacimiento',         texto:'Nacer de nuevo por el Espíritu Santo es necesario para entrar en el reino de Dios.', ref:'Jn. 3:3–7' },
  { num:8,  cat:'salvacion', icon:'fas fa-walking',    titulo:'Vida Cristiana',              texto:'El creyente está llamado a vivir una vida santa, separada del pecado, consagrada a Dios.', ref:'1 Ts. 5:23' },
  { num:9,  cat:'salvacion', icon:'fas fa-water',      titulo:'Bautismo en Agua',            texto:'El bautismo por inmersión simboliza la muerte al pecado y resurrección a nueva vida.', ref:'Ro. 6:3–4' },
  { num:10, cat:'salvacion', icon:'fas fa-bread-slice',titulo:'La Santa Cena',              texto:'Conmemora el sacrificio de Cristo. El pan es su cuerpo y la copa su sangre.', ref:'1 Co. 11:23–26' },
  { num:11, cat:'espiritu',  icon:'fas fa-fire',       titulo:'Bautismo del Espíritu Santo', texto:'Cristo bautiza con el Espíritu Santo y fuego, con evidencia de hablar en lenguas.', ref:'Hch. 2:1–4' },
  { num:12, cat:'espiritu',  icon:'fas fa-magic',      titulo:'Dones del Espíritu',          texto:'El E.S. distribuye sus dones: sabiduría, fe, sanidades, milagros, profecía, lenguas.', ref:'1 Co. 12:1–11' },
  { num:13, cat:'espiritu',  icon:'fas fa-hand-holding-medical', titulo:'Sanidad Divina',   texto:'La sanidad física es parte de la redención. Dios sana en respuesta a la fe.', ref:'Stg. 5:14–16' },
  { num:14, cat:'escaton',   icon:'fas fa-cloud-sun',  titulo:'Segunda Venida de Cristo',    texto:'Jesucristo regresará personal y gloriosamente. Primero el rapto, luego su reino.', ref:'1 Ts. 4:16–17' },
  { num:15, cat:'escaton',   icon:'fas fa-share-alt',  titulo:'El Gran Mandamiento',         texto:'La Iglesia está comisionada para predicar el Evangelio a toda criatura y discipular.', ref:'Mt. 28:18–20' },
  { num:16, cat:'escaton',   icon:'fas fa-coins',      titulo:'Diezmos y Ofrendas',          texto:'El diezmo pertenece a Dios. Las ofrendas son expresión de gratitud y amor.', ref:'Mal. 3:10' },
]

const articulosFiltrados = computed(() =>
  articulos.filter(a => a.cat === catActiva.value)
)

const colorByCat = { dios: '#B30000', salvacion: '#003399', espiritu: '#CC8800', escaton: '#880099' }
function artColor(num) {
  const art = articulos.find(a => a.num === num)
  return colorByCat[art?.cat] || '#B30000'
}
</script>

<style scoped>
.fe-panel { display: flex; flex-direction: column; gap: 12px; }

.fe-intro { font-size: .86rem; color: #555; line-height: 1.6; margin: 0; }

/* Tabs de categoría */
.cat-tabs { display: flex; flex-wrap: wrap; gap: 5px; }
.cat-tab {
  padding: 5px 10px; border-radius: 20px;
  border: 1.5px solid #ddd; background: #fff;
  font-size: .84rem; font-weight: 700; color: #888;
  cursor: pointer; display: flex; align-items: center; gap: 4px;
  transition: all .2s; font-family: inherit;
}
.cat-tab:hover { border-color: #aaa; color: #555; }
.cat-tab.active { font-weight: 700; }

/* Lista de artículos */
.articulos-list { display: flex; flex-direction: column; gap: 6px; }

.art-item {
  display: flex; gap: 10px; align-items: flex-start;
  background: #fff; border: 1px solid #eee;
  border-left: 3px solid var(--ac, #B30000);
  border-radius: 6px; padding: 9px 12px;
  transition: box-shadow .2s, transform .2s;
}
.art-item:hover { box-shadow: 0 3px 10px rgba(0,0,0,.1); transform: translateX(2px); }

.art-num {
  font-family: 'Cinzel', serif; font-size: 1.2rem; font-weight: 900;
  color: var(--ac, #B30000); opacity: .25; line-height: 1;
  min-width: 28px; flex-shrink: 0;
}

.art-body { flex: 1; display: flex; flex-direction: column; gap: 3px; }
.art-title {
  font-size: .86rem; font-weight: 700; color: #3a2a1a;
  display: flex; align-items: center; gap: 5px;
}
.art-title i { color: var(--ac, #B30000); font-size: .86rem; }
.art-texto { font-size: .86rem; color: #666; line-height: 1.45; }
.art-ref { font-size: .84rem; color: #999; }
</style>
