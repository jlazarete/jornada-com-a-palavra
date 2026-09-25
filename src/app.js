import { days, weekNames } from "./content/daniel-21-dias.js";
import { keys, loadProgress, saveProgress } from "./progress.js";

// The localStorage getter itself can throw when browser storage is disabled.
let storage;
try {
  storage = window.localStorage;
} catch {
  /* Continue in memory. */
}
const state = loadProgress(storage);
const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );

function render() {
  const { done, active, period } = state;
  document.getElementById("weeks").innerHTML = weekNames
    .map(
      (name, week) => `
    <section class="week">
      <div class="weekhead">
        <div class="eyebrow">Semana ${week + 1} · dias ${week * 7 + 1}–${week * 7 + 7}</div>
        <h3>${esc(name)}</h3>
      </div>
      <div class="days">${days
        .slice(week * 7, week * 7 + 7)
        .map(
          (day) => `
        <button type="button" class="day ${active === day[0] ? "active" : ""} ${done.includes(day[0]) ? "done" : ""}"
          data-day="${day[0]}" aria-label="Dia ${day[0]}: ${esc(day[2])}, ${esc(day[3])}${done.includes(day[0]) ? ", concluído" : ""}"
          aria-current="${active === day[0] ? "true" : "false"}">
          <span class="daynum">${String(day[0]).padStart(2, "0")}</span>
          <span class="daytxt"><strong>${esc(day[2])}</strong><small>${esc(day[3])}</small></span>
          <span class="check" aria-hidden="true">${done.includes(day[0]) ? "✓" : "›"}</span>
        </button>`,
        )
        .join("")}
      </div>
    </section>`,
    )
    .join("");

  const day = days[active - 1];
  const link = day[1]
    ? `https://www.bible.com/pt/bible/129/DAN.${day[1]}.${day[2].split(":")[1].replace("–", "-")}.NVI`
    : "";
  document.getElementById("detail").innerHTML = `
    <div class="eyebrow">Dia ${active} de 21 · Semana ${Math.ceil(active / 7)}</div>
    <h2>${esc(day[3])}</h2>
    <div class="reference">${esc(day[2])}</div>
    <img class="detail-image" src="./public/images/daniel-em-oracao.webp"
      alt="Representação artística de Daniel em oração diante de uma janela" loading="lazy">
    <div class="section"><h3>Para refletir</h3><p>${esc(day[4])}</p></div>
    <div class="section"><h3>Em oração</h3><p>${esc(day[5])}</p></div>
    ${link ? `<a class="readlink" href="${link}" target="_blank" rel="noopener noreferrer">Ler a passagem ↗</a>` : ""}
    <button type="button" class="complete ${done.includes(active) ? "isdone" : ""}" id="complete"
      aria-pressed="${done.includes(active)}">${done.includes(active) ? "✓ Dia concluído · desfazer" : "Marcar dia como concluído"}</button>
    <p class="note">${link ? "A leitura abre na Bíblia YouVersion (NVI). " : ""}${
      state.available
        ? "Seu progresso é guardado apenas neste navegador."
        : "Não foi possível salvar neste navegador. Seu progresso será mantido somente enquanto esta página estiver aberta."
    }</p>`;

  document.getElementById("counter").textContent =
    `${done.length} de 21 dias concluídos`;
  document
    .getElementById("progress")
    .setAttribute("aria-valuenow", done.length);
  document.getElementById("progressFill").style.width =
    `${(done.length / 21) * 100}%`;
  document.querySelectorAll("[data-period]").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.period === period),
    );
  });
}

function persist(key, value) {
  if (!saveProgress(storage, key, value)) state.available = false;
}

document.addEventListener("click", (event) => {
  const dayButton = event.target.closest("[data-day]");
  if (dayButton) {
    state.active = Number(dayButton.dataset.day);
    persist(keys.active, state.active);
    render();
    if (window.innerWidth < 851) {
      const detail = document.getElementById("detail");
      detail.focus({ preventScroll: true });
      detail.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
    } else {
      document
        .querySelector(`[data-day="${state.active}"]`)
        .focus({ preventScroll: true });
    }
    return;
  }
  if (event.target.closest("#complete")) {
    state.done = state.done.includes(state.active)
      ? state.done.filter((day) => day !== state.active)
      : [...state.done, state.active];
    persist(keys.done, JSON.stringify(state.done));
    render();
    document.getElementById("complete").focus({ preventScroll: true });
    return;
  }
  const periodButton = event.target.closest("[data-period]");
  if (periodButton) {
    state.period =
      periodButton.dataset.period === state.period
        ? ""
        : periodButton.dataset.period;
    persist(keys.period, state.period);
    render();
  }
});

render();
