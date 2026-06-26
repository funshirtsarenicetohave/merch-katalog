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
    collection: "Unmotivated Animals",
    image: "images/grumpy-panda.png",
    amazonDE: "https://www.amazon.de/Grumpypanda-niedlich-grummeliger-Pandabear-T-Shirt/dp/B0DGLQT4V6?dib=eyJ2IjoiMSJ9.sLe9upBRy3fNIBMCmyngd4CeCtK8ThzIy_8lJYx0ZdgPZ8AM4ge_p5W2vwOPDqDdnUw8mTz0Pzl-y3W2LSAVDK0OYyYlvAeoreMZ-dCgcxSbPXPhPt_yJaofWmSTagE59VzZIojq12TpiFckBUugqVoY4pLxpPh9oe3EJyvMDsF8E1L-SkGWeMpASbQm99OIjPufoTJQST6WouU3peO0mlWW5iT5f16x14GUWNpyP1NUUDzbHRwt9O069Ex_uhA2tM1u3z_IZdKxbkwOyLZimHSLfhqHP_qJWeMZ27vLv4Y.H9h8UYBXWkqIBbcNjPZWFVTQ4NNkfv9YobUp6KZbww0&dib_tag=se&qid=1782478499&refinements=p_4%3AGrumpy%2Bbut%2BCute%2Bgrumpy%2Banimals%2Bcollection%2Bd.b.A.i.&s=apparel&sr=1-19&customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=091649da7e3c66ea964e22e9563691bc&ref_=as_li_ss_tl",
    amazonUS: "#",
    amazonUK: "#"
  },
 {
    title: "Grumpy Corn",
    collection: "Grumpy Animals",
    image: "images/grumpy-corn.png",
    amazonDE: "https://www.amazon.de/Grumpycorn-Einhorn-Grumpy-Spa%C3%9F-T-Shirt/dp/B0CNBF7KNL?dib=eyJ2IjoiMSJ9.9V9T4teXdzPlsRuuK8P8XCj4J3Qj6AJXepBBRg9zF_EVPucEDAn648AEHIFAKa_0OfCselU6iJUcahnrM-Glvby_UCmo7HP_0ZVS6cUYDq-nK-WqADF8rroCywZS5XYq.CV2Uv3hvjD7yRcAMsFyYcnvs4OnNUbaVmJq0nPqEJd8&dib_tag=se&qid=1782476844&refinements=p_4%3A%2BEinhorn%5Cc%2BFun%2Bd.b.A.i.%5Cc%2BGrumpy%5CcGrumpycorn&s=apparel&sr=1-1&customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=cbe5dc378a9f1c53ebfe22953b8e1583&ref_=as_li_ss_tl",
    amazonUS: "#",
    amazonUK: "#"
  }
];

const grid = document.getElementById("designGrid");

const collections = {};

designs.forEach(design => {
  if (!collections[design.collection]) {
    collections[design.collection] = [];
  }

  collections[design.collection].push(design);
});

Object.keys(collections).forEach(collectionName => {
  const section = document.createElement("section");
  section.className = "collection-section";

  section.innerHTML = `
    <h2 class="collection-heading">${collectionName}</h2>
    <div class="collection-grid"></div>
  `;

  const collectionGrid = section.querySelector(".collection-grid");

  collections[collectionName].forEach(design => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${design.image}" alt="${design.title}">
      <h2>${design.title}</h2>
      <p>${design.collection}</p>
      <a class="button" href="${design.amazonDE}" target="_blank">🇩🇪 Auf Amazon.de ansehen</a>
    `;

    collectionGrid.appendChild(card);
  });

  grid.appendChild(section);
