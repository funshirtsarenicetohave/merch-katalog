const collections = {
  "Grumpy Animals": {
    banner: "images/banners/grumpy-animals.jpg",
    description: "Funny grumpy characters with a permanently bad mood."
  },

  "Unmotivated Animals": {
    banner: "images/banners/unmotivated-animals.jpg",
    description: "Cute animals that would rather do absolutely nothing."
  }
};

const designs = [
  {
    title: "Treasure Hunter",
    collection: "Unmotivated Animals",
    image: "images/treasure-hunter.png",
    amazonDE: "#",
    amazonUS: "#",
    amazonUK: "#"
  },
  {
    title: "Grumpy Panda",
    collection: "Grumpy Animals",
    image: "images/grumpy-panda.png",
    amazonDE: "https://www.amazon.de/Grumpypanda-niedlich-grummeliger-Pandabear-T-Shirt/dp/B0DGLQT4V6",
    amazonUS: "#",
    amazonUK: "#"
  },
  {
    title: "Grumpy Corn",
    collection: "Grumpy Animals",
    image: "images/grumpy-corn.png",
    amazonDE: "https://www.amazon.de/Grumpycorn-Einhorn-Grumpy-Spa%C3%9F-T-Shirt/dp/B0CNBF7KNL",
    amazonUS: "#",
    amazonUK: "#"
  }
];

const grid = document.getElementById("designGrid");

const groupedCollections = {};

designs.forEach(function(design) {
  if (!groupedCollections[design.collection]) {
  groupedCollections[design.collection] = [];
}

groupedCollections[design.collection].push(design);
});

Object.keys(groupedCollections).forEach(function(collectionName) {
  const section = document.createElement("section");
  section.className = "collection-section";

  const heading = document.createElement("h2");
  heading.className = "collection-heading";
  heading.textContent = collectionName;
  
  const description = document.createElement("p");
  description.className = "collection-description";
  description.textContent =
  collections[collectionName]?.description || "";

  const collectionGrid = document.createElement("div");
  collectionGrid.className = "collection-grid";

groupedCollections[collectionName].forEach(function(design) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML =
      '<img src="' + design.image + '" alt="' + design.title + '">' +
      '<h2>' + design.title + '</h2>' +
      '<p>' + design.collection + '</p>' +
      '<a class="button" href="' + design.amazonDE + '" target="_blank">🇩🇪 Auf Amazon.de ansehen</a>';

    collectionGrid.appendChild(card);
  });

  section.appendChild(heading);

if (collections[collectionName]?.banner) {
  const banner = document.createElement("img");
  banner.className = "collection-banner";
  banner.src = collections[collectionName].banner;
  banner.alt = collectionName + " banner";
  section.appendChild(banner);
}

section.appendChild(description);
section.appendChild(collectionGrid);
grid.appendChild(section);
});
