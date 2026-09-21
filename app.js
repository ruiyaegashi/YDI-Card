const parseCsv = (text) => {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines.shift().split(",");
  return lines.map(line => {
    const values = line.split(",");
    return Object.fromEntries(headers.map((key, i) => [key, values[i] ?? ""]));
  });
};

Promise.all([
  fetch("./data/cards.csv").then(r => r.text()),
  fetch("./data/attributes.csv").then(r => r.text())
]).then(([cardsText, attributesText]) => {
  const cards = parseCsv(cardsText);
  const attributes = Object.fromEntries(
    parseCsv(attributesText).map(attribute => [attribute.id, attribute])
  );

  document.querySelector("#cards").innerHTML = cards.map(card => {
    const attribute = attributes[card.attribute];
    return `
      <article class="card">
        <span class="attribute">${attribute?.name ?? card.attribute}</span>
        <h2>${card.name}</h2>
        <p class="type">${card.type}</p>
        <p class="summary">${card.summary}</p>
        <p class="manufacturer">${card.manufacturer}</p>
        <p class="card-id">${card.id}</p>
      </article>
    `;
  }).join("");

  document.querySelector("#message").hidden = true;
}).catch(error => {
  document.querySelector("#message").textContent = "カードを読み込めませんでした。";
  console.error(error);
});
