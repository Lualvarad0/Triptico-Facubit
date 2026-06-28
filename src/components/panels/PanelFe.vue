<template>
  <div class="panel">
    <div class="fe-header"><h2 class="fe-titulo">Declaración de Fe</h2><p class="fe-sub">Página 1 de 4 · Artículos 01 – 06</p></div>
    <div class="fe-grid">
      <div class="sec" style="background:#B30000">Dios y las Escrituras</div>
      <div class="card" v-for="a in g1" :key="a.num" :style="{'--cc':a.c,'--cl':a.l}">
        <div class="num"><span>{{ String(a.num).padStart(2,'0') }}</span></div>
        <div class="body"><p class="tit">{{ a.t }}</p><p class="txt">{{ a.d }}</p><p class="ref">{{ a.r }}</p></div>
      </div>
      <div class="sec" style="background:#003399">Salvación</div>
      <div class="card" v-for="a in g2" :key="a.num" :style="{'--cc':a.c,'--cl':a.l}">
        <div class="num"><span>{{ String(a.num).padStart(2,'0') }}</span></div>
        <div class="body"><p class="tit">{{ a.t }}</p><p class="txt">{{ a.d }}</p><p class="ref">{{ a.r }}</p></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const g1=[
  {num:1,c:'#B30000',l:'#fff0f0',t:'Las Sagradas Escrituras',d:'La Biblia es la Palabra inspirada e infalible de Dios, única regla de fe y práctica.',r:'2 Tim. 3:16-17'},
  {num:2,c:'#B30000',l:'#fff0f0',t:'La Trinidad',d:'Un solo Dios eterno en tres personas coiguales: Padre, Hijo y Espíritu Santo.',r:'Mt. 28:19 · 2 Co. 13:14'},
]
const g2=[
  {num:3,c:'#003399',l:'#eef2ff',t:'La Caída del Hombre',d:'Adán y Eva desobedecieron. Toda la humanidad nace con naturaleza pecaminosa.',r:'Gn. 3 · Ro. 5:12'},
  {num:4,c:'#003399',l:'#eef2ff',t:'La Redención',d:'Cristo murió como sustituto del pecador. Su resurrección garantiza nuestra justificación.',r:'1 P. 1:18-19'},
  {num:5,c:'#003399',l:'#eef2ff',t:'Salvación por Gracia',d:'La salvación es don gratuito de Dios, recibida por fe, no por obras humanas.',r:'Ef. 2:8-9'},
  {num:6,c:'#003399',l:'#eef2ff',t:'Arrepentimiento',d:'El verdadero arrepentimiento produce un cambio radical de mente y corazón hacia Dios.',r:'Hch. 2:38'},
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
