<template>
  <div class="panel">
    <div class="rp-header">
      <h2 class="rp-titulo">El Cuatro en la Biblia</h2>
      <p class="rp-sub">Representaciones bíblicas del número cuatro</p>
    </div>

    <div class="rp-grid">
      <div class="card" style="--cc:#1a7a1a;--cl:#f0fff0">
        <div class="card-img">
          <img src="/assets/img/cuatro-confines-grabado.png" alt="Los cuatro confines de la tierra" />
          <div class="img-badge">05</div>
        </div>
        <div class="card-body">
          <p class="ref">Isaías 11:12 · Apocalipsis 20:8</p>
          <p class="tit">Los cuatro confines de la tierra</p>
          <p class="txt">La misión no se encierra en un lugar: el Evangelio Cuadrangular se comparte con todos los pueblos de la tierra.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  gap: 9px;
  height: 100%;
}

.rp-header {
  background: linear-gradient(135deg,#0a2060,#00174a);
  border-radius: 10px; padding: 11px 16px; text-align: center; flex-shrink: 0;
}
.rp-titulo { font-family:"Cinzel",serif; font-size:1.2rem; font-weight:900; color:#fff; margin:0 0 2px; letter-spacing:.05em; }
.rp-sub    { font-size:.88rem; color:rgba(255,255,255,.55); margin:0; font-style:italic; }

.rp-grid {
  display: flex;
  flex-direction: column;
  gap: 9px;
  flex: 1;
  min-height: 0;
  align-content: start;
}

/* Card de imagen */
.card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid var(--cc);
  background: var(--cl);
}

.card-img {
  position: relative;
  height: 360px;
  overflow: hidden;
  background: #c5d8c5;
  flex-shrink: 0;
}
.card-img img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: sepia(.1) contrast(1.08) brightness(1.02);
}
.img-badge {
  position: absolute; top: 7px; left: 7px;
  background: #1a7a1a;
  color: #fff;
  font-family: "Cinzel",serif; font-size: 1.2rem; font-weight: 900;
  line-height: 1; padding: 3px 9px;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0,0,0,.45);
}

.card-body {
  padding: 14px 16px;
  display: flex; flex-direction: column; gap: 7px;
  border-top: 3px solid #1a7a1a;
}
.ref { font-family:"Cinzel",serif; font-size:1.0rem; font-weight:700; color:#1a7a1a; margin:0; opacity:.8; }
.tit { font-size:1.22rem; font-weight:800; color:#1a7a1a; margin:0; line-height:1.2; }
.txt { font-size:1.08rem; color:#222; margin:0; line-height:1.55; }

</style>
