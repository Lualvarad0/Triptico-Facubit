<template>
  <div class="logo-panel">

    <!-- Logo + título -->
    <div class="logo-display">
      <img src="/assets/img/logo-cuadrangular.svg" alt="Logotipo Cuadrangular" class="main-logo" />
      <div class="logo-caption">
        <strong>El Logotipo Cuadrangular</strong>
        <span>Emblema oficial de la Iglesia del Evangelio Cuadrangular</span>
        <span class="logo-año">Fundado · 1927</span>
      </div>
    </div>

    <!-- Descripción general -->
    <div class="logo-desc">
      El emblema cuadrangular es un sello circular dividido en cuatro cuadrantes iguales, cada uno con un color y símbolo distinto. Juntos representan el ministerio completo de Jesucristo tal como fue revelado en la visión de Ezequiel 1:10.
    </div>

    <!-- Elementos del logo -->
    <div class="bloque-titulo">
      <div class="bt-lin"></div>
      <span>Los Cuatro Cuadrantes del Emblema</span>
      <div class="bt-lin"></div>
    </div>

    <div class="cuadrantes-grid">
      <div v-for="c in cuadrantes" :key="c.id" class="cua-card" :style="{'--cc': c.color, '--cl': c.light}">
        <div class="cua-cabeza">
          <img :src="c.img" :alt="c.simbolo" class="cua-img" />
          <div class="cua-meta">
            <span class="cua-simbolo">{{ c.simbolo }}</span>
            <span class="cua-doctrina">Jesucristo {{ c.doctrina }}</span>
            <span class="cua-ref">{{ c.ref }}</span>
          </div>
        </div>
        <p class="cua-desc">{{ c.descripcion }}</p>
      </div>
    </div>

  </div>
</template>

<script setup>
const cuadrantes = [
  {
    id: 'salv', simbolo: 'La Cruz', doctrina: 'Salvador',
    colorNombre: 'Rojo', color: '#B30000', light: '#fff5f5',
    img: '/assets/img/logo-salvador.svg',
    ref: 'Juan 3:16 · Romanos 5:8',
    descripcion: 'Cuadrante superior izquierdo. La cruz roja representa la sangre de Cristo derramada en el Calvario y su obra de redención para toda la humanidad.',
  },
  {
    id: 'san', simbolo: 'La Copa', doctrina: 'Sanador',
    colorNombre: 'Azul', color: '#003399', light: '#f0f4ff',
    img: '/assets/img/logo-sanador.svg',
    ref: 'Isaías 53:5 · Mateo 8:17',
    descripcion: 'Cuadrante superior derecho. La copa azul simboliza la sanidad divina que fluye del sacrificio de Cristo, restaurando cuerpo, alma y espíritu.',
  },
  {
    id: 'baut', simbolo: 'La Paloma', doctrina: 'Bautizador',
    colorNombre: 'Dorado', color: '#CC8800', light: '#fffaf0',
    img: '/assets/img/logo-bautizador.svg',
    ref: 'Hechos 1:8 · Hechos 2:4',
    descripcion: 'Cuadrante inferior izquierdo. La paloma dorada representa al Espíritu Santo y el bautismo con fuego y poder sobrenatural que Cristo concede.',
  },
  {
    id: 'rey', simbolo: 'La Corona', doctrina: 'Rey Venidero',
    colorNombre: 'Púrpura', color: '#880099', light: '#fdf0ff',
    img: '/assets/img/logo-rey.svg',
    ref: 'Ap. 19:16 · 1 Ts. 4:16',
    descripcion: 'Cuadrante inferior derecho. La corona púrpura proclama el regreso glorioso de Jesucristo como Rey de reyes y Señor de señores.',
  },
]
</script>

<style scoped>
.logo-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ── Encabezado con logo ── */
.logo-display {
  display: flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(135deg, #fffefb, #f3eadf);
  border: 1.5px solid #ddcfbd;
  border-radius: 10px;
  padding: 12px 16px;
  box-shadow: 0 4px 16px rgba(61,39,21,.1);
}
.main-logo {
  width: 78px;
  height: 78px;
  object-fit: contain;
  flex-shrink: 0;
  filter: drop-shadow(0 4px 10px rgba(50,30,18,.2));
}
.logo-caption {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.logo-caption strong {
  font-family: 'Cinzel', serif;
  font-size: .9rem;
  font-weight: 900;
  color: #1a0a00;
  line-height: 1.2;
}
.logo-caption span {
  font-size: .82rem;
  color: #666;
  line-height: 1.4;
}
.logo-año {
  font-family: 'Cinzel', serif;
  font-size: .80rem !important;
  color: #B30000 !important;
  font-weight: 700;
  letter-spacing: .06em;
}

/* ── Descripción ── */
.logo-desc {
  font-size: .84rem;
  color: #444;
  line-height: 1.65;
  background: #fff;
  border-left: 4px solid #B30000;
  border-radius: 4px;
  padding: 8px 12px;
  border: 1px solid rgba(179,0,0,.12);
  border-left: 4px solid #B30000;
}

/* ── Título de bloque ── */
.bloque-titulo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Cinzel', serif;
  font-size: .84rem;
  font-weight: 700;
  color: #B30000;
  text-transform: uppercase;
  letter-spacing: .08em;
  white-space: nowrap;
}
.bt-lin {
  flex: 1;
  height: 1px;
  background: rgba(179,0,0,.2);
}

/* ── Grid de cuadrantes ── */
.cuadrantes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.cua-card {
  background: var(--cl);
  border: 1.5px solid var(--cc);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.cua-cabeza {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cua-img {
  width: 42px;
  height: 42px;
  object-fit: contain;
  flex-shrink: 0;
}
.cua-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.cua-simbolo {
  font-family: 'Cinzel', serif;
  font-size: .82rem;
  font-weight: 800;
  color: var(--cc);
  line-height: 1.1;
}
.cua-doctrina {
  font-size: .82rem;
  color: #333;
  font-weight: 600;
}
.cua-ref {
  font-family: 'Cinzel', serif;
  font-size: .82rem;
  color: var(--cc);
  font-weight: 700;
  opacity: .8;
}
.cua-desc {
  font-size: .82rem;
  color: #555;
  line-height: 1.55;
  margin: 0;
  border-top: 1px solid rgba(0,0,0,.08);
  padding-top: 6px;
}
</style>
