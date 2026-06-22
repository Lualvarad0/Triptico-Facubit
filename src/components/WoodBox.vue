<template>
  <div class="palm-scene" ref="sceneRef">

    <!-- Indicador visual "de mano" -->
    <div class="palm-hint">
      <span class="hint-line"></span>
      <span>Edición de bolsillo · despliega cada carilla</span>
      <span class="hint-line"></span>
    </div>

    <!-- ══ CAJA DE MADERA ══ -->
    <div class="wood-box" :class="{ 'is-open': isOpen }" ref="boxRef">

      <!-- TAPA: contiene fachada (visible) y la hoja trasera (invisible al abrir) -->
      <div class="box-lid" ref="lidRef">

        <!-- Bisagras -->
        <div class="hinge hinge-l"></div>
        <div class="hinge hinge-r"></div>

        <!-- Fachada de la tapa (se desvanece antes de que gire) -->
        <div class="lid-face" ref="lidFaceRef">
          <div class="lid-clasp lid-clasp-l"><span></span></div>
          <div class="lid-center-content">
            <LogoCuadrangular :size="56" />
            <p class="lid-title">Fundamento Cuadrangular</p>
            <p class="lid-sub">FACUBIT · 2026</p>
          </div>
          <div class="lid-clasp lid-clasp-r"><span></span></div>
        </div>

        <!-- Parte trasera (madera vacía, visible cuando la tapa está abierta) -->
        <div class="lid-back-face"></div>
      </div>

      <!-- Grosor del borde de la tapa -->
      <div class="lid-depth"></div>

      <!-- CUERPO INFERIOR -->
      <div class="box-body">
        <div class="box-inside">
          <div class="inside-ribbon"></div>
        </div>
        <button class="open-btn" ref="btnRef" @click="handleToggle">
          <span class="btn-mark">{{ isOpen ? '−' : '+' }}</span>
          <span>{{ isOpen ? 'Guardar en la caja' : 'Desplegar acordeón' }}</span>
        </button>
      </div>

    </div><!-- /wood-box -->

    <!-- ══ HOJAS DEL ACORDEÓN ══ -->
    <div class="leaves-wrap" ref="leavesRef">
      <div
        v-for="(sec, i) in sections"
        :key="sec.id"
        class="leaf"
        :class="[`lf-${sec.color}`, { 'lf-open': activeIndex === i }, i%2===1?'leaf-alt':'']"
        :ref="el => { if(el) leafEls[i]=el }"
      >
        <!-- Crease superior -->
        <div class="crease crease-top"></div>

        <!-- Cabecera -->
        <button class="lf-head" @click="toggleLeaf(i)">
          <span class="lf-num">{{ String(i+1).padStart(2,'0') }}</span>
          <span class="lf-photo">
            <img :src="sec.image" :alt="sec.title" loading="lazy" />
          </span>
          <span class="lf-text">
            <b class="lf-title">{{ sec.title }}</b>
            <small class="lf-sub">{{ sec.subtitle }}</small>
          </span>
          <span class="lf-action" :class="{ rotated: activeIndex===i }">{{ activeIndex===i ? '−' : '+' }}</span>
        </button>

        <!-- Cuerpo expandible -->
        <div class="lf-body" :ref="el => { if(el) bodyEls[i]=el }">
          <div class="lf-inner" :ref="el => { if(el) innerEls[i]=el }">
            <div class="lf-content">
              <component :is="sec.component" />
            </div>
          </div>
        </div>

        <!-- Crease inferior -->
        <div class="crease crease-bot"></div>
      </div>
    </div>

  </div><!-- /palm-scene -->
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import LogoCuadrangular from './LogoCuadrangular.vue'

defineProps({ sections: { type: Array, required: true } })

/* refs DOM */
const sceneRef  = ref(null)
const boxRef    = ref(null)
const lidRef    = ref(null)
const lidFaceRef= ref(null)
const btnRef    = ref(null)
const leavesRef = ref(null)
const leafEls   = ref([])
const bodyEls   = ref([])
const innerEls  = ref([])

const isOpen      = ref(true)   // abierto por defecto
const activeIndex = ref(null)

/* ── Mapa de colores ── */
const colorMap = {
  rojo: '#B30000', purpura: '#880099', verde: '#1a7a1a',
  azul: '#003399', dorado: '#CC8800', multi: '#B30000'
}
function sectionColor(c) { return colorMap[c] || '#B30000' }

/* ══════════════════════════════════════
   TILT DE MOUSE (efecto "en la mano")
══════════════════════════════════════ */
function onMouseMove(e) {
  if (!sceneRef.value) return
  const r  = sceneRef.value.getBoundingClientRect()
  const cx = r.left + r.width  / 2
  const cy = r.top  + r.height / 2
  const rx = ((e.clientY - cy) / r.height) * -10
  const ry = ((e.clientX - cx) / r.width ) *  10
  gsap.to(boxRef.value, { rotateX: rx, rotateY: ry, duration: 0.6, ease: 'power2.out' })
}
function onMouseLeave() {
  gsap.to(boxRef.value, { rotateX: 4, rotateY: 0, duration: 0.8, ease: 'elastic.out(1,0.5)' })
}

/* ══════════════════════════════════════
   APERTURA / CIERRE DE CAJA
══════════════════════════════════════ */
function handleToggle() { isOpen.value ? closeBox() : openBox() }

function openBox() {
  isOpen.value = true
  const leaves = leafEls.value.filter(Boolean)
  const tl = gsap.timeline()

  tl.to(lidFaceRef.value, { opacity: 0, duration: 0.2, ease: 'power2.in' })
    .to(lidRef.value, { rotateX: -105, transformOrigin: 'top center', duration: 0.7, ease: 'power3.inOut' }, '-=0.05')

  if (leaves.length) {
    tl.fromTo(leaves,
      { scaleY: 0.05, opacity: 0, y: -24, transformOrigin: 'top center' },
      { scaleY: 1, opacity: 1, y: 0,
        stagger: { each: 0.07, ease: 'power1.in' },
        duration: 0.5, ease: 'back.out(1.3)'
      }, '-=0.15')
  }
}

function closeBox() {
  const leaves = leafEls.value.filter(Boolean)
  const tl = gsap.timeline({
    onComplete: () => { isOpen.value = false; activeIndex.value = null }
  })

  if (activeIndex.value !== null) collapseLeaf(activeIndex.value)

  if (leaves.length) {
    tl.to([...leaves].reverse(), {
      scaleY: 0.05, opacity: 0, y: -20,
      transformOrigin: 'top center',
      stagger: { each: 0.05 },
      duration: 0.28, ease: 'power2.in',
    })
  }

  tl.to(lidRef.value, { rotateX: 0, transformOrigin: 'top center', duration: 0.6, ease: 'power3.inOut' })
    .to(lidFaceRef.value, { opacity: 1, duration: 0.3, ease: 'power2.out' }, '-=0.2')
}

/* ══════════════════════════════════════
   ABRIR / CERRAR HOJA
══════════════════════════════════════ */
function toggleLeaf(i) {
  if (activeIndex.value === i) {
    collapseLeaf(i); activeIndex.value = null
  } else {
    if (activeIndex.value !== null) collapseLeaf(activeIndex.value)
    activeIndex.value = i
    expandLeaf(i)
  }
}

function expandLeaf(i) {
  const body  = bodyEls.value[i]
  const inner = innerEls.value[i]
  if (!body || !inner) return
  gsap.fromTo(body,
    { maxHeight: 0, opacity: 0 },
    { maxHeight: inner.scrollHeight + 'px', opacity: 1, duration: 0.42, ease: 'power2.out' }
  )
  // Micro-bounce en la hoja
  gsap.fromTo(leafEls.value[i],
    { x: -3 },
    { x: 0, duration: 0.35, ease: 'elastic.out(2, 0.5)' }
  )
}

function collapseLeaf(i) {
  const body = bodyEls.value[i]
  if (!body) return
  gsap.to(body, { maxHeight: 0, opacity: 0, duration: 0.3, ease: 'power2.in' })
}

/* ══════════════════════════════════════
   ANIMACIÓN DE ENTRADA + IDLE
══════════════════════════════════════ */
onMounted(async () => {
  await nextTick()

  const leaves = leafEls.value.filter(Boolean)
  const bodies = bodyEls.value.filter(Boolean)

  // Ocultar cuerpos de hoja (colapsados) vía GSAP
  bodies.forEach(b => gsap.set(b, { maxHeight: 0, opacity: 0 }))

  // Entrada de la caja
  gsap.from(boxRef.value, {
    y: 40, opacity: 0, scale: 0.92,
    duration: 0.9, ease: 'back.out(1.3)', delay: 0.1
  })

  // Tapa girada (ya abierta)
  gsap.set(lidRef.value, { rotateX: -105, transformOrigin: 'top center' })
  gsap.set(lidFaceRef.value, { opacity: 0 })

  // Hojas entran escalonadas con spring
  if (leaves.length) {
    gsap.fromTo(leaves,
      { scaleY: 0.05, opacity: 0, y: -24, transformOrigin: 'top center' },
      { scaleY: 1, opacity: 1, y: 0,
        stagger: { each: 0.06, ease: 'power1.in' },
        duration: 0.5, ease: 'back.out(1.3)', delay: 0.5
      }
    )
  }

  // Respiración idle de la caja
  gsap.to(boxRef.value, {
    y: '-=4', duration: 2.5, repeat: -1, yoyo: true,
    ease: 'sine.inOut', delay: 1.2,
  })

  sceneRef.value?.addEventListener('mousemove', onMouseMove)
  sceneRef.value?.addEventListener('mouseleave', onMouseLeave)
})

onUnmounted(() => {
  sceneRef.value?.removeEventListener('mousemove', onMouseMove)
  sceneRef.value?.removeEventListener('mouseleave', onMouseLeave)
})
</script>

<style scoped>
/* ══════════════════════════════════════
   ESCENA CENTRAL
══════════════════════════════════════ */
.palm-scene {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 0 16px 80px;
  perspective: 1000px;
  perspective-origin: 50% 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.palm-hint {
  text-align: center;
  font-size: .58rem;
  color: #8d6d51;
  letter-spacing: .18em;
  text-transform: uppercase;
  margin-bottom: 8px;
  opacity: .82;
  display: flex; align-items: center; justify-content: center; gap: 5px;
}
.hint-line { width:34px; height:1px; background:currentColor; opacity:.45; }

/* ══════════════════════════════════════
   CAJA DE MADERA
══════════════════════════════════════ */
.wood-box {
  width: min(100%, 590px);
  border-radius: 20px;
  filter:
    drop-shadow(0 28px 42px rgba(40,15,0,.28))
    drop-shadow(0 5px 10px rgba(40,15,0,.18));
  transform-style: preserve-3d;
}

/* ══ TAPA ══ */
.box-lid {
  position: relative;
  transform-origin: top center;
  /* La rotación la maneja GSAP */
}

.lid-face {
  background:
    repeating-linear-gradient(
      172deg,
      transparent 0,  transparent 9px,
      rgba(0,0,0,.05) 9px,  rgba(0,0,0,.05) 10px,
      transparent 10px, transparent 22px,
      rgba(255,255,255,.07) 22px, rgba(255,255,255,.07) 23px
    ),
    linear-gradient(180deg,
      #D4924E 0%, #B87030 18%, #C8883C 36%,
      #A86020 52%, #C07830 68%, #C8884A 100%
    );
  border: 3px solid #8B5018;
  border-bottom: 2px solid #6A3C10;
  border-radius: 20px 20px 0 0;
  padding: 24px 22px 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 14px;
  min-height: 106px;
  box-shadow:
    inset 0 3px 10px rgba(255,180,80,.2),
    inset 0 -6px 16px rgba(60,20,0,.3);
}

/* Parte trasera de la tapa (madera, sin texto) */
.lid-back-face {
  position: absolute;
  inset: 0; border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, #7A4A18, #5A3010, #6A3C18);
  backface-visibility: visible;
  z-index: -1;
  border: 3px solid #5A3010;
}

/* Bisagras */
.hinge {
  position: absolute; top: -5px; z-index: 5;
  width: 26px; height: 14px;
  background: linear-gradient(180deg, #CCC 0%, #888 45%, #CCC 70%);
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,.5), inset 0 1px 2px rgba(255,255,255,.4);
}
.hinge-l { left: 50px; }
.hinge-r { right: 50px; }

/* Clasps dorados */
.lid-clasp {
  width: 30px; height: 50px; flex-shrink: 0;
  background: linear-gradient(160deg, #E8C84A, #9A7010, #E8C84A, #B89020);
  border-radius: 4px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,.45), inset 0 1px 3px rgba(255,220,80,.5);
}
.lid-clasp span {
  display: block; width: 5px; height: 24px;
  background: linear-gradient(180deg, #FFE066, #AA8800, #FFE066);
  border-radius: 3px;
}

/* Centro de la tapa */
.lid-center-content {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; gap: 8px;
}
.lid-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(.7rem, 2vw, .9rem);
  font-weight: 700; color: #FFF3DC;
  text-transform: uppercase; letter-spacing: 2px;
  text-shadow: 0 1px 4px rgba(0,0,0,.6);
  margin: 0;
}
.lid-sub {
  font-size: .58rem; color: rgba(255,240,200,.65);
  letter-spacing: 3px; text-transform: uppercase;
  margin: 0;
}
.lid-logo {
  width: 60px; height: 60px; object-fit: contain;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,.5));
}

/* Grosor / canto de tapa */
.lid-depth {
  height: 7px;
  background: linear-gradient(180deg, #5A3008, #3A1C04);
  border-left: 3px solid #8B5018;
  border-right: 3px solid #8B5018;
}

/* ══ CUERPO INFERIOR ══ */
.box-body {
  background:
    repeating-linear-gradient(
      172deg,
      transparent 0, transparent 10px,
      rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 11px
    ),
    linear-gradient(180deg, #9B6228, #7A4A14, #8B5820, #7A4A14);
  border: 3px solid #8B5018; border-top: none;
  border-radius: 0 0 12px 12px;
  padding: 10px 20px 16px;
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  box-shadow: inset 0 6px 14px rgba(0,0,0,.4);
}
.box-inside {
  width: 100%; height: 16px;
  background: linear-gradient(180deg, #2A1005, #1A0800);
  border-radius: 3px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: inset 0 4px 10px rgba(0,0,0,.7);
}
.inside-ribbon {
  width: 44%; height: 3px;
  background: linear-gradient(90deg, #B30000 25%, #CC8800 50%, #003399 75%, #880099 100%);
  border-radius: 2px;
}
.open-btn {
  padding: 9px 18px 9px 10px;
  background: #f4d878;
  color: #3A1C04; border: 1px solid #8B7010;
  border-radius: 999px; cursor: pointer;
  font-family: 'Lato', sans-serif; font-size: .64rem;
  font-weight: 900; letter-spacing: .13em; text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(0,0,0,.28);
  display: flex; align-items: center; gap: 7px;
  transition: background .2s;
}
.open-btn:hover { background: linear-gradient(135deg, #FFD84A, #E0B820); }
.btn-mark {
  width:25px; height:25px; border-radius:50%; display:grid; place-items:center;
  background:#3a210c; color:#f8dc80; font:700 1rem/1 Georgia,serif;
}

/* ══════════════════════════════════════
   HOJAS / CARDS DEL ACORDEÓN
══════════════════════════════════════ */
.leaves-wrap {
  display: flex; flex-direction: column;
  width: min(100%, 650px);
  gap: 0;
  padding-top: 0;
  margin-top:-3px;
  position:relative;
  z-index:4;
}

/* Conector visual caja → hojas */
.leaves-wrap::before {
  content: '';
  display: block; width:78%; height:18px;
  background:linear-gradient(180deg,#2a1207,#563015);
  border-radius:0 0 9px 9px;
  margin:0 auto -1px;
  box-shadow:inset 0 5px 9px rgba(0,0,0,.5);
}

/* Colores por sección */
.lf-rojo    { --lc: #B30000; --lc2: #E03300; }
.lf-purpura { --lc: #880099; --lc2: #AA00CC; }
.lf-verde   { --lc: #1a7a1a; --lc2: #228B22; }
.lf-azul    { --lc: #003399; --lc2: #1155CC; }
.lf-dorado  { --lc: #CC8800; --lc2: #EEA800; }
.lf-multi   { --lc: #880099; --lc2: #003399; }

/* Card principal */
.leaf {
  position: relative;
  background:
    linear-gradient(90deg, rgba(82,54,29,.025) 1px, transparent 1px),
    #fffdf7;
  background-size:24px 100%;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 8px 18px rgba(64,39,20,.08);
  border: 1px solid #ddd1c0;
  border-top:0;
  transition: box-shadow .3s, transform .3s;
}
.leaf:hover {
  box-shadow: 0 10px 28px rgba(64,39,20,.14);
  transform: translateX(3px);
}
.leaf.lf-open {
  box-shadow: 0 18px 40px rgba(64,39,20,.18);
  border-color: var(--lc, #B30000);
  transform: translateX(0);
}
.leaf:nth-child(even) { transform-origin:top center; background-color:#fbf7ee; }
.leaf:nth-child(even):not(.lf-open) .lf-head { box-shadow:inset 0 13px 18px rgba(80,50,25,.025); }
.leaf:first-of-type { border-radius:10px 10px 0 0; border-top:1px solid #ddd1c0; }
.leaf:last-child { border-radius:0 0 14px 14px; }

/* Cabecera con gradiente de color */
.lf-head {
  display: flex; align-items: center; gap: 12px;
  width: 100%; padding: 10px 17px 10px 12px;
  border: none; cursor: pointer; text-align: left;
  background: transparent;
  position: relative; overflow: hidden;
  transition: background .2s;
}
.lf-head::before {
  content: '';
  position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  background: linear-gradient(180deg, var(--lc), var(--lc2));
  border-radius: 0;
}
.lf-open .lf-head {
  background: linear-gradient(90deg, rgba(0,0,0,.03), transparent 60%);
}
.lf-head:hover { background: #fafafa; }

/* Número */
.lf-num {
  font-family: 'Cinzel', serif;
  font-size: .64rem; font-weight: 900; line-height: 1;
  min-width: 24px; color: #7a6553;
  opacity: .72; transition: opacity .3s;
  letter-spacing: .08em;
}
.lf-open .lf-num { opacity: .8; }

/* Miniatura fotográfica: cada carilla se reconoce por una imagen */
.lf-photo {
  width:64px; height:48px; border-radius:6px; overflow:hidden; flex-shrink:0;
  box-shadow:0 3px 9px rgba(43,27,15,.22); position:relative;
}
.lf-photo::after { content:''; position:absolute; inset:0; box-shadow:inset 0 0 0 1px rgba(255,255,255,.28); }
.lf-photo img { width:100%; height:100%; display:block; object-fit:cover; filter:saturate(.82) contrast(1.04); transition:transform .5s,filter .4s; }
.lf-open .lf-photo img,.lf-head:hover .lf-photo img { transform:scale(1.08); filter:saturate(1) contrast(1.06); }

/* Texto */
.lf-text { flex: 1; display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.lf-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(.86rem, 2vw, 1.03rem);
  font-weight: 700; color: #2a1a0a;
  transition: color .3s;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.lf-open .lf-title { color: var(--lc, #B30000); }
.lf-sub {
  font-size: .58rem; color: #9A8070; letter-spacing: .06em;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* Acción tipográfica, sin iconografía */
.lf-action {
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: #F0EBE2; color: #C0B0A0;
  font:400 1.1rem/1 Georgia,serif; flex-shrink: 0;
  border: 1.5px solid #E0D8CC;
  transition: background .3s, color .3s, transform .35s, border-color .3s;
}
.lf-open .lf-action {
  background: var(--lc, #B30000); color: #fff;
  border-color: var(--lc, #B30000);
}
.lf-action.rotated { transform: rotate(180deg); }

/* Crease (doblez entre hojas — ahora solo separación) */
.crease { display: none; }

/* Cuerpo expandible */
.lf-body { overflow: hidden; max-height: 0; opacity: 0; }

.lf-inner {
  border-top: 2px solid var(--lc, #B30000);
}
.lf-content {
  padding: 22px 24px 28px;
  background:linear-gradient(180deg,#fffdf8,#faf5eb);
}

@media (max-width:560px) {
  .palm-scene { padding-inline:10px; }
  .lf-head { gap:9px; padding-inline:10px 12px; }
  .lf-photo { width:54px; height:43px; }
  .lf-sub { display:none; }
  .lf-content { padding:17px 14px 22px; }
}
</style>
