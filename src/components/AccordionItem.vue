<template>
  <div class="acc-item" :class="[`theme-${color}`, { 'is-open': isOpen }]" :id="`acc-item-${index}`">

    <!-- ── Cabecera clickeable ── -->
    <button class="acc-header" @click="$emit('toggle', index)" :aria-expanded="isOpen">

      <!-- Número -->
      <span class="acc-num">{{ String(index + 1).padStart(2, '0') }}</span>

      <!-- Icono circular -->
      <span class="acc-icon-wrap">
        <i :class="icon"></i>
      </span>

      <!-- Títulos -->
      <span class="acc-texts">
        <span class="acc-title">{{ title }}</span>
        <span class="acc-sub">{{ subtitle }}</span>
      </span>

      <!-- Indicador de estado -->
      <span class="acc-chevron">
        <i class="fas fa-chevron-down"></i>
      </span>

    </button>

    <!-- ── Cuerpo colapsable con animación de altura ── -->
    <div class="acc-body-wrap" ref="bodyWrap">
      <div class="acc-body" ref="bodyInner">
        <div class="acc-content">
          <slot />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'

const props = defineProps({
  index:    { type: Number, required: true },
  isOpen:   { type: Boolean, default: false },
  title:    { type: String, required: true },
  subtitle: { type: String, default: '' },
  icon:     { type: String, default: 'fas fa-circle' },
  color:    { type: String, default: 'rojo' }
})
defineEmits(['toggle'])

const bodyWrap  = ref(null)
const bodyInner = ref(null)

function applyHeight() {
  if (!bodyWrap.value || !bodyInner.value) return
  if (props.isOpen) {
    bodyWrap.value.style.maxHeight = bodyInner.value.scrollHeight + 'px'
  } else {
    bodyWrap.value.style.maxHeight = '0px'
  }
}

watch(() => props.isOpen, async () => {
  await nextTick()
  applyHeight()
})

onMounted(() => {
  if (bodyWrap.value) bodyWrap.value.style.maxHeight = '0px'
  if (props.isOpen) applyHeight()
})
</script>

<style scoped>
/* ══════════════════════════════════════════════
   ACORDEÓN — contenedor principal
══════════════════════════════════════════════ */
.acc-item {
  border-radius: 10px;
  overflow: hidden;
  border: 1.5px solid #e5e5e5;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,.07);
  transition: box-shadow .3s, border-color .3s;
}
.acc-item.is-open {
  box-shadow: 0 6px 28px rgba(0,0,0,.14);
}

/* ══════════════════════════════════════════════
   CABECERA
══════════════════════════════════════════════ */
.acc-header {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 15px 18px;
  border: none;
  background: #fff;
  cursor: pointer;
  text-align: left;
  transition: background .25s;
  position: relative;
}

/* Línea lateral de color al abrir */
.acc-header::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  border-radius: 10px 0 0 0;
  opacity: 0;
  transition: opacity .3s, width .3s;
}
.acc-item.is-open .acc-header::before { opacity: 1; }

.acc-header:hover { background: #fafafa; }
.acc-item.is-open .acc-header { background: #fafafa; }

/* ── Número ── */
.acc-num {
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  font-weight: 900;
  line-height: 1;
  min-width: 36px;
  transition: color .3s;
  color: #d0d0d0;
}
.acc-item.is-open .acc-num { color: var(--acc-color); }

/* ── Icono circular ── */
.acc-icon-wrap {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  background: #f0f0f0;
  color: #999;
  transition: background .3s, color .3s, transform .3s;
}
.acc-item.is-open .acc-icon-wrap {
  background: var(--acc-color);
  color: #fff;
  transform: scale(1.1);
}

/* ── Textos ── */
.acc-texts {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.acc-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(.82rem, 2.3vw, 1rem);
  font-weight: 700;
  color: #333;
  line-height: 1.2;
  transition: color .3s;
}
.acc-item.is-open .acc-title { color: var(--acc-color); }

.acc-sub {
  font-family: 'Lato', sans-serif;
  font-size: .7rem;
  color: #999;
  letter-spacing: .5px;
  line-height: 1.3;
}

/* ── Flecha ── */
.acc-chevron {
  width: 30px; height: 30px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: #f0f0f0;
  color: #bbb;
  font-size: .78rem;
  flex-shrink: 0;
  transition: background .3s, color .3s, transform .35s;
}
.acc-item.is-open .acc-chevron {
  background: var(--acc-color);
  color: #fff;
  transform: rotate(180deg);
}

/* ══════════════════════════════════════════════
   CUERPO — animación con max-height
══════════════════════════════════════════════ */
.acc-body-wrap {
  max-height: 0;
  overflow: hidden;
  transition: max-height .45s cubic-bezier(.4,0,.2,1);
}

.acc-body {
  border-top: 2px solid var(--acc-color);
}

.acc-content {
  padding: 24px 22px 26px;
}

/* ══════════════════════════════════════════════
   TEMAS DE COLOR (variable CSS por ítem)
══════════════════════════════════════════════ */
.theme-rojo    { --acc-color: #B30000; }
.theme-purpura { --acc-color: #880099; }
.theme-verde   { --acc-color: #1a7a1a; }
.theme-azul    { --acc-color: #003399; }
.theme-dorado  { --acc-color: #CC8800; }
.theme-multi   { --acc-color: #B30000; }

/* Borde lateral por tema */
.theme-rojo    .acc-header::before { background: #B30000; }
.theme-purpura .acc-header::before { background: #880099; }
.theme-verde   .acc-header::before { background: #1a7a1a; }
.theme-azul    .acc-header::before { background: #003399; }
.theme-dorado  .acc-header::before { background: #CC8800; }
.theme-multi   .acc-header::before {
  background: linear-gradient(180deg, #B30000, #003399, #CC8800, #880099);
}

/* ══════════════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════════════ */
@media (max-width: 480px) {
  .acc-header { gap: 10px; padding: 13px 14px; }
  .acc-num    { font-size: 1.1rem; min-width: 28px; }
  .acc-icon-wrap { width: 34px; height: 34px; font-size: .88rem; }
  .acc-content { padding: 16px 14px 20px; }
}
</style>
