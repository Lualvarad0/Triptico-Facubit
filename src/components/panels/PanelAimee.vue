<template>
  <div class="aimee">

    <!-- ══ HERO ══ -->
    <div class="hero">
      <div class="hero-foto" @click="lightbox=true" title="Click para ampliar">
        <img src="/assets/img/aimee-semple-mcpherson.jpg" alt="Aimee Semple McPherson" class="hero-img" />
        <span class="hero-años">1890 – 1944</span>
        <span class="expand-hint">⤢</span>
      </div>

      <!-- Lightbox -->
      <Teleport to="body">
        <div v-if="lightbox" class="lightbox" @click="lightbox=false">
          <img src="/assets/img/aimee-semple-mcpherson.jpg" alt="Aimee Semple McPherson" class="lb-img" />
          <span class="lb-cerrar">✕</span>
        </div>
      </Teleport>
      <div class="hero-info">
        <p class="hero-origen">Salford, Ontario · Canadá</p>
        <h3 class="hero-nombre">Aimee Semple<br>McPherson</h3>
        <div class="hero-tags">
          <span class="htag htag-p">Fundadora</span>
          <span class="htag htag-b">Evangelista</span>
          <span class="htag htag-r">Pionera Pentecostal</span>
        </div>
        <blockquote class="hero-cita">
          "Jesucristo es el mismo de ayer y hoy por los siglos."
        </blockquote>
      </div>
    </div>

    <!-- ══ STATS ══ -->
    <div class="stats-row">
      <div v-for="s in stats" :key="s.label" class="stat" :style="{'--c': s.color}">
        <strong class="stat-val">{{ s.value }}</strong>
        <span class="stat-lbl">{{ s.label }}</span>
      </div>
    </div>

    <!-- ══ BIO BREVE ══ -->
    <div class="bio-texto">
      Aimee Semple McPherson fue la primera mujer en fundar una denominación cristiana global. Nacida en Canadá, recorrió el mundo predicando sanidad, salvación y el bautismo del Espíritu Santo. En 1927 estableció formalmente la <strong>Iglesia del Evangelio Cuadrangular</strong> desde el Templo Angelus en Los Ángeles.
    </div>

    <!-- ══ TEMPLO ══ -->
    <div class="templo">
      <img src="/assets/img/templo-angelus.jpg" alt="Templo Angelus" class="templo-img" />
      <div class="templo-pie">
        <strong>Templo Angelus</strong> · Echo Park, Los Ángeles · 1923 · Capacidad: 5,300 personas
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const lightbox = ref(false)

const stats = [
  { label:'Países',  value:'+100', color:'#003399' },
  { label:'Iglesias',value:'+30k', color:'#B30000' },
  { label:'Fieles',  value:'8M+',  color:'#880099' },
  { label:'Fundada', value:'1927', color:'#CC8800' },
]
</script>

<style scoped>
.aimee {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ══ HERO ══ */
.hero {
  display: flex;
  gap: 12px;
  align-items: stretch;
  background: linear-gradient(135deg, #1a0033 0%, #440066 100%);
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 4px 16px rgba(136,0,153,.3);
}
.hero-foto {
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
}
.hero-foto:hover .hero-img {
  border-color: #CC8800;
  box-shadow: 0 6px 20px rgba(0,0,0,.55);
}
.hero-img {
  width: 118px;
  height: 150px;
  object-fit: cover;
  object-position: top center;
  border-radius: 8px;
  display: block;
  border: 2px solid rgba(255,255,255,.3);
  box-shadow: 0 4px 12px rgba(0,0,0,.4);
  transition: border-color .2s, box-shadow .2s;
}
.expand-hint {
  position: absolute;
  top: 6px; right: 6px;
  background: rgba(0,0,0,.55);
  color: #fff;
  font-size: .85rem;
  width: 22px; height: 22px;
  border-radius: 4px;
  display: flex; align-items: center; justify-content: center;
  opacity: 0;
  transition: opacity .2s;
}
.hero-foto:hover .expand-hint { opacity: 1; }

/* ── Lightbox ── */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,.88);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
  animation: lbIn .18s ease;
}
@keyframes lbIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.lb-img {
  max-width: 88vw;
  max-height: 88vh;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,.7);
  object-fit: contain;
}
.lb-cerrar {
  position: absolute;
  top: 18px; right: 22px;
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  opacity: .7;
  line-height: 1;
}
.hero-años {
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  background: #CC8800;
  color: #fff;
  font-size: .76rem;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 8px;
  white-space: nowrap;
}

.hero-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.hero-origen {
  font-size: .84rem;
  color: rgba(255,255,255,.6);
  margin: 0;
  letter-spacing: .05em;
}
.hero-nombre {
  font-family: 'Cinzel', serif;
  font-size: 1.22rem;
  font-weight: 900;
  color: #fff;
  margin: 0;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0,0,0,.4);
}
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.htag {
  font-size: .76rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 10px;
}
.htag-p { background: rgba(136,0,153,.4); color: #f0c0ff; }
.htag-b { background: rgba(0,51,153,.4);  color: #c0d4ff; }
.htag-r { background: rgba(179,0,0,.4);   color: #ffc0c0; }

.hero-cita {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: .88rem;
  color: rgba(255,255,255,.85);
  border-left: 3px solid #CC8800;
  padding-left: 9px;
  margin: 3px 0 0;
  line-height: 1.5;
}

/* ══ STATS ══ */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}
.stat {
  background: #fff;
  border-radius: 8px;
  border-top: 3px solid var(--c);
  padding: 8px 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2px;
  box-shadow: 0 2px 8px rgba(0,0,0,.07);
}
.stat-val {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--c);
}
.stat-lbl {
  font-size: .76rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: .5px;
}

/* ══ BIO ══ */
.bio-texto {
  font-size: .9rem;
  color: #444;
  line-height: 1.65;
  background: linear-gradient(135deg, #F8F0FF, #FFF8FF);
  border-left: 4px solid #880099;
  border-radius: 6px;
  padding: 10px 13px;
}
.bio-texto strong { color: #880099; }

/* ══ TEMPLO ══ */
.templo {
  border-radius: 8px;
  overflow: hidden;
  border: 1.5px solid #e0d0c0;
  box-shadow: 0 3px 10px rgba(0,0,0,.1);
}
.templo-img {
  width: 100%;
  height: 90px;
  object-fit: cover;
  display: block;
}
.templo-pie {
  background: #F8F5F0;
  padding: 7px 10px;
  font-size: .84rem;
  color: #555;
  line-height: 1.45;
}
.templo-pie strong { color: #2a1a0a; }
</style>
