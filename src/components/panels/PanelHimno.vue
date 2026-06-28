<template>
  <div class="himno-panel">

    <div class="himno-header">
      <div class="himno-titulo">Himno del Evangelio Cuadrangular</div>
      <div class="himno-autor">Letra: Aimee Semple McPherson</div>
    </div>

    <div class="himno-cuerpo">

      <div v-for="(est, i) in estrofas" :key="i" class="estrofa-bloque">

        <!-- Número de estrofa -->
        <div class="est-num">{{ numerosRomanos[i] }}</div>

        <!-- Letra -->
        <p class="est-letra">{{ est.letra }}</p>

        <!-- Coro después de cada estrofa -->
        <div class="coro-bloque">
          <span class="coro-label">CORO</span>
          <p class="coro-letra">
            Es el cuadrangular, el cuadrangular, el evangelio de poder<br>
            Jesús salva, bautiza y sana, Jesucristo reinará
          </p>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
const numerosRomanos = ['I', 'II', 'III', 'IV']

const estrofas = [
  {
    letra: 'Con el mensaje cuadrangular del libro de Dios\nhablando a todos de Jesucristo el hijo de David\nquebrantado fue por mí, muriendo en la cruz gran Redentor\nglorioso Cristo, Jesús el Salvador.',
  },
  {
    letra: 'El estandarte hoy desplegad huestes del Señor\ncon la potencia ya revestidos del Santo Espíritu\nRey de Reyes, el Señor, el León de Judá\nsu gran poder su iglesia recibe y a la victoria va.',
  },
  {
    letra: 'Con el escudo la iglesia va, Cristo el Señor\npor sus heridas fuimos sanados, liberación nos dio\na los caídos levantó, al dolor venció\ntrae al Señor tus enfermedades que aquí sanando va.',
  },
  {
    letra: 'Hacia los montes con fe mirad, con gozo cantad\ny recibid al gran Rey que viene, en gloria proclamad\ncomo el águila a reinar, pronto volverá\ndescenderá vestido de gloria, honor y majestad.',
  },
]
</script>

<style scoped>
.himno-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

/* ── Header ── */
.himno-header {
  text-align: center;
  padding: 10px 0 6px;
  border-bottom: 2px solid #CC8800;
}
.himno-titulo {
  font-family: 'Cinzel', serif;
  font-size: 1.0rem;
  font-weight: 900;
  color: #B30000;
  letter-spacing: .04em;
}
.himno-autor {
  font-size: .84rem;
  color: #888;
  margin-top: 3px;
  font-style: italic;
}

/* ── Cuerpo ── */
.himno-cuerpo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

/* ── Estrofa ── */
.estrofa-bloque {
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e8dfc8;
  overflow: hidden;
}

.est-num {
  font-family: 'Cinzel', serif;
  font-size: .86rem;
  font-weight: 900;
  color: #B30000;
  text-align: center;
  padding: 4px 0;
  background: #fff8f0;
  border-bottom: 1px solid #e8dfc8;
  letter-spacing: .2em;
}

.est-letra {
  font-size: .88rem;
  color: #333;
  line-height: 1.65;
  white-space: pre-line;
  margin: 0;
  padding: 8px 14px;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

/* ── Coro ── */
.coro-bloque {
  background: linear-gradient(90deg, rgba(204,136,0,.08), transparent);
  border-top: 1px solid rgba(204,136,0,.3);
  padding: 6px 14px 8px;
}
.coro-label {
  font-family: 'Cinzel', serif;
  font-size: .82rem;
  font-weight: 800;
  color: #CC8800;
  letter-spacing: .15em;
  display: block;
  text-align: center;
  margin-bottom: 3px;
}
.coro-letra {
  font-family: 'Playfair Display', serif;
  font-size: .88rem;
  color: #3a2a14;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
  text-align: center;
}
</style>
