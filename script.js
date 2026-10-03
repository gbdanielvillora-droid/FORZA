const routines = {
  pecho: {
    name: "Pecho",
    tag: "PECHO",
    exercises: [
      "Press banca con barra","Press inclinado con barra","Press declinado con barra",
      "Press banca con mancuernas","Press inclinado con mancuernas","Press declinado con mancuernas",
      "Press de pecho en máquina","Press inclinado en máquina","Press convergente en máquina",
      "Aperturas con mancuernas","Aperturas inclinadas con mancuernas","Pec deck",
      "Cruce de poleas alto a bajo","Cruce de poleas bajo a alto","Cruce de poleas a la altura del pecho",
      "Fondos para pecho","Flexiones clásicas","Flexiones con pies elevados",
      "Flexiones con agarre ancho","Press unilateral en polea","Press landmine unilateral","Svend press"
    ]
  },
  espalda: {
    name: "Espalda",
    tag: "ESPALDA",
    exercises: [
      "Dominadas pronas","Dominadas supinas","Dominadas neutras","Jalón al pecho agarre ancho",
      "Jalón al pecho agarre neutro","Jalón unilateral","Jalón con agarre cerrado",
      "Remo con barra","Remo Pendlay","Remo con mancuerna","Remo con mancuerna apoyado",
      "Remo en máquina","Remo sentado en polea","Remo unilateral en polea","Remo T-bar",
      "Remo pecho apoyado","Pullover en polea","Pullover con mancuerna",
      "Peso muerto convencional","Peso muerto sumo","Rack pull","Remo invertido",
      "Jalón de brazos rectos","Remo en máquina convergente"
    ]
  },
  hombros: {
    name: "Hombros",
    tag: "HOMBROS",
    exercises: [
      "Press militar con barra","Press militar con mancuernas","Press de hombros en máquina",
      "Press Arnold","Press sentado con mancuernas","Press unilateral en máquina",
      "Press landmine","Elevaciones laterales con mancuernas","Elevaciones laterales en polea",
      "Elevaciones laterales en máquina","Elevaciones laterales inclinadas",
      "Elevaciones frontales con disco","Elevaciones frontales con mancuerna",
      "Elevaciones frontales en polea","Pájaros con mancuernas","Pájaros en máquina",
      "Pájaros en polea","Reverse pec deck","Face pull","Remo al mentón con polea",
      "Remo al mentón con barra","Y-raise en banco","Y-raise en polea","Press Z"
    ]
  },
  biceps: {
    name: "Bíceps",
    tag: "BÍCEPS",
    exercises: [
      "Curl con barra recta","Curl con barra EZ","Curl con mancuernas",
      "Curl alterno sentado","Curl inclinado con mancuernas","Curl martillo",
      "Curl martillo cruzado","Curl concentrado","Curl predicador con barra EZ",
      "Curl predicador con mancuerna","Curl predicador en máquina","Curl en polea baja",
      "Curl unilateral en polea","Curl bayesiano","Curl en polea con barra",
      "Curl con cuerda","Curl spider","Curl Zottman","Curl inverso con barra",
      "Curl inverso con EZ","Curl de arrastre","Curl 21s","Curl en máquina"
    ]
  },
  triceps: {
    name: "Tríceps",
    tag: "TRÍCEPS",
    exercises: [
      "Jalón de tríceps con cuerda","Jalón de tríceps con barra","Jalón unilateral en polea",
      "Extensión por encima de la cabeza con cuerda","Extensión por encima de la cabeza con mancuerna",
      "Extensión unilateral por encima de la cabeza","Press francés con barra EZ",
      "Press francés con mancuernas","Press cerrado en banca","Fondos en paralelas",
      "Fondos asistidos","Fondos en máquina","Extensión tumbado con mancuernas",
      "Skull crushers con EZ","Extensión en polea baja","Patada de tríceps con mancuerna",
      "Patada de tríceps en polea","Extensión cruzada en polea","Press Tate",
      "JM press","Extensión de tríceps en máquina","Extensión unilateral en máquina"
    ]
  },
  piernas: {
    name: "Piernas",
    tag: "PIERNAS",
    exercises: [
      "Sentadilla con barra","Sentadilla frontal","Sentadilla hack","Prensa inclinada",
      "Prensa horizontal","Sentadilla en máquina","Zancadas con mancuernas",
      "Zancadas caminando","Zancada búlgara","Step-up con mancuernas",
      "Extensión de cuádriceps","Extensión unilateral de cuádriceps",
      "Peso muerto rumano con barra","Peso muerto rumano con mancuernas",
      "Peso muerto a una pierna","Curl femoral tumbado","Curl femoral sentado",
      "Curl femoral unilateral","Buenos días con barra","Hip thrust con barra",
      "Hip thrust en máquina","Puente de glúteo","Abducción en máquina",
      "Aductores en máquina","Gemelos de pie","Gemelos sentado"
    ]
  },
  gluteos: {
    name: "Glúteos",
    tag: "GLÚTEOS",
    exercises: [
      "Hip thrust con barra","Hip thrust en máquina","Puente de glúteo con barra",
      "Sentadilla profunda","Sentadilla sumo","Sentadilla hack","Prensa con pies altos",
      "Zancada búlgara","Zancadas caminando","Zancadas hacia atrás",
      "Step-up alto","Peso muerto rumano","Peso muerto sumo","Peso muerto a una pierna",
      "Patada de glúteo en polea","Patada de glúteo en máquina","Abducción en máquina",
      "Abducción en polea","Extensión de cadera en máquina","Buenos días",
      "Pull-through en polea","Frog pumps","Hiperextensiones enfocadas a glúteo"
    ]
  },
  fullbody: {
    name: "Full Body",
    tag: "FULL BODY",
    exercises: [
      "Sentadilla con barra","Prensa inclinada","Peso muerto rumano","Hip thrust",
      "Press banca con barra","Press inclinado con mancuernas","Press de pecho en máquina",
      "Dominadas","Jalón al pecho","Remo con barra","Remo sentado en polea",
      "Press militar con mancuernas","Press de hombros en máquina",
      "Elevaciones laterales","Curl con barra","Curl martillo","Jalón de tríceps con cuerda",
      "Fondos asistidos","Zancadas con mancuernas","Extensión de cuádriceps",
      "Curl femoral sentado","Gemelos de pie","Face pull","Pájaros en máquina"
    ]
  }
};

const goalSettings = {
  hipertrofia: { label: "Hipertrofia", schemes: ["4 × 6-10","3 × 8-12","3 × 10-15","3 × 10-15"] },
  fuerza: { label: "Fuerza", schemes: ["4 × 4-6","4 × 5-7","3 × 6-8","3 × 8-10"] },
  definicion: { label: "Definición", schemes: ["3 × 8-12","3 × 10-12","3 × 12-15","3 × 12-15"] }
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickUnique(pool, count, used) {
  const available = pool.filter(ex => !used.has(ex));
  const selected = shuffle(available).slice(0, count);

  // Si se necesitan más ejercicios de los que quedan, permitimos repetir
  // únicamente después de haber agotado los ejercicios únicos.
  if (selected.length < count) {
    selected.push(...shuffle(pool).slice(0, count - selected.length));
  }

  selected.forEach(ex => used.add(ex));
  return selected;
}

function buildRoutine() {
  const muscle = document.getElementById("muscle").value;
  const goal = document.getElementById("goal").value;
  const level = document.getElementById("level").value;
  const selectedDays = Number(document.getElementById("days").value);
  const data = routines[muscle];
  const settings = goalSettings[goal];
  const result = document.getElementById("result");
  const grid = document.getElementById("routineGrid");

  document.getElementById("resultTitle").textContent =
    `${data.name} · ${settings.label}`;

  document.getElementById("resultDescription").textContent =
    `${selectedDays} días/semana · Nivel ${level}. Cada día utiliza una combinación diferente de ejercicios para darte más variedad.`;

  document.getElementById("resultTag").textContent = data.tag;
  grid.innerHTML = "";

  const used = new Set();

  for (let d = 1; d <= selectedDays; d++) {
    const exercisesToday = pickUnique(data.exercises, 4, used);

    const card = document.createElement("div");
    card.className = "day-card";
    card.innerHTML = `
      <h3>Día ${d} · ${data.name}</h3>
      <ul>
        ${exercisesToday.map((exercise, i) =>
          `<li><span>${exercise}</span><b>${settings.schemes[i]}</b></li>`
        ).join("")}
      </ul>
    `;
    grid.appendChild(card);
  }

  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.getElementById("recommendBtn").addEventListener("click", buildRoutine);

document.querySelectorAll("[data-muscle]").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("muscle").value = link.dataset.muscle;
    setTimeout(buildRoutine, 100);
  });
});
