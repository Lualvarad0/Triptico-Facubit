<template>
  <div class="fe-extra">

    <div class="fe-header">
      <h2 class="fe-titulo">Declaración de Fe</h2>
      <p class="fe-sub">Artículos 09 – 16 de 16</p>
    </div>

    <div class="fe-grid">
      <div v-for="a in articulos" :key="a.num" class="fe-card" :style="{'--cc':a.color,'--cl':a.light}">
        <div class="fc-izq">
          <span class="fc-num">{{ String(a.num).padStart(2,'0') }}</span>
        </div>
        <div class="fc-der">
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
  { num:9,  color:'#003399', light:'#eef2ff', titulo:'Bautismo en Agua',            texto:'El bautismo por inmersión simboliza la muerte al pecado y resurrección a nueva vida.',          ref:'Ro. 6:3–4' },
  { num:10, color:'#003399', light:'#eef2ff', titulo:'La Santa Cena',               texto:'Conmemora el sacrificio de Cristo. El pan es su cuerpo y la copa su sangre.',                   ref:'1 Co. 11:23–26' },
  { num:11, color:'#CC8800', light:'#fff8e6', titulo:'Bautismo del Espíritu Santo',  texto:'Cristo bautiza con el Espíritu Santo y fuego, con evidencia de hablar en lenguas.',            ref:'Hch. 2:1–4' },
  { num:12, color:'#CC8800', light:'#fff8e6', titulo:'Dones del Espíritu',           texto:'El E.S. distribuye sus dones: sabiduría, fe, sanidades, milagros, profecía, lenguas.',        ref:'1 Co. 12:1–11' },
  { num:13, color:'#CC8800', light:'#fff8e6', titulo:'Sanidad Divina',               texto:'La sanidad física es parte de la redención. Dios sana en respuesta a la fe.',                 ref:'Stg. 5:14–16' },
  { num:14, color:'#880099', light:'#fdf0ff', titulo:'Segunda Venida de Cristo',     texto:'Jesucristo regresará personal y gloriosamente. Primero el rapto, luego su reino.',            ref:'1 Ts. 4:16–17' },
  { num:15, color:'#880099', light:'#fdf0ff', titulo:'El Gran Mandamiento',          texto:'La Iglesia está comisionada para predicar el Evangelio a toda criatura y discipular.',        ref:'Mt. 28:18–20' },
  { num:16, color:'#880099', light:'#fdf0ff', titulo:'Diezmos y Ofrendas',           texto:'El diezmo pertenece a Dios. Las ofrendas son expresión de gratitud y amor.',                  ref:'Mal. 3:10' },
]
</script>

<style scoped>
.fe-extra {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

.fe-header {
  background: linear-gradient(135deg, #0a0020, #200050);
  border-radius: 10px;
  padding: 11px 16px;
  text-align: center;
  flex-shrink: 0;
}
.fe-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 2px;
  letter-spacing: .05em;
}
.fe-sub {
  font-size: .92rem;
  color: rgba(255,255,255,.55);
  margin: 0;
  font-style: italic;
  letter-spacing: .06em;
}

.fe-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 6px;
  flex: 1;
  min-height: 0;
}

.fe-card {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  border: 2.5px solid var(--cc);
  background: var(--cl);
  box-shadow: 0 2px 8px rgba(0,0,0,.08);
}

.fc-izq {
  background: var(--cc);
  min-width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fc-num {
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}

.fc-der {
  flex: 1;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}
.fc-titulo {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--cc);
  margin: 0;
  line-height: 1.2;
}
.fc-texto {
  font-size: .96rem;
  color: #222;
  margin: 0;
  line-height: 1.5;
}
.fc-ref {
  font-family: 'Cinzel', serif;
  font-size: .88rem;
  font-weight: 700;
  color: var(--cc);
  margin: 0;
  opacity: .75;
}
</style>
