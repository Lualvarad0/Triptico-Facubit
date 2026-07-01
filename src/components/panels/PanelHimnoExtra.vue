<template>
  <div class="himno-extra">

    <div class="he-header">
      <div class="he-deco">
        <span class="he-linea"></span>
        <span class="he-nota">♪</span>
        <span class="he-linea"></span>
      </div>
      <p class="he-sub">Himno del Evangelio Cuadrangular</p>
    </div>

    <div class="himno-letra">

      <div v-for="(est, i) in estrofas" :key="i" class="estrofa">
        <div class="est-roman">{{ romanos[i] }}</div>
        <p class="est-txt">{{ est }}</p>
        <div class="coro">
          <span class="coro-tag">CORO</span>
          <p class="coro-txt">
            Es el cuadrangular, el cuadrangular, el evangelio de poder<br>
            Jesús salva, bautiza y sana, Jesucristo reinará
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
const romanos  = ['III', 'IV']
const estrofas = [
  'Con el escudo la Iglesia va, Cristo el Señor\nPor sus heridas fuimos sanados, liberación nos dio\nA los caídos levantó, al dolor venció\nTrae al Señor tus enfermedades que aquí sanando va.',
  'Hacia los montes con fe mirad, con gozo cantad\nY recibid al gran Rey que viene, en gloria proclamad\nComo el águila a reinar, pronto volverá\nDescenderá vestido de gloria, honor y majestad.',
]
</script>

<style scoped>
.himno-extra {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
}

/* ── Mini header ── */
.he-header {
  text-align: center;
  padding-bottom: 4px;
  flex-shrink: 0;
}
.he-deco {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
}
.he-linea {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(179,0,0,.35));
}
.he-linea:last-child {
  background: linear-gradient(90deg, rgba(179,0,0,.35), transparent);
}
.he-nota {
  font-size: 1.1rem;
  color: #B30000;
}
.he-sub {
  font-family: 'Cinzel', serif;
  font-size: .92rem;
  font-weight: 700;
  color: #B30000;
  margin: 0;
  letter-spacing: .06em;
  text-transform: uppercase;
}

/* ── Letra ── */
.himno-letra {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}
.estrofa {
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e8dfc8;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.est-roman {
  font-family: 'Cinzel', serif;
  font-size: 1.0rem;
  font-weight: 900;
  color: #B30000;
  text-align: center;
  padding: 6px 0;
  background: #fff8f0;
  border-bottom: 1px solid #e8dfc8;
  letter-spacing: .3em;
  flex-shrink: 0;
}
.est-txt {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: #2a1a0a;
  line-height: 1.75;
  white-space: pre-line;
  margin: 0;
  padding: 14px 18px 10px;
  font-style: italic;
  flex: 1;
}
.coro {
  background: linear-gradient(90deg, rgba(204,136,0,.1), rgba(179,0,0,.05));
  border-top: 1px solid rgba(204,136,0,.3);
  padding: 8px 18px 12px;
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-shrink: 0;
}
.coro-tag {
  font-family: 'Cinzel', serif;
  font-size: .92rem;
  font-weight: 900;
  color: #CC8800;
  letter-spacing: .18em;
  flex-shrink: 0;
}
.coro-txt {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  color: #3a1a00;
  line-height: 1.65;
  font-style: italic;
  font-weight: 600;
  margin: 0;
}
</style>
