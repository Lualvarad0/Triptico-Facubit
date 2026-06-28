<template>
  <div class="logo-extra">

    <div class="le-header">
      <div class="le-lin"></div>
      <h3 class="le-titulo">El Logotipo Cuadrangular</h3>
      <div class="le-lin"></div>
    </div>

    <!-- Significado de cada cuadrante -->
    <div class="le-bloque">
      <div class="le-bloque-tit">Significado de Cada Cuadrante</div>
      <div class="signif-list">
        <div v-for="s in significados" :key="s.titulo" class="signif-item" :style="{'--sc': s.color}">
          <span class="signif-barra"></span>
          <div class="signif-cuerpo">
            <strong>{{ s.titulo }}</strong>
            <span>{{ s.texto }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Uso del logotipo -->
    <div class="le-bloque">
      <div class="le-bloque-tit">Uso y Reconocimiento Mundial</div>
      <div class="uso-lista">
        <div v-for="u in usos" :key="u.texto" class="uso-item">
          <span class="uso-num" :style="{color: u.color}">{{ u.num }}</span>
          <span class="uso-txt">{{ u.texto }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const significados = [
  {
    titulo: 'Cruz Roja — Salvador',
    color: '#B30000',
    texto: 'La cruz en el cuadrante superior izquierdo comunica que Cristo murió por los pecados del mundo. Es el fundamento de todo el Evangelio y el primer llamado de la Iglesia.',
  },
  {
    titulo: 'Copa Azul — Sanador',
    color: '#003399',
    texto: 'La copa azul declara que Cristo sana integralmente: espíritu, alma y cuerpo. El azul evoca paz, agua viva y la restauración plena que solo Dios puede dar.',
  },
  {
    titulo: 'Paloma Dorada — Bautizador',
    color: '#CC8800',
    texto: 'La paloma es el símbolo del Espíritu Santo. El dorado refleja el fuego divino y los dones sobrenaturales que Cristo derrama sobre los creyentes.',
  },
  {
    titulo: 'Corona Púrpura — Rey Venidero',
    color: '#880099',
    texto: 'La corona proclama el regreso glorioso de Cristo. El púrpura es el color de la realeza y declara que Jesús volverá como Rey de reyes y Señor de señores.',
  },
]

const usos = [
  { num: '01', color: '#B30000', texto: 'Identifica a más de 30,000 iglesias cuadrangulares en más de 100 países del mundo.' },
  { num: '02', color: '#003399', texto: 'Aparece en publicaciones, materiales educativos y eventos oficiales de la Iglesia a nivel global.' },
  { num: '03', color: '#CC8800', texto: 'Se coloca en el frontis de los templos, credenciales pastorales y documentos institucionales.' },
  { num: '04', color: '#880099', texto: 'Es símbolo de identidad teológica: las cuatro verdades de la fe cuadrangular en un solo emblema.' },
]
</script>

<style scoped>
.logo-extra {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ── Header ── */
.le-header {
  display: flex;
  align-items: center;
  gap: 8px;
}
.le-lin {
  flex: 1;
  height: 1px;
  background: rgba(179,0,0,.2);
}
.le-titulo {
  font-family: 'Cinzel', serif;
  font-size: .9rem;
  font-weight: 900;
  color: #B30000;
  margin: 0;
  white-space: nowrap;
  letter-spacing: .03em;
}

/* ── Bloque base ── */
.le-bloque {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(179,0,0,.12);
  box-shadow: 0 2px 8px rgba(0,0,0,.05);
}
.le-bloque-tit {
  font-family: 'Cinzel', serif;
  font-size: .84rem;
  font-weight: 700;
  color: #B30000;
  background: linear-gradient(90deg, rgba(179,0,0,.07), transparent);
  border-bottom: 1px solid rgba(179,0,0,.12);
  padding: 7px 12px;
  letter-spacing: .06em;
  text-transform: uppercase;
}

/* ── Significados ── */
.signif-list { padding: 2px 0; }
.signif-item {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid rgba(0,0,0,.05);
}
.signif-item:last-child { border-bottom: none; }
.signif-barra {
  width: 4px;
  background: var(--sc);
  flex-shrink: 0;
}
.signif-cuerpo {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 8px 12px;
}
.signif-cuerpo strong {
  font-family: 'Cinzel', serif;
  font-size: .84rem;
  color: var(--sc);
  font-weight: 800;
}
.signif-cuerpo span {
  font-size: .84rem;
  color: #555;
  line-height: 1.55;
}

/* ── Usos ── */
.uso-lista { padding: 2px 0; }
.uso-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 12px;
  border-bottom: 1px dotted rgba(0,0,0,.07);
}
.uso-item:last-child { border-bottom: none; }
.uso-num {
  font-family: 'Cinzel', serif;
  font-size: .84rem;
  font-weight: 900;
  flex-shrink: 0;
  min-width: 22px;
  padding-top: 1px;
}
.uso-txt {
  font-size: .84rem;
  color: #444;
  line-height: 1.5;
}
</style>
