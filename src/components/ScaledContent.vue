<template>
  <!-- Contenedor externo: tamaño real del espacio disponible -->
  <div ref="outerEl" class="sc-outer">
    <!-- Contenedor interno: se escala para caber, luego su ancho compensa -->
    <div ref="innerEl" class="sc-inner" :style="innerStyle">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  /**
   * Escala objetivo cuando el contenido cabe de sobra.
   * 1.25 = 25% más grande que el tamaño original (mejor legibilidad).
   */
  targetScale: { type: Number, default: 1.45 },
})

const outerEl = ref(null)
const innerEl = ref(null)
const scale   = ref(1)

const innerStyle = computed(() => {
  const w = outerEl.value ? outerEl.value.clientWidth / scale.value : null
  return {
    transform:       `scale(${scale.value})`,
    transformOrigin: 'top left',
    // Ajustar el ancho para que después del scale ocupe exactamente el outer
    width: w ? `${w}px` : '100%',
  }
})

function recalc() {
  if (!outerEl.value || !innerEl.value) return
  // Medir en escala 1 para saber el tamaño natural del contenido
  scale.value = 1

  nextTick(() => {
    const oh = outerEl.value.clientHeight
    const ih = innerEl.value.scrollHeight
    if (!ih || !oh) return

    // Escala máxima que cabe en la altura disponible
    const fitScale = oh / ih
    // Usar el mínimo entre el objetivo y lo que cabe
    scale.value = Math.min(props.targetScale, fitScale)
  })
}

let ro = null
onMounted(() => {
  ro = new ResizeObserver(recalc)
  ro.observe(outerEl.value)
  recalc()
})
onUnmounted(() => ro?.disconnect())
</script>

<style scoped>
.sc-outer {
  width: 100%;
  height: 100%;
  overflow: hidden;   /* Sin scroll — todo debe caber */
  position: relative;
}
.sc-inner {
  position: absolute;
  top: 0;
  left: 0;
  /* El ancho se calcula en JS; height es natural del contenido */
}
</style>
