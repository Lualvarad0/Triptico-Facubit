<template>
  <div class="portada">

    <!-- INSTITUCIÓN -->
    <div class="campo campo-inst">
      <span class="campo-label">Institución:</span>
      <p class="campo-valor inst-valor">
        FACULTAD CUADRANGULAR<br>TEOLÓGICA FACUBIT.
      </p>
    </div>

    <div class="separador"></div>

    <!-- ASIGNATURA -->
    <div class="campo campo-asig">
      <span class="campo-label">Asignatura:</span>
      <p class="campo-valor asig-valor">FUNDAMENTO CUADRANGULAR</p>
    </div>

    <div class="separador"></div>

    <!-- TÍTULO -->
    <div class="campo campo-titulo">
      <span class="campo-label">Título:</span>
      <p class="campo-valor titulo-valor">
        DIFUNDIENDO EL FUNDAMENTO<br>EN LA COMUNIDAD.
      </p>
    </div>

    <!-- FOTOS -->
    <div class="fotos-grid">

      <div class="foto-item">
        <div class="foto-marco">
          <img
            src="https://live.staticflickr.com/3948/34000647641_b235646e8f.jpg"
            alt="Templo Angelus"
            class="foto-img"
          />
          <div class="foto-overlay"></div>
        </div>
        <div class="foto-pie">
          <strong>Templo Angelus</strong>
          <span>Los Angeles, California<br>Estados Unidos.</span>
        </div>
      </div>

      <div class="foto-item">
        <div class="foto-marco">
          <img
            src="/assets/img/iglesia-emmanuel.jpg"
            alt="Iglesia Cuadrangular Emmanuel"
            class="foto-img"
          />
          <div class="foto-overlay"></div>
        </div>
        <div class="foto-pie">
          <strong>Iglesia Cuadrangular "Emmanuel"</strong>
          <span>Rcto. El Guabito<br>Guayaquil - Daule, Ecuador.</span>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
/* ── Entrada general ── */
.portada {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 4px 2px;
  animation: portadaIn .6s ease both;
}
@keyframes portadaIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: none; }
}

/* ── Campos ── */
.campo {
  padding: 7px 10px;
  border-radius: 6px;
  animation: campoIn .5s ease both;
}
.campo-inst  { animation-delay: .05s; background: rgba(0,51,153,.05); border-left: 3px solid #003399; }
.campo-asig  { animation-delay: .12s; background: rgba(136,0,153,.05); border-left: 3px solid #880099; }
.campo-titulo{ animation-delay: .19s; background: rgba(179,0,0,.05);   border-left: 3px solid #B30000; }

@keyframes campoIn {
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: none; }
}

.campo-label {
  font-family: 'Cinzel', serif;
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #888;
  display: block;
  margin-bottom: 2px;
}

.campo-valor {
  font-family: 'Cinzel', serif;
  font-weight: 900;
  margin: 0;
  line-height: 1.2;
}

.inst-valor  { font-size: 1.05rem; color: #003399; }
.asig-valor  { font-size: 1.0rem;  color: #880099; }
.titulo-valor{ font-size: 1.12rem; color: #B30000; }

/* ── Separadores ── */
.separador {
  height: 1px;
  margin: 3px 10px;
  background: linear-gradient(90deg, transparent, rgba(0,0,0,.1), transparent);
}

/* ── Fotos ── */
.fotos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 8px;
  animation: fotosIn .5s .28s ease both;
}
@keyframes fotosIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: none; }
}

.foto-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.foto-marco {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  border: 2px solid #c8a870;
  box-shadow: 0 3px 10px rgba(0,0,0,.18);
}

.foto-img {
  width: 100%;
  height: 118px;
  object-fit: cover;
  display: block;
  transition: transform .6s ease;
}
.foto-marco:hover .foto-img {
  transform: scale(1.05);
}

/* Brillo sutil en la esquina superior */
.foto-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,.12) 0%, transparent 50%);
  pointer-events: none;
}

.foto-pie {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0 1px;
}

.foto-pie strong {
  font-family: 'Cinzel', serif;
  font-size: .82rem;
  font-weight: 700;
  color: #1a0a00;
  line-height: 1.3;
}

.foto-pie span {
  font-size: .80rem;
  color: #5a4030;
  line-height: 1.45;
}
</style>
