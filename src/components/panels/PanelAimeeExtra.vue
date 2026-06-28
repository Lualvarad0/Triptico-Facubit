<template>
  <div class="aimee-extra">

    <!-- ══ TÍTULO DE SECCIÓN ══ -->
    <div class="ae-header">
      <div class="ae-ornamento">
        <div class="ae-linea"></div>
        <div class="ae-diamante"></div>
        <div class="ae-linea"></div>
      </div>
      <h3 class="ae-titulo">Aimee Semple McPherson</h3>
      <p class="ae-subtitulo">Datos Biográficos & Curiosidades</p>
    </div>

    <!-- ══ DATOS PERSONALES ══ -->
    <div class="ae-bloque">
      <div class="ae-bloque-titulo">
        <span class="ae-ico">☆</span> Perfil
      </div>
      <div class="ae-filas">
        <div v-for="d in perfil" :key="d.label" class="ae-fila">
          <span class="ae-etiq">{{ d.label }}</span>
          <span class="ae-val">{{ d.val }}</span>
        </div>
      </div>
    </div>

    <!-- ══ LOGROS ══ -->
    <div class="ae-bloque">
      <div class="ae-bloque-titulo">
        <span class="ae-ico">★</span> Logros Históricos
      </div>
      <div class="ae-logros">
        <div v-for="l in logros" :key="l.num" class="ae-logro" :style="{'--lc': l.color}">
          <span class="ae-logro-num">{{ l.num }}</span>
          <span class="ae-logro-txt">{{ l.texto }}</span>
        </div>
      </div>
    </div>

    <!-- ══ CITAS CÉLEBRES ══ -->
    <div class="ae-bloque">
      <div class="ae-bloque-titulo">
        <span class="ae-ico">❝</span> Frases Célebres
      </div>
      <div class="ae-citas">
        <blockquote v-for="c in citas" :key="c.texto" class="ae-cita" :style="{'--bc': c.color}">
          <span class="ae-cita-txt">{{ c.texto }}</span>
        </blockquote>
      </div>
    </div>

    <!-- ══ CURIOSIDADES ══ -->
    <div class="ae-bloque">
      <div class="ae-bloque-titulo">
        <span class="ae-ico">◈</span> Sabías que…
      </div>
      <div class="ae-curiosidades">
        <div v-for="(c, i) in curiosidades" :key="i" class="ae-curio">
          <span class="ae-curio-n">{{ String(i+1).padStart(2,'0') }}</span>
          <span class="ae-curio-txt">{{ c }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const perfil = [
  { label:'Nombre completo',  val:'Aimee Elizabeth Kennedy' },
  { label:'Nacimiento',       val:'9 oct 1890 · Salford, Ontario' },
  { label:'Fallecimiento',    val:'27 sep 1944 · Oakland, California' },
  { label:'Primer esposo',    val:'Robert Semple (misionero, †1910)' },
  { label:'Segundo esposo',   val:'Harold McPherson (1912–1921)' },
  { label:'Hijos',            val:'Roberta Star y Rolf McPherson' },
  { label:'Movimiento',       val:'Pentecostal · Cuadrangular' },
]
const logros = [
  { num:'01', color:'#003399', texto:'Primera mujer en obtener licencia de radio en EE.UU. (1924).' },
  { num:'02', color:'#B30000', texto:'Fundó la primera megaiglesia de EE.UU.: Templo Angelus (5,300 asientos).' },
  { num:'03', color:'#880099', texto:'Su hijo Rolf lideró el movimiento hasta 2009, expandiéndolo a +150 países.' },
  { num:'04', color:'#CC8800', texto:'Durante la Gran Depresión su iglesia alimentó a +1.5 millones de personas.' },
  { num:'05', color:'#1a7a1a', texto:'Publicó más de 175 sermones, himnos y obras teatrales religiosas.' },
]
const citas = [
  { texto:'"La fe es confiar en Dios donde no puedes verlo, sabiendo que Él te sostendrá."', color:'#880099' },
  { texto:'"No vine a predicar sobre Dios — vine a presentar a Dios."', color:'#003399' },
  { texto:'"El Espíritu Santo no necesita ser impresionado; necesita ser obedecido."', color:'#B30000' },
]
const curiosidades = [
  'Se convirtió a los 17 años bajo el ministerio de Robert Semple, con quien luego se casó.',
  'Realizó cruzadas en estadios llenos en Brasil, Australia y el Reino Unido.',
  'Creó dramatizaciones del Evangelio ("illustrated sermons") con vestuario y escenografía.',
  'En 1926 desapareció 36 días — el misterio sigue sin aclararse del todo históricamente.',
  'TIME y otras publicaciones la llamaron "la evangelista más famosa del mundo" en los años 30.',
]
</script>

<style scoped>
.aimee-extra {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

/* ══ HEADER ══ */
.ae-header {
  text-align: center;
  padding-bottom: 4px;
}
.ae-ornamento {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}
.ae-linea {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #E0C0F0);
}
.ae-linea:last-child {
  background: linear-gradient(90deg, #E0C0F0, transparent);
}
.ae-diamante {
  width: 7px;
  height: 7px;
  background: #880099;
  transform: rotate(45deg);
  flex-shrink: 0;
}
.ae-titulo {
  font-family: 'Cinzel', serif;
  font-size: .8rem;
  font-weight: 900;
  color: #880099;
  margin: 0;
  letter-spacing: .04em;
}
.ae-subtitulo {
  font-size: .52rem;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: .14em;
  margin: 2px 0 0;
}

/* ══ BLOQUE BASE ══ */
.ae-bloque {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(136,0,153,.12);
  box-shadow: 0 2px 8px rgba(0,0,0,.05);
}
.ae-bloque-titulo {
  font-family: 'Cinzel', serif;
  font-size: .54rem;
  font-weight: 700;
  color: #880099;
  background: linear-gradient(90deg, rgba(136,0,153,.08), transparent);
  border-bottom: 1px solid rgba(136,0,153,.12);
  padding: 5px 10px;
  letter-spacing: .08em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 5px;
}
.ae-ico { font-size: .6rem; }

/* ══ PERFIL ══ */
.ae-filas { padding: 2px 0; }
.ae-fila {
  display: flex;
  gap: 6px;
  align-items: baseline;
  padding: 3px 10px;
  border-bottom: 1px dotted rgba(0,0,0,.07);
}
.ae-fila:last-child { border-bottom: none; }
.ae-etiq {
  font-size: .48rem;
  color: #999;
  min-width: 80px;
  flex-shrink: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .06em;
}
.ae-val {
  font-family: 'Cinzel', serif;
  font-size: .58rem;
  color: #1a0a00;
  line-height: 1.35;
}

/* ══ LOGROS ══ */
.ae-logros { padding: 4px 0; }
.ae-logro {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 10px;
  border-bottom: 1px dotted rgba(0,0,0,.06);
}
.ae-logro:last-child { border-bottom: none; }
.ae-logro-num {
  font-family: 'Cinzel', serif;
  font-size: .52rem;
  font-weight: 900;
  color: var(--lc);
  min-width: 20px;
  flex-shrink: 0;
  padding-top: 1px;
}
.ae-logro-txt {
  font-size: .57rem;
  color: #444;
  line-height: 1.45;
}

/* ══ CITAS ══ */
.ae-citas {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.ae-cita {
  border-left: 3px solid var(--bc);
  padding: 5px 10px;
  margin: 0;
  border-bottom: 1px solid rgba(0,0,0,.06);
  background: color-mix(in srgb, var(--bc) 4%, white);
}
.ae-cita:last-child { border-bottom: none; }
.ae-cita-txt {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: .58rem;
  color: #333;
  line-height: 1.5;
}

/* ══ CURIOSIDADES ══ */
.ae-curiosidades {
  display: flex;
  flex-direction: column;
  padding: 2px 0;
}
.ae-curio {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 10px;
  border-bottom: 1px dotted rgba(0,0,0,.06);
}
.ae-curio:last-child { border-bottom: none; }
.ae-curio-n {
  font-family: 'Cinzel', serif;
  font-size: .5rem;
  font-weight: 900;
  color: #CC8800;
  flex-shrink: 0;
  min-width: 18px;
  padding-top: 2px;
}
.ae-curio-txt {
  font-size: .57rem;
  color: #555;
  line-height: 1.45;
}
</style>
