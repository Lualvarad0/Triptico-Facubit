<template>
  <div class="panel">
    <div class="fe-header"><h2 class="fe-titulo">Declaración de Fe</h2><p class="fe-sub">Página 2 de 4 · Artículos 07 – 13</p></div>
    <div class="fe-grid">
      <div class="sec" style="background:#003399">Salvación</div>
      <div class="card" v-for="a in g1" :key="a.num" :style="{'--cc':a.c,'--cl':a.l}">
        <div class="num"><span>{{ String(a.num).padStart(2,'0') }}</span></div>
        <div class="body"><p class="tit">{{ a.t }}</p><p class="txt">{{ a.d }}</p><p class="ref">{{ a.r }}</p></div>
      </div>
      <div class="sec" style="background:#CC8800">Espíritu Santo</div>
      <div class="card" v-for="a in g2" :key="a.num" :style="{'--cc':a.c,'--cl':a.l}">
        <div class="num"><span>{{ String(a.num).padStart(2,'0') }}</span></div>
        <div class="body"><p class="tit">{{ a.t }}</p><p class="txt">{{ a.d }}</p><p class="ref">{{ a.r }}</p></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const g1=[
  {num:7,c:'#003399',l:'#eef2ff',t:'El Nuevo Nacimiento',d:'Nacer de nuevo por el Espíritu Santo es necesario para entrar en el reino de Dios.',r:'Jn. 3:3-7'},
  {num:8,c:'#003399',l:'#eef2ff',t:'Vida Cristiana',d:'El creyente está llamado a vivir una vida santa, separada del pecado, consagrada a Dios.',r:'1 Ts. 5:23'},
  {num:9,c:'#003399',l:'#eef2ff',t:'Bautismo en Agua',d:'El bautismo por inmersión simboliza la muerte al pecado y resurrección a nueva vida.',r:'Ro. 6:3-4'},
  {num:10,c:'#003399',l:'#eef2ff',t:'La Santa Cena',d:'Conmemora el sacrificio de Cristo. El pan es su cuerpo y la copa su sangre.',r:'1 Co. 11:23-26'},
]
const g2=[
  {num:11,c:'#CC8800',l:'#fff8e6',t:'Bautismo del Espíritu Santo',d:'Cristo bautiza con el Espíritu Santo y fuego, con evidencia de hablar en lenguas.',r:'Hch. 2:1-4'},
  {num:12,c:'#CC8800',l:'#fff8e6',t:'Dones del Espíritu',d:'El E.S. distribuye sus dones: sabiduría, fe, sanidades, milagros, profecía, lenguas.',r:'1 Co. 12:1-11'},
  {num:13,c:'#CC8800',l:'#fff8e6',t:'Sanidad Divina',d:'La sanidad física es parte de la redención. Dios sana en respuesta a la fe.',r:'Stg. 5:14-16'},
]
</script>
<style scoped>
.panel{display:flex;flex-direction:column;gap:8px;height:100%;}
.fe-header{background:linear-gradient(135deg,#0a0020,#200050);border-radius:10px;padding:12px 16px;text-align:center;flex-shrink:0;}
.fe-titulo{font-family:"Cinzel",serif;font-size:1.35rem;font-weight:900;color:#fff;margin:0 0 3px;letter-spacing:.05em;}
.fe-sub{font-size:1.0rem;color:rgba(255,255,255,.55);margin:0;font-style:italic;}
.fe-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;flex:1;min-height:0;align-content:start;}
.sec{grid-column:1/-1;color:#fff;font-family:"Cinzel",serif;font-size:1.1rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase;padding:8px 14px;border-radius:8px;}
.card{display:flex;border-radius:10px;overflow:hidden;border:2.5px solid var(--cc);background:var(--cl);}
.num{background:var(--cc);min-width:62px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.num span{font-family:"Cinzel",serif;font-size:2.1rem;font-weight:900;color:#fff;line-height:1;}
.body{flex:1;padding:10px 13px;display:flex;flex-direction:column;justify-content:center;gap:4px;}
.tit{font-size:1.22rem;font-weight:800;color:var(--cc);margin:0;line-height:1.2;}
.txt{font-size:1.08rem;color:#222;margin:0;line-height:1.5;}
.ref{font-family:"Cinzel",serif;font-size:1.0rem;font-weight:700;color:var(--cc);margin:0;opacity:.75;}
</style>
