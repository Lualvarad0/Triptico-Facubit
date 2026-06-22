<template>
  <IntroScreen v-if="showIntro" @open="showIntro = false" />

  <Transition name="stage-fade">
    <main v-if="!showIntro" class="stage">

      <div class="color-strip">
        <div class="cs-rojo"></div>
        <div class="cs-azul"></div>
        <div class="cs-dorado"></div>
        <div class="cs-purpura"></div>
      </div>

      <header class="stage-header">
        <span class="stage-kicker">Proyecto de difusión doctrinal · 12 carillas</span>
        <h1 class="stage-title">Difundiendo el Fundamento<br><em>en la Comunidad</em></h1>
        <p class="stage-sub">FACUBIT · Fundamento Cuadrangular · 2026</p>
      </header>

      <WoodBox :sections="sections" />

    </main>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import IntroScreen       from './components/IntroScreen.vue'
import WoodBox           from './components/WoodBox.vue'

import PanelPortada        from './components/panels/PanelPortada.vue'
import PanelContraportada  from './components/panels/PanelContraportada.vue'
import PanelAimee          from './components/panels/PanelAimee.vue'
import PanelEzequiel       from './components/panels/PanelEzequiel.vue'
import PanelSignificado    from './components/panels/PanelSignificado.vue'
import PanelRepresentaciones from './components/panels/PanelRepresentaciones.vue'
import PanelSimbolos       from './components/panels/PanelSimbolos.vue'
import PanelLogotipo       from './components/panels/PanelLogotipo.vue'
import PanelBandera        from './components/panels/PanelBandera.vue'
import PanelHimno          from './components/panels/PanelHimno.vue'
import PanelFe             from './components/panels/PanelFe.vue'
import PanelDoctrinas      from './components/panels/PanelDoctrinas.vue'

const showIntro = ref(true)

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
    id: 'ezequiel', title: 'Visión de Ezequiel 1:10',
    subtitle: 'Los cuatro rostros del Evangelio',
    image: '/assets/img/rostro-leon-grabado.png', color: 'verde',
    component: PanelEzequiel,
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
    component: PanelSimbolos,
  },
  {
    id: 'logotipo', title: 'El Logotipo',
    subtitle: 'Representación, significado y referencias',
    image: '/assets/img/doctrina-rey-grabado.png', color: 'purpura',
    component: PanelLogotipo,
  },
  {
    id: 'bandera', title: 'La Bandera Cuadrangular',
    subtitle: 'Descripción, significado y sustento bíblico',
    image: '/assets/img/doctrina-bautizador-grabado.png', color: 'dorado',
    component: PanelBandera,
  },
  {
    id: 'himno', title: 'El Himno Cuadrangular',
    subtitle: 'Letra y significado del himno oficial',
    image: '/assets/img/doctrina-salvador-grabado.png', color: 'verde',
    component: PanelHimno,
  },
  {
    id: 'fe', title: 'Declaración de Fe',
    subtitle: '16 Artículos Fundamentales',
    image: '/assets/img/rostro-hombre-grabado.png', color: 'azul',
    component: PanelFe,
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
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.color-strip { display: flex; height: 6px; }
.cs-rojo    { flex: 1; background: #B30000; }
.cs-azul    { flex: 1; background: #003399; }
.cs-dorado  { flex: 1; background: #CC8800; }
.cs-purpura { flex: 1; background: #880099; }

.stage-header {
  text-align: center;
  padding: 36px 20px 30px;
  background: rgba(255,252,246,.88);
  border-bottom: 1px solid rgba(75,44,25,.12);
  box-shadow: 0 12px 34px rgba(71,42,23,.08);
  margin-bottom: 42px;
  width: 100%;
}
.stage-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 5vw, 3.25rem);
  color: #2d2119;
  letter-spacing: -.04em;
  line-height: .98;
  margin: 10px 0 14px;
}
.stage-title em { color:#a12626; font-weight:400; }
.stage-kicker {
  display:inline-block; color:#7e5d3f; font-size:.62rem; font-weight:800;
  letter-spacing:.18em; text-transform:uppercase;
}
.stage-sub {
  font-size: .65rem; color: #8a7664;
  letter-spacing: .22em; text-transform: uppercase;
}

.stage-fade-enter-active { animation: stageIn .5s ease both; }
@keyframes stageIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}
</style>
