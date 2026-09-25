const escapeHtml = value => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const formatLabel = value => String(value)
  .replaceAll("_", " ")
  .replace(/\b\w/g, letter => letter.toUpperCase());

const renderValue = value => {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
};

const renderFacts = facts => {
  if (!facts || typeof facts !== "object") return "";

  const rows = Object.entries(facts).map(([key, value]) => `
    <div class="fact-row">
      <dt>${escapeHtml(formatLabel(key))}</dt>
      <dd>${escapeHtml(renderValue(value))}</dd>
    </div>
  `).join("");

  return `
    <section class="knowledge-section">
      <h3>Facts</h3>
      <dl class="facts">${rows}</dl>
    </section>
  `;
};

const coreFields = new Set([
  "id",
  "number",
  "name",
  "attribute",
  "type",
  "summary",
  "facts"
]);

const renderKnowledgeLists = card => Object.entries(card)
  .filter(([key, value]) => !coreFields.has(key) && Array.isArray(value))
  .map(([key, values]) => `
    <section class="knowledge-section">
      <h3>${escapeHtml(formatLabel(key))}</h3>
      <ul class="knowledge-list">
        ${values.map(value => `<li>${escapeHtml(renderValue(value))}</li>`).join("")}
      </ul>
    </section>
  `).join("");

Promise.all([
  fetch("./data/cards/index.json").then(r => r.json()),
  fetch("./data/attributes.json").then(r => r.json())
]).then(async ([cardIds, attributeList]) => {
  const cards = await Promise.all(
    cardIds.map(id => fetch(`./data/cards/${id}.json`).then(r => r.json()))
  );
  const attributes = Object.fromEntries(
    attributeList.map(attribute => [attribute.id, attribute])
  );

  document.querySelector("#cards").innerHTML = cards.map(card => {
    const attribute = attributes[card.attribute];
    const manufacturer = card.facts?.manufacturer;
    const knowledge = `${renderFacts(card.facts)}${renderKnowledgeLists(card)}`;

    return `
      <article class="card">
        <span class="attribute">${escapeHtml(attribute?.name ?? card.attribute)}</span>
        <span class="card-number">#${String(card.number).padStart(4, "0")}</span>
        <h2>${escapeHtml(card.name)}</h2>
        <p class="type">${escapeHtml(card.type)}</p>
        <p class="summary">${escapeHtml(card.summary)}</p>
        ${manufacturer ? `<p class="manufacturer">${escapeHtml(manufacturer)}</p>` : ""}
        <details class="knowledge">
          <summary>Knowledge</summary>
          <div class="knowledge-body">${knowledge}</div>
        </details>
        <p class="card-id">${escapeHtml(card.id)}</p>
      </article>
    `;
  }).join("");

  document.querySelector("#message").hidden = true;
}).catch(error => {
  document.querySelector("#message").textContent = "カードを読み込めませんでした。";
  console.error(error);
});
