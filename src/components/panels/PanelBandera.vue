<template>
  <div class="bandera-panel">

    <!-- Header -->
    <div class="ban-header">
      <h2 class="ban-titulo">La Bandera Cuadrangular</h2>
      <p class="ban-sub">Estandarte oficial de la Iglesia del Evangelio Cuadrangular</p>
    </div>

    <!-- Imagen + descripción lado a lado -->
    <div class="ban-intro">
      <figure class="flag-fig">
        <img src="/assets/img/bandera-cuadrangular.png" alt="Bandera Cuadrangular" class="flag-img" />
      </figure>
      <div class="ban-desc">
        <p class="ban-desc-txt">
          Estandarte oficial que presenta <strong>cuatro franjas onduladas</strong> —
          púrpura, azul, dorado y rojo — y en el cantón superior izquierdo
          el <strong>emblema cuadrangular</strong>. Cada franja proclama
          una verdad esencial del ministerio de Jesucristo.
        </p>
        <p class="ban-ref-base">Base bíblica · <em>Cantares 2:4</em><br>
          <span class="ban-cita">"Su bandera sobre mí fue amor."</span>
        </p>
      </div>
    </div>

    <!-- Significado de los 4 colores -->
    <div class="sec-titulo" style="--sc:#B30000">Significado de los Cuatro Colores</div>

    <div class="colores-grid">
      <div v-for="c in colores" :key="c.nombre" class="color-card" :style="{'--cc':c.hex,'--cl':c.light}">
        <div class="cc-franja"></div>
        <div class="cc-body">
          <div class="cc-head">
            <span class="cc-nombre">{{ c.nombre }}</span>
            <span class="cc-doctrina">{{ c.doctrina }}</span>
          </div>
          <p class="cc-texto">{{ c.texto }}</p>
          <p class="cc-ref">{{ c.ref }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const colores = [
  {
    nombre: 'Rojo', hex: '#B30000', light: '#fff0f0', doctrina: 'Cristo Salvador',
    texto: 'La sangre preciosa de Cristo derramada en el Calvario que redime y salva a toda la humanidad del pecado.',
    ref: 'Ro. 5:8 · 1 P. 1:18–19',
  },
  {
    nombre: 'Azul', hex: '#003399', light: '#eef2ff', doctrina: 'Cristo Sanador',
    texto: 'El río de sanidad divina que fluye de la expiación. Jesucristo restaura cuerpo, alma y espíritu.',
    ref: 'Is. 53:5 · Mt. 8:17',
  },
  {
    nombre: 'Dorado', hex: '#CC8800', light: '#fff8e6', doctrina: 'Cristo Bautizador',
    texto: 'El fuego del Espíritu Santo que bautiza con poder sobrenatural y otorga dones al creyente.',
    ref: 'Hch. 1:8 · Hch. 2:1–4',
  },
  {
    nombre: 'Púrpura', hex: '#880099', light: '#fdf0ff', doctrina: 'Rey Venidero',
    texto: 'La realeza de Jesucristo. Color de reyes que declara su glorioso regreso como Señor de señores.',
    ref: 'Ap. 19:16 · 1 Ts. 4:16',
  },
]
</script>

<style scoped>
.bandera-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

/* ── Header ── */
.ban-header {
  background: linear-gradient(135deg, #1a0a00, #3a1800);
  border-radius: 10px;
  padding: 11px 16px;
  text-align: center;
  flex-shrink: 0;
}
.ban-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 3px;
  letter-spacing: .05em;
}
.ban-sub {
  font-size: .96rem;
  color: rgba(255,255,255,.6);
  margin: 0;
  font-style: italic;
}

/* ── Intro: imagen + descripción ── */
.ban-intro {
  display: flex;
  gap: 12px;
  align-items: stretch;
  flex-shrink: 0;
}
.flag-fig {
  margin: 0;
  flex-shrink: 0;
  width: 160px;
  background: linear-gradient(180deg, #fffefb, #f6efe4);
  border: 1.5px solid #ddcfbd;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
.flag-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,.2));
}

.ban-desc {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}
.ban-desc-txt {
  font-size: 1.05rem;
  color: #333;
  line-height: 1.65;
  margin: 0;
}
.ban-desc-txt strong { color: #B30000; }

.ban-ref-base {
  font-size: 1.0rem;
  color: #777;
  margin: 0;
  line-height: 1.5;
  font-style: italic;
  background: #fffaf0;
  border-left: 3px solid #CC8800;
  padding: 7px 10px;
  border-radius: 0 6px 6px 0;
}
.ban-cita {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  color: #3a2a00;
  font-weight: 700;
  font-style: italic;
}

/* ── Sección título ── */
.sec-titulo {
  background: var(--sc);
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 1.05rem;
  font-weight: 900;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 8px 14px;
  border-radius: 8px;
  flex-shrink: 0;
}

/* ── Grid colores: 2x2 ── */
.colores-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 7px;
  flex: 1;
  min-height: 0;
}

.color-card {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid var(--cc);
  background: var(--cl);
}

/* Franja vertical de color */
.cc-franja {
  width: 14px;
  background: var(--cc);
  flex-shrink: 0;
}

.cc-body {
  flex: 1;
  padding: 10px 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.cc-head {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.cc-nombre {
  font-family: 'Cinzel', serif;
  font-size: 1.18rem;
  font-weight: 900;
  color: var(--cc);
  line-height: 1;
}
.cc-doctrina {
  font-size: 1.0rem;
  font-weight: 700;
  color: var(--cc);
  opacity: .7;
  font-style: italic;
}

.cc-texto {
  font-size: 1.05rem;
  color: #222;
  margin: 0;
  line-height: 1.55;
}

.cc-ref {
  font-family: 'Cinzel', serif;
  font-size: .96rem;
  font-weight: 700;
  color: var(--cc);
  margin: 0;
  opacity: .75;
}
</style>
