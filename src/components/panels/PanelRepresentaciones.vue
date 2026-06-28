<template>
  <section class="reps">
    <div class="reps-hero">
      <span class="hero-kicker">Representaciones bíblicas</span>
      <h2>El “cuatro” como señal de totalidad</h2>
      <p>
        En las Escrituras el número <strong>cuatro</strong> aparece asociado con alcance universal:
        creación, dirección, testimonio y misión hacia toda la tierra.
      </p>
    </div>

    <div class="reps-grid">
      <article
        v-for="r in reps"
        :key="r.id"
        class="rep-card"
        :class="`rep-${r.id}`"
        :style="{ '--rc': r.color, '--soft': r.soft }"
      >
        <figure class="rep-image">
          <img :src="r.img" :alt="r.alt" loading="lazy">
          <figcaption>{{ r.caption }}</figcaption>
        </figure>

        <div class="rep-body">
          <span class="rep-cita">{{ r.cita }}</span>
          <h3>{{ r.titulo }}</h3>
          <p>{{ r.texto }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const reps = [
  {
    id: 'rivers',
    cita: 'Génesis 2:10-14',
    color: '#003399',
    soft: 'rgba(0, 51, 153, .10)',
    img: '/assets/img/cuatro-rios-eden-grabado.png',
    alt: 'Grabado bíblico de un río del Edén dividiéndose en cuatro brazos',
    caption: 'Un río que se divide en cuatro brazos',
    titulo: 'Los cuatro ríos del Edén',
    texto: 'Pisón, Gihón, Tigris y Éufrates expresan la provisión de Dios que fluye y alcanza la tierra.'
  },
  {
    id: 'living',
    cita: 'Ezequiel 1:5-10 · Apocalipsis 4:6-7',
    color: '#B30000',
    soft: 'rgba(179, 0, 0, .10)',
    img: '/assets/img/cuatro-seres-vivientes-grabado.png',
    alt: 'Grabado bíblico de los cuatro seres vivientes: hombre, león, buey y águila',
    caption: 'Hombre, león, buey y águila',
    titulo: 'Los cuatro seres vivientes',
    texto: 'La visión presenta rostros que anuncian la plenitud del carácter y ministerio de Cristo.'
  },
  {
    id: 'winds',
    cita: 'Jeremías 49:36 · Apocalipsis 7:1',
    color: '#CC8800',
    soft: 'rgba(204, 136, 0, .14)',
    img: '/assets/img/cuatro-vientos-grabado.png',
    alt: 'Grabado bíblico de cuatro ángeles deteniendo los vientos de la tierra',
    caption: 'Los vientos desde los cuatro puntos',
    titulo: 'Los cuatro vientos de la tierra',
    texto: 'Dios gobierna toda dirección, fuerza e historia; nada queda fuera de su soberanía.'
  },
  {
    id: 'gospel',
    cita: 'Mateo · Marcos · Lucas · Juan',
    color: '#880099',
    soft: 'rgba(136, 0, 153, .10)',
    img: '/assets/img/cuatro-evangelios-grabado.png',
    alt: 'Grabado bíblico de cuatro rollos antiguos que representan los cuatro Evangelios',
    caption: 'Cuatro testimonios de Cristo',
    titulo: 'Los cuatro Evangelios',
    texto: 'Cuatro testimonios anuncian a Jesús como Rey, Siervo, Hombre perfecto e Hijo eterno de Dios.'
  },
  {
    id: 'corners',
    cita: 'Isaías 11:12 · Apocalipsis 20:8',
    color: '#1a7a1a',
    soft: 'rgba(26, 122, 26, .12)',
    img: '/assets/img/cuatro-confines-grabado.png',
    alt: 'Grabado bíblico del evangelio extendiéndose hacia los cuatro confines de la tierra',
    caption: 'El mensaje hasta toda nación',
    titulo: 'Los cuatro confines de la tierra',
    texto: 'La misión no se encierra en un lugar: el fundamento cuadrangular se comparte con todos los pueblos.'
  }
]
</script>

<style scoped>
.reps {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.reps-hero {
  position: relative;
  overflow: hidden;
  padding: 16px;
  border: 1px solid rgba(80, 53, 30, .16);
  border-radius: 14px;
  background:
    linear-gradient(135deg, rgba(255,255,255,.94), rgba(255,248,229,.88)),
    repeating-linear-gradient(90deg, rgba(80,53,30,.06) 0 1px, transparent 1px 16px);
  box-shadow: 0 12px 24px rgba(61, 39, 21, .08);
}

.reps-hero::after {
  content: '';
  position: absolute;
  right: -35px;
  top: -42px;
  width: 115px;
  height: 115px;
  border-radius: 999px;
  background: conic-gradient(#B30000 0 25%, #003399 0 50%, #CC8800 0 75%, #880099 0);
  opacity: .16;
}

.hero-kicker {
  display: inline-flex;
  padding: 5px 10px;
  border-radius: 999px;
  background: #3b2a16;
  color: #fff4d8;
  font-size: .66rem;
  font-weight: 900;
  letter-spacing: .11em;
  text-transform: uppercase;
}

.reps-hero h2 {
  margin: 9px 0 5px;
  color: #2f2010;
  font: 900 1.15rem/1.15 'Cinzel', serif;
}

.reps-hero p {
  margin: 0;
  color: #5d4a31;
  font-size: .88rem;
  line-height: 1.55;
}

.reps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.rep-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(118px, 43%) 1fr;
  min-height: 150px;
  border: 1px solid rgba(80, 53, 30, .14);
  border-radius: 15px;
  background:
    linear-gradient(135deg, rgba(255,255,255,.98), rgba(255,252,242,.95)),
    linear-gradient(90deg, var(--soft), transparent);
  box-shadow: 0 12px 30px rgba(61, 39, 21, .10);
  transform-origin: center;
  transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
}

.rep-card::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 5px;
  background: var(--rc);
  opacity: .95;
}

.rep-card:hover {
  transform: translateY(-4px) rotateX(1deg);
  border-color: color-mix(in srgb, var(--rc), white 50%);
  box-shadow: 0 18px 34px rgba(61, 39, 21, .16);
}

.rep-image {
  position: relative;
  min-height: 150px;
  margin: 0;
  overflow: hidden;
  background: #efe4cd;
}

.rep-image img {
  width: 100%;
  height: 100%;
  min-height: 150px;
  object-fit: cover;
  display: block;
  filter: sepia(.12) contrast(1.04);
  transition: transform .45s ease, filter .45s ease;
}

.rep-card:hover .rep-image img {
  transform: scale(1.045);
  filter: sepia(.08) contrast(1.12);
}

.rep-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 68%, rgba(255,252,242,.78));
  pointer-events: none;
}

.rep-image figcaption {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  padding: 6px 8px;
  border-radius: 999px;
  background: rgba(47, 32, 16, .78);
  color: #fff4d8;
  font-size: .64rem;
  font-weight: 900;
  letter-spacing: .04em;
  text-transform: uppercase;
  text-align: center;
  backdrop-filter: blur(5px);
}

.rep-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 13px 14px 13px 16px;
}

.rep-cita {
  width: fit-content;
  padding: 4px 8px;
  border-radius: 999px;
  background: var(--soft);
  color: var(--rc);
  font-size: .62rem;
  font-weight: 900;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.rep-body h3 {
  margin: 0;
  color: #2f2010;
  font: 900 .98rem/1.15 'Cinzel', serif;
}

.rep-body p {
  margin: 0;
  color: #5f4d35;
  font-size: .84rem;
  line-height: 1.45;
}

@media (max-width: 560px) {
  .rep-card {
    grid-template-columns: 1fr;
  }

  .rep-image {
    min-height: 170px;
  }

  .rep-image img {
    min-height: 170px;
  }

  .rep-image::after {
    background: linear-gradient(0deg, rgba(255,252,242,.75), transparent 52%);
  }
}
</style>
