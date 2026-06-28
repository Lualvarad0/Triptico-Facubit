<template>
  <div class="fe-extra">

    <div class="fe-header">
      <span class="fe-eyebrow">16 Artículos Fundamentales</span>
      <h2 class="fe-titulo">Declaración de Fe</h2>
      <span class="fe-pag">Página 2 · Art. 09 – 16</span>
    </div>

    <div class="fe-grid">
      <div
        v-for="a in articulos"
        :key="a.num"
        class="fe-card"
        :style="{'--cc': a.color, '--cl': a.light}"
      >
        <div class="fc-num">{{ String(a.num).padStart(2,'0') }}</div>
        <div class="fc-content">
          <p class="fc-titulo">{{ a.titulo }}</p>
          <p class="fc-texto">{{ a.texto }}</p>
          <p class="fc-ref">{{ a.ref }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const articulos = [
  { num:9,  color:'#003399', light:'#f0f4ff', titulo:'Bautismo en Agua',           texto:'El bautismo por inmersión simboliza la muerte al pecado y resurrección a nueva vida.',           ref:'Ro. 6:3–4' },
  { num:10, color:'#003399', light:'#f0f4ff', titulo:'La Santa Cena',              texto:'Conmemora el sacrificio de Cristo. El pan es su cuerpo y la copa su sangre.',                    ref:'1 Co. 11:23–26' },
  { num:11, color:'#CC8800', light:'#fffaf0', titulo:'Bautismo del Espíritu Santo', texto:'Cristo bautiza con el Espíritu Santo y fuego, con evidencia de hablar en lenguas.',              ref:'Hch. 2:1–4' },
  { num:12, color:'#CC8800', light:'#fffaf0', titulo:'Dones del Espíritu',          texto:'El E.S. distribuye sus dones: sabiduría, fe, sanidades, milagros, profecía, lenguas.',          ref:'1 Co. 12:1–11' },
  { num:13, color:'#CC8800', light:'#fffaf0', titulo:'Sanidad Divina',              texto:'La sanidad física es parte de la redención. Dios sana en respuesta a la fe.',                  ref:'Stg. 5:14–16' },
  { num:14, color:'#880099', light:'#fdf0ff', titulo:'Segunda Venida de Cristo',    texto:'Jesucristo regresará personal y gloriosamente. Primero el rapto, luego su reino.',              ref:'1 Ts. 4:16–17' },
  { num:15, color:'#880099', light:'#fdf0ff', titulo:'El Gran Mandamiento',         texto:'La Iglesia está comisionada para predicar el Evangelio a toda criatura y discipular.',          ref:'Mt. 28:18–20' },
  { num:16, color:'#880099', light:'#fdf0ff', titulo:'Diezmos y Ofrendas',          texto:'El diezmo pertenece a Dios. Las ofrendas son expresión de gratitud y amor.',                   ref:'Mal. 3:10' },
]
</script>

<style scoped>
.fe-extra {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

/* ── Header ── */
.fe-header {
  background: linear-gradient(135deg, #0a0020, #200050);
  border-radius: 10px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-shrink: 0;
}
.fe-eyebrow {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  color: rgba(255,255,255,.5);
  letter-spacing: .08em;
  white-space: nowrap;
}
.fe-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.15rem;
  font-weight: 900;
  color: #fff;
  margin: 0;
  letter-spacing: .04em;
  text-align: center;
  flex: 1;
}
.fe-pag {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  color: rgba(255,255,255,.5);
  letter-spacing: .06em;
  white-space: nowrap;
}

/* ── Grid 2×4 ── */
.fe-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 7px;
  flex: 1;
  min-height: 0;
}

/* ── Card ── */
.fe-card {
  background: var(--cl);
  border: 2px solid var(--cc);
  border-radius: 10px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
}

.fc-num {
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  font-weight: 900;
  color: #fff;
  background: var(--cc);
  min-width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: .02em;
}

.fc-content {
  flex: 1;
  padding: 8px 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
}

.fc-titulo {
  font-size: 1.0rem;
  font-weight: 800;
  color: var(--cc);
  margin: 0;
  line-height: 1.2;
}
.fc-texto {
  font-size: .92rem;
  color: #333;
  margin: 0;
  line-height: 1.45;
}
.fc-ref {
  font-family: 'Cinzel', serif;
  font-size: .86rem;
  font-weight: 700;
  color: var(--cc);
  margin: 0;
  opacity: .7;
}
</style>
