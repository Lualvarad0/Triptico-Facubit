<template>
  <div class="fe-extra">

    <div class="fe-header">
      <h2 class="fe-titulo">Declaración de Fe</h2>
      <p class="fe-sub">Artículos 9 – 16 de 16 · Iglesia del Evangelio Cuadrangular</p>
    </div>

    <!-- SALVACIÓN cont. -->
    <div class="categoria">
      <div class="cat-label" style="--cc:#003399">Salvación</div>
      <div class="cards">
        <div v-for="a in grupo1" :key="a.num" class="card" :style="{'--cc':'#003399'}">
          <div class="card-badge">{{ String(a.num).padStart(2,'0') }}</div>
          <div class="card-body">
            <p class="card-titulo">{{ a.titulo }}</p>
            <p class="card-texto">{{ a.texto }}</p>
            <p class="card-ref">{{ a.ref }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ESPÍRITU SANTO -->
    <div class="categoria">
      <div class="cat-label" style="--cc:#CC8800">Espíritu Santo</div>
      <div class="cards">
        <div v-for="a in grupo2" :key="a.num" class="card" :style="{'--cc':'#CC8800'}">
          <div class="card-badge">{{ String(a.num).padStart(2,'0') }}</div>
          <div class="card-body">
            <p class="card-titulo">{{ a.titulo }}</p>
            <p class="card-texto">{{ a.texto }}</p>
            <p class="card-ref">{{ a.ref }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÚLTIMAS COSAS -->
    <div class="categoria">
      <div class="cat-label" style="--cc:#880099">Últimas Cosas</div>
      <div class="cards">
        <div v-for="a in grupo3" :key="a.num" class="card" :style="{'--cc':'#880099'}">
          <div class="card-badge">{{ String(a.num).padStart(2,'0') }}</div>
          <div class="card-body">
            <p class="card-titulo">{{ a.titulo }}</p>
            <p class="card-texto">{{ a.texto }}</p>
            <p class="card-ref">{{ a.ref }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const grupo1 = [
  { num:9,  titulo:'Bautismo en Agua', texto:'El bautismo por inmersión simboliza la muerte al pecado y resurrección a nueva vida.',          ref:'Ro. 6:3–4' },
  { num:10, titulo:'La Santa Cena',    texto:'Conmemora el sacrificio de Cristo. El pan es su cuerpo y la copa su sangre.',                    ref:'1 Co. 11:23–26' },
]
const grupo2 = [
  { num:11, titulo:'Bautismo del Espíritu Santo', texto:'Cristo bautiza con el Espíritu Santo y fuego, con evidencia de hablar en lenguas.',    ref:'Hch. 2:1–4' },
  { num:12, titulo:'Dones del Espíritu',          texto:'El E.S. distribuye sus dones: sabiduría, fe, sanidades, milagros, profecía, lenguas.', ref:'1 Co. 12:1–11' },
  { num:13, titulo:'Sanidad Divina',              texto:'La sanidad física es parte de la redención. Dios sana en respuesta a la fe.',          ref:'Stg. 5:14–16' },
]
const grupo3 = [
  { num:14, titulo:'Segunda Venida de Cristo', texto:'Jesucristo regresará personal y gloriosamente. Primero el rapto, luego su reino.',        ref:'1 Ts. 4:16–17' },
  { num:15, titulo:'El Gran Mandamiento',      texto:'La Iglesia está comisionada para predicar el Evangelio a toda criatura y discipular.',    ref:'Mt. 28:18–20' },
  { num:16, titulo:'Diezmos y Ofrendas',       texto:'El diezmo pertenece a Dios. Las ofrendas son expresión de gratitud y amor.',             ref:'Mal. 3:10' },
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
  background: linear-gradient(135deg, #0a0020, #1a003a);
  border-radius: 10px;
  padding: 12px 16px;
  text-align: center;
  flex-shrink: 0;
}
.fe-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.15rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 3px;
  letter-spacing: .05em;
}
.fe-sub {
  font-size: .92rem;
  color: rgba(255,255,255,.6);
  margin: 0;
  font-style: italic;
}

/* ── Categoría ── */
.categoria { display: flex; flex-direction: column; gap: 6px; }

.cat-label {
  font-family: 'Cinzel', serif;
  font-size: .96rem;
  font-weight: 900;
  color: var(--cc);
  text-transform: uppercase;
  letter-spacing: .1em;
  padding: 4px 10px;
  background: color-mix(in srgb, var(--cc) 10%, transparent);
  border-left: 4px solid var(--cc);
  border-radius: 0 6px 6px 0;
}

/* ── Cards ── */
.cards { display: flex; flex-direction: column; gap: 5px; }

.card {
  display: flex;
  gap: 0;
  background: #fff;
  border-radius: 8px;
  border: 1.5px solid color-mix(in srgb, var(--cc) 25%, #ddd);
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,.05);
}

.card-badge {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: #fff;
  background: var(--cc);
  min-width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: .04em;
}

.card-body {
  flex: 1;
  padding: 9px 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  border-left: 1px solid color-mix(in srgb, var(--cc) 20%, #eee);
}

.card-titulo {
  font-size: 1.02rem;
  font-weight: 800;
  color: #1a0a2a;
  margin: 0;
  line-height: 1.2;
}
.card-texto {
  font-size: .94rem;
  color: #444;
  margin: 0;
  line-height: 1.55;
}
.card-ref {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  font-weight: 700;
  color: var(--cc);
  margin: 0;
  opacity: .8;
}
</style>
