<template>
  <div class="fe-extra">

    <div class="fe-header">
      <h2 class="fe-titulo">Declaración de Fe</h2>
      <p class="fe-subtitulo">Artículos 9 – 16 · Iglesia del Evangelio Cuadrangular</p>
    </div>

    <!-- Grupo: Salvación (segunda mitad) -->
    <div class="grupo" style="--gc:#003399">
      <div class="grupo-titulo">
        <span class="grupo-linea"></span>
        <span>Salvación</span>
        <span class="grupo-linea"></span>
      </div>
      <div class="arts">
        <div v-for="a in grupo1" :key="a.num" class="art" style="--ac:#003399">
          <div class="art-num">{{ String(a.num).padStart(2,'0') }}</div>
          <div class="art-cuerpo">
            <div class="art-titulo">{{ a.titulo }}</div>
            <div class="art-texto">{{ a.texto }}</div>
            <div class="art-ref">{{ a.ref }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Grupo: Espíritu Santo -->
    <div class="grupo" style="--gc:#CC8800">
      <div class="grupo-titulo">
        <span class="grupo-linea"></span>
        <span>Espíritu Santo</span>
        <span class="grupo-linea"></span>
      </div>
      <div class="arts">
        <div v-for="a in grupo2" :key="a.num" class="art" style="--ac:#CC8800">
          <div class="art-num">{{ String(a.num).padStart(2,'0') }}</div>
          <div class="art-cuerpo">
            <div class="art-titulo">{{ a.titulo }}</div>
            <div class="art-texto">{{ a.texto }}</div>
            <div class="art-ref">{{ a.ref }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Grupo: Últimas Cosas -->
    <div class="grupo" style="--gc:#880099">
      <div class="grupo-titulo">
        <span class="grupo-linea"></span>
        <span>Últimas Cosas</span>
        <span class="grupo-linea"></span>
      </div>
      <div class="arts">
        <div v-for="a in grupo3" :key="a.num" class="art" style="--ac:#880099">
          <div class="art-num">{{ String(a.num).padStart(2,'0') }}</div>
          <div class="art-cuerpo">
            <div class="art-titulo">{{ a.titulo }}</div>
            <div class="art-texto">{{ a.texto }}</div>
            <div class="art-ref">{{ a.ref }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const grupo1 = [
  { num:9,  titulo:'Bautismo en Agua',   texto:'El bautismo por inmersión simboliza la muerte al pecado y resurrección a nueva vida.',          ref:'Ro. 6:3–4' },
  { num:10, titulo:'La Santa Cena',      texto:'Conmemora el sacrificio de Cristo. El pan es su cuerpo y la copa su sangre.',                    ref:'1 Co. 11:23–26' },
]
const grupo2 = [
  { num:11, titulo:'Bautismo del Espíritu Santo', texto:'Cristo bautiza con el Espíritu Santo y fuego, con evidencia de hablar en lenguas.',     ref:'Hch. 2:1–4' },
  { num:12, titulo:'Dones del Espíritu',          texto:'El E.S. distribuye sus dones: sabiduría, fe, sanidades, milagros, profecía, lenguas.',  ref:'1 Co. 12:1–11' },
  { num:13, titulo:'Sanidad Divina',              texto:'La sanidad física es parte de la redención. Dios sana en respuesta a la fe.',           ref:'Stg. 5:14–16' },
]
const grupo3 = [
  { num:14, titulo:'Segunda Venida de Cristo', texto:'Jesucristo regresará personal y gloriosamente. Primero el rapto, luego su reino.',         ref:'1 Ts. 4:16–17' },
  { num:15, titulo:'El Gran Mandamiento',      texto:'La Iglesia está comisionada para predicar el Evangelio a toda criatura y discipular.',     ref:'Mt. 28:18–20' },
  { num:16, titulo:'Diezmos y Ofrendas',       texto:'El diezmo pertenece a Dios. Las ofrendas son expresión de gratitud y amor.',              ref:'Mal. 3:10' },
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
  background: linear-gradient(135deg, #0a0020 0%, #1a003a 100%);
  border-radius: 10px;
  padding: 12px 16px;
  text-align: center;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(0,0,51,.3);
}
.fe-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 3px;
  letter-spacing: .05em;
}
.fe-subtitulo {
  font-size: .90rem;
  color: rgba(255,255,255,.6);
  margin: 0;
  font-style: italic;
}

/* ── Grupo ── */
.grupo { display: flex; flex-direction: column; gap: 6px; }

.grupo-titulo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Cinzel', serif;
  font-size: .92rem;
  font-weight: 800;
  color: var(--gc);
  text-transform: uppercase;
  letter-spacing: .1em;
}
.grupo-linea {
  flex: 1;
  height: 1.5px;
  background: var(--gc);
  opacity: .3;
}

/* ── Artículos ── */
.arts { display: flex; flex-direction: column; gap: 5px; }

.art {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid rgba(0,0,0,.07);
  border-left: 4px solid var(--ac);
  border-radius: 8px;
  padding: 9px 12px;
}

.art-num {
  font-family: 'Cinzel', serif;
  font-size: 1.05rem;
  font-weight: 900;
  color: var(--ac);
  opacity: .3;
  line-height: 1;
  min-width: 28px;
  flex-shrink: 0;
  padding-top: 2px;
}

.art-cuerpo {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.art-titulo {
  font-size: .96rem;
  font-weight: 800;
  color: #1a0a2a;
  line-height: 1.2;
}
.art-texto {
  font-size: .90rem;
  color: #555;
  line-height: 1.5;
}
.art-ref {
  font-family: 'Cinzel', serif;
  font-size: .84rem;
  color: var(--ac);
  font-weight: 700;
  opacity: .75;
}
</style>
