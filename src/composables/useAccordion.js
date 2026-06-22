import { ref } from 'vue'
import anime from 'animejs'

/**
 * Composable: lógica del acordeón cuadrangular.
 * Solo una sección abierta a la vez.
 */
export function useAccordion() {
  const openIndex = ref(null)

  function toggle(index) {
    const closing = openIndex.value === index

    // Animar flecha hacia arriba si se cierra
    if (closing) {
      openIndex.value = null
      return
    }

    openIndex.value = index

    // Animar tarjetas internas al abrir
    setTimeout(() => {
      const cards = document.querySelectorAll(
        `#acc-body-${index} .bio-card,
         #acc-body-${index} .rostro-card,
         #acc-body-${index} .sim-card,
         #acc-body-${index} .doc-card`
      )
      if (cards.length) {
        anime({
          targets: cards,
          opacity: [0, 1],
          scale: [0.92, 1],
          delay: anime.stagger(60),
          duration: 380,
          easing: 'easeOutBack'
        })
      }

      // Scroll suave hacia el ítem
      const el = document.getElementById(`acc-item-${index}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  function isOpen(index) {
    return openIndex.value === index
  }

  return { openIndex, toggle, isOpen }
}
