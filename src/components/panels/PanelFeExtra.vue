<template>
  <div class="panel">
    <div class="fe-header"><h2 class="fe-titulo">Declaración de Fe</h2><p class="fe-sub">Página 2 de 5 · Artículos 07 – 10</p></div>
    <div class="fe-grid">
      <div class="sec" style="background:#003399">Salvación</div>
      <div class="card" v-for="a in arts" :key="a.num" :style="{'--cc':a.c,'--cl':a.l}">
        <div class="num"><span>{{ String(a.num).padStart(2,'0') }}</span></div>
        <div class="body"><p class="tit">{{ a.t }}</p><p class="txt">{{ a.d }}</p><p class="ref">{{ a.r }}</p></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const arts=[
  {num:7, c:'#003399',l:'#eef2ff',t:'El Nuevo Nacimiento',d:'Nacer de nuevo por el Espíritu Santo es necesario para entrar en el reino de Dios.',r:'Jn. 3:3-7'},
  {num:8, c:'#003399',l:'#eef2ff',t:'Vida Cristiana',d:'El creyente está llamado a vivir una vida santa, separada del pecado, consagrada a Dios.',r:'1 Ts. 5:23'},
  {num:9, c:'#003399',l:'#eef2ff',t:'Bautismo en Agua',d:'El bautismo por inmersión simboliza la muerte al pecado y resurrección a nueva vida.',r:'Ro. 6:3-4'},
  {num:10,c:'#003399',l:'#eef2ff',t:'La Santa Cena',d:'Conmemora el sacrificio de Cristo. El pan es su cuerpo y la copa su sangre.',r:'1 Co. 11:23-26'},
]
</script>
<style scoped>
.panel{display:flex;flex-direction:column;gap:8px;height:100%;}
.fe-header{background:linear-gradient(135deg,#0a0020,#200050);border-radius:10px;padding:12px 16px;text-align:center;flex-shrink:0;}
.fe-titulo{font-family:"Cinzel",serif;font-size:1.35rem;font-weight:900;color:#fff;margin:0 0 3px;letter-spacing:.05em;}
.fe-sub{font-size:1.0rem;color:rgba(255,255,255,.55);margin:0;font-style:italic;}
.fe-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;flex:1;min-height:0;align-content:start;}
.sec{grid-column:1/-1;color:#fff;font-family:"Cinzel",serif;font-size:1.15rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase;padding:9px 16px;border-radius:8px;}
.card{display:flex;border-radius:10px;overflow:hidden;border:2.5px solid var(--cc);background:var(--cl);}
.num{background:var(--cc);min-width:66px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.num span{font-family:"Cinzel",serif;font-size:2.2rem;font-weight:900;color:#fff;line-height:1;}
.body{flex:1;padding:11px 14px;display:flex;flex-direction:column;justify-content:center;gap:5px;}
.tit{font-size:1.25rem;font-weight:800;color:var(--cc);margin:0;line-height:1.2;}
.txt{font-size:1.1rem;color:#222;margin:0;line-height:1.5;}
.ref{font-family:"Cinzel",serif;font-size:1.02rem;font-weight:700;color:var(--cc);margin:0;opacity:.75;}
</style>
