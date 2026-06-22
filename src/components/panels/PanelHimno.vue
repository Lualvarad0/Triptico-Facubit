<template>
  <div class="himno-panel">

    <!-- Encabezado con imagen -->
    <div class="himno-header">
      <img
        src="/assets/img/doctrina-salvador-grabado.png"
        alt="Himno Cuadrangular"
        class="himno-bg-img"
      />
      <div class="himno-header-overlay">
        <h3>Himno Cuadrangular</h3>
        <p>Letra: Aimee Semple McPherson</p>
      </div>
    </div>

    <div class="himno-nota">
      El himno oficial refleja las cuatro grandes verdades del Evangelio Cuadrangular,
      reveladas en la visión de Ezequiel 1:10. Se canta como declaración de fe
      en cada celebración de la Iglesia.
    </div>

    <!-- Estrofas -->
    <div class="estrofas">
      <div v-for="(est, i) in estrofas" :key="i" class="estrofa-card" :style="{'--ec': est.color}">
        <div class="est-header">
          <img :src="est.img" :alt="est.doctrina" class="est-img" />
          <div class="est-num-wrap">
            <span class="est-num">Estrofa {{ i+1 }}</span>
            <span class="est-doc">{{ est.doctrina }}</span>
          </div>
        </div>
        <p class="est-letra">{{ est.letra }}</p>
      </div>
    </div>

    <!-- Coro -->
    <div class="coro-card">
      <div class="coro-label">— Coro —</div>
      <p class="coro-letra">
        Es el cuadrangular, el cuadrangular,<br>
        el evangelio de poder;<br>
        Jesús salva, bautiza y sana,<br>
        Jesucristo reinará.
      </p>
    </div>

    <p class="himno-fuente">
      Fuente: <em>Iglesia Cristiana Cuadrangular Armenia</em> ·
      <a href="http://iccarmeniasimbologia.blogspot.com/2009/03/himno-iglesia-cuadrangular.html" target="_blank">iccarmeniasimbologia.blogspot.com</a>
    </p>

  </div>
</template>

<script setup>
const estrofas = [
  {
    color:'#B30000', doctrina:'Cristo Salvador',
    img:'/assets/img/doctrina-salvador-grabado.png',
    letra:'Con el mensaje cuadrangular del libro de Dios,\nhablando a todos de Jesucristo el hijo de David,\nquebrantado fue por mí, muriendo en la cruz\ngran Redentor, glorioso Cristo, Jesús el Salvador.'
  },
  {
    color:'#CC8800', doctrina:'Cristo Bautizador',
    img:'/assets/img/doctrina-bautizador-grabado.png',
    letra:'El estandarte hoy desplegad, huestes del Señor,\ncon la potencia ya revestidos del Santo Espíritu,\nRey de Reyes, el Señor, el León de Judá,\nsu gran poder su iglesia recibe y a la victoria va.'
  },
  {
    color:'#1a7a1a', doctrina:'Cristo Sanador',
    img:'/assets/img/doctrina-sanador-grabado.png',
    letra:'Con el escudo la iglesia va, Cristo el Señor,\npor sus heridas fuimos sanados, liberación nos dio,\na los caídos levantó, al dolor venció,\ntrae al Señor tus enfermedades que aquí sanando va.'
  },
  {
    color:'#880099', doctrina:'Cristo Rey Venidero',
    img:'/assets/img/doctrina-rey-grabado.png',
    letra:'Cristo viene pronto con poder y majestad,\nvestido de gloria, de honor y de su autoridad;\nen las nubes viene por su amada Iglesia fiel,\n¡Jesucristo es el Rey que ha de venir!'
  },
]
</script>

<style scoped>
.himno-panel { display: flex; flex-direction: column; gap: 12px; }

/* Header */
.himno-header {
  position: relative; height: 90px; border-radius: 10px; overflow: hidden;
}
.himno-bg-img {
  width: 100%; height: 100%; object-fit: cover; object-position: center 30%;
  display: block; filter: brightness(.6);
}
.himno-header-overlay {
  position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; color: #fff; text-align: center;
  padding: 10px;
}
.himno-header-overlay h3 {
  font-family: 'Cinzel', serif; font-size: .95rem; margin: 0 0 3px;
  text-shadow: 0 2px 8px rgba(0,0,0,.6);
}
.himno-header-overlay p { font-size: .62rem; opacity: .85; margin: 0; }

/* Nota */
.himno-nota {
  background: #f8f4ee; border: 1px solid #e8dfc8;
  border-left: 3px solid #CC8800; border-radius: 0 6px 6px 0;
  padding: 9px 12px; font-size: .68rem; color: #666; line-height: 1.55;
}

/* Estrofas */
.estrofas { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.estrofa-card {
  border: 1.5px solid var(--ec); border-radius: 8px; overflow: hidden;
  background: #fff;
}
.est-header {
  display: flex; align-items: center; gap: 0;
  border-bottom: 1px solid var(--ec);
}
.est-img {
  width: 44px; height: 44px; object-fit: cover; flex-shrink: 0;
}
.est-num-wrap {
  flex: 1; padding: 5px 8px;
  background: var(--ec);
}
.est-num {
  display: block; font-size: .5rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,.8);
}
.est-doc {
  display: block; font-family: 'Cinzel', serif; font-size: .62rem;
  font-weight: 700; color: #fff;
}
.est-letra {
  font-size: .6rem; color: #555; line-height: 1.55;
  white-space: pre-line; margin: 0; font-style: italic;
  padding: 8px 10px;
}

/* Coro */
.coro-card {
  background: linear-gradient(135deg, #fff8f0, #f5f0ff);
  border: 1px solid #ddd; border-radius: 8px;
  padding: 14px; text-align: center;
  border-top: 3px solid #CC8800;
}
.coro-label {
  font-family: 'Cinzel', serif; font-size: .72rem;
  font-weight: 700; color: #CC8800;
  text-transform: uppercase; letter-spacing: 2px;
  margin-bottom: 8px;
}
.coro-letra {
  font-family: 'Playfair Display', serif;
  font-size: .75rem; color: #3a2a14; line-height: 1.7;
  font-style: italic; margin: 0;
}

/* Fuente */
.himno-fuente {
  font-size: .58rem; color: #aaa; text-align: center; margin: 0;
}
.himno-fuente a { color: #CC8800; }
</style>
