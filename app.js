const escapeHtml = value => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

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

    return `
      <article class="card">
        <span class="attribute">${escapeHtml(attribute?.name ?? card.attribute)}</span>
        <span class="card-number">#${String(card.number).padStart(4, "0")}</span>
        <h2>${escapeHtml(card.name)}</h2>
        <p class="type">${escapeHtml(card.type)}</p>
        <p class="summary">${escapeHtml(card.summary)}</p>
        ${manufacturer ? `<p class="manufacturer">${escapeHtml(manufacturer)}</p>` : ""}
        <p class="card-id">${escapeHtml(card.id)}</p>
      </article>
    `;
  }).join("");

  document.querySelector("#message").hidden = true;
}).catch(error => {
  document.querySelector("#message").textContent = "カードを読み込めませんでした。";
  console.error(error);
});
