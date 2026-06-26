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
    title: "Grumpy Corn",
    collection: "Grumpy Animals",
    image: "images/grumpy-corn.png",
    amazonDE: "https://www.amazon.de/Grumpycorn-Einhorn-Grumpy-Spa%C3%9F-T-Shirt/dp/B0CNBF7KNL?dib=eyJ2IjoiMSJ9.9V9T4teXdzPlsRuuK8P8XCj4J3Qj6AJXepBBRg9zF_EVPucEDAn648AEHIFAKa_0OfCselU6iJUcahnrM-Glvby_UCmo7HP_0ZVS6cUYDq-nK-WqADF8rroCywZS5XYq.CV2Uv3hvjD7yRcAMsFyYcnvs4OnNUbaVmJq0nPqEJd8&dib_tag=se&qid=1782476844&refinements=p_4%3A%2BEinhorn%5Cc%2BFun%2Bd.b.A.i.%5Cc%2BGrumpy%5CcGrumpycorn&s=apparel&sr=1-1&customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1&linkCode=ll2&tag=jfischer-21&linkId=cbe5dc378a9f1c53ebfe22953b8e1583&ref_=as_li_ss_tl",
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
