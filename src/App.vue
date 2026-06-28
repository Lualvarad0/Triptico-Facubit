<template>
  <Transition name="stage-fade">
    <main class="stage">

      <div class="color-strip">
        <div class="cs-rojo"></div>
        <div class="cs-azul"></div>
        <div class="cs-dorado"></div>
        <div class="cs-purpura"></div>
      </div>

      <header class="stage-header">
        <h1 class="stage-title">Difundiendo el Fundamento <em>en la Comunidad</em></h1>
        <p class="stage-sub">FACUBIT · Fundamento Cuadrangular · 2026</p>
      </header>

      <WoodBox :sections="sections" />

    </main>
  </Transition>
</template>

<script setup>
import WoodBox           from './components/WoodBox.vue'

import PanelPortada        from './components/panels/PanelPortada.vue'
import PanelContraportada  from './components/panels/PanelContraportada.vue'
import PanelAimee          from './components/panels/PanelAimee.vue'
import PanelAimeeExtra     from './components/panels/PanelAimeeExtra.vue'
import PanelEzequiel       from './components/panels/PanelEzequiel.vue'
import PanelSignificado    from './components/panels/PanelSignificado.vue'
import PanelRepresentaciones from './components/panels/PanelRepresentaciones.vue'
import PanelSimbolos       from './components/panels/PanelSimbolos.vue'
import PanelLogotipo       from './components/panels/PanelLogotipo.vue'
import PanelBandera        from './components/panels/PanelBandera.vue'
import PanelHimno          from './components/panels/PanelHimno.vue'
import PanelHimnoExtra     from './components/panels/PanelHimnoExtra.vue'
import PanelFe             from './components/panels/PanelFe.vue'
import PanelFeExtra        from './components/panels/PanelFeExtra.vue'
import PanelFeExtra2       from './components/panels/PanelFeExtra2.vue'
import PanelFeExtra3       from './components/panels/PanelFeExtra3.vue'
import PanelFeExtra4       from './components/panels/PanelFeExtra4.vue'
import PanelDoctrinas      from './components/panels/PanelDoctrinas.vue'

const sections = [
  {
    id: 'portada', title: 'Portada',
    subtitle: 'Evangelio Cuadrangular · FACUBIT 2026',
    image: '/assets/img/templo-angelus.jpg', color: 'rojo',
    component: PanelPortada,
  },
  {
    id: 'contraportada', title: 'Datos Institucionales',
    subtitle: 'Contraportada · Información del trabajo',
    image: '/assets/img/rostro-hombre-grabado.png', color: 'azul',
    component: PanelContraportada,
  },
  {
    id: 'aimee', title: 'Aimee Semple McPherson',
    subtitle: 'Fundadora de la Iglesia Cuadrangular',
    image: '/assets/img/aimee-semple-mcpherson.jpg', color: 'purpura',
    component: PanelAimee,
  },
  {
    id: 'aimee-extra', title: 'Aimee Semple McPherson',
    subtitle: 'Datos biográficos y curiosidades',
    image: '/assets/img/aimee-semple-mcpherson.jpg', color: 'purpura',
    component: PanelAimeeExtra,
  },
  {
    id: 'ezequiel', title: 'Visión de Ezequiel 1:10',
    subtitle: 'Los cuatro rostros del Evangelio',
    image: '/assets/img/rostro-leon-grabado.png', color: 'verde',
    component: PanelEzequiel, wide: true,
  },
  {
    id: 'significado', title: 'Significado "Cuadrangular"',
    subtitle: 'Fundamento bíblico y lema de la Iglesia',
    image: '/assets/img/doctrina-salvador-grabado.png', color: 'dorado',
    component: PanelSignificado,
  },
  {
    id: 'representaciones', title: 'El Cuatro en la Biblia',
    subtitle: 'Representaciones bíblicas del número cuatro',
    image: '/assets/img/rostro-aguila-grabado.png', color: 'azul',
    component: PanelRepresentaciones,
  },
  {
    id: 'simbolos', title: 'Símbolos Cuadrangulares',
    subtitle: 'Cruz · Copa · Paloma · Corona',
    image: '/assets/img/doctrina-bautizador-grabado.png', color: 'rojo',
    component: PanelSimbolos, wide: true,
  },
  {
    id: 'logotipo', title: 'El Logotipo',
    subtitle: 'Representación, significado y referencias',
    image: '/assets/img/logo-cuadrangular.svg', color: 'purpura',
    component: PanelLogotipo,
  },
  {
    id: 'bandera', title: 'La Bandera Cuadrangular',
    subtitle: 'Descripción, significado y sustento bíblico',
    image: '/assets/img/bandera-cuadrangular.png', color: 'dorado',
    component: PanelBandera,
  },
  {
    id: 'himno', title: 'El Himno Cuadrangular',
    subtitle: 'Estrofas I y II',
    image: '/assets/img/doctrina-salvador-grabado.png', color: 'verde',
    component: PanelHimno,
  },
  {
    id: 'himno-extra', title: 'El Himno Cuadrangular',
    subtitle: 'Estrofas III y IV',
    image: '/assets/img/doctrina-salvador-grabado.png', color: 'verde',
    component: PanelHimnoExtra,
  },
  {
    id: 'fe', title: 'Declaración de Fe',
    subtitle: 'Artículos 1 – 8',
    image: '/assets/img/rostro-hombre-grabado.png', color: 'azul',
    component: PanelFe,
  },
  {
    id: 'fe-extra', title: 'Declaración de Fe',
    subtitle: 'Artículos 9 – 16',
    image: '/assets/img/rostro-hombre-grabado.png', color: 'azul',
    component: PanelFeExtra,
  },
  {
    id: 'fe-extra2', title: 'Declaración de Fe',
    subtitle: 'Artículos 14 – 19',
    image: '/assets/img/rostro-hombre-grabado.png', color: 'azul',
    component: PanelFeExtra2,
  },
  {
    id: 'fe-extra3', title: 'Declaración de Fe',
    subtitle: 'Artículos 14 – 18',
    image: '/assets/img/rostro-hombre-grabado.png', color: 'azul',
    component: PanelFeExtra3,
  },
  {
    id: 'fe-extra4', title: 'Declaración de Fe',
    subtitle: 'Artículos 19 – 22',
    image: '/assets/img/rostro-hombre-grabado.png', color: 'azul',
    component: PanelFeExtra4,
  },
  {
    id: 'doctrinas', title: 'Nuestras Doctrinas',
    subtitle: 'Las cuatro verdades del Evangelio Cuadrangular',
    image: '/assets/img/doctrina-rey-grabado.png', color: 'multi',
    component: PanelDoctrinas,
  },
]
</script>

<style scoped>
.stage {
  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 0%, rgba(184,132,73,.14), transparent 30rem),
    linear-gradient(180deg, #f1eadf 0%, #e7ded0 100%);
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.color-strip { display: flex; height: 6px; }
.cs-rojo    { flex: 1; background: #B30000; }
.cs-azul    { flex: 1; background: #003399; }
.cs-dorado  { flex: 1; background: #CC8800; }
.cs-purpura { flex: 1; background: #880099; }

.stage-header {
  text-align: center;
  padding: 8px 20px 6px;
  background: rgba(255,252,246,.88);
  border-bottom: 1px solid rgba(75,44,25,.12);
  box-shadow: 0 4px 12px rgba(71,42,23,.06);
  margin-bottom: 8px;
  width: 100%;
}
.stage-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(.95rem, 2vw, 1.3rem);
  color: #2d2119;
  letter-spacing: -.02em;
  line-height: 1.1;
  margin: 0 0 2px;
}
.stage-title em { color:#a12626; font-weight:400; }
.stage-sub {
  font-size: .58rem; color: #8a7664;
  letter-spacing: .2em; text-transform: uppercase; margin: 0;
}

.stage-fade-enter-active { animation: stageIn .5s ease both; }
@keyframes stageIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}
</style>
