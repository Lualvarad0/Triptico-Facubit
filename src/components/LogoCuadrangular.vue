<template>
  <!-- Logo oficial Foursquare en SVG con animaciones CSS -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="'0 0 420 420'"
    :class="['logo-cuad', { spin }]"
  >
    <defs>
      <linearGradient id="g-rojo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8B0000"/>
        <stop offset="100%" stop-color="#CC0000"/>
      </linearGradient>
      <linearGradient id="g-azul" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#002277"/>
        <stop offset="100%" stop-color="#1155CC"/>
      </linearGradient>
      <linearGradient id="g-dorado" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#885500"/>
        <stop offset="100%" stop-color="#FFAA00"/>
      </linearGradient>
      <linearGradient id="g-purpura" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#660077"/>
        <stop offset="100%" stop-color="#CC00CC"/>
      </linearGradient>
      <filter id="ico-sombra">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,.25)"/>
      </filter>
    </defs>

    <!-- Q1: Rojo — Cruz -->
    <g class="q q1">
      <rect x="0" y="0" width="202" height="202" fill="url(#g-rojo)" rx="6"/>
      <g filter="url(#ico-sombra)" class="ico-cruz">
        <rect x="88" y="22" width="30" height="158" rx="4" fill="white"/>
        <rect x="22" y="78" width="158" height="30" rx="4" fill="white"/>
      </g>
    </g>

    <!-- Q2: Azul — Copa -->
    <g class="q q2" transform="translate(218,0)">
      <rect x="0" y="0" width="202" height="202" fill="url(#g-azul)" rx="6"/>
      <g filter="url(#ico-sombra)" class="ico-copa">
        <path d="M 35,28 L 167,28 L 148,100 Q 140,128 101,130 Q 62,128 54,100 Z" fill="white"/>
        <rect x="90" y="128" width="22" height="28" rx="3" fill="white"/>
        <path d="M 50,156 L 152,156 L 158,174 L 44,174 Z" fill="white"/>
        <rect x="40" y="172" width="122" height="14" rx="5" fill="white"/>
      </g>
    </g>

    <!-- Q3: Dorado — Paloma -->
    <g class="q q3" transform="translate(0,218)">
      <rect x="0" y="0" width="202" height="202" fill="url(#g-dorado)" rx="6"/>
      <g filter="url(#ico-sombra)" class="ico-paloma">
        <ellipse cx="102" cy="112" rx="42" ry="26" fill="white" transform="rotate(-15,102,112)"/>
        <circle cx="148" cy="88" r="18" fill="white"/>
        <path d="M 163,84 L 180,80 L 162,96 Z" fill="white"/>
        <circle cx="153" cy="85" r="4" fill="#CC8800"/>
        <circle cx="154" cy="84" r="2" fill="#333"/>
        <path d="M 82,100 Q 30,50 18,30 Q 50,38 70,55 Q 90,40 108,90 Z" fill="white"/>
        <path d="M 72,118 Q 30,140 20,165 Q 55,155 80,138 Z" fill="white"/>
        <path d="M 62,118 Q 35,120 20,100 Q 40,112 60,108 Z" fill="white"/>
      </g>
    </g>

    <!-- Q4: Púrpura — Corona -->
    <g class="q q4" transform="translate(218,218)">
      <rect x="0" y="0" width="202" height="202" fill="url(#g-purpura)" rx="6"/>
      <g filter="url(#ico-sombra)" class="ico-corona">
        <rect x="22" y="148" width="158" height="32" rx="6" fill="white"/>
        <path d="M 22,148 L 22,100 L 55,125 L 101,50 L 147,125 L 180,100 L 180,148 Z" fill="white"/>
        <circle cx="22"  cy="97"  r="11" fill="white"/>
        <circle cx="65"  cy="120" r="9"  fill="white"/>
        <circle cx="101" cy="44"  r="13" fill="white"/>
        <circle cx="137" cy="120" r="9"  fill="white"/>
        <circle cx="180" cy="97"  r="11" fill="white"/>
      </g>
    </g>

    <!-- Divisores blancos -->
    <rect x="0"   y="203" width="420" height="14" fill="white"/>
    <rect x="203" y="0"   width="14"  height="420" fill="white"/>
  </svg>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 120 },
  spin: { type: Boolean, default: false }
})
</script>

<style scoped>
.logo-cuad { display: block; filter: drop-shadow(0 4px 16px rgba(0,0,0,.22)); transition: transform .3s; }
.logo-cuad:hover { transform: scale(1.04); }

/* Rotación lenta (usada en la cabecera del stage) */
.logo-cuad.spin { animation: rotar 22s linear infinite; }
@keyframes rotar { to { transform: rotate(360deg); } }

/* Hover sobre cuadrantes */
.q { cursor: pointer; transition: filter .25s; }
.q:hover { filter: brightness(1.14); }

/* Paloma: vuelo flotante */
.ico-paloma {
  animation: volarPaloma 3.5s ease-in-out infinite;
  transform-origin: 101px 101px;
}
@keyframes volarPaloma {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-7px); }
}

/* Cruz: pulso de luz */
.ico-cruz { animation: pulsoCruz 2.8s ease-in-out infinite; }
@keyframes pulsoCruz {
  0%,100% { opacity: 1; }
  50%      { opacity: .78; }
}

/* Copa: glow pulsante */
.ico-copa { animation: glowCopa 3s ease-in-out infinite; }
@keyframes glowCopa {
  0%,100% { filter: drop-shadow(0 0 0px rgba(255,255,255,0)); }
  50%      { filter: drop-shadow(0 0 10px rgba(255,255,255,.55)); }
}

/* Corona: balanceo */
.ico-corona {
  animation: balanceo 3.2s ease-in-out infinite;
  transform-origin: 101px 101px;
}
@keyframes balanceo {
  0%,100% { transform: rotate(-4deg); }
  50%      { transform: rotate(4deg); }
}

/* Cuadrantes entran desde sus esquinas al cargar */
.q1 { animation: entQ1 .7s cubic-bezier(.4,0,.2,1) both; }
.q2 { animation: entQ2 .7s cubic-bezier(.4,0,.2,1) .1s both; }
.q3 { animation: entQ3 .7s cubic-bezier(.4,0,.2,1) .2s both; }
.q4 { animation: entQ4 .7s cubic-bezier(.4,0,.2,1) .3s both; }

@keyframes entQ1 { from { opacity:0; transform: translate(-16px,-16px) scale(.8); } to { opacity:1; transform: none; } }
@keyframes entQ2 { from { opacity:0; transform: translate(16px,-16px) scale(.8); } to { opacity:1; transform: translate(218px,0); } }
@keyframes entQ3 { from { opacity:0; transform: translate(-16px,16px) scale(.8); } to { opacity:1; transform: translate(0,218px); } }
@keyframes entQ4 { from { opacity:0; transform: translate(16px,16px) scale(.8); } to { opacity:1; transform: translate(218px,218px); } }
</style>
