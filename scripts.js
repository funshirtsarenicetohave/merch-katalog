const designs = [
  {
    title: "Treasure Hunter",
    collection: "Unmotivated Animals",
    image: "images/treasure-hunter.png",
    amazonDE: "#",
    amazonUS: "#",
    amazonUK: "#"
  }
];

const grid = document.getElementById("designGrid");

designs.forEach(design => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${design.image}" alt="${design.title}">
    <h2>${design.title}</h2>
    <p>${design.collection}</p>
    <a class="button" href="${design.amazonDE}" target="_blank">🇩🇪 Auf Amazon.de ansehen</a>
  `;

  grid.appendChild(card);
});
