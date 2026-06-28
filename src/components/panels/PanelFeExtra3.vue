<template>
  <div class="panel">
    <div class="fe-header"><h2 class="fe-titulo">Declaración de Fe</h2><p class="fe-sub">Página 4 de 5 · Artículos 14 – 18</p></div>
    <div class="fe-grid">
      <div class="sec" style="background:#880099">Últimas Cosas</div>
      <div class="card" v-for="a in arts" :key="a.num" :style="{'--cc':a.c,'--cl':a.l}">
        <div class="num"><span>{{ String(a.num).padStart(2,'0') }}</span></div>
        <div class="body"><p class="tit">{{ a.t }}</p><p class="txt">{{ a.d }}</p><p class="ref">{{ a.r }}</p></div>
      </div>
    </div>
  </div>
</template>
<script setup>
const arts=[
  {num:14,c:'#880099',l:'#fdf0ff',t:'Segunda Venida de Cristo',d:'Jesucristo regresará personal y gloriosamente. Primero el rapto, luego su reino.',r:'1 Ts. 4:16-17'},
  {num:15,c:'#880099',l:'#fdf0ff',t:'El Gran Mandamiento',d:'La Iglesia está comisionada para predicar el Evangelio a toda criatura y discipular.',r:'Mt. 28:18-20'},
  {num:16,c:'#880099',l:'#fdf0ff',t:'Diezmos y Ofrendas',d:'El diezmo pertenece a Dios. Las ofrendas son expresión de gratitud y amor.',r:'Mal. 3:10'},
  {num:17,c:'#880099',l:'#fdf0ff',t:'La Resurrección',d:'Todos resucitarán: los justos a vida eterna y los impíos a juicio eterno.',r:'Jn. 5:28-29'},
  {num:18,c:'#880099',l:'#fdf0ff',t:'El Milenio',d:'Cristo reinará en paz y justicia por mil años sobre la tierra antes del juicio final.',r:'Ap. 20:1-6'},
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
