<template>
  <div class="libro-wrap">

    <!-- ══ MASTHEAD ══ -->
    <div class="rev-masthead">
      <LogoCuadrangular :size="34" />
      <div class="rev-masthead-text">
        <span class="rev-vol">Vol. I · Fundamento Cuadrangular · FACUBIT 2026</span>
        <span class="rev-name">Difundiendo el Fundamento en la Comunidad</span>
      </div>
      <div class="rev-page-badge">{{ currentSpread + 1 }}&thinsp;/&thinsp;{{ spreads.length }}</div>
    </div>

    <!-- ══ LIBRO ══ -->
    <div class="libro-escena">
      <button class="nav-btn nav-prev" :disabled="currentSpread === 0 || closing" @click="go(-1)">&#8249;</button>

      <div class="libro-viewport">
        <div class="libro-sombra"></div>

        <!-- Spread fijo — nunca anima, solo contiene las páginas -->
        <div class="libro-spread" :class="{ 'libro-closing': closing, 'libro-opening': opening }">

          <!-- ── PÁGINA IZQUIERDA: fade al avanzar, volteo al retroceder ── -->
          <Transition :name="dir === 'forward' ? 'fade-left' : 'flip-left-back'" mode="out-in">
            <div class="pagina pagina-izq" :key="`L-${currentSpread}`">
              <template v-if="leftPage.type === 'endpaper'">
                <div class="endpaper-izq">
                  <div class="ep-pattern"></div>
                  <div class="ep-sello">
                    <LogoCuadrangular :size="64" />
                    <p class="ep-texto">FACUBIT · 2026</p>
                  </div>
                </div>
              </template>

              <template v-else-if="leftPage.type === 'datos'">
                <div class="pagina-cinta" style="background:linear-gradient(90deg,#003399,#880099)">
                  <span class="cinta-num" style="color:rgba(255,255,255,.65)">Datos</span>
                  <span class="cinta-titulo" style="color:#fff">Institucionales</span>
                </div>
                <div class="pagina-cuerpo">
                  <ScaledContent>
                    <component :is="sections[1].component" />
                  </ScaledContent>
                </div>
                <div class="pagina-pie"><span>II</span></div>
              </template>

              <template v-else-if="leftPage.type === 'index'">
                <div class="pagina-cinta" style="background:#1a0a00">
                  <span class="cinta-num" style="color:rgba(244,216,120,.65)">Índice</span>
                  <span class="cinta-titulo" style="color:#f4d878">Contenidos</span>
                </div>
                <div class="pagina-cuerpo idx-cuerpo">
                  <div
                    v-for="(s, i) in sections" :key="s.id"
                    class="idx-fila" :class="`ic-${s.color}`"
                    @click="jumpToSection(i)"
                  >
                    <span class="idx-num">{{ String(i + 1).padStart(2, '0') }}</span>
                    <span class="idx-nombre">{{ s.title }}</span>
                    <span class="idx-linea"></span>
                    <span class="idx-pag">{{ pageOf(i) }}</span>
                  </div>
                </div>
                <div class="pagina-pie"><span>2</span></div>
              </template>

              <template v-else-if="leftPage.type === 'content'">
                <div class="pagina-cinta" :style="{ background: colorOf(leftPage.section.color) }">
                  <span class="cinta-num">{{ padNum(leftPage.section.idx) }}</span>
                  <span class="cinta-titulo">{{ leftPage.section.title }}</span>
                </div>
                <div class="pagina-cuerpo">
                  <ScaledContent>
                    <component :is="leftPage.section.component" />
                  </ScaledContent>
                </div>
                <div class="pagina-pie"><span>{{ leftPage.pageNum }}</span></div>
              </template>

              <template v-else-if="leftPage.type === 'backcover-page'">
                <div class="pagina-contraportada">
                  <div class="cp-interior">
                    <LogoCuadrangular :size="76" />
                    <p class="cp-titulo">FACUBIT · 2026</p>
                    <div class="cp-divisor"></div>
                    <p class="cp-subtitulo">Fundamento Cuadrangular<br>Difundiendo el Fundamento<br>en la Comunidad</p>
                  </div>
                </div>
              </template>
            </div>
          </Transition>


          <!-- ── PÁGINA DERECHA: volteo al avanzar, fade al retroceder ── -->
          <Transition :name="dir === 'forward' ? 'flip-right-forward' : 'fade-right'" mode="out-in">
            <div class="pagina pagina-der" :key="`R-${currentSpread}`">
              <template v-if="rightPage.type === 'portada'">
                <div class="pagina-cinta" style="background:linear-gradient(90deg,#B30000,#880099)">
                  <span class="cinta-num" style="color:rgba(255,255,255,.65)">Portada</span>
                  <span class="cinta-titulo" style="color:#fff">{{ sections[0].title }}</span>
                </div>
                <div class="pagina-cuerpo">
                  <ScaledContent>
                    <component :is="sections[0].component" />
                  </ScaledContent>
                </div>
                <div class="pagina-pie"><span>I</span></div>
              </template>

              <template v-else-if="rightPage.type === 'index-list'">
                <div class="pagina-cinta" style="background:#1a0a00">
                  <span class="cinta-num" style="color:rgba(244,216,120,.65)">Índice</span>
                  <span class="cinta-titulo" style="color:#f4d878">Contenidos</span>
                </div>
                <div class="pagina-cuerpo idx-cuerpo">
                  <div
                    v-for="(s, i) in sections.slice(2)" :key="s.id"
                    class="idx-fila" :class="`ic-${s.color}`"
                    @click="jumpToSection(i + 2)"
                  >
                    <span class="idx-num">{{ String(i + 3).padStart(2, '0') }}</span>
                    <span class="idx-nombre">{{ s.title }}</span>
                    <span class="idx-linea"></span>
                    <span class="idx-pag">{{ pageOf(i + 2) }}</span>
                  </div>
                </div>
                <div class="pagina-pie"><span>3</span></div>
              </template>

              <template v-else-if="rightPage.type === 'content'">
                <div class="pagina-cinta" :style="{ background: colorOf(rightPage.section.color) }">
                  <span class="cinta-num">{{ padNum(rightPage.section.idx) }}</span>
                  <span class="cinta-titulo">{{ rightPage.section.title }}</span>
                </div>
                <div class="pagina-cuerpo">
                  <ScaledContent>
                    <component :is="rightPage.section.component" />
                  </ScaledContent>
                </div>
                <div class="pagina-pie"><span>{{ rightPage.pageNum }}</span></div>
              </template>

              <template v-else-if="rightPage.type === 'endpaper'">
                <div class="endpaper-der">
                  <div class="ep-pattern"></div>
                </div>
              </template>
            </div>
          </Transition>

          <!-- ── OVERLAY DOBLE PÁGINA (cuando wide:true) ── -->
          <Transition name="fade-wide" mode="out-in">
            <div
              v-if="wideSection"
              :key="`W-${currentSpread}`"
              class="wide-overlay"
            >
              <div class="pagina-cinta" :style="{ background: colorOf(wideSection.color) }">
                <span class="cinta-num">{{ padNum(wideSection.idx) }}</span>
                <span class="cinta-titulo">{{ wideSection.title }}</span>
              </div>
              <div class="wide-cuerpo">
                <div class="wide-columns">
                  <component :is="wideSection.component" />
                </div>
              </div>
              <div class="wide-pie">
                <span>{{ wideSection.pageNum }}</span>
                <span class="wide-pie-sep"></span>
                <span>{{ wideSection.pageNum + 1 }}</span>
              </div>
            </div>
          </Transition>

        </div><!-- .libro-spread -->
      </div><!-- .libro-viewport -->

      <button class="nav-btn nav-next" :disabled="closing" @click="go(1)">&#8250;</button>
    </div>

    <!-- ══ INDICADOR ══ -->
    <div class="libro-dots">
      <button
        v-for="(sp, i) in spreads" :key="i"
        class="libro-dot" :class="{ active: i === currentSpread }"
        :title="dotLabel(sp)"
        @click="goToSpread(i)"
      ></button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import LogoCuadrangular from './LogoCuadrangular.vue'
import ScaledContent from './ScaledContent.vue'

const props = defineProps({ sections: { type: Array, required: true } })

const currentSpread = ref(0)
const dir     = ref('forward')
const closing = ref(false)
const opening = ref(false)

const colorMap = {
  rojo:    'linear-gradient(90deg,#B30000,#C82000)',
  purpura: 'linear-gradient(90deg,#880099,#AA00CC)',
  verde:   'linear-gradient(90deg,#1a7a1a,#1e8f1e)',
  azul:    'linear-gradient(90deg,#003399,#0044BB)',
  dorado:  'linear-gradient(90deg,#CC8800,#EEA800)',
  multi:   'linear-gradient(90deg,#B30000,#880099)',
}
const colorOf = c => colorMap[c] || colorMap.rojo
const padNum  = n => String(n).padStart(2, '0')

// Spreads: [endpaper+portada, index+indexRight, content pairs..., backcover+endpaper]
const spreads = computed(() => {
  const s = props.sections
  const list = []

  // spread 0: endpaper izq + portada der
  list.push({ type: 'cover' })

  // spread 1: datos institucionales izq + índice der
  list.push({ type: 'index' })

  // content spreads (sections 2..N, contraportada mostrada en spread 1 izq)
  let pg = 4
  for (let i = 2; i < s.length; ) {
    const sec = s[i]
    if (sec.wide) {
      // sección wide: ocupa ambas páginas, consume 2 números de página
      const pn = pg; pg += 2;
      list.push({ type: 'content-wide', section: { ...sec, idx: i + 1 }, pageNum: pn })
      i++
    } else if (s[i + 1] && !s[i + 1].wide) {
      list.push({ type: 'content', left: { ...sec, idx: i + 1 }, right: { ...s[i+1], idx: i + 2 }, pageL: pg++, pageR: pg++ })
      i += 2
    } else {
      list.push({ type: 'content-last', left: { ...sec, idx: i + 1 }, pageL: pg++ })
      i++
    }
  }

  // final spread: backcover izq + endpaper der
  list.push({ type: 'backcover' })
  return list
})

// Sección wide del spread actual (o null si no aplica)
const wideSection = computed(() => {
  const sp = spreads.value[currentSpread.value]
  if (sp.type === 'content-wide') return { ...sp.section, pageNum: sp.pageNum }
  return null
})

const leftPage = computed(() => {
  const sp = spreads.value[currentSpread.value]
  if (sp.type === 'cover') return { type: 'endpaper' }
  if (sp.type === 'index') return { type: 'datos' }
  if (sp.type === 'content-wide') return { type: 'endpaper' }
  if (sp.type === 'content') return { type: 'content', section: sp.left, pageNum: sp.pageL }
  if (sp.type === 'content-last') return { type: 'content', section: sp.left, pageNum: sp.pageL }
  if (sp.type === 'backcover') return { type: 'backcover-page' }
  return { type: 'endpaper' }
})

const rightPage = computed(() => {
  const sp = spreads.value[currentSpread.value]
  if (sp.type === 'cover') return { type: 'portada' }
  if (sp.type === 'index') return { type: 'index-list' }
  if (sp.type === 'content-wide') return { type: 'endpaper' }
  if (sp.type === 'content') return { type: 'content', section: sp.right, pageNum: sp.pageR }
  if (sp.type === 'content-last') return { type: 'endpaper' }
  if (sp.type === 'backcover') return { type: 'endpaper' }
  return { type: 'endpaper' }
})

const pageOf = idx => {
  if (idx === 0) return 'I'
  const sp = spreads.value.find(s =>
    (s.left && s.left.idx === idx + 1) || (s.right && s.right.idx === idx + 1))
  if (!sp) return '–'
  return sp.left?.idx === idx + 1 ? sp.pageL : sp.pageR
}

const triggerEnd = () => {
  closing.value = true
  // 650 ms cierre animado + 2 s pausa + 600 ms apertura
  setTimeout(() => {
    closing.value = false
    currentSpread.value = 0
    dir.value = 'forward'
    opening.value = true
    setTimeout(() => { opening.value = false }, 700)
  }, 2650)
}

const go = delta => {
  if (closing.value || opening.value) return
  if (delta > 0 && currentSpread.value === spreads.value.length - 1) {
    triggerEnd()
    return
  }
  dir.value = delta > 0 ? 'forward' : 'back'
  currentSpread.value = Math.max(0, Math.min(spreads.value.length - 1, currentSpread.value + delta))
}
const goToSpread = i => {
  if (closing.value || opening.value) return
  dir.value = i > currentSpread.value ? 'forward' : 'back'
  currentSpread.value = i
}
const jumpToSection = idx => {
  const sp = spreads.value.findIndex(s =>
    (s.left && s.left.idx === idx + 1) || (s.right && s.right.idx === idx + 1))
  if (sp !== -1) goToSpread(sp)
}
const dotLabel = sp => {
  if (sp.type === 'cover') return 'Portada'
  if (sp.type === 'index') return 'Índice'
  if (sp.type === 'backcover') return 'Contraportada'
  if (sp.left) return sp.left.title
  return ''
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

/* ══ WRAPPER ══ */
.libro-wrap {
  width: 100%;
  /* Sin máximo — ocupa todo el ancho disponible para presentación */
  max-width: 100%;
  margin: 0 auto;
  padding: 0 0 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
}

/* ══ MASTHEAD ══ */
.rev-masthead {
  width: 100%;
  background: #fff;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 4px solid transparent;
  border-image: linear-gradient(90deg,#B30000 25%,#003399 50%,#CC8800 75%,#880099) 1;
  box-shadow: 0 2px 10px rgba(0,0,0,.08);
}
.rev-masthead-text { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.rev-vol  { font-size: .53rem; color: #999; letter-spacing: 2px; text-transform: uppercase; }
.rev-name { font-family: 'Cinzel', serif; font-size: clamp(.72rem,2vw,.96rem); font-weight: 700; color: #1a0a00; }
.rev-page-badge {
  background: #1a0a00; color: #f4d878;
  font-family: 'Cinzel', serif; font-size: .6rem; font-weight: 700;
  padding: 4px 10px; border-radius: 20px; flex-shrink: 0; letter-spacing: 1px;
}

/* ══ ESCENA ══ */
.libro-escena {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  /* perspective a nivel de escena para que los hijos hereden */
  perspective: 2000px;
  perspective-origin: center center;
}

/* ── Botones ── */
.nav-btn {
  flex-shrink: 0;
  width: 42px; height: 62px;
  border-radius: 4px;
  border: none;
  background: rgba(255,255,255,.9);
  color: #3a2a14;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0,0,0,.15);
  display: flex; align-items: center; justify-content: center;
  transition: background .18s, transform .15s, box-shadow .18s;
  user-select: none;
}
.nav-btn:hover:not(:disabled) {
  background: #B30000; color: #fff;
  transform: scale(1.06);
  box-shadow: 0 6px 18px rgba(179,0,0,.3);
}
.nav-btn:disabled { opacity: .2; cursor: default; }

/* ── Viewport ── */
.libro-viewport {
  flex: 1;
  position: relative;
  filter: drop-shadow(0 24px 44px rgba(0,0,0,.42)) drop-shadow(0 6px 14px rgba(0,0,0,.28));
}
.libro-sombra {
  position: absolute;
  bottom: -12px; left: 10%; right: 10%; height: 16px;
  background: rgba(0,0,0,.2);
  border-radius: 50%;
  filter: blur(9px);
  z-index: -1;
}

/* ── Spread (contenedor fijo, nunca anima) ── */
.libro-spread {
  display: flex;
  align-items: stretch;
  /* Alto máximo: color-strip(6) + header(~52) + margin(8) + masthead(~56) + gap(16) + dots(24) + padding(24) ≈ 186px */
  height: calc(100vh - 186px);
  min-height: 480px;
  overflow: hidden;
  transform-style: preserve-3d;
}

/* Línea de lomo eliminada — sin spine visible */

/* ── Páginas ── */
.pagina {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  background:
    repeating-linear-gradient(
      180deg,
      transparent 0, transparent 27px,
      rgba(180,158,118,.13) 27px, rgba(180,158,118,.13) 28px
    ),
    radial-gradient(ellipse at 20% 20%, rgba(255,253,242,.95) 0%, rgba(248,242,226,1) 100%);
  position: relative;
  overflow: hidden;
  /* Sin bordes redondeados — es papel */
  border-radius: 0;
}

.pagina-izq { box-shadow: inset -12px 0 22px rgba(0,0,0,.13); }
.pagina-der { box-shadow: inset  12px 0 22px rgba(0,0,0,.13); }

/* Borde exterior de la tapa */
.pagina-izq::before {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0; width: 6px;
  background: linear-gradient(90deg, rgba(0,0,0,.18), transparent);
}
.pagina-der::after {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; width: 6px;
  background: linear-gradient(270deg, rgba(0,0,0,.18), transparent);
}

/* ── Cinta de sección ── */
.pagina-cinta {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px 7px 12px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(0,0,0,.08);
}
.cinta-num {
  font-family: 'Cinzel', serif;
  font-size: .58rem; font-weight: 900;
  color: rgba(255,255,255,.6);
  flex-shrink: 0; letter-spacing: 1px;
}
.cinta-titulo {
  font-family: 'Playfair Display', serif;
  font-size: .76rem; font-weight: 700; color: #fff;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  text-shadow: 0 1px 3px rgba(0,0,0,.35);
}

/* ── Cuerpo ── */
.pagina-cuerpo {
  flex: 1;
  padding: 10px 14px;
  /* Sin scroll: ScaledContent auto-ajusta el contenido para que quepa */
  overflow: hidden;
  /* Se necesita posición y alto explícito para que ScaledContent mida bien */
  position: relative;
  min-height: 0;
}

/* ── Pie de página ── */
.pagina-pie {
  padding: 5px 0;
  text-align: center;
  border-top: 1px solid rgba(180,155,110,.28);
  flex-shrink: 0;
}
.pagina-pie span {
  font-family: 'Cinzel', serif;
  font-size: .5rem; color: rgba(140,110,70,.55);
  letter-spacing: 2px;
}

/* ── Endpaper (guardas decorativas) ── */
.endpaper-izq, .endpaper-der {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: #1a0a00;
}
.ep-pattern {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(45deg,
      transparent 0, transparent 10px,
      rgba(244,216,120,.06) 10px, rgba(244,216,120,.06) 11px
    ),
    repeating-linear-gradient(-45deg,
      transparent 0, transparent 10px,
      rgba(244,216,120,.04) 10px, rgba(244,216,120,.04) 11px
    );
}
.ep-sello {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 12px;
}
.ep-texto {
  font-family: 'Cinzel', serif; font-size: .72rem;
  color: rgba(244,216,120,.5); letter-spacing: 4px; margin: 0;
}

/* ── Contraportada ── */
.pagina-contraportada {
  flex: 1;
  background: radial-gradient(ellipse at 50% 40%, #3a1c06 0%, #1a0a00 70%);
  display: flex;
}
.cp-interior {
  flex: 1;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 16px; padding: 30px 24px;
}
.cp-titulo {
  font-family: 'Cinzel', serif;
  font-size: .82rem; font-weight: 700;
  color: #f4d878; letter-spacing: 3px; margin: 0;
}
.cp-divisor {
  width: 50%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(244,216,120,.4), transparent);
}
.cp-subtitulo {
  font-size: .62rem; color: rgba(255,240,200,.45);
  text-align: center; line-height: 1.75; margin: 0;
}

/* ══ ÍNDICE ══ */
.idx-cuerpo {
  display: flex; flex-direction: column;
  padding: 4px 8px !important;
  height: 100%;
}
.idx-fila {
  display: flex; align-items: center; gap: 8px;
  flex: 1;
  padding: 0 6px; cursor: pointer;
  border-left: 3px solid transparent;
  border-bottom: 1px solid rgba(0,0,0,.05);
  transition: background .15s, border-color .15s;
}
.idx-fila:last-child { border-bottom: none; }
.idx-fila:hover {
  background: rgba(0,0,0,.04);
  border-left-color: currentColor;
}
.idx-num {
  font-family: 'Cinzel', serif;
  font-size: .62rem; font-weight: 900;
  min-width: 22px; flex-shrink: 0;
  padding: 2px 3px; border-radius: 3px;
  text-align: center;
}
.idx-nombre {
  font-family: 'Cinzel', serif;
  font-size: .62rem; font-weight: 600; color: #2a1a0a;
  flex: 1; min-width: 0;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.idx-linea {
  flex: 1; border-bottom: 1px dotted rgba(160,130,90,.3); min-width: 6px;
}
.idx-pag {
  font-family: 'Cinzel', serif;
  font-size: .54rem; font-weight: 700;
  color: #fff; flex-shrink: 0;
  border-radius: 50%;
  width: 18px; height: 18px;
  display: flex; align-items: center; justify-content: center;
}

/* Colores por sección */
.ic-rojo    { color: #B30000; }
.ic-purpura { color: #880099; }
.ic-verde   { color: #1a7a1a; }
.ic-azul    { color: #003399; }
.ic-dorado  { color: #CC8800; }
.ic-multi   { color: #B30000; }

.ic-rojo    .idx-num { background: rgba(179,0,0,.12); }
.ic-purpura .idx-num { background: rgba(136,0,153,.12); }
.ic-verde   .idx-num { background: rgba(26,122,26,.12); }
.ic-azul    .idx-num { background: rgba(0,51,153,.12); }
.ic-dorado  .idx-num { background: rgba(204,136,0,.12); }
.ic-multi   .idx-num { background: rgba(179,0,0,.12); }

.ic-rojo    .idx-pag { background: #B30000; }
.ic-purpura .idx-pag { background: #880099; }
.ic-verde   .idx-pag { background: #1a7a1a; }
.ic-azul    .idx-pag { background: #003399; }
.ic-dorado  .idx-pag { background: #CC8800; }
.ic-multi   .idx-pag { background: #B30000; }

.idx-cita {
  font-family: 'Playfair Display', serif; font-style: italic;
  font-size: .7rem; color: #3a2a1a; text-align: center;
  line-height: 1.65; margin: 0; padding: 0 8px;
}
.idx-foto {
  width: 100%; height: 110px; object-fit: cover;
  box-shadow: 0 4px 16px rgba(0,0,0,.25);
}
.idx-fotopie { font-size: .55rem; color: rgba(120,100,80,.7); text-align: center; }

/* ══ OVERLAY DOBLE PÁGINA ══ */
.wide-overlay {
  position: absolute;
  inset: 0;
  z-index: 8;
  display: flex;
  flex-direction: column;
  background: #faf6ef;
  /* sombra interior simulando lomo */
  box-shadow:
    inset 4px 0 10px rgba(0,0,0,.07),
    inset -4px 0 10px rgba(0,0,0,.07),
    inset 0 0 0 0 transparent;
}
.wide-cuerpo {
  flex: 1;
  overflow: hidden;
  padding: 8px 0;
  /* línea del lomo en el centro */
  background: linear-gradient(90deg,
    transparent calc(50% - 1px),
    rgba(0,0,0,.08) calc(50% - 1px),
    rgba(0,0,0,.08) calc(50% + 1px),
    transparent calc(50% + 1px)
  );
}
.wide-columns {
  height: 100%;
  padding: 0 14px;
  overflow: hidden;
}
.wide-pie {
  display: flex;
  align-items: center;
  padding: 4px 14px;
  border-top: 1px solid rgba(0,0,0,.08);
  font-family: 'Cinzel', serif;
  font-size: .55rem;
  color: #9a8060;
}
.wide-pie-sep { flex: 1; }

.fade-wide-enter-active,
.fade-wide-leave-active { transition: opacity .35s ease; }
.fade-wide-enter-from,
.fade-wide-leave-to    { opacity: 0; }

/* ══ INDICADOR ══ */
.libro-dots { display: flex; gap: 7px; flex-wrap: wrap; justify-content: center; }
.libro-dot {
  width: 7px; height: 7px; border-radius: 50%;
  border: none; background: #c8b8a0; cursor: pointer; padding: 0;
  transition: background .2s, transform .2s;
}
.libro-dot.active { background: #B30000; transform: scale(1.5); }
.libro-dot:hover:not(.active) { background: #8a7060; }

/* ══════════════════════════════════
   TRANSICIONES DE PÁGINA
   ══════════════════════════════════ */

/* ══════════════════════════════════
   TRANSICIONES DE PÁGINA
   ══════════════════════════════════ */

/* ── Izquierda avanzar: fade suave ── */
.fade-left-leave-active  { transition: opacity .25s ease; }
.fade-left-enter-active  { transition: opacity .35s ease .1s; }
.fade-left-leave-to    { opacity: 0; }
.fade-left-enter-from  { opacity: 0; }

/* ── Derecha retroceder: fade suave (espejo del fade izquierda) ── */
.fade-right-leave-active { transition: opacity .25s ease; }
.fade-right-enter-active { transition: opacity .35s ease .1s; }
.fade-right-leave-to   { opacity: 0; }
.fade-right-enter-from { opacity: 0; }

/* ── Izquierda retroceder: voltea desde el lomo derecho hacia afuera ── */
.flip-left-back-leave-active {
  animation: flipLeftOut .52s cubic-bezier(.55,.06,.68,.19) both;
  transform-origin: right center;
  position: relative; z-index: 10;
}
.flip-left-back-enter-active {
  animation: flipLeftIn .52s cubic-bezier(.25,.46,.45,.94) .05s both;
  transform-origin: right center;
  position: relative; z-index: 10;
}

@keyframes flipLeftOut {
  0%   { transform: perspective(1400px) rotateY(0deg); }
  40%  { transform: perspective(1400px) rotateY(40deg); }
  100% { transform: perspective(1400px) rotateY(90deg); opacity: 0; }
}
@keyframes flipLeftIn {
  0%   { transform: perspective(1400px) rotateY(-90deg); opacity: 0; }
  60%  { transform: perspective(1400px) rotateY(10deg); }
  80%  { transform: perspective(1400px) rotateY(-4deg); }
  100% { transform: perspective(1400px) rotateY(0deg); }
}

/* ── Derecha avanzar: voltea desde el lomo izquierdo hacia afuera ── */
.flip-right-forward-leave-active {
  animation: flipRightOut .52s cubic-bezier(.55,.06,.68,.19) both;
  transform-origin: left center;
  position: relative; z-index: 10;
}
.flip-right-forward-enter-active {
  animation: flipRightIn .52s cubic-bezier(.25,.46,.45,.94) .05s both;
  transform-origin: left center;
  position: relative; z-index: 10;
}

@keyframes flipRightOut {
  0%   { transform: perspective(1400px) rotateY(0deg); }
  40%  { transform: perspective(1400px) rotateY(-40deg); }
  100% { transform: perspective(1400px) rotateY(-90deg); opacity: 0; }
}
@keyframes flipRightIn {
  0%   { transform: perspective(1400px) rotateY(90deg); opacity: 0; }
  60%  { transform: perspective(1400px) rotateY(-10deg); }
  80%  { transform: perspective(1400px) rotateY(4deg); }
  100% { transform: perspective(1400px) rotateY(0deg); }
}

/* ══ CIERRE DEL LIBRO ══
   La página izquierda se cierra hacia la derecha (encima de la derecha),
   como cuando se cierra un libro de verdad.
   ══════════════════════════════════════════════════════════════ */
.libro-closing .pagina-izq {
  animation: cierreIzq .65s cubic-bezier(.55,.06,.68,.19) both;
  transform-origin: right center;
  z-index: 5;
  position: relative;
}
.libro-closing .pagina-der {
  animation: cierreDer .4s ease both;
}

@keyframes cierreIzq {
  0%   { transform: perspective(1600px) rotateY(0deg);    opacity: 1; }
  60%  { transform: perspective(1600px) rotateY(-60deg);  opacity: 1; }
  100% { transform: perspective(1600px) rotateY(-90deg);  opacity: 0; }
}
@keyframes cierreDer {
  0%   { opacity: 1; }
  60%  { opacity: 1; }
  100% { opacity: 0; }
}

/* Reapertura: la portada (página derecha) se despliega desde el centro */
.libro-opening .pagina-izq {
  animation: abrirIzq .6s cubic-bezier(.25,.46,.45,.94) .1s both;
  transform-origin: right center;
}
.libro-opening .pagina-der {
  animation: abrirDer .6s cubic-bezier(.25,.46,.45,.94) .2s both;
  transform-origin: left center;
}

@keyframes abrirIzq {
  0%   { transform: perspective(1600px) rotateY(-90deg); opacity: 0; }
  65%  { transform: perspective(1600px) rotateY(5deg); }
  82%  { transform: perspective(1600px) rotateY(-2deg); }
  100% { transform: perspective(1600px) rotateY(0deg); opacity: 1; }
}
@keyframes abrirDer {
  0%   { transform: perspective(1600px) rotateY(90deg); opacity: 0; }
  65%  { transform: perspective(1600px) rotateY(-5deg); }
  82%  { transform: perspective(1600px) rotateY(2deg); }
  100% { transform: perspective(1600px) rotateY(0deg); opacity: 1; }
}

/* ══ PRESENTACIÓN: compresión de espaciado + fuentes legibles ══
   :deep() penetra los scoped styles de los paneles hijos.
   El objetivo es reducir el alto natural del contenido para que
   ScaledContent pueda AMPLIAR (no reducir) y todo sea legible.
   ══════════════════════════════════════════════════════════════ */

/* ── Contenedores raíz de cada panel ── */
.pagina-cuerpo :deep(.portada),
.pagina-cuerpo :deep(.himno-panel),
.pagina-cuerpo :deep(.ezequiel),
.pagina-cuerpo :deep(.simbolos),
.pagina-cuerpo :deep([class$="-panel"]),
.pagina-cuerpo :deep([class$="-wrap"]) {
  gap: 8px !important;
}

/* ── PanelPortada ── */
.pagina-cuerpo :deep(.inst-block)       { padding: 8px 12px !important; gap: 5px !important; }
.pagina-cuerpo :deep(.titulo-block)     { padding: 10px 14px !important; gap: 3px !important; }
.pagina-cuerpo :deep(.verse)            { padding: 6px 10px !important; margin: 0 !important; }
.pagina-cuerpo :deep(.iglesia-img-wrap) { height: 72px !important; }
.pagina-cuerpo :deep(.iglesias-grid)    { gap: 6px !important; }
.pagina-cuerpo :deep(.iglesia-caption)  { padding: 4px 8px !important; }
.pagina-cuerpo :deep(.doctrinas-row)    { gap: 4px !important; }
.pagina-cuerpo :deep(.doctrina-pill)    { padding: 3px 10px !important; }

/* ── PanelEzequiel / PanelSimbolos (grids de tarjetas) ── */
.pagina-cuerpo :deep(.rostros-grid),
.pagina-cuerpo :deep(.sim-grid)         { gap: 6px !important; }
.pagina-cuerpo :deep(.rostro-img-wrap),
.pagina-cuerpo :deep(.sim-img-wrap)     { height: 64px !important; }
.pagina-cuerpo :deep(.rostro-body),
.pagina-cuerpo :deep(.sim-body)         { padding: 6px 8px !important; }
.pagina-cuerpo :deep(.rostro-body p),
.pagina-cuerpo :deep(.sim-body p)       { margin: 0 0 3px !important; }
.pagina-cuerpo :deep(.cuadro-sintetico) { display: none !important; } /* quita barra resumen redundante */

/* ── PanelHimno (estrofas) ── */
.pagina-cuerpo :deep(.estrofas)         { gap: 5px !important; }
.pagina-cuerpo :deep(.est-img)          { width: 34px !important; height: 34px !important; }
.pagina-cuerpo :deep(.est-letra)        { padding: 5px 7px !important; }
.pagina-cuerpo :deep(.coro-card)        { padding: 8px !important; }
.pagina-cuerpo :deep(.himno-header)     { height: 64px !important; }
.pagina-cuerpo :deep(.himno-nota)       { padding: 5px 8px !important; }

/* ── PanelAimee (biografía) ── */
.pagina-cuerpo :deep(.bio-foto-wrap)    { width: 72px !important; height: 90px !important; }
.pagina-cuerpo :deep(.hito)             { gap: 5px !important; padding: 5px 0 !important; }
.pagina-cuerpo :deep(.hitos-list)       { gap: 3px !important; }
.pagina-cuerpo :deep(.stat-grid)        { gap: 6px !important; }
.pagina-cuerpo :deep(.stat-item)        { padding: 5px !important; }

/* ── Fuentes mínimas de presentación ── */
.pagina-cuerpo :deep(p)                 { font-size: max(0.72rem, 1em) !important; line-height: 1.45 !important; margin: 0 0 4px !important; }
.pagina-cuerpo :deep(h4)               { font-size: max(0.82rem, 1em) !important; margin: 0 0 4px !important; }
.pagina-cuerpo :deep(blockquote)        { font-size: max(0.74rem, 1em) !important; line-height: 1.5 !important; }
.pagina-cuerpo :deep(.est-letra)        { font-size: max(0.65rem, 1em) !important; }

/* ══ RESPONSIVE ══ */
@media (max-width: 620px) {
  .libro-spread { flex-direction: column; min-height: unset; }
  .lomo { width: 100%; height: 10px; }
  .nav-btn { width: 34px; height: 48px; font-size: 1.6rem; }
}
</style>
